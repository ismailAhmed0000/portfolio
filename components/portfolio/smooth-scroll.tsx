"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

let lenis: Lenis | null = null;

// Smoothly scrolls the page to an element, through Lenis when it's running.
export function scrollToElement(element: HTMLElement | null) {
  if (!element) {
    return;
  }

  if (lenis) {
    lenis.scrollTo(element, { duration: 1.4 });
  } else {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Gives mouse-wheel and trackpad scrolling a gentle glide. Touch scrolling stays
// native, and scrollable areas inside the page (phone screens, terminals) keep
// their own scroll.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.95,
      allowNestedScroll: true,
      autoRaf: true,
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
