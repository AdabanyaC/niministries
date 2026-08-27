import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import type { EventPageConfig } from "../../types/event";

type EventMediaProps = { media: EventPageConfig["heroMedia"] };

const EventMedia = ({ media }: EventMediaProps) => {
  const isVideo = media.type === "video" && Boolean(media.url);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(Boolean(media.muted));

  useEffect(() => {
    const muted = Boolean(media.muted);
    setIsMuted(muted);
    if (videoRef.current) videoRef.current.muted = muted;
  }, [media.muted, media.url]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMutedState = !video.muted;
    video.muted = nextMutedState;
    setIsMuted(nextMutedState);

    if (video.paused) {
      void video.play().catch(() => {
        // Browsers may still require a subsequent gesture before media playback.
      });
    }
  };

  return (
    <Card
      className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden border-0 bg-blue lg:max-w-md lg:justify-self-center"
      data-event-media
    >
      {isVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={media.posterUrl}
          preload="metadata"
          autoPlay={media.autoPlay}
          muted={isMuted}
          loop={media.loop}
          playsInline={media.playsInline}
          controls={false}
          controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          aria-label={media.alt}
        >
          <source src={media.url} type="video/mp4" />
        </video>
      ) : (
        <img
          src={media.url}
          alt={media.alt}
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue via-blue/15 to-transparent" />
      {isVideo && (
        <Button
          type="button"
          size="icon"
          variant="outline"
          className="absolute right-4 top-4 z-10 rounded-full border-white/40 bg-blue/70 text-white backdrop-blur-sm hover:border-white hover:bg-blue"
          onClick={toggleMute}
          aria-label={isMuted ? media.unmuteLabel : media.muteLabel}
          aria-pressed={isMuted}
          title={isMuted ? media.unmuteLabel : media.muteLabel}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Volume2 className="h-5 w-5" aria-hidden="true" />
          )}
        </Button>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white lg:p-7">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
          {media.eyebrow}
        </div>
        <p className="max-w-md text-xl font-bold lg:text-2xl">
          {media.headline}
        </p>
      </div>
    </Card>
  );
};

export default EventMedia;
