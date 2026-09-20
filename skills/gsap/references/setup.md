# GSAP setup for Next.js (App Router)

This is everything needed to add GSAP to a Next.js + React + TypeScript project safely. Follow it once, then forget it — the rest of the skill assumes you've done these steps.

## 1. Install

GSAP 3.13+ is fully MIT-licensed (including all plugins like ScrollTrigger, SplitText, MorphSVG, etc.). No more bonus-plugin registry workarounds.

```bash
npm install gsap @gsap/react
```

- `gsap` — the core library plus the now-free plugins
- `@gsap/react` — provides the `useGSAP` hook (the official React integration; replaces the older "use useEffect with manual cleanup" pattern)

If you're using a different package manager: `pnpm add gsap @gsap/react` or `yarn add gsap @gsap/react`.

## 2. The canonical component template

Every animated component in this project should look like this skeleton. Read it once, then internalize the four marked invariants — every other pattern in this skill is a variation on this shape.

```tsx
"use client"; // (1) client component — GSAP touches the DOM

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // import only what you use

export default function MyAnimatedSection() {
  const containerRef = useRef<HTMLDivElement>(null); // (3) ref for scoping

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger); // (4) register plugins inside the hook

      // Selectors here are scoped to containerRef — no risk of grabbing
      // ".card" from another section of the page.
      gsap.from(".card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: containerRef }, // (2) useGSAP handles cleanup automatically
  );

  return (
    <div ref={containerRef}>
      <div className="card">…</div>
      <div className="card">…</div>
      <div className="card">…</div>
    </div>
  );
}
```

The four numbered invariants map to the rules in `SKILL.md`:
1. `"use client"` so this component never runs on the server.
2. `{ scope: containerRef }` — `useGSAP` will revert every animation it captured when this component unmounts. No memory leaks, no stacked animations on hot reload.
3. A ref on the container; selectors are now scoped to its subtree.
4. Plugin registration inside the hook (runs only on the client).

## 3. Setting initial state without hydration warnings

A common newbie pattern is to write `gsap.set(ref.current, { opacity: 0 })` and animate to `opacity: 1`. This causes a flash on slow connections (the element is fully visible until JS runs and hides it) and can produce hydration mismatch warnings.

**Better pattern: hide via Tailwind class, animate to visible.**

```tsx
<div ref={containerRef}>
  {/* Initial state lives in the JSX — server and client render the same thing */}
  <h1 className="opacity-0 translate-y-8">Hello</h1>
</div>
```

```tsx
useGSAP(
  () => {
    gsap.to("h1", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  },
  { scope: containerRef },
);
```

Server renders `opacity-0 translate-y-8`. Client hydrates with the same classes. GSAP then animates *to* the visible state. No flash, no mismatch.

For elements where you really need GSAP to set the initial state (e.g., dynamic values), use `gsap.set()` *inside* `useGSAP` — it'll run synchronously on mount before paint.

## 4. Fonts and images can break ScrollTrigger

ScrollTrigger calculates positions when the animation is created. If your fonts swap in afterward (FOUT) or images load and push content down, every trigger position becomes wrong.

Two defensive measures, in order of preference:

```tsx
// A. Wait for the document to be ready before creating ScrollTriggers.
useGSAP(
  () => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh(); // recalc all triggers after layout settles
  },
  { scope: containerRef },
);
```

```tsx
// B. Tell each trigger to recalculate on resize/refresh.
ScrollTrigger.create({
  trigger: ".section",
  start: "top center",
  invalidateOnRefresh: true,
});
```

If the user has dynamic content (images loaded later, accordions, route transitions), call `ScrollTrigger.refresh()` after the change.

## 5. Reduced motion

Respect `prefers-reduced-motion`. GSAP has a built-in matcher.

```tsx
useGSAP(
  () => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero", { y: 40, opacity: 0, duration: 1 });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Either skip animation entirely, or make it instant.
      gsap.set(".hero", { opacity: 1, y: 0 });
    });
  },
  { scope: containerRef },
);
```

Don't ship animations without this — it's an accessibility regression and trivially cheap to add.

## 6. TypeScript notes

- Plugin imports are case-sensitive paths: `import { ScrollTrigger } from "gsap/ScrollTrigger"` (not `"gsap/scrolltrigger"`). It works on macOS but will break the Vercel build, which is Linux.
- Refs typed as `useRef<HTMLDivElement>(null)` work fine with `gsap.from(ref.current, ...)`.
- `useGSAP` returns `{ contextSafe, context }` if you need to attach event handlers that create animations later — see the `@gsap/react` docs for that pattern; it's rarely needed for entrance/scroll work.

## 7. Verifying setup

Drop this throwaway component anywhere in the app, navigate to it, and you should see a 1-second fade-in. If the box appears immediately and never animates, JS isn't running. If the box never appears, you forgot `"use client"` or there's a console error.

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SetupCheck() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".test-box", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="p-8">
      <div className="test-box w-32 h-32 bg-blue-500 rounded">it works</div>
    </div>
  );
}
```

Once this works, everything else in the skill is variations on the same shape.
