"use client";

import { useEffect, useRef, useState } from "react";
import ContactTerminal from "@/components/portfolio/contact-terminal";
import LandingHero from "@/components/portfolio/landing-hero";
import LaptopFrame from "@/components/portfolio/laptop-frame";
import { screenPages } from "@/components/portfolio/data";
import { clamp, easeOutCubic } from "@/components/portfolio/utils";

export default function HomeExperience() {
  const laptopRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const scrollingRef = useRef(false);
  const sectionProgressRef = useRef(0);
  const screenProgressRef = useRef(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [screenProgress, setScreenProgress] = useState(0);

  const scrollToLaptop = () => {
    if (!laptopRef.current || scrollingRef.current) {
      return;
    }

    setScreenProgress(0);
    screenProgressRef.current = 0;
    scrollingRef.current = true;
    laptopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      scrollingRef.current = false;
    }, 1200);
  };

  const scrollToContact = () => {
    if (!contactRef.current || scrollingRef.current) {
      return;
    }

    scrollingRef.current = true;
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      scrollingRef.current = false;
    }, 1200);
  };

  useEffect(() => {
    screenProgressRef.current = screenProgress;
  }, [screenProgress]);

  useEffect(() => {
    sectionProgressRef.current = sectionProgress;
  }, [sectionProgress]);

  useEffect(() => {
    const updateLaptopProgress = () => {
      const section = laptopRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const progress = clamp(
        (window.innerHeight - rect.top) / (window.innerHeight * 0.9),
        0,
        1,
      );

      setSectionProgress(progress);
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateLaptopProgress();
      });
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const section = laptopRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const inLaptopStage =
        rect.top < window.innerHeight && rect.bottom > 0;
      const laptopReady = easeOutCubic(
        clamp(sectionProgressRef.current / 0.22, 0, 1),
      );

      const delta = event.deltaY / 1400;

      if (Math.abs(delta) < 0.001) {
        return;
      }

      const current = screenProgressRef.current;
      const wantsInternalScroll =
        (delta > 0 && (laptopReady >= 0.995 || current > 0) && current < 1) ||
        (delta < 0 && current > 0);

      if (!inLaptopStage || !wantsInternalScroll) {
        return;
      }

      const next = clamp(current + delta, 0, 1);

      if (next === current) {
        return;
      }

      event.preventDefault();
      screenProgressRef.current = next;
      setScreenProgress(next);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const laptopReveal = easeOutCubic(clamp(sectionProgress / 0.22, 0, 1));
  const laptopTransform = `translate3d(0, ${120 - laptopReveal * 120}px, 0) scale(${0.84 + laptopReveal * 0.16}) rotateX(${18 - laptopReveal * 18}deg)`;
  const screenOffset = screenProgress * (screenPages.length - 1) * 100;
  const activeScreenPage = Math.round(
    screenProgress * (screenPages.length - 1),
  );

  return (
    <main className="relative bg-[#c2d8c4] text-[#142019]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(166,186,170,0.26),transparent_30%)]" />

      <LandingHero
        onOpenContact={scrollToContact}
        onOpenLaptop={scrollToLaptop}
      />

      <section
        ref={laptopRef}
        id="laptop"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-4 py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_38%)]" />
        <LaptopFrame
          activeScreenPage={activeScreenPage}
          laptopReveal={laptopReveal}
          laptopTransform={laptopTransform}
          screenOffset={screenOffset}
        />
      </section>

      <div ref={contactRef}>
        <ContactTerminal />
      </div>
    </main>
  );
}
