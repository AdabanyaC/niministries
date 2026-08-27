import { z } from "zod";
import type { FormFieldConfig } from "./types";

const messageFor = (
  field: FormFieldConfig,
  configuredMessage?: string
): string => configuredMessage || field.label;

const buildStringSchema = (field: FormFieldConfig) => {
  const rules = field.validation || {};

  return z.string().superRefine((value, context) => {
    if (field.required && value.length === 0) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: messageFor(field, rules.requiredMessage),
      });
      return;
    }

    if (!value) return;

    if (rules.minLength !== undefined && value.length < rules.minLength) {
      context.addIssue({
        code: z.ZodIssueCode.too_small,
        type: "string",
        minimum: rules.minLength,
        inclusive: true,
        message: messageFor(field, rules.minLengthMessage),
      });
      return;
    }

    if (rules.maxLength !== undefined && value.length > rules.maxLength) {
      context.addIssue({
        code: z.ZodIssueCode.too_big,
        type: "string",
        maximum: rules.maxLength,
        inclusive: true,
        message: messageFor(field, rules.maxLengthMessage),
      });
      return;
    }

    if (rules.email && !z.string().email().safeParse(value).success) {
      context.addIssue({
        code: z.ZodIssueCode.invalid_string,
        validation: "email",
        message: messageFor(field, rules.emailMessage),
      });
      return;
    }

    if (rules.pattern) {
      try {
        if (!new RegExp(rules.pattern).test(value)) {
          context.addIssue({
            code: z.ZodIssueCode.invalid_string,
            validation: "regex",
            message: messageFor(field, rules.patternMessage),
          });
        }
      } catch {
        // Invalid configuration patterns are ignored instead of breaking the form.
      }
    }
  });
};

const buildFieldSchema = (field: FormFieldConfig): z.ZodTypeAny => {
  if (field.type === "checkbox") {
    const checkboxSchema = z.boolean();
    return field.required
      ? checkboxSchema.refine((value) => value, {
          message: messageFor(field, field.validation?.requiredMessage),
        })
      : checkboxSchema.optional();
  }

  return buildStringSchema(field);
};

export const buildVisibleFormSchema = (
  fields: FormFieldConfig[],
  visibleIds: Set<string>
) => {
  const shape = Object.fromEntries(
    fields
      .filter((field) => visibleIds.has(field.id))
      .map((field) => [field.id, buildFieldSchema(field)])
  );

  return z.object(shape).strip();
};
