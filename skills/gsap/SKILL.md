---
name: gsap
description: Add GSAP animations to a Next.js + React + TypeScript project — scroll-triggered reveals (ScrollTrigger), hero/page entrance animations, staggered text, parallax, and pinned sections. Use this skill whenever the user mentions GSAP, gsap.to/gsap.from, ScrollTrigger, "scroll animation", "scroll reveal", "fade in on scroll", "parallax", "hero animation", "entrance animation", "page load animation", "stagger", "animate on view", or wants to animate elements as the user scrolls or as a page loads. Also trigger when the user asks to "add motion" or "animate" something on a Next.js page even if they don't explicitly say "GSAP" — this skill is the recommended path for scroll-driven and entrance animation in this codebase. Do NOT use for simple CSS transitions/keyframes (use plain Tailwind), and prefer framer-motion only for layout/presence animation that's already wired up — GSAP wins for ScrollTrigger and timelines.
---

# GSAP for Next.js (App Router)

This skill helps add production-quality GSAP animations to a Next.js 16 + React 19 + TypeScript project. The focus is the two areas that actually matter for marketing/landing sites: **scroll-triggered animations** and **hero/page entrance animations**.

## Why this skill exists

GSAP is the right tool when you need:
- Scroll-driven sequences (pinning, scrub, parallax) — `framer-motion` can't match `ScrollTrigger`
- Tight choreography across many elements via `gsap.timeline()` with labels and offsets
- Buttery 60fps on transforms with no React re-renders in the critical path

But Next.js App Router has real footguns: SSR runs your component on the server (no `window`), refs aren't ready until after mount, and animations created without cleanup will leak across navigations. This skill encodes the patterns that avoid all of that.

## When to read which reference

Decide based on what the user is asking for, then read just the file you need. The references are written to be self-contained — you don't need to read all of them up front.

| User wants… | Read |
|---|---|
| To install GSAP, set up the `useGSAP` hook, register plugins, or fix SSR/hydration errors | `references/setup.md` |
| Hero reveals, navbar entrance, staggered headline text, on-load animations | `references/entrance-animations.md` |
| Fade/slide on scroll, parallax, pinned sections, scrub-driven sequences | `references/scroll-trigger.md` |

If the user wants both entrance + scroll (a typical landing page), set up first, then read both reference files.

## The non-negotiables

These four rules apply to every GSAP animation in this codebase. If you skip them, things break in subtle ways — so internalize the *why*, not just the rule.

**1. Mark animation components `"use client"`.** GSAP touches the DOM. The DOM doesn't exist on the server. Without this directive Next.js will try to render the component on the server, GSAP code will run, and you'll get a `window is not defined` or `document is not defined` error. Put `"use client"` as the very first line.

**2. Use `useGSAP()` from `@gsap/react`, not `useEffect`.** `useGSAP` automatically scopes selectors, captures every animation/timeline/ScrollTrigger created inside it, and reverts/kills them all on unmount. Doing this with `useEffect` works but means writing cleanup by hand for every tween — easy to forget, and forgotten cleanup is the #1 cause of "the animation runs twice on hot reload" and "it animates fine the first time but breaks after I navigate away and back."

**3. Animate refs, never query the DOM directly.** In React, `document.querySelector` can race with the render and grab the wrong element (or nothing). Attach a `ref` to the element you want to animate, pass `{ scope: containerRef }` to `useGSAP`, then GSAP's selector strings (`".card"`) are scoped to that ref's subtree.

**4. Register plugins once, on the client.** `ScrollTrigger`, `SplitText`, etc. are separate modules. Register them inside `useGSAP` (or a top-level client component) — never at module scope, because module scope evaluates on the server too.

The setup reference shows all four in a copy-pasteable template.

## How to approach an animation request

A useful mental flow when a user asks for an animation:

1. **Is it triggered by scroll, or by mount?** Scroll → `ScrollTrigger` config. Mount → plain `gsap.from()` / `gsap.timeline()` inside `useGSAP`.
2. **Is it one element, or many?** One → `gsap.from(ref.current, {...})`. Many with offsets → `stagger`. Many with explicit choreography → `gsap.timeline()`.
3. **Does it need to be reusable?** If yes, build it as a small wrapper component (see `assets/` for templates). If it's a one-off hero, inline it in the page component.
4. **Where does it live?** New components go in `app/` next to where they're used, or in a shared `components/animations/` folder. Match whatever convention the codebase already uses.

## Ready-to-use templates

The `assets/` directory has copy-paste TSX components for the most common patterns. Read the file, copy it into the project at an appropriate path (usually `components/animations/` or alongside the page using it), and adapt:

- `assets/FadeInOnScroll.tsx` — wrap any children to fade + slide up as they enter the viewport
- `assets/HeroReveal.tsx` — staggered hero headline + subtext + CTA reveal on mount
- `assets/StaggerText.tsx` — split a heading into words/chars and reveal them one by one
- `assets/ParallaxSection.tsx` — background layer that moves at a different speed than foreground on scroll

Each template is annotated with what to tweak (durations, eases, offsets) and what to leave alone (scoping, cleanup, plugin registration).

## Common mistakes to avoid

These come up over and over. Watch for them in user code and in your own output.

- **Hydration mismatch warnings after adding GSAP.** Almost always caused by setting initial styles via `gsap.set()` *before* the browser has rendered. Fix: put `gsap.set(ref.current, { autoAlpha: 0 })` inside `useGSAP`, OR set the initial state in the JSX/Tailwind class (e.g., `className="opacity-0"`) so server and client render the same thing.
- **Animations stack on hot reload.** The user is creating animations outside `useGSAP` (or in a `useEffect` without cleanup). Move them inside `useGSAP({ scope: ref })`.
- **`ScrollTrigger.refresh()` ignored.** If layout changes after the page loads (images load, fonts swap, accordions open), trigger positions get stale. Call `ScrollTrigger.refresh()` after the change, or pass `{ invalidateOnRefresh: true }` for animations that depend on measured values.
- **Animations don't run on the second visit to a page.** ScrollTriggers from the first page are still attached. `useGSAP` cleanup handles this — if it's not, double-check the hook is actually being used.
- **TypeScript complains about `gsap.registerPlugin`.** You need `import { ScrollTrigger } from "gsap/ScrollTrigger"` (capital S, capital T) — the path is case-sensitive on Linux/Vercel even if it works on macOS.

## Quick decision: GSAP vs. framer-motion

This project already has `framer-motion` installed. A pragmatic split:

- **framer-motion** — component mount/unmount transitions (`<AnimatePresence>`), layout animations, gesture-driven UI (drag, hover variants on small components).
- **GSAP** — anything scroll-driven, anything with a master timeline coordinating 5+ elements, anything that needs `pin` or `scrub`, text effects that split characters/words.

You can mix them. Don't tear out framer-motion to "be consistent" — use the right tool for each animation.
