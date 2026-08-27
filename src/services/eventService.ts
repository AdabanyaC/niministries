import type { EventPageConfig } from "../types/event";

const EVENT_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export class EventContentError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "EventContentError";
    this.status = status;
  }
}

export const fetchEventBySlug = async (
  slug: string,
  options: { signal?: AbortSignal } = {}
): Promise<EventPageConfig> => {
  if (!EVENT_SLUG_PATTERN.test(slug)) {
    throw new EventContentError("This event address is not valid.", 400);
  }

  const baseUrl = process.env.PUBLIC_URL || "";
  const response = await fetch(
    `${baseUrl}/data/events/${encodeURIComponent(slug)}.json`,
    {
      signal: options.signal,
      cache: "no-cache",
    }
  );

  if (!response.ok) {
    const message =
      response.status === 404
        ? "We could not find this event."
        : "We could not load this event right now.";
    throw new EventContentError(message, response.status);
  }

  return response.json();
};
