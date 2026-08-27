import type { FormConfig, FormTheme } from "../components/dynamic-form";

export type SubmissionDestination = {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  mode?: "cors" | "no-cors" | "same-origin";
  bodyFormat?: "json" | "form";
};

export type EventPageConfig = {
  slug: string;
  eventCode: string;
  announcement: string;
  title: string;
  summary: string;
  date: {
    iso: string;
    label: string;
    timeLabel: string;
    timezone: string;
  };
  location: {
    name: string;
    area: string;
    label: string;
  };
  actions: {
    primary: {
      label: string;
      target: string;
    };
  };
  heroMedia: {
    type: "image" | "video";
    url: string;
    posterUrl?: string;
    alt: string;
    eyebrow: string;
    headline: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    playsInline?: boolean;
    muteLabel: string;
    unmuteLabel: string;
  };
  details: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: Array<{
      title: string;
      description: string;
    }>;
  };
  registration: {
    destinations: {
      api?: SubmissionDestination;
      googleAppsScript: SubmissionDestination;
    };
    theme?: FormTheme;
    form: FormConfig;
  };
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
    imageUrl: string;
    imageAlt: string;
  };
};
