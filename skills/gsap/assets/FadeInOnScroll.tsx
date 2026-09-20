"use client";

/**
 * FadeInOnScroll
 * --------------
 * Wrap any children to fade + slide up as they enter the viewport.
 *
 * Tweak freely:
 *   - `y` (slide distance)
 *   - `duration`, `ease`
 *   - `start` (when the trigger fires; "top 80%" = top of element 80% down viewport)
 *
 * Don't tweak:
 *   - The `useGSAP({ scope: ref })` setup — that's what handles cleanup.
 *   - `gsap.registerPlugin(ScrollTrigger)` — must run on the client.
 *
 * Usage:
 *   <FadeInOnScroll>
 *     <h2>I fade in when scrolled into view</h2>
 *   </FadeInOnScroll>
 */

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FadeInOnScrollProps = {
  children: ReactNode;
  /** How far (in px) the element slides up. Default 40. */
  y?: number;
  /** Animation duration in seconds. Default 0.9. */
  duration?: number;
  /** GSAP ease string. Default "power3.out". */
  ease?: string;
  /** ScrollTrigger start position. Default "top 85%". */
  start?: string;
  /** If true, animation runs once and detaches. Default true. */
  once?: boolean;
  /** Optional className passed through to the wrapper. */
  className?: string;
};

export default function FadeInOnScroll({
  children,
  y = 40,
  duration = 0.9,
  ease = "power3.out",
  start = "top 85%",
  once = true,
  className,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
          once,
        },
      });
    },
    { scope: ref },
  );

  // The `opacity-0` Tailwind class hides the element during SSR/hydration so
  // there's no flash before GSAP takes over on mount.
  return (
    <div ref={ref} className={`opacity-0 ${className ?? ""}`}>
      {children}
    </div>
  );
}
