"use client";

import { useRef, useState, type ReactNode } from "react";

export type CarouselSlide = {
  id: string;
  label: string;
  content: ReactNode;
};

type SwipeCarouselProps = {
  slides: CarouselSlide[];
  // Width of each slide as a share of the track, e.g. "w-[78%]".
  slideWidth?: string;
};

const GAP_PX = 16;

// Horizontal snap carousel with a pill switcher; the slide in focus is full size,
// the others shrink and fade. Swiping and tapping a pill stay in sync.
export default function SwipeCarousel({
  slides,
  slideWidth = "w-[78%]",
}: SwipeCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;

    if (!track || !first) {
      return;
    }

    const step = first.offsetWidth + GAP_PX;
    setActive(Math.min(slides.length - 1, Math.round(track.scrollLeft / step)));
  };

  const goTo = (index: number) => {
    const slide = trackRef.current?.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[10%] pb-2 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${slideWidth} shrink-0 snap-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === active ? "opacity-100" : "scale-[0.94] opacity-45"
            }`}
            // Off-focus slides can't be tapped or tabbed into until swiped in.
            inert={index !== active}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show ${slide.label}`}
            aria-current={index === active}
            className={`flex h-8 items-center rounded-full px-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] transition-all duration-500 ${
              index === active
                ? "bg-[#18231c] text-[#eef5ef]"
                : "bg-[#18231c]/8 text-[#5a7568]"
            }`}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
}
