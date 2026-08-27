import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import EventMedia from "./EventMedia";
import type { EventPageConfig } from "../../types/event";

type EventHeroProps = {
  event: EventPageConfig;
  onAction: (target: string) => void;
};

const EventHero = ({ event, onAction }: EventHeroProps) => (
  <section className="px-4 pb-20 pt-8 lg:px-28 lg:pb-28 lg:pt-14">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
      <div>
        <p
          className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue"
          data-event-hero-item
        >
          <span className="h-2 w-2 rounded-full bg-blue" />
          {event.announcement}
        </p>
        <h1
          className="mt-6 max-w-2xl text-5xl font-extrabold leading-[0.98] text-blue lg:text-7xl lg:leading-none"
          data-event-hero-item
        >
          {event.title}
        </h1>
        <p
          className="mt-6 max-w-xl text-base leading-7 text-gray-600 lg:text-lg"
          data-event-hero-item
        >
          {event.summary}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2" data-event-hero-item>
          <div className="flex items-start gap-3 rounded-2xl bg-white p-4">
            <CalendarDays
              className="mt-0.5 h-5 w-5 shrink-0 text-blue"
              aria-hidden="true"
            />
            <div>
              <time className="text-sm font-bold text-blue" dateTime={event.date.iso}>
                {event.date.label}
              </time>
              <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                {event.date.timeLabel} · {event.date.timezone}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-white p-4">
            <MapPin
              className="mt-0.5 h-5 w-5 shrink-0 text-blue"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold text-blue">{event.location.name}</p>
              <p className="mt-1 text-xs text-gray-500">{event.location.area}</p>
            </div>
          </div>
        </div>

        <div className="mt-8" data-event-hero-item>
          <Button
            size="lg"
            className="will-change-transform"
            data-event-cta
            onClick={() => onAction(event.actions.primary.target)}
          >
            {event.actions.primary.label}
            <ArrowRight
              className="h-4 w-4"
              data-event-cta-icon
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>

      <EventMedia media={event.heroMedia} />
    </div>
  </section>
);

export default EventHero;
