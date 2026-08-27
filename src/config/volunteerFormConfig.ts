import type { FormConfig } from "../components/dynamic-form";

export const volunteerFormConfig: FormConfig = {
  id: "volunteer-interest",
  ui: {
    eyebrow: "Volunteer application",
    submittingLabel: "Submitting…",
    requiredNote: "All fields marked with * are required.",
    unsupportedFieldTypeMessage:
      "No renderer is registered for field type “{type}”.",
    submissionErrorMessage:
      "We couldn't save your response. Please check your connection and try again.",
  },
  title: "Let's get to know you",
  description:
    "Share a few details and choose where you'd like to make an impact.",
  submitLabel: "Submit application",
  defaultValues: {
    wantsToVolunteer: false,
  },
  outcomes: [
    {
      when: {
        fieldId: "wantsToVolunteer",
        operator: "equals",
        value: true,
      },
      eyebrow: "Volunteer application received",
      title: "Welcome to the team.",
      message:
        "Your volunteer preferences have been recorded. Join the WhatsApp group to meet the team and receive next steps.",
      resetLabel: "Submit another response",
      action: {
        label: "Join the WhatsApp group",
        href: "https://chat.whatsapp.com/REPLACE_WITH_GROUP_INVITE_CODE",
      },
    },
    {
      eyebrow: "Response received",
      title: "Thank you for checking in.",
      message:
        "Your details have been submitted successfully. We'll keep you updated with what comes next.",
      resetLabel: "Submit another response",
    },
  ],
  fields: [
    {
      id: "firstName",
      type: "text",
      label: "First name",
      placeholder: "e.g. Jordan",
      autoComplete: "given-name",
      required: true,
      validation: {
        requiredMessage: "First name is required.",
        minLength: 2,
        minLengthMessage: "Please enter at least 2 characters.",
      },
    },
    {
      id: "lastName",
      type: "text",
      label: "Last name",
      placeholder: "e.g. Avery",
      autoComplete: "family-name",
      required: true,
      validation: {
        requiredMessage: "Last name is required.",
        minLength: 2,
        minLengthMessage: "Please enter at least 2 characters.",
      },
    },
    {
      id: "email",
      type: "email",
      label: "Email address",
      placeholder: "you@example.com",
      autoComplete: "email",
      required: true,
      validation: {
        requiredMessage: "Email address is required.",
        email: true,
        emailMessage: "Enter a valid email address.",
      },
    },
    {
      id: "wantsToVolunteer",
      type: "checkbox",
      label: "I want to volunteer",
      description: "Turn this on to explore available teams.",
    },
    {
      id: "unit",
      type: "radio",
      label: "Select a unit",
      required: true,
      validation: { requiredMessage: "Please select a unit." },
      options: [
        { label: "Technical", value: "technical" },
        { label: "Protocol", value: "protocol" },
        { label: "Music", value: "music" },
      ],
      dependsOn: { fieldId: "wantsToVolunteer", operator: "truthy" },
    },
    {
      id: "technicalRole",
      type: "select",
      label: "Technical team",
      placeholder: "Choose a role",
      required: true,
      validation: { requiredMessage: "Please choose a technical role." },
      options: [
        { label: "Camera", value: "camera" },
        { label: "Light", value: "light" },
        { label: "Screen", value: "screen" },
      ],
      dependsOn: { fieldId: "unit", operator: "equals", value: "technical" },
    },
    {
      id: "musicRole",
      type: "select",
      label: "Music team",
      placeholder: "Choose a role",
      required: true,
      validation: { requiredMessage: "Please choose a music role." },
      options: [
        { label: "Instrumentalist", value: "instrumentalist" },
        { label: "Vocalist", value: "vocalist" },
      ],
      dependsOn: { fieldId: "unit", operator: "equals", value: "music" },
    },
    {
      id: "vocalRole",
      type: "select",
      label: "What part do you sing?",
      placeholder: "Choose a vocal part",
      required: true,
      validation: { requiredMessage: "Please choose a vocal part." },
      options: [
        { label: "Tenor", value: "tenor" },
        { label: "Alto", value: "alto" },
        { label: "Soprano", value: "soprano" },
      ],
      dependsOn: { fieldId: "musicRole", operator: "equals", value: "vocalist" },
    },
    {
      id: "instrument",
      type: "select",
      label: "Primary instrument",
      placeholder: "Choose an instrument",
      required: true,
      validation: { requiredMessage: "Please choose an instrument." },
      options: [
        { label: "Guitarist", value: "guitarist" },
        { label: "Keyboardist", value: "keyboardist" },
        { label: "Trumpeter", value: "trumpeter" },
        { label: "Drummer", value: "drummer" },
      ],
      dependsOn: {
        fieldId: "musicRole",
        operator: "equals",
        value: "instrumentalist",
      },
    },
  ],
};
