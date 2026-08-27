import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";
import App from "./App";
import eventFixture from "../public/data/events/osm-2026.json";

global.IS_REACT_ACT_ENVIRONMENT = true;

test("renders the ministry about page", async () => {
  window.history.pushState({}, "", "/about-us");

  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  await act(async () => {
    root.render(<App />);
  });

  expect(container.textContent).toMatch(
    /Men saved, trained and sent to do the work of ministry/i
  );
  expect(document.title).toBe(
    "About Us | Nelson Iheagwam Ministries"
  );
  expect(
    document.head.querySelector('meta[property="og:title"]').content
  ).toBe("About Us | Nelson Iheagwam Ministries");
  expect(document.head.querySelector('link[rel="canonical"]').href).toBe(
    "https://www.niministries.org/about-us"
  );

  await act(async () => {
    root.unmount();
  });
  container.remove();
});

test("loads an event page from its slug and applies event SEO", async () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => eventFixture,
  });
  window.history.pushState({}, "", "/event/osm-2026");

  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  await act(async () => {
    root.render(<App />);
  });

  await waitFor(() => {
    expect(container.textContent).toMatch(/One Special Meeting/i);
  });

  expect(global.fetch).toHaveBeenCalledWith(
    "/data/events/osm-2026.json",
    expect.objectContaining({ cache: "no-cache" })
  );
  expect(container.textContent).toMatch(/19 September 2026/i);
  expect(container.textContent).toMatch(/The Envoys/i);
  expect(document.title).toBe(
    "One Special Meeting 2026 | Nelson Iheagwam Ministries"
  );

  await act(async () => {
    root.unmount();
  });
  container.remove();
  global.fetch = originalFetch;
});
