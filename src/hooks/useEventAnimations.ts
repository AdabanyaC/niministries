import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";

export const useEventAnimations = (
  scope: RefObject<HTMLElement>,
  enabled = true
) => {
  useLayoutEffect(() => {
    if (!enabled || !scope.current || typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | undefined;
    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-event-hero-item]", {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.08,
        })
        .from(
          "[data-event-media]",
          { autoAlpha: 0, x: 36, scale: 0.97, duration: 0.9 },
          "-=0.55"
        );

      gsap
        .timeline({
          delay: 1.7,
          repeat: -1,
          repeatDelay: 3,
          defaults: { ease: "power2.inOut" },
        })
        .to("[data-event-cta]", {
          scale: 1.045,
          boxShadow: "0 12px 32px rgba(6, 6, 64, 0.32)",
          duration: 0.28,
        })
        .to("[data-event-cta]", {
          scale: 1,
          boxShadow: "0 4px 12px rgba(6, 6, 64, 0.18)",
          duration: 0.32,
        })
        .to(
          "[data-event-cta-icon]",
          {
            x: 5,
            duration: 0.18,
            repeat: 3,
            yoyo: true,
          },
          0
        );

      const revealElements = gsap.utils.toArray<HTMLElement>(
        "[data-event-reveal]"
      );

      if (!("IntersectionObserver" in window)) return;

      gsap.set(revealElements, { autoAlpha: 0, y: 30 });
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            gsap.to(entry.target, {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              clearProps: "transform",
            });
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.14 }
      );
      revealElements.forEach((element) => observer?.observe(element));
    }, scope);

    return () => {
      observer?.disconnect();
      context.revert();
    };
  }, [enabled, scope]);
};
