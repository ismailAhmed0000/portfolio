"use client";

import { useRef, useState, type ReactNode } from "react";

export type CarouselSlide = {
  id: string;
  content: ReactNode;
};

type SwipeCarouselProps = {
  slides: CarouselSlide[];
  // Width of each slide as a share of the track, e.g. "w-[78%]".
  slideWidth?: string;
};

const GAP_PX = 16;

// Horizontal snap carousel; the slide in focus is full size, the others shrink and fade.
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
    </div>
  );
}
