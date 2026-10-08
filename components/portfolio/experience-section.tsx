"use client";

import { useId, useRef, useState, type CSSProperties } from "react";

type Job = {
  number: string;
  company: string;
  role: string;
  period: string;
  tagline: string;
  code: string;
  tilt: number;
  heading: string;
  summary: string;
};

// Ordered newest first.
const JOBS: Job[] = [
  {
    number: "001",
    company: "StatePharma",
    role: "Software Engineer",
    period: "July-2026 — Present",
    tagline:
      "Strengthening the supply of medicines, medical consumables and medical equipment across the country.",
    code: "SP-001-DEV",
    tilt: -3,
    heading: "Building pharmacy logistics software",
    summary:
      "Developing internal tools and logistics software at StatePharma, improving inventory tracking and distribution across regional pharmacies.",
  },
  {
    number: "002",
    company: "Loopcraft",
    role: "Core Developer",
    period: "June-2025 — July-2026",
    tagline: "Build tools for a brighter tomorrow.",
    code: "LC-002-DEV",
    tilt: -4,
    heading: "Architected core systems",
    summary:
      "Worked on the core architecture and developer tooling at Loop Craft, helping shape scalable systems used by thousands of creators.",
  },
  {
    number: "003",
    company: "Freelance",
    role: "Creative Developer",
    period: "2026 — Present",
    tagline: "Ideas into real things.",
    code: "FR-003-DEV",
    tilt: -4,
    heading: "Shipped client apps end-to-end",
    summary:
      "Partnered with startups and individuals to design, build, and ship custom web and mobile applications from concept to launch.",
  },
  {
    number: "004",
    company: "NCIT",
    role: "Administrative Officer",
    period: "Jan-2023 — June-2025",
    tagline: "Keeping national digital services running.",
    code: "NC-004-SUP",
    tilt: -3,
    heading: "Supported national digital services",
    summary:
      "Helpdesk support at the National Centre for Information Technology for eFaas (the Maldives National Digital Identity), the Government eLetter Management System and the National Computer Network — resolving user issues, face verification and account recovery.",
  },
];

// Fine cross-hatch that reads as woven lanyard fabric.
const WEAVE =
  "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 3px), repeating-linear-gradient(90deg,rgba(0,0,0,0.2) 0px,rgba(0,0,0,0.2) 1px,transparent 1px,transparent 4px)";

function LobsterClip() {
  // Unique per clip: a shared id would resolve to a copy hidden by the other breakpoint.
  const metal = `clip-metal-${useId()}`;

  return (
    <svg
      width="23"
      height="48"
      viewBox="0 0 30 62"
      className="relative z-[2] -mt-1 drop-shadow-[0_3px_4px_rgba(0,0,0,0.35)]"
      aria-hidden
    >
      <defs>
        <linearGradient id={metal} x1="0" x2="1">
          <stop offset="0" stopColor="#5c615d" />
          <stop offset="0.35" stopColor="#e6eae6" />
          <stop offset="0.6" stopColor="#a3a9a4" />
          <stop offset="1" stopColor="#4a4f4b" />
        </linearGradient>
      </defs>
      {/* strap ring */}
      <rect
        x="4"
        y="2"
        width="22"
        height="9"
        rx="4.5"
        fill="none"
        stroke={`url(#${metal})`}
        strokeWidth="3"
      />
      {/* swivel */}
      <rect
        x="11"
        y="10"
        width="8"
        height="10"
        rx="2"
        fill={`url(#${metal})`}
      />
      {/* clasp body */}
      <path
        d="M15 20c-6 0-9 5-9 12 0 8 4 15 9 15s9-7 9-15c0-7-3-12-9-12z"
        fill="none"
        stroke={`url(#${metal})`}
        strokeWidth="3.5"
      />
      {/* trigger */}
      <rect
        x="20"
        y="27"
        width="5"
        height="9"
        rx="1.5"
        fill={`url(#${metal})`}
      />
      {/* bottom ring through the badge slot */}
      <ellipse
        cx="15"
        cy="53"
        rx="6"
        ry="6"
        fill="none"
        stroke={`url(#${metal})`}
        strokeWidth="3"
      />
    </svg>
  );
}

function Barcode() {
  return (
    <div className="flex h-6 w-[78%] items-stretch gap-[1.5px]" aria-hidden>
      {Array.from({ length: 34 }).map((_, i) => (
        <span
          key={i}
          className="block bg-[#d9e4da]"
          style={{ width: `${1 + ((i * 7 + 3) % 3)}px` }}
        />
      ))}
    </div>
  );
}

function StaffBadge({ job }: { job: Job }) {
  return (
    <div
      className="badge-sway flex flex-col items-center"
      style={{ "--tilt": `${job.tilt}deg` } as CSSProperties}
    >
      {/* lanyard strap */}
      <div
        className="h-14 w-[26px] md:h-16"
        style={{
          background: `${WEAVE}, linear-gradient(90deg,#141a16 0%,#26302a 30%,#222b25 70%,#101511 100%)`,
          boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
        }}
        aria-hidden
      />
      <LobsterClip />

      {/* badge */}
      <article className="relative -mt-3 w-[min(70vw,224px)] rounded-[11px] bg-[#1e2b23] px-4 pb-4 pt-3 text-[#e3ece4] shadow-[0_28px_60px_rgba(24,35,28,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div
          className="mx-auto h-[8px] w-[34px] rounded-full bg-[#c2d8c4] shadow-[inset_0_2px_3px_rgba(0,0,0,0.35)]"
          aria-hidden
        />
        <div className="mt-1 flex items-center justify-between font-mono text-[0.55rem] tracking-[0.1em] text-[#a9bcac]">
          <span>{job.period}</span>
          <span>{job.number}</span>
        </div>

        <h3 className="mt-3 font-mono text-[1.1rem] font-bold uppercase leading-none tracking-[0.02em]">
          {job.company}
        </h3>
        <p className="mt-1.5 font-mono text-[0.68rem] text-[#c6d4c8]">
          — {job.role}
        </p>

        <div className="mt-4 flex gap-3">
          {/* photo placeholder — swap for a real image when ready */}
          <div
            className="aspect-[4/5] w-[58%] shrink-0 rounded-[3px] bg-[linear-gradient(160deg,#d6dbd6_0%,#8c948e_55%,#3f4641_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
            aria-hidden
          />
          <p className="pt-4 font-mono text-[0.5rem] uppercase leading-[1.55] tracking-[0.08em] text-[#b7c7ba]">
            {job.tagline}
          </p>
        </div>

        <div className="mt-4">
          <Barcode />
          <p className="mt-1.5 font-mono text-[0.52rem] tracking-[0.12em] text-[#a9bcac]">
            {job.code}
          </p>
        </div>
      </article>
    </div>
  );
}

// On phones, current and past roles each get a swipeable carousel.
const CURRENT_JOBS = JOBS.filter((job) => job.period.includes("Present"));
const PAST_JOBS = JOBS.filter((job) => !job.period.includes("Present"));

function JobDetails({ job }: { job: Job }) {
  return (
    <>
      <p className="mt-10 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#5a7568]">
        {job.period}
      </p>
      <h3 className="mt-1.5 text-[1.1rem] font-bold tracking-[-0.02em] text-[#18231c]">
        {job.heading}
      </h3>
      <p className="mt-2.5 max-w-[26rem] text-[0.9rem] leading-[1.6] text-[#5a7568]">
        {job.summary}
      </p>
    </>
  );
}

function JobsCarousel({ jobs }: { jobs: Job[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;

    if (!track || !first) {
      return;
    }

    const step = first.offsetWidth + 16;
    setActive(Math.min(jobs.length - 1, Math.round(track.scrollLeft / step)));
  };

  const goTo = (index: number) => {
    const card = trackRef.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({
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
        {jobs.map((job, index) => (
          <div
            key={job.code}
            className={`w-[78%] shrink-0 snap-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === active ? "opacity-100" : "scale-[0.94] opacity-45"
            }`}
            aria-hidden={index !== active}
          >
            <div className="flex justify-center">
              <StaffBadge job={job} />
            </div>
            <JobDetails job={job} />
          </div>
        ))}
      </div>

      {/* switcher: pills slide the carousel; swiping updates them */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {jobs.map((job, index) => (
          <button
            key={job.code}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show ${job.company}`}
            aria-current={index === active}
            className={`flex h-8 items-center rounded-full px-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] transition-all duration-500 ${
              index === active
                ? "bg-[#18231c] text-[#eef5ef]"
                : "bg-[#18231c]/8 text-[#5a7568]"
            }`}
          >
            {job.company}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-5 py-12 md:px-8 md:py-16 lg:px-10"
    >
      <style>{`
        .badge-sway {
          transform-origin: top center;
          transform: rotate(var(--tilt));
          animation: badge-sway 6s ease-in-out infinite alternate;
        }
        @keyframes badge-sway {
          from { transform: rotate(calc(var(--tilt) - 1.2deg)); }
          to   { transform: rotate(calc(var(--tilt) + 1.2deg)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .badge-sway { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-[72rem]">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-black leading-none tracking-[-0.04em] text-[#18231c]">
            Where I&rsquo;ve Worked
          </h2>
          <p className="hidden text-right font-mono text-[0.65rem] uppercase leading-[1.7] tracking-[0.1em] text-[#5a7568] md:block">
            Different problems.
            <br />
            Same curiosity.
          </p>
        </div>

        {/* phones: current roles carousel, past roles below */}
        <div className="mt-2 md:hidden">
          <JobsCarousel jobs={CURRENT_JOBS} />

          {PAST_JOBS.length > 0 ? (
            <div className="mt-16">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#5a7568]">
                Previously
              </p>
              <div className="mt-2">
                <JobsCarousel jobs={PAST_JOBS} />
              </div>
            </div>
          ) : null}
        </div>

        {/* tablet and up: all roles side by side */}
        <div className="mt-2 hidden gap-y-16 md:grid md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#5a7568]/20">
          {JOBS.map((job) => (
            <div
              key={job.code}
              className="flex flex-col md:px-6 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex justify-center">
                <StaffBadge job={job} />
              </div>
              <JobDetails job={job} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
