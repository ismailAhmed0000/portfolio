"use client";

import { useEffect, useRef, useState } from "react";
import ContactTerminal from "@/components/portfolio/contact-terminal";
import ExperienceSection from "@/components/portfolio/experience-section";
import LandingHero from "@/components/portfolio/landing-hero";
import LaptopFrame from "@/components/portfolio/laptop-frame";
import MobileFrame from "@/components/portfolio/mobile-frame";
import { clamp } from "@/components/portfolio/utils";

const MOBILE_TRACK_VH = 220;
const MOBILE_REVEAL_FRACTION = 0.55;

function phoneProgressFromTrack(track: HTMLElement) {
  const scrollable = track.offsetHeight - window.innerHeight;

  if (scrollable <= 0) {
    return 1;
  }

  const rect = track.getBoundingClientRect();
  const raw = clamp(-rect.top / scrollable, 0, 1);

  return clamp(raw / MOBILE_REVEAL_FRACTION, 0, 1);
}

export default function HomeExperience() {
  const laptopRef = useRef<HTMLElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollingRef = useRef(false);
  const mobileFrameRef = useRef<number | null>(null);

  const [phoneProgress, setPhoneProgress] = useState(0);

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
    const track = mobileTrackRef.current;

    if (!track) {
      return;
    }

    const updateProgress = () => {
      if (scrollingRef.current) {
        return;
      }

      setPhoneProgress(phoneProgressFromTrack(track));
    };

    const schedule = () => {
      if (mobileFrameRef.current !== null) {
        return;
      }

      mobileFrameRef.current = window.requestAnimationFrame(() => {
        mobileFrameRef.current = null;
        updateProgress();
      });
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    const observer = new ResizeObserver(schedule);
    observer.observe(track);

    return () => {
      if (mobileFrameRef.current !== null) {
        window.cancelAnimationFrame(mobileFrameRef.current);
      }

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative overflow-x-clip bg-[#c2d8c4] text-[#142019]">
      <div className="land-ambient pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(166,186,170,0.26),transparent_30%)]" />

      <LandingHero onOpenLaptop={() => smoothScrollTo(laptopRef.current)} />

      <ExperienceSection />

      <section ref={laptopRef} id="laptop" className="relative bg-[#c2d8c4]">
        <div className="relative flex items-center justify-center overflow-hidden px-4 py-10 md:min-h-[100dvh] md:px-8 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_38%)]" />
          <LaptopFrame />
        </div>
      </section>

      <section id="mobile" className="relative bg-[#c2d8c4]">
        <div
          ref={mobileTrackRef}
          className="relative w-full"
          style={{ height: `${MOBILE_TRACK_VH}vh` }}
        >
          <div
            className="sticky top-0 flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 py-6 md:px-8 md:py-10"
            style={{ perspective: "1800px" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_38%)]" />
            <MobileFrame progress={phoneProgress} />
          </div>
        </div>
      </section>

      <div ref={contactRef}>
        <ContactTerminal />
      </div>
    </main>
  );
}
