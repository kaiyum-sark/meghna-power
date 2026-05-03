"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimator() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      const delay = parseFloat(el.dataset.delay ?? "0");
      gsap.from(el, {
        opacity: 0,
        y: 48,
        duration: 0.75,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });
  }, []);

  return null;
}
