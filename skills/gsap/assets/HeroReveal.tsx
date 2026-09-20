"use client";

/**
 * HeroReveal
 * ----------
 * Staggered hero animation: eyebrow → headline → subtext → CTA → image.
 * Plays once on mount.
 *
 * Tweak freely:
 *   - The strings ("eyebrow", "headline", etc.) and JSX structure
 *   - Durations, distances, eases inside the timeline
 *   - The "-=0.3" offsets (how much each step overlaps the previous one)
 *
 * Don't tweak:
 *   - `"use client"` — required for any GSAP component
 *   - `useGSAP({ scope: ref })` — handles cleanup
 *
 * Usage:
 *   <HeroReveal
 *     eyebrow="Power solutions"
 *     headline="Reliable energy, on time."
 *     subtext="Industrial transformers and switchgear delivered nationwide."
 *     ctaLabel="Get a quote"
 *     ctaHref="/contact"
 *     imageSrc="/hero.jpg"
 *   />
 */

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type HeroRevealProps = {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function HeroReveal({
  eyebrow,
  headline,
  subtext,
  ctaLabel,
  ctaHref = "#",
  imageSrc,
  imageAlt = "",
}: HeroRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      if (eyebrow) {
        tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 });
      }

      tl.from(".hero-headline", { y: 40, opacity: 0 }, eyebrow ? "-=0.3" : 0)
        .from(".hero-subtext", { y: 30, opacity: 0 }, "-=0.6");

      if (ctaLabel) {
        tl.from(".hero-cta", { y: 20, opacity: 0, scale: 0.95 }, "-=0.5");
      }

      if (imageSrc) {
        tl.from(".hero-image", { opacity: 0, scale: 1.05, duration: 1.4 }, "-=1");
      }
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative grid gap-8 px-6 py-24 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        {eyebrow && (
          <p className="hero-eyebrow opacity-0 text-sm font-medium uppercase tracking-wider text-blue-600">
            {eyebrow}
          </p>
        )}
        <h1 className="hero-headline opacity-0 text-4xl font-bold leading-tight md:text-6xl">
          {headline}
        </h1>
        {subtext && (
          <p className="hero-subtext opacity-0 max-w-xl text-lg text-gray-600">{subtext}</p>
        )}
        {ctaLabel && (
          <a
            href={ctaHref}
            className="hero-cta opacity-0 inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            {ctaLabel}
          </a>
        )}
      </div>
      {imageSrc && (
        <div className="hero-image opacity-0">
          <img src={imageSrc} alt={imageAlt} className="w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}
