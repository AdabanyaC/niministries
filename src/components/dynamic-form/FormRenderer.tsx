import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FormProvider,
  useForm,
  useWatch,
  type Resolver,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfiguredField, defaultFieldRegistry } from "./field-registry";
import { buildVisibleFormSchema } from "./validation";
import { getVisibleFieldIds, selectOutcome } from "./visibility";
import type {
  FormOutcomeConfig,
  FormRendererProps,
  FormTheme,
  FormValues,
  ThemeStyle,
} from "./types";
import "./dynamic-form.css";

const THEME_VARIABLES: Record<keyof FormTheme, `--df-${string}`> = {
  background: "--df-background",
  surface: "--df-surface",
  text: "--df-text",
  muted: "--df-muted",
  primary: "--df-primary",
  primaryContrast: "--df-primary-contrast",
  border: "--df-border",
  error: "--df-error",
  success: "--df-success",
  radius: "--df-radius",
  fontFamily: "--df-font-family",
  spacing: "--df-spacing",
};

const themeToStyle = (theme?: FormTheme): ThemeStyle =>
  Object.entries(theme || {}).reduce<ThemeStyle>((styles, [key, value]) => {
    if (value) styles[THEME_VARIABLES[key as keyof FormTheme]] = value;
    return styles;
  }, {} as ThemeStyle);

const CompletionState = ({
  outcome,
  onReset,
}: {
  outcome: FormOutcomeConfig;
  onReset: () => void;
}) => (
  <div className="df-completion" aria-live="polite">
    <span className="df-success-mark" aria-hidden="true">✓</span>
    <p className="df-eyebrow">{outcome.eyebrow}</p>
    <h3 className="df-title">{outcome.title}</h3>
    <p className="df-copy">{outcome.message}</p>
    <div className="df-completion-actions">
      {outcome.action && (
        <a className="df-button" href={outcome.action.href}>
          {outcome.action.label}
        </a>
      )}
      <button className="df-button df-button-secondary" type="button" onClick={onReset}>
        {outcome.resetLabel}
      </button>
    </div>
  </div>
);

export const FormRenderer = ({
  config,
  onSubmit,
  theme,
  fieldRegistry,
}: FormRendererProps) => {
  const initialVisibleIds = useMemo(
    () => getVisibleFieldIds(config.fields, config.defaultValues || {}),
    [config]
  );
  const schemaRef = useRef(
    buildVisibleFormSchema(config.fields, initialVisibleIds)
  );
  const resolver = useCallback<Resolver<FormValues>>(
    (values, context, options) =>
      zodResolver(schemaRef.current)(values, context, options),
    []
  );
  const methods = useForm<FormValues>({
    mode: "all",
    reValidateMode: "onChange",
    shouldUnregister: true,
    resolver,
    defaultValues: config.defaultValues,
  });
  const watchedValues = useWatch({ control: methods.control });
  const values = useMemo(() => watchedValues || {}, [watchedValues]);
  const visibleIds = useMemo(
    () => getVisibleFieldIds(config.fields, values),
    [config.fields, values]
  );
  const visibleKey = Array.from(visibleIds).sort().join("|");
  const visibleSchema = useMemo(
    () => buildVisibleFormSchema(config.fields, visibleIds),
    [config.fields, visibleIds]
  );
  schemaRef.current = visibleSchema;
  const isCurrentFormValid = visibleSchema.safeParse(values).success;
  const previousVisibleIds = useRef(new Set(initialVisibleIds));
  const registry = useMemo(
    () => ({ ...defaultFieldRegistry, ...fieldRegistry }),
    [fieldRegistry]
  );
  const [outcome, setOutcome] = useState<FormOutcomeConfig>();
  const [submissionError, setSubmissionError] = useState(false);

  useEffect(() => {
    const visibilityChanged =
      previousVisibleIds.current.size !== visibleIds.size ||
      Array.from(previousVisibleIds.current).some(
        (fieldId) => !visibleIds.has(fieldId)
      );

    previousVisibleIds.current.forEach((fieldId) => {
      if (!visibleIds.has(fieldId)) {
        methods.unregister(fieldId);
      }
    });
    previousVisibleIds.current = new Set(visibleIds);

    if (visibilityChanged) {
      void methods.trigger(Array.from(visibleIds), { shouldFocus: false });
    }
  }, [config.fields, methods, visibleIds, visibleKey]);

  const visibleFields = config.fields.filter((field) => visibleIds.has(field.id));
  const hasUnsupportedField = visibleFields.some((field) => !registry[field.type]);

  const submitValues = methods.handleSubmit(async (validatedValues) => {
    setSubmissionError(false);

    try {
      await onSubmit(validatedValues);
      setOutcome(selectOutcome(config.outcomes, validatedValues));
    } catch {
      setSubmissionError(true);
    }
  });

  const resetForm = () => {
    methods.reset(config.defaultValues || {});
    setSubmissionError(false);
    setOutcome(undefined);
  };

  return (
    <section className="df-root" style={themeToStyle(theme)}>
      <div className="df-card">
        {outcome ? (
          <CompletionState outcome={outcome} onReset={resetForm} />
        ) : (
          <>
            <header className="df-header">
              <p className="df-eyebrow">{config.ui.eyebrow}</p>
              {config.title && <h2 className="df-title">{config.title}</h2>}
              {config.description && <p className="df-copy">{config.description}</p>}
              <p className="df-required-note">{config.ui.requiredNote}</p>
            </header>

            <FormProvider {...methods}>
              <form className="df-form" onSubmit={submitValues} noValidate>
                <div className="df-grid">
                  {visibleFields.map((field) => {
                    const fieldError = methods.formState.errors[field.id];
                    const showError = Boolean(
                      fieldError &&
                        (methods.formState.touchedFields[field.id] ||
                          methods.formState.submitCount > 0)
                    );

                    return (
                      <div
                        className={`df-field df-field-${field.layout || "full"}`}
                        key={field.id}
                      >
                        <ConfiguredField
                          field={field}
                          registry={registry}
                          unsupportedMessage={config.ui.unsupportedFieldTypeMessage}
                          errorMessage={
                            typeof fieldError?.message === "string"
                              ? fieldError.message
                              : undefined
                          }
                          showError={showError}
                        />
                      </div>
                    );
                  })}
                </div>

                {submissionError && (
                  <p className="df-submit-error" role="alert">
                    {config.ui.submissionErrorMessage}
                  </p>
                )}

                <button
                  className="df-button df-submit"
                  type="submit"
                  disabled={
                    !isCurrentFormValid ||
                    methods.formState.isSubmitting ||
                    hasUnsupportedField
                  }
                >
                  {methods.formState.isSubmitting
                    ? config.ui.submittingLabel
                    : config.submitLabel}
                </button>
              </form>
            </FormProvider>
          </>
        )}
      </div>
    </section>
  );
};

export default FormRenderer;
