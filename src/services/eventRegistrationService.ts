import type { FormValues } from "../components/dynamic-form";
import type { EventPageConfig, SubmissionDestination } from "../types/event";

const createRequestBody = (
  values: FormValues,
  format: SubmissionDestination["bodyFormat"] = "json"
) => {
  if (format === "form") {
    const body = new URLSearchParams();
    Object.entries(values).forEach(([key, value]) => {
      body.set(key, typeof value === "string" ? value : JSON.stringify(value));
    });
    return body;
  }

  return JSON.stringify(values);
};

const submitToDestination = async (
  destination: SubmissionDestination,
  values: FormValues
) => {
  const response = await fetch(destination.url, {
    method: destination.method || "POST",
    headers: destination.headers,
    mode: destination.mode,
    body: createRequestBody(values, destination.bodyFormat),
  });

  if (response.type !== "opaque" && !response.ok) {
    throw new Error(`Submission failed with ${response.status}`);
  }

  return response;
};

export const submitEventRegistration = async (
  event: EventPageConfig,
  values: FormValues
) => {
  const payload = {
    eventSlug: event.slug,
    eventCode: event.eventCode,
    ...values,
  };
  const { api, googleAppsScript } = event.registration.destinations;

  if (!googleAppsScript?.url) {
    throw new Error("Google Apps Script destination is not configured.");
  }

  const apiRequest = api?.url
    ? submitToDestination(api, payload)
        .then((response) => ({ ok: true as const, response }))
        .catch((error: Error) => ({ ok: false as const, error }))
    : Promise.resolve({ ok: false as const, skipped: true as const });

  const [apiResult, googleAppsScriptResponse] = await Promise.all([
    apiRequest,
    submitToDestination(googleAppsScript, payload),
  ]);

  return { apiResult, googleAppsScriptResponse };
};
