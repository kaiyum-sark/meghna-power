"use client";

/**
 * StaggerText
 * -----------
 * Splits a heading into characters and reveals them with a 3D-ish flip.
 * Uses GSAP's SplitText plugin (free since GSAP 3.13).
 *
 * Tweak freely:
 *   - `splitType` ("chars", "words", "words,chars", "lines")
 *   - `stagger` (delay between each piece)
 *   - The `from` tween properties (y, rotateX, ease)
 *
 * Caveat: SplitText reflows the text into wrapper spans. If you have unusual
 * fonts or rely on ligatures, eyeball the result — character splitting
 * occasionally breaks kerning. Switch to `splitType="words"` if so.
 *
 * Usage:
 *   <StaggerText as="h1" className="text-5xl font-bold">
 *     Reliable energy, on time.
 *   </StaggerText>
 */

import { useRef, type ElementType } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

type StaggerTextProps = {
  children: string;
  as?: ElementType;
  className?: string;
  /** What to split on. Default "chars". */
  splitType?: "chars" | "words" | "words,chars" | "lines";
  /** Seconds between each piece. Default 0.02. */
  stagger?: number;
  /** Animation duration per piece. Default 0.6. */
  duration?: number;
  /** GSAP ease. Default "back.out(1.7)". */
  ease?: string;
};

export default function StaggerText({
  children,
  as: Tag = "h2",
  className,
  splitType = "chars",
  stagger = 0.02,
  duration = 0.6,
  ease = "back.out(1.7)",
}: StaggerTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const split = new SplitText(ref.current, { type: splitType });

      // Choose what to animate based on what was split.
      const targets =
        splitType === "lines"
          ? split.lines
          : splitType === "words"
            ? split.words
            : split.chars;

      gsap.from(targets, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        duration,
        ease,
        stagger,
      });

      // Revert SplitText DOM mutations on unmount, in addition to useGSAP's cleanup.
      return () => split.revert();
    },
    { scope: ref },
  );

  // Cast through `unknown` so we can render with a dynamic tag in TS strict mode.
  const Component = Tag as ElementType;

  return (
    <Component ref={ref as never} className={className}>
      {children}
    </Component>
  );
}
