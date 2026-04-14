"use client";

import { useEffect, useRef, useState } from "react";
import { screenPages } from "@/components/portfolio/data";
import ContactTerminal from "@/components/portfolio/contact-terminal";
import LandingHero from "@/components/portfolio/landing-hero";
import LaptopFrame from "@/components/portfolio/laptop-frame";

const LAPTOP_SLIDE_COUNT = screenPages.length;

function laptopSlideFromTrackProgress(track: HTMLElement) {
  const scrollable = track.offsetHeight - window.innerHeight;

  if (scrollable <= 0) {
    return 0;
  }

  const rect = track.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, -rect.top / scrollable));

  return Math.min(
    LAPTOP_SLIDE_COUNT - 1,
    Math.floor(progress * LAPTOP_SLIDE_COUNT + 1e-9),
  );
}

export default function HomeExperience() {
  const laptopRef = useRef<HTMLElement>(null);
  const laptopTrackRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollingRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  const [laptopSlide, setLaptopSlide] = useState(0);

  const smoothScrollTo = (element: HTMLElement | null) => {
    if (!element || scrollingRef.current) {
      return;
    }

    scrollingRef.current = true;
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      scrollingRef.current = false;
    }, 1200);
  };

  useEffect(() => {
    const track = laptopTrackRef.current;

    if (!track) {
      return;
    }

    const updateSlide = () => {
      if (scrollingRef.current) {
        return;
      }

      setLaptopSlide(laptopSlideFromTrackProgress(track));
    };

    const schedule = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateSlide();
      });
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const observer = new ResizeObserver(schedule);
    observer.observe(track);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-x-clip bg-[#c2d8c4] text-[#142019]">
      <div className="land-ambient pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(166,186,170,0.26),transparent_30%)]" />

      <LandingHero
        onOpenContact={() => smoothScrollTo(contactRef.current)}
        onOpenLaptop={() => smoothScrollTo(laptopRef.current)}
      />

      <section
        ref={laptopRef}
        id="laptop"
        className="relative bg-[#c2d8c4]"
      >
        <div
          ref={laptopTrackRef}
          className="relative w-full"
          style={{ height: `${(LAPTOP_SLIDE_COUNT + 1) * 100}vh` }}
        >
          <div className="sticky top-0 flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 py-12 md:px-8 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_38%)]" />
            <LaptopFrame activeIndex={laptopSlide} />
          </div>
        </div>
      </section>

      <div ref={contactRef}>
        <ContactTerminal />
      </div>
    </main>
  );
}
