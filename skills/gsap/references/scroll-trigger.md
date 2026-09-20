# Scroll-triggered animations (ScrollTrigger)

ScrollTrigger ties any GSAP animation to scroll position. There are two distinct modes, and choosing the right one is the most important decision:

- **Toggle mode** — animation plays once when an element enters the viewport. Use for fade-ins, reveal-on-scroll, "appear as you scroll past" effects. The user's scroll just *triggers* the animation; it then plays at its own speed.
- **Scrub mode** — the animation's progress is directly tied to scroll position. Scroll halfway, animation is at 50%. Scroll backward, animation reverses. Use for parallax, scroll-driven horizontal sections, story sequences.

If you can phrase what the user wants as "play X when they reach Y", it's toggle mode. If it's "as they scroll, X happens", it's scrub mode.

## Toggle mode: fade-in on scroll

The single most-requested scroll animation. Reveal an element when it enters the viewport.

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%", // when top of section hits 80% down the viewport
          toggleActions: "play none none reverse",
          // toggleActions: onEnter, onLeave, onEnterBack, onLeaveBack
        },
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="...">
      <h2 className="reveal opacity-0">Heading</h2>
      <p className="reveal opacity-0">Body…</p>
    </section>
  );
}
```

Two things to understand here:

**`start: "top 80%"`** — the animation fires when the *top* of the trigger element reaches *80% down* the viewport. Other useful values: `"top center"`, `"top bottom-=100"` (when top of trigger is 100px above the bottom of the viewport). Read it as `<element-edge> <viewport-position>`.

**`toggleActions: "play none none reverse"`** — four actions for four moments: enter (scrolling down past start), leave (past end), enter-back (scrolling up into it), leave-back (scrolling up past start). `"play none none reverse"` plays on enter, reverses on leave-back. For "play once and never again" use `"play none none none"` plus `once: true`.

## Once-only reveals

Most of the time you don't want elements to re-animate when the user scrolls back up. Add `once: true`.

```tsx
scrollTrigger: {
  trigger: ".card",
  start: "top 85%",
  once: true, // animation runs the first time, then ScrollTrigger detaches
}
```

This also frees memory — useful on long pages with dozens of triggers.

## Stagger across the whole page

A common pattern: every `.reveal` element on the page fades up as it enters. Don't create one ScrollTrigger per element — use `gsap.utils.toArray` and a loop, or a single `batch` call.

```tsx
useGSAP(
  () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch(".reveal", {
      onEnter: (batch) =>
        gsap.from(batch, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        }),
      start: "top 85%",
      once: true,
    });
  },
  { scope: ref },
);
```

`batch` groups elements that enter the viewport within a small time window so they animate together with stagger, instead of each firing independently. This looks dramatically better than per-element triggers.

## Scrub mode: parallax

Element moves at a different speed than the page scroll.

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".bg-layer", {
        yPercent: -30, // background moves up 30% of its height
        ease: "none", // critical for scrub — linear feels natural
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
    <section ref={ref} className="relative h-screen overflow-hidden">
      <div className="bg-layer absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/hero.jpg)" }} />
      <div className="relative z-10">…content…</div>
    </section>
  );
}
```

Key details:

- **`ease: "none"`** for scrub. With easing, scrolling forward and back doesn't track the same path — feels broken.
- **`scrub: true`** ties progress directly. **`scrub: 1`** smooths it (1 second lag), which feels more cinematic and forgives jittery scroll wheels.
- **`yPercent`** is preferred over `y` for parallax because it's relative to the element's own height — works at any viewport size.

## Scrub mode: pinned section with progress

Pin a section to the viewport and play an animation as the user scrolls. Classic for product showcases.

```tsx
useGSAP(
  () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=2000", // pinned for 2000px of scroll
        pin: true,
        scrub: 1,
      },
    });

    tl.from(".step-1", { opacity: 0, x: -100 })
      .from(".step-2", { opacity: 0, x: 100 })
      .from(".step-3", { opacity: 0, scale: 0.5 });
  },
  { scope: ref },
);
```

The user scrolls, the section stays pinned for 2000px of scroll distance, and the timeline progresses through the three steps. This is the foundation of "scrollytelling" sections.

A practical warning: pinned sections create scroll length. If you pin for `+=2000`, the page is now 2000px taller. Plan your layout knowing this.

## Horizontal scroll sections

A staple of agency sites. Pin a row, then scrub it horizontally as the user scrolls vertically.

```tsx
useGSAP(
  () => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + ref.current!.offsetWidth,
      },
    });
  },
  { scope: ref },
);
```

```tsx
<section ref={ref} className="overflow-hidden">
  <div className="flex w-[400vw] h-screen">
    <div className="panel w-screen">1</div>
    <div className="panel w-screen">2</div>
    <div className="panel w-screen">3</div>
    <div className="panel w-screen">4</div>
  </div>
</section>
```

Tweak the panel count and the parent's width (`400vw` for 4 panels, `300vw` for 3). The end value `"+=" + offsetWidth` makes the scroll distance match the horizontal travel, which feels 1:1.

## Debugging triggers

When a trigger fires at the wrong scroll position, add markers:

```tsx
scrollTrigger: {
  trigger: ref.current,
  start: "top 80%",
  markers: true, // remove before shipping
}
```

You'll see `start`/`end` lines on the page and `trigger`/`scroller-start`/`scroller-end` indicators. Watching the markers cross during scroll makes start/end values intuitive in about 30 seconds.

## Performance notes

- **Animate transforms and opacity, not `top`/`left`/`width`/`height`.** Transforms are GPU-accelerated; layout properties cause reflow on every frame.
- **`will-change: transform`** can help if you see jank, but use sparingly — it allocates a layer and overuse hurts more than it helps.
- **Long pages with many triggers** — use `batch` and `once: true` to avoid hundreds of permanent listeners.
- **`ScrollTrigger.normalizeScroll(true)`** smooths out platform differences (especially iOS bounce). Worth trying if scroll-linked animations feel inconsistent.

## Common mistakes

- **Trigger fires too early.** `start: "top top"` means the trigger fires when the top of the element hits the top of the viewport. If you wanted it to fire when the element is *visible*, use `"top 80%"` or `"top center"`.
- **Pinned section overlaps next section.** You forgot `pinSpacing: true` (default) is keeping the layout intact, but you set `pin: true` on a non-`position: relative` parent. Wrap the section in a relatively-positioned container.
- **Scrub animation snaps backward.** You used a non-linear ease. Set `ease: "none"` for any scrub.
- **ScrollTrigger doesn't refresh on route change.** App Router preserves layout components across routes; if a trigger is in a layout, call `ScrollTrigger.refresh()` in a route-change effect, or move the trigger into the page component so it remounts.
