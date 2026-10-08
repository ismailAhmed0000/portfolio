"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

type LandingHeroProps = {
  onOpenLaptop: () => void;
};

const NAV_LINK =
  "group relative px-5 pb-3 pt-3 transition-colors duration-300 ease-out hover:text-[#18231c] lg:px-7";

const TAB_LINE = "absolute bg-[#68806e]/60 transition-transform ease-out";

// Bottom rule that lifts into a tab around the hovered nav item.
function TabEdges() {
  return (
    <span aria-hidden>
      <span
        className={`${TAB_LINE} inset-x-0 bottom-0 h-px duration-200 group-hover:scale-x-0`}
      />
      <span
        className={`${TAB_LINE} bottom-0 left-0 h-full w-px origin-bottom scale-y-0 duration-200 group-hover:scale-y-100`}
      />
      <span
        className={`${TAB_LINE} bottom-0 right-0 h-full w-px origin-bottom scale-y-0 duration-200 group-hover:scale-y-100`}
      />
      <span
        className={`${TAB_LINE} inset-x-0 top-0 h-px scale-x-0 duration-200 group-hover:scale-x-100 group-hover:delay-150`}
      />
    </span>
  );
}

type NavItem = {
  label: string;
  href: string;
  onSelect?: () => void;
};

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LandingHero({ onOpenLaptop }: LandingHeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Hero content drifts up and fades as it scrolls away.
  useEffect(() => {
    const element = contentRef.current;

    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame: number | null = null;

    const update = () => {
      frame = null;
      const progress = Math.min(1, window.scrollY / window.innerHeight);
      element.style.transform = `translate3d(0, ${progress * -12}vh, 0) scale(${1 - progress * 0.06})`;
      element.style.opacity = String(1 - progress * 0.85);
    };

    const onScroll = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navItems: NavItem[] = [
    {
      label: "Experience",
      href: "#experience",
      onSelect: () => scrollToId("experience"),
    },
    { label: "Projects", href: "#laptop", onSelect: onOpenLaptop },
    { label: "Resume", href: "/resume.pdf" },
  ];

  const linkProps = (item: NavItem) =>
    item.onSelect
      ? {
          href: item.href,
          onClick: (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            setMenuOpen(false);
            item.onSelect?.();
          },
        }
      : {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => setMenuOpen(false),
        };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-transparent px-5 py-6 md:px-8 md:py-8 lg:px-10"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-3rem)] max-w-[92rem] flex-col md:min-h-[calc(100svh-4rem)]">
        <div className="land-rise land-rise--d0 relative z-30 flex items-center justify-between gap-6 pt-2">
          <a
            href="#hero"
            aria-label="Back to top"
            className="text-[#1a281f]"
            onClick={(event) => {
              event.preventDefault();
              scrollToId("hero");
            }}
          >
            <p className="flex -translate-y-1.5 items-center gap-[0.14em] text-[2rem] leading-none md:text-[2.75rem]">
              <span className="inline-block scale-x-[1.15] scale-y-[1.35] font-light text-[#415348]">
                {"{"}
              </span>
              <span className="inline-block scale-x-[1.15] scale-y-[1.35] bg-gradient-to-b from-[#a2b7a5] via-[#5a7568] to-[#18231c] bg-clip-text font-black uppercase tracking-[-0.06em] text-transparent">
                IS
              </span>
              <span className="inline-block scale-x-[1.15] scale-y-[1.35] font-light text-[#415348]">
                {"}"}
              </span>
            </p>
          </a>

          <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start">
            <div className="hidden items-end text-[0.95rem] font-black uppercase tracking-[0.22em] text-[#5a7568] md:flex">
              <span
                className="w-4 self-stretch border-b border-[#68806e]/60"
                aria-hidden
              />
              {navItems.map((item) => (
                <a key={item.label} {...linkProps(item)} className={NAV_LINK}>
                  {item.label}
                  <TabEdges />
                </a>
              ))}
              <span
                className="w-4 self-stretch border-b border-[#68806e]/60"
                aria-hidden
              />
            </div>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-30 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-[#68806e]/40 bg-[#edf4ed]/70 md:hidden"
          >
            <span
              className={`h-[2px] w-4 rounded-full bg-[#18231c] transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-4 rounded-full bg-[#18231c] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>

          <div
            id="mobile-menu"
            hidden={!menuOpen}
            className="absolute right-0 top-full z-20 mt-3 w-[min(16rem,calc(100vw-2.5rem))] rounded-2xl border border-[#68806e]/30 bg-[#edf4ed]/95 p-2 shadow-[0_24px_60px_rgba(24,35,28,0.18)] backdrop-blur-md md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                {...linkProps(item)}
                className="block rounded-xl px-4 py-3 text-[0.9rem] font-black uppercase tracking-[0.18em] text-[#415348] transition-colors active:bg-[#c2d8c4]/60"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div
          ref={contentRef}
          className="relative flex flex-1 origin-top flex-col items-center justify-center pb-10 pt-6 text-center md:pb-12 md:pt-16"
        >
          <div className="land-rise land-rise--d2 w-full max-w-full">
            <div className="terminal-pulse mx-auto w-max max-w-full rounded-[2rem] border border-[#6e8673]/35 bg-[#edf4ed]/82 px-5 py-4 shadow-[0_0_0_1px_rgba(90,115,98,0.08),0_24px_80px_rgba(104,128,111,0.2)]">
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#415348]" />
                <span className="h-2 w-2 rounded-full bg-[#68806e]" />
                <span className="h-2 w-2 rounded-full bg-[#a2b7a5]" />
              </div>
              <div className="font-mono text-left text-[0.72rem] text-[#1d2b22] md:text-sm">
                <p
                  className="terminal-line terminal-line-slow max-w-max"
                  style={{
                    animationTimingFunction: "steps(32, end), step-end",
                  }}
                >
                  $ Hello, My name is Ismail Ahmed
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-[90rem] md:mt-8">
            <span className="land-rise land-rise--d3 mb-1 block text-[clamp(1.2rem,2vw,1.8rem)] font-black uppercase leading-none tracking-[-0.08em] text-[#44574b] md:ml-[8%]">
              YOUR
            </span>
            <h1
              className="land-rise land-rise--d4 text-[17vw] font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-[clamp(4.8rem,16vw,14rem)] md:leading-[0.84] md:tracking-[-0.1em] text-[#18231c]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              FULL STACK
            </h1>
            <div className="mt-3 flex flex-col items-center gap-2 md:mt-[-0.4rem] md:flex-row md:items-start md:justify-center md:gap-5">
              <span className="land-rise land-rise--d5 md:pt-[1.8vw] text-[clamp(1.2rem,2vw,1.8rem)] font-black uppercase leading-none tracking-[-0.08em] text-[#44574b]">
                &
              </span>
              <h1
                className="land-rise land-rise--d5 text-[15vw] font-black uppercase leading-[0.88] tracking-[-0.04em] md:text-[clamp(4.4rem,14vw,12.5rem)] md:leading-[0.84] md:tracking-[-0.1em] text-[#18231c]"
                style={{
                  fontFamily:
                    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                }}
              >
                CREATIVE ENGINEER
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
