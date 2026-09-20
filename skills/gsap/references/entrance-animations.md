# Entrance & hero animations

Animations that play once when a component mounts — typically a hero section on first page load, or a card grid that reveals as the user navigates in. This is the bread and butter of marketing sites.

The mental model: build a `gsap.timeline()` that orchestrates several elements in sequence, with each step starting at a slight overlap (`"-=0.4"`) for a polished feel. One big timeline beats five separate `gsap.from()` calls because you can tweak the overall pacing in one place.

## The hero reveal pattern

Headline → subtext → CTA, each with a small offset, classic landing page entrance.

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-headline", { y: 40, opacity: 0 }, "-=0.3")
        .from(".hero-subtext", { y: 30, opacity: 0 }, "-=0.6")
        .from(".hero-cta", { y: 20, opacity: 0, scale: 0.95 }, "-=0.5")
        .from(".hero-image", { opacity: 0, scale: 1.05, duration: 1.4 }, "-=1");
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="...">
      <p className="hero-eyebrow opacity-0">Power solutions</p>
      <h1 className="hero-headline opacity-0">Reliable energy, on time.</h1>
      <p className="hero-subtext opacity-0">…</p>
      <a className="hero-cta opacity-0">Get a quote</a>
      <img className="hero-image opacity-0" src="..." alt="" />
    </section>
  );
}
```

A few details worth understanding:

- **`defaults`** sets ease and duration once for the whole timeline; individual tweens override as needed.
- **`"-=0.3"`** means "start this tween 0.3 seconds before the previous one ends" — that's what produces the elegant overlap. Without it, animations feel sequential and slow.
- **`opacity-0` in JSX** means the elements are invisible during SSR and during hydration. The first frame after mount is the start of the animation. No flash.
- Don't use `gsap.from()` if the element should be visible during SSR — `from()` snapshots current values as the *end* state and animates from the values you provide. Use `gsap.fromTo()` for explicit start + end if confused.

## Staggered list reveal

When you have a grid of cards, a feature list, or nav items, stagger them.

```tsx
useGSAP(
  () => {
    gsap.from(".feature-card", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08, // 80ms between each card
    });
  },
  { scope: ref },
);
```

For a fancier wave effect that ripples from the center of a grid:

```tsx
gsap.from(".feature-card", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: { amount: 0.5, from: "center", grid: "auto" },
});
```

`amount` is the total time spread across all elements (not per-element); `from: "center"` and `grid: "auto"` make GSAP detect the grid layout and stagger outward from the middle.

## Navbar entrance on first paint

A nav bar that slides down from above on initial load. After that, it stays put — don't re-animate on every page navigation.

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { scope: ref },
  );

  return <nav ref={ref}>…</nav>;
}
```

If the navbar is in `app/layout.tsx`, it'll only animate on full page loads (SPA navigation reuses the layout component), which is what you want.

## Staggered text by word or character

For "type-on" or character-by-character reveals, GSAP's SplitText plugin is the cleanest path. It's now free with GSAP 3.13+.

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export default function AnimatedHeadline({ children }: { children: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const split = new SplitText(ref.current, { type: "words,chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.02,
      });

      // SplitText creates extra spans — useGSAP cleanup will revert,
      // but for safety call split.revert() if you split again on the same node.
      return () => split.revert();
    },
    { scope: ref },
  );

  return <h1 ref={ref}>{children}</h1>;
}
```

A practical note: SplitText copies the existing styles onto the wrapping spans, so your typography will survive. If you have ligatures or unusual fonts, test in your real layout before shipping — character splitting can occasionally break kerning.

## Choosing easings

A short reference for the ones that show up constantly:

- **`"power3.out"`** — soft, decelerating; the default for most entrance work. Use this if unsure.
- **`"power2.out"`** — slightly snappier than `power3.out`.
- **`"back.out(1.7)"`** — overshoots slightly then settles; great for buttons, badges, anything with personality. The number controls overshoot strength.
- **`"expo.out"`** — very fast at first, slow finish; feels luxurious but can be too dramatic for small movements.
- **`"none"`** — linear; almost never what you want for entrances. Save it for `scrub` ScrollTrigger setups where the user controls progress.

GSAP's [ease visualizer](https://gsap.com/docs/v3/Eases/) is worth bookmarking when you want to feel out an option.

## Common pitfalls

- **Element flashes before animating.** You forgot to set the initial state in JSX (e.g., `opacity-0`). `gsap.from()` will snap it to the start state on the next frame, but during SSR/hydration it's visible.
- **Animation runs twice.** Hot reload re-mounted the component but the previous timeline is still running. Almost always solved by `useGSAP({ scope: ref })`.
- **Headline jumps before fading in.** You're animating `transform: translateY` but the headline has `font-display: swap` and the font hasn't loaded. Either preload the font in `app/layout.tsx` or wrap the animation in a small `setTimeout(() => …, 50)` (last resort).
