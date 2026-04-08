"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

const featuredProjects = [
  {
    title: "Cedar Studio",
    tag: "Brand site",
    summary: "A polished marketing site shaped around motion, clarity, and trust.",
  },
  {
    title: "Northline",
    tag: "Product design",
    summary: "Dashboard flows and UI systems designed to make complex work feel calm.",
  },
  {
    title: "Atelier Notes",
    tag: "Portfolio concept",
    summary: "Editorial layouts with quiet interactions and tactile visual rhythm.",
  },
];

const capabilities = [
  "Product-focused websites",
  "Frontend implementation",
  "Motion and interaction design",
  "Design systems and polish",
];

const keyboardKeys = Array.from({ length: 40 }, (_, index) => index);

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

export default function PortfolioLanding() {
  const introRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useEffectEvent(() => {
    const intro = introRef.current;

    if (!intro) {
      return;
    }

    const bounds = intro.getBoundingClientRect();
    const travel = Math.max(intro.offsetHeight - window.innerHeight, 1);
    const scrolled = clamp(-bounds.top, 0, travel);

    setProgress(scrolled / travel);
  });

  useEffect(() => {
    const handleFrame = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateProgress();
      });
    };

    handleFrame();
    window.addEventListener("scroll", handleFrame, { passive: true });
    window.addEventListener("resize", handleFrame);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("scroll", handleFrame);
      window.removeEventListener("resize", handleFrame);
    };
  }, []);

  const eased = easeOutCubic(progress);
  const laptopScale = 0.86 + eased * 1.9;
  const laptopLift = 22 - eased * 34;
  const laptopRotateX = 60 - eased * 60;
  const laptopRotateY = -20 + eased * 20;
  const heroOpacity = clamp(1 - progress * 1.45, 0, 1);
  const infoOpacity = clamp(1 - progress * 1.7, 0, 1);
  const screenShift = 16 - eased * 16;
  const shadowOpacity = clamp(0.28 - progress * 0.15, 0.08, 0.28);

  return (
    <main className="portfolio-shell">
      <section ref={introRef} className="intro-stage">
        <div className="intro-stick">
          <div className="scene-backdrop" aria-hidden="true" />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto flex max-w-6xl flex-col gap-4 px-6 pt-10 md:px-10"
            style={{
              opacity: heroOpacity,
              transform: `translateY(${-progress * 32}px)`,
            }}
          >
            <p
              className="max-w-max rounded-full border border-black/10 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#29433b] shadow-[0_12px_40px_rgba(70,94,79,0.08)] backdrop-blur"
              style={{ letterSpacing: "0.32em" }}
            >
              Matcha Mist Portfolio
            </p>
            <div className="max-w-2xl space-y-4">
              <h1
                className="text-5xl font-semibold tracking-[-0.06em] text-[#11221c] md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A MacBook-on-the-desk landing page that opens into the work.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#40574c] md:text-lg">
                Start with the calm tabletop scene, then scroll forward to zoom
                through the laptop and into the portfolio itself.
              </p>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-8 z-20 mx-auto flex max-w-6xl items-end justify-between px-6 md:bottom-10 md:px-10"
            style={{ opacity: infoOpacity }}
          >
            <div className="hidden rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-[#3d554b] shadow-[0_16px_50px_rgba(70,94,79,0.08)] backdrop-blur md:block">
              Scroll down to move from scene to screen
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white/60 px-5 py-4 shadow-[0_16px_50px_rgba(70,94,79,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#567061]">
                Palette
              </p>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full border border-black/10 bg-[#c2d8c4]" />
                <div>
                  <p className="text-lg font-semibold text-[#14261f]">
                    Matcha Mist
                  </p>
                  <p className="text-sm text-[#496257]">#C2D8C4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="desk-scene" aria-hidden="true">
            <div className="foliage-cluster">
              <span className="leaf leaf-one" />
              <span className="leaf leaf-two" />
              <span className="leaf leaf-three" />
              <span className="leaf leaf-four" />
              <span className="leaf leaf-five" />
            </div>

            <div className="desk-leg desk-leg-left" />
            <div className="desk-leg desk-leg-right" />
            <div className="desk-surface" />

            <div
              className="macbook-wrap"
              style={{
                transform: `translate3d(0, ${laptopLift}vh, 0) rotateX(${laptopRotateX}deg) rotateY(${laptopRotateY}deg) scale(${laptopScale})`,
              }}
            >
              <div className="macbook-screen-shell">
                <div className="macbook-camera" />
                <div className="screen-glare" />
                <div
                  className="macbook-screen"
                  style={{ transform: `translateY(${screenShift}px)` }}
                >
                  <div className="preview-ui">
                    <div className="preview-header">
                      <div className="preview-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="preview-pill">ismail.dev</div>
                    </div>

                    <div className="preview-hero">
                      <p className="preview-kicker">Portfolio</p>
                      <h2>Matcha-tinted interfaces with quiet depth.</h2>
                      <p>
                        Designing thoughtful web experiences that feel crisp,
                        clear, and intentional.
                      </p>
                    </div>

                    <div className="preview-grid">
                      <article>
                        <span>Selected work</span>
                        <strong>Cedar Studio</strong>
                      </article>
                      <article>
                        <span>Capabilities</span>
                        <strong>Design + Build</strong>
                      </article>
                    </div>
                  </div>
                </div>
              </div>

              <div className="macbook-base">
                <div className="keyboard-grid">
                  {keyboardKeys.map((key) => (
                    <span key={key} className="keyboard-key" />
                  ))}
                </div>
                <div className="trackpad" />
              </div>

              <div
                className="macbook-shadow"
                style={{ opacity: shadowOpacity }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-[14vh] px-6 pb-8 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/45 bg-white/70 p-6 shadow-[0_30px_120px_rgba(70,94,79,0.14)] backdrop-blur-xl md:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5a7568]">
                Portfolio website
              </p>
              <h2
                className="text-4xl font-semibold tracking-[-0.05em] text-[#11221c] md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ismail Ahmed
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[#395046] md:text-xl">
                Frontend developer crafting refined interfaces, immersive
                landing pages, and product experiences that feel grounded from
                the first scroll.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[#90a899]/25 bg-[#eff5ef] px-5 py-4">
                <p className="text-sm text-[#577065]">Projects built</p>
                <p className="mt-2 text-3xl font-semibold text-[#11221c]">18</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#90a899]/25 bg-[#eff5ef] px-5 py-4">
                <p className="text-sm text-[#577065]">Years refining UI</p>
                <p className="mt-2 text-3xl font-semibold text-[#11221c]">5</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#90a899]/25 bg-[#eff5ef] px-5 py-4">
                <p className="text-sm text-[#577065]">Based in</p>
                <p className="mt-2 text-3xl font-semibold text-[#11221c]">
                  Maldives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/40 bg-[rgba(246,251,246,0.86)] p-7 shadow-[0_24px_80px_rgba(70,94,79,0.12)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5a7568]">
              About
            </p>
            <h3
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#10201a] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Digital experiences with calm energy and strong structure.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#40564d]">
              I like websites that feel tactile without becoming noisy. My work
              sits between art direction and engineering, shaping interfaces
              with motion, spacing, hierarchy, and performance in mind.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/40 bg-[#153128] p-7 text-white shadow-[0_24px_80px_rgba(38,61,52,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d3e4d4]">
              Capabilities
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-[#eff7ef]"
                >
                  {capability}
                </span>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-[#d8e5db]">
              The goal is simple: make the brand memorable, make the experience
              smooth, and make the implementation feel just as polished as the
              visuals.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-8 md:px-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#5a7568]">
                Selected work
              </p>
              <h3
                className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#10201a] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Projects that balance atmosphere and usability.
              </h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#41584e]">
              A few examples of interfaces built to feel deliberate, visually
              rich, and easy to move through.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-white/45 bg-white/72 shadow-[0_24px_80px_rgba(70,94,79,0.11)] backdrop-blur"
              >
                <div
                  className="h-56 w-full"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(135deg, rgba(194,216,196,0.95), rgba(236,245,236,0.88) 50%, rgba(50,79,67,0.75))"
                        : index === 1
                          ? "linear-gradient(135deg, rgba(225,235,225,0.95), rgba(194,216,196,0.92) 45%, rgba(21,49,40,0.82))"
                          : "linear-gradient(135deg, rgba(238,246,238,0.95), rgba(210,225,211,0.92) 40%, rgba(98,126,112,0.82))",
                  }}
                />
                <div className="space-y-3 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#587166]">
                    {project.tag}
                  </p>
                  <h4 className="text-2xl font-semibold text-[#12231d]">
                    {project.title}
                  </h4>
                  <p className="text-base leading-7 text-[#466056]">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl rounded-[2.25rem] border border-white/45 bg-[#163028] px-7 py-8 text-white shadow-[0_26px_90px_rgba(38,61,52,0.2)] md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d3e4d4]">
                Let&apos;s build
              </p>
              <h3
                className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready for a portfolio or product page with more presence?
              </h3>
            </div>
            <a
              href="mailto:hello@ismail.dev"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#c2d8c4] px-6 text-sm font-semibold text-[#10201a] transition-transform duration-300 hover:-translate-y-0.5"
            >
              hello@ismail.dev
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
