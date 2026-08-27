import { useFormContext } from "react-hook-form";
import type {
  ConfiguredFieldProps,
  FieldRendererProps,
  FieldRegistry,
  FormValues,
} from "./types";

const describedBy = (fieldId: string, hasDescription: boolean, hasError: boolean) =>
  [hasDescription ? `${fieldId}-description` : "", hasError ? `${fieldId}-error` : ""]
    .filter(Boolean)
    .join(" ") || undefined;

const FieldHeader = ({ field }: Pick<FieldRendererProps, "field">) => (
  <>
    <label className="df-label" htmlFor={field.id}>
      {field.label}
      {field.required && <span className="df-required" aria-hidden="true"> *</span>}
    </label>
    {field.description && (
      <p className="df-description" id={`${field.id}-description`}>
        {field.description}
      </p>
    )}
  </>
);

const FieldErrorMessage = ({ fieldId, message }: { fieldId: string; message?: string }) =>
  message ? (
    <p className="df-error" id={`${fieldId}-error`} role="alert">
      {message}
    </p>
  ) : null;

export const TextField = ({ field, register, errorMessage }: FieldRendererProps) => (
  <div className="df-control-group">
    <FieldHeader field={field} />
    <input
      id={field.id}
      type={field.type === "email" ? "email" : field.type === "tel" ? "tel" : "text"}
      className="df-input"
      placeholder={field.placeholder}
      autoComplete={field.autoComplete}
      aria-invalid={Boolean(errorMessage)}
      aria-describedby={describedBy(
        field.id,
        Boolean(field.description),
        Boolean(errorMessage)
      )}
      {...register(field.id)}
    />
    <FieldErrorMessage fieldId={field.id} message={errorMessage} />
  </div>
);

export const TextareaField = ({
  field,
  register,
  errorMessage,
}: FieldRendererProps) => (
  <div className="df-control-group">
    <FieldHeader field={field} />
    <textarea
      id={field.id}
      className="df-input df-textarea"
      placeholder={field.placeholder}
      autoComplete={field.autoComplete}
      rows={field.rows || 4}
      aria-invalid={Boolean(errorMessage)}
      aria-describedby={describedBy(
        field.id,
        Boolean(field.description),
        Boolean(errorMessage)
      )}
      {...register(field.id)}
    />
    <FieldErrorMessage fieldId={field.id} message={errorMessage} />
  </div>
);

export const SelectField = ({ field, register, errorMessage }: FieldRendererProps) => (
  <div className="df-control-group">
    <FieldHeader field={field} />
    <select
      id={field.id}
      className="df-input df-select"
      defaultValue=""
      aria-invalid={Boolean(errorMessage)}
      aria-describedby={describedBy(
        field.id,
        Boolean(field.description),
        Boolean(errorMessage)
      )}
      {...register(field.id)}
    >
      {field.placeholder && (
        <option value="" disabled>
          {field.placeholder}
        </option>
      )}
      {(field.options || []).map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <FieldErrorMessage fieldId={field.id} message={errorMessage} />
  </div>
);

export const RadioField = ({ field, register, errorMessage }: FieldRendererProps) => (
  <fieldset
    className="df-fieldset"
    aria-invalid={Boolean(errorMessage)}
    aria-describedby={describedBy(
      field.id,
      Boolean(field.description),
      Boolean(errorMessage)
    )}
  >
    <legend className="df-label">
      {field.label}
      {field.required && <span className="df-required" aria-hidden="true"> *</span>}
    </legend>
    {field.description && (
      <p className="df-description" id={`${field.id}-description`}>
        {field.description}
      </p>
    )}
    <div className="df-options">
      {(field.options || []).map((option) => (
        <label className="df-option" key={option.value}>
          <input
            className="df-radio"
            type="radio"
            value={option.value}
            {...register(field.id)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
    <FieldErrorMessage fieldId={field.id} message={errorMessage} />
  </fieldset>
);

export const CheckboxField = ({
  field,
  register,
  errorMessage,
}: FieldRendererProps) => (
  <div className="df-control-group">
    <label className="df-checkbox-label" htmlFor={field.id}>
      <input
        id={field.id}
        className="df-checkbox"
        type="checkbox"
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={describedBy(
          field.id,
          Boolean(field.description),
          Boolean(errorMessage)
        )}
        {...register(field.id)}
      />
      <span>
        <span className="df-checkbox-title">
          {field.label}
          {field.required && <span className="df-required" aria-hidden="true"> *</span>}
        </span>
        {field.description && (
          <span className="df-description" id={`${field.id}-description`}>
            {field.description}
          </span>
        )}
      </span>
    </label>
    <FieldErrorMessage fieldId={field.id} message={errorMessage} />
  </div>
);

export const defaultFieldRegistry: FieldRegistry = {
  text: TextField,
  email: TextField,
  tel: TextField,
  textarea: TextareaField,
  select: SelectField,
  radio: RadioField,
  checkbox: CheckboxField,
};

export const ConfiguredField = ({
  field,
  registry,
  unsupportedMessage,
  errorMessage,
  showError,
}: ConfiguredFieldProps) => {
  const { register } = useFormContext<FormValues>();
  const FieldComponent = registry[field.type];

  if (!FieldComponent) {
    return (
      <p className="df-unsupported" role="alert">
        {unsupportedMessage.replace("{type}", field.type)}
      </p>
    );
  }

  return (
    <FieldComponent
      field={field}
      register={register}
      errorMessage={showError ? errorMessage : undefined}
    />
  );
};
