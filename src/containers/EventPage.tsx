import { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import EventDetails from "../components/event/EventDetails";
import EventHero from "../components/event/EventHero";
import EventRegistrationForm from "../components/EventRegistrationForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { applyPageMetadata } from "../components/Seo";
import { Button } from "../components/ui/button";
import { useEventAnimations } from "../hooks/useEventAnimations";
import { fetchEventBySlug } from "../services/eventService";
import type { EventPageConfig } from "../types/event";

const scrollToSection = (target: string) => {
  document.getElementById(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const EventPage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const pageRef = useRef<HTMLDivElement>(null);
  const [event, setEvent] = useState<EventPageConfig | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [error, setError] = useState("");

  useEventAnimations(pageRef, status === "ready");

  useEffect(() => {
    const controller = new AbortController();

    const loadEvent = async () => {
      setStatus("loading");
      setError("");

      try {
        const eventData = await fetchEventBySlug(slug, {
          signal: controller.signal,
        });
        setEvent(eventData);
        setStatus("ready");
      } catch (loadError) {
        if (loadError instanceof Error && loadError.name !== "AbortError") {
          setError(loadError.message);
          setStatus("error");
        }
      }
    };

    void loadEvent();
    return () => controller.abort();
  }, [slug]);

  useEffect(() => {
    if (event?.seo) {
      applyPageMetadata({
        ...event.seo,
        canonicalPath: event.seo.canonicalPath || `/event/${event.slug}`,
      });
    }
  }, [event]);

  if (status !== "ready" || !event) {
    return (
      <div className="flex min-h-screen flex-col bg-devotional">
        <header className="p-4 lg:px-28 lg:py-12">
          <Navbar />
        </header>
        <main className="flex flex-1 items-center justify-center px-4 py-24 text-center">
          {status === "loading" ? (
            <div role="status">
              <span className="mx-auto block h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue" />
              <p className="mt-5 text-gray-600">Loading event details...</p>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-extrabold text-blue">
                Event unavailable
              </h1>
              <p className="mt-3 text-gray-600">{error}</p>
              <Button asChild className="mt-8">
                <NavLink to="/">Return home</NavLink>
              </Button>
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-devotional text-blackalt" ref={pageRef}>
      <header className="p-4 lg:px-28 lg:py-12">
        <Navbar />
      </header>

      <main>
        <EventHero event={event} onAction={scrollToSection} />
        <EventDetails details={event.details} />
        <section
          id="registration"
          className="scroll-mt-8 px-4 py-20 lg:px-28 lg:py-32"
          data-event-reveal
        >
          <EventRegistrationForm event={event} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventPage;
