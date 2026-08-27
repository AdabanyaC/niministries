import { fireEvent, render, screen } from "@testing-library/react";
import eventFixture from "../../../public/data/events/osm-2026.json";
import type { EventPageConfig } from "../../types/event";
import EventMedia from "./EventMedia";

const event = eventFixture as unknown as EventPageConfig;

describe("EventMedia", () => {
  let playSpy: jest.SpyInstance;

  beforeEach(() => {
    playSpy = jest
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockResolvedValue(undefined);
  });

  afterEach(() => playSpy.mockRestore());

  test("renders a looping 9:16 video with only the custom mute control", () => {
    const { container } = render(<EventMedia media={event.heroMedia} />);
    const video = container.querySelector("video");
    const mediaCard = container.querySelector("[data-event-media]");

    expect(video).toBeInTheDocument();
    expect(video).toHaveProperty("controls", false);
    expect(video).toHaveAttribute("disablepictureinpicture");
    expect(video).toHaveProperty("loop", true);
    expect(video).toHaveProperty("muted", false);
    expect(mediaCard).toHaveClass("aspect-[9/16]");
    expect(screen.queryByRole("button", { name: /play/i })).not.toBeInTheDocument();

    const muteButton = screen.getByRole("button", { name: "Mute video" });
    fireEvent.click(muteButton);
    expect(video).toHaveProperty("muted", true);
    expect(
      screen.getByRole("button", { name: "Unmute video" })
    ).toBeInTheDocument();
  });
});
