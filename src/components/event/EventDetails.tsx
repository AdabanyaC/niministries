import type { EventPageConfig } from "../../types/event";

type EventDetailsProps = { details: EventPageConfig["details"] };

const EventDetails = ({ details }: EventDetailsProps) => (
  <section
    id="event-details"
    className="scroll-mt-8 bg-white px-4 py-20 lg:px-28 lg:py-28"
  >
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-event-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue/70">
            {details.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-blue lg:text-5xl">
            {details.title}
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            {details.description}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
          {details.highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="flex gap-5 rounded-3xl border border-mist bg-devotional p-6"
              data-event-reveal
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold text-blue">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EventDetails;
