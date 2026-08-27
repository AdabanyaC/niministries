import type { ComponentType, CSSProperties } from "react";
import type {
  UseFormRegister,
} from "react-hook-form";

export type FormValues = Record<string, unknown>;

export type FieldOption = {
  label: string;
  value: string;
};

export type DependencyRule = {
  fieldId: string;
  operator?: "equals" | "notEquals" | "includes" | "truthy";
  value?: string | boolean | number;
};

export type ValidationRules = {
  requiredMessage?: string;
  minLength?: number;
  minLengthMessage?: string;
  maxLength?: number;
  maxLengthMessage?: string;
  pattern?: string;
  patternMessage?: string;
  email?: boolean;
  emailMessage?: string;
};

export type FormFieldConfig = {
  id: string;
  type: "text" | "email" | "select" | "radio" | "checkbox" | string;
  label: string;
  description?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  options?: FieldOption[];
  validation?: ValidationRules;
  dependsOn?: DependencyRule;
  layout?: "full" | "half";
  rows?: number;
};

export type FormOutcomeConfig = {
  when?: DependencyRule;
  eyebrow: string;
  title: string;
  message: string;
  resetLabel: string;
  action?: {
    label: string;
    href: string;
  };
};

export type FormConfig = {
  id: string;
  ui: {
    eyebrow: string;
    submittingLabel: string;
    requiredNote: string;
    unsupportedFieldTypeMessage: string;
    submissionErrorMessage: string;
  };
  title?: string;
  description?: string;
  submitLabel: string;
  defaultValues?: FormValues;
  outcomes: FormOutcomeConfig[];
  fields: FormFieldConfig[];
};

export type FormTheme = Partial<{
  background: string;
  surface: string;
  text: string;
  muted: string;
  primary: string;
  primaryContrast: string;
  border: string;
  error: string;
  success: string;
  radius: string;
  fontFamily: string;
  spacing: string;
}>;

export type ThemeStyle = CSSProperties & Record<`--df-${string}`, string>;

export type FieldRendererProps = {
  field: FormFieldConfig;
  register: UseFormRegister<FormValues>;
  errorMessage?: string;
};

export type FieldComponent = ComponentType<FieldRendererProps>;
export type FieldRegistry = Record<string, FieldComponent>;

export type ConfiguredFieldProps = {
  field: FormFieldConfig;
  registry: FieldRegistry;
  unsupportedMessage: string;
  errorMessage?: string;
  showError: boolean;
};

export type FormRendererProps = {
  config: FormConfig;
  onSubmit: (values: FormValues) => void | Promise<void>;
  theme?: FormTheme;
  fieldRegistry?: FieldRegistry;
};
