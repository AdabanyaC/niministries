import { useCallback } from "react";
import {
  FormRenderer,
  type FormValues,
} from "./dynamic-form";
import { submitEventRegistration } from "../services/eventRegistrationService";
import type { EventPageConfig } from "../types/event";

type EventRegistrationFormProps = { event: EventPageConfig };

const EventRegistrationForm = ({ event }: EventRegistrationFormProps) => {
  const handleSubmit = useCallback(
    async (values: FormValues) => {
      await submitEventRegistration(event, values);
    },
    [event]
  );

  return (
    <FormRenderer
      config={event.registration.form}
      theme={event.registration.theme}
      onSubmit={handleSubmit}
    />
  );
};

export default EventRegistrationForm;
