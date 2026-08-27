import { submitEventRegistration } from "./eventRegistrationService";
import type { EventPageConfig } from "../types/event";

const makeEvent = (): EventPageConfig =>
  ({
    slug: "osm-2026",
    eventCode: "OSM 2026",
    registration: {
      destinations: {
        api: { url: "https://api.example.test/register", bodyFormat: "json" },
        googleAppsScript: {
          url: "https://script.google.test/exec",
          bodyFormat: "json",
        },
      },
    },
  } as EventPageConfig);

describe("submitEventRegistration", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.restoreAllMocks();
  });

  test("submits both destinations concurrently and succeeds when Apps Script succeeds", async () => {
    const fetchMock = jest.fn((url: RequestInfo | URL, _init?: RequestInit) => {
      if (String(url).includes("api.example")) {
        return Promise.resolve({ ok: false, status: 503, type: "basic" } as Response);
      }
      return Promise.resolve({ ok: true, status: 200, type: "basic" } as Response);
    });
    global.fetch = fetchMock;

    const result = await submitEventRegistration(makeEvent(), { fullName: "Ada" });

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(result.apiResult.ok).toBe(false);
    expect(result.googleAppsScriptResponse.ok).toBe(true);
    for (const [, request] of fetchMock.mock.calls) {
      expect(JSON.parse(String(request?.body))).toEqual({
        eventSlug: "osm-2026",
        eventCode: "OSM 2026",
        fullName: "Ada",
      });
    }
  });

  test("rejects when Apps Script fails even if the API succeeds", async () => {
    global.fetch = jest.fn((url: RequestInfo | URL) =>
      Promise.resolve({
        ok: !String(url).includes("script.google"),
        status: String(url).includes("script.google") ? 500 : 200,
        type: "basic",
      } as Response)
    );

    await expect(
      submitEventRegistration(makeEvent(), { fullName: "Ada" })
    ).rejects.toThrow("Submission failed with 500");
  });

  test("requires the Apps Script URL but allows a missing API URL", async () => {
    const event = makeEvent();
    event.registration.destinations.api = { url: "" };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      type: "basic",
    } as Response);

    const result = await submitEventRegistration(event, { fullName: "Ada" });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(result.apiResult).toEqual({ ok: false, skipped: true });

    event.registration.destinations.googleAppsScript.url = "";
    await expect(
      submitEventRegistration(event, { fullName: "Ada" })
    ).rejects.toThrow("Google Apps Script destination is not configured");
  });
});
