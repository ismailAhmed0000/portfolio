"use client";

import { useEffect, useRef } from "react";
import { PhoneBrowser } from "@/components/portfolio/laptop-frame";
import MobileFrame from "@/components/portfolio/mobile-frame";

// Scroll distance the pinned showcase occupies, in viewport heights.
const TRACK_SCREENS = 2.6;

const PANELS = [
  { id: "projects", caption: "Web projects" },
  { id: "apps", caption: "Mobile apps" },
] as const;

function smoothstep(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
}

// Phones only: the section pins while scrolling down, and the vertical scroll
// slides the projects iPhone out to the left as the apps iPhone comes in.
export default function PhoneShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    const strip = stripRef.current;

    if (!track || !strip) {
      return;
    }

    let frame: number | null = null;

    const update = () => {
      frame = null;
      const scrollable = track.offsetHeight - window.innerHeight;
      const raw =
        scrollable > 0 ? -track.getBoundingClientRect().top / scrollable : 0;
      // Hold on each phone briefly at both ends; slide through the middle.
      const t = smoothstep((raw - 0.22) / 0.56);

      strip.style.transform = `translate3d(${-t * 50}%, 0, 0)`;

      panelRefs.current.forEach((panel, index) => {
        if (!panel) {
          return;
        }

        const focus = index === 0 ? 1 - t : t;
        panel.style.transform = `scale(${0.9 + focus * 0.1}) rotateY(${(index === 0 ? -1 : 1) * (1 - focus) * 18}deg)`;
        panel.style.opacity = String(0.35 + focus * 0.65);
        panel.toggleAttribute("inert", focus < 0.5);
      });

      dotRefs.current.forEach((dot, index) => {
        const focus = index === 0 ? 1 - t : t;
        if (dot) {
          dot.style.width = `${0.4 + focus * 1.1}rem`;
          dot.style.opacity = String(0.35 + focus * 0.65);
        }
      });
    };

    const schedule = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${TRACK_SCREENS * 100}svh` }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <h2 className="mb-5 px-5 text-[2rem] font-black leading-none tracking-[-0.04em] text-[#18231c]">
          Projects
        </h2>
        <div
          ref={stripRef}
          className="flex w-[200%] will-change-transform"
          style={{ perspective: "1400px" }}
        >
          {PANELS.map((panel, index) => (
            <div
              key={panel.id}
              ref={(element) => {
                panelRefs.current[index] = element;
              }}
              className="flex w-1/2 flex-col items-center will-change-transform"
            >
              <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#5a7568]">
                {panel.caption}
              </p>
              {panel.id === "projects" ? (
                <PhoneBrowser />
              ) : (
                <MobileFrame progress={1} />
              )}
            </div>
          ))}
        </div>

        {/* progress, not controls: it follows the scroll */}
        <div className="mt-6 flex justify-center gap-1.5" aria-hidden>
          {PANELS.map((panel, index) => (
            <span
              key={panel.id}
              ref={(element) => {
                dotRefs.current[index] = element;
              }}
              className="h-1.5 rounded-full bg-[#18231c]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
