"use client";

/**
 * ParallaxSection
 * ---------------
 * A section with a background layer that moves at a different speed than
 * the foreground content as the user scrolls. Classic parallax effect.
 *
 * Tweak freely:
 *   - `speed` (how much the background moves; -0.3 = -30% of its height)
 *   - `bgImage` (the parallax background)
 *   - The children content layout
 *
 * Don't tweak:
 *   - `ease: "none"` on the scrub tween — non-linear easing makes scroll
 *     direction reversal feel broken.
 *
 * Usage:
 *   <ParallaxSection bgImage="/hero.jpg" className="h-screen">
 *     <h1 className="text-white text-7xl">Big idea</h1>
 *   </ParallaxSection>
 */

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ParallaxSectionProps = {
  children: ReactNode;
  /** Background image URL. */
  bgImage: string;
  /** Parallax intensity. -0.3 = bg scrolls 30% of its height upward. Default -0.3. */
  speed?: number;
  className?: string;
  /** Extra className for the foreground content wrapper. */
  contentClassName?: string;
};

export default function ParallaxSection({
  children,
  bgImage,
  speed = -0.3,
  className,
  contentClassName,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".parallax-bg", {
        yPercent: speed * 100,
        ease: "none", // critical: non-linear easing breaks scrub
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <div
        className="parallax-bg absolute inset-0 -top-[20%] h-[140%] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      <div className={`relative z-10 ${contentClassName ?? ""}`}>{children}</div>
    </section>
  );
}
