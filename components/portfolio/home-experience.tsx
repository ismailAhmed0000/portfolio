"use client";

import { useRef } from "react";
import ContactTerminal from "@/components/portfolio/contact-terminal";
import LandingHero from "@/components/portfolio/landing-hero";
import LaptopFrame from "@/components/portfolio/laptop-frame";

export default function HomeExperience() {
  const laptopRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollingRef = useRef(false);

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

  return (
    <main className="relative bg-[#c2d8c4] text-[#142019]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(166,186,170,0.26),transparent_30%)]" />

      <LandingHero
        onOpenContact={() => smoothScrollTo(contactRef.current)}
        onOpenLaptop={() => smoothScrollTo(laptopRef.current)}
      />

      <section
        ref={laptopRef}
        id="laptop"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#c2d8c4] px-4 py-12 md:px-8 md:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_38%)]" />
        <LaptopFrame />
      </section>

      <div ref={contactRef}>
        <ContactTerminal />
      </div>
    </main>
  );
}
