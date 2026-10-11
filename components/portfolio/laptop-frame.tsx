"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { projects, type Project } from "@/components/portfolio/data";
import {
  formatTime,
  PHONE_WIDTH_SMALL,
  StatusIcons,
  useCurrentMinute,
} from "@/components/portfolio/phone-status";

function Favicon({ project }: { project: Project }) {
  return (
    <span
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] text-[0.5rem] font-black text-white"
      style={{ background: project.accent }}
      aria-hidden
    >
      {project.name.charAt(0)}
    </span>
  );
}

// Light-mode web page for one project, shown in the iPhone's Safari.
function ProjectPage({
  project,
  thumbnail = false,
}: {
  project: Project;
  // Tab-overview previews render links as plain text so nothing nests in the card button.
  thumbnail?: boolean;
}) {
  return (
    <article className="min-h-full bg-white pb-8 text-[#18231c]">
      <header className="flex items-center justify-between border-b border-[#e6ece7] px-4 py-3">
        <span className="text-[0.85rem] font-black tracking-[-0.04em] text-[#415348]">
          {"{IS}"}
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#7f9183]">
          Projects
        </span>
      </header>

      <div className="px-4 pt-5">
        <p className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#7f9183]">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: project.accent }}
          />
          {project.year} · {project.status}
        </p>
        <h1 className="mt-1.5 text-[1.55rem] font-black leading-[1.05] tracking-[-0.03em]">
          {project.name}
        </h1>
        <p className="mt-2.5 text-[0.8rem] leading-[1.55] text-[#4b5f51]">
          {project.summary}
        </p>
      </div>

      <div className="mx-4 mt-5 overflow-hidden rounded-2xl border border-[#e6ece7]">
        {project.image ? (
          <div className="relative aspect-[16/10]">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover object-top"
              sizes="20rem"
            />
          </div>
        ) : (
          <div
            className="flex aspect-[16/10] flex-col items-center justify-center gap-1"
            style={{
              background: `linear-gradient(150deg, color-mix(in srgb, ${project.accent} 22%, #fff) 0%, color-mix(in srgb, ${project.accent} 45%, #fff) 100%)`,
            }}
          >
            <span className="text-[1.3rem] font-black tracking-[-0.03em] text-[#18231c]">
              {project.name}
            </span>
            <span className="text-[0.58rem] font-medium text-[#4b5f51]">
              screenshot coming soon
            </span>
          </div>
        )}
      </div>

      <section className="px-4 pt-6">
        <h2 className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#7f9183]">
          Highlights
        </h2>
        <ul className="mt-2.5 space-y-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[0.78rem] leading-[1.5] text-[#24322a]"
            >
              <span
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: project.accent }}
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 pt-6">
        <h2 className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#7f9183]">
          Built with
        </h2>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#eef3ef] px-2.5 py-1 text-[0.66rem] font-medium text-[#415348]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {project.links.length > 0 ? (
        <section className="space-y-2 px-4 pt-6">
          {project.links.map((link, index) => {
            const className = `flex items-center justify-between rounded-xl px-4 py-3 text-[0.78rem] font-semibold transition-opacity active:opacity-80 ${
              index === 0
                ? "bg-[#18231c] text-white"
                : "border border-[#d9e2db] text-[#18231c]"
            }`;
            const content = (
              <>
                {link.label}
                <span aria-hidden>↗</span>
              </>
            );

            return thumbnail ? (
              <span key={link.href + link.label} className={className}>
                {content}
              </span>
            ) : (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          })}
        </section>
      ) : null}
    </article>
  );
}

function TabsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect
        x="1.5"
        y="4.5"
        width="12"
        height="12"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 1.5h8.5a3 3 0 0 1 3 3V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneBrowser() {
  const now = useCurrentMinute();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [lastSlug, setLastSlug] = useState(projects[0]?.slug);
  const openProject = projects.find((item) => item.slug === openSlug);

  const open = (slug: string) => {
    setOpenSlug(slug);
    setLastSlug(slug);
  };

  return (
    <div className="relative" style={{ width: PHONE_WIDTH_SMALL }}>
      <style>{`
        @keyframes safari-open {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .safari-open { animation: safari-open 0.28s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .safari-open { animation: none; }
        }
      `}</style>

      <div className="relative rounded-[2.9rem] bg-[linear-gradient(180deg,#1d1d1f_0%,#080809_100%)] p-[11px] shadow-[0_28px_70px_rgba(24,35,28,0.4)]">
        <div className="absolute left-1/2 top-[18px] z-20 h-[24px] w-[88px] -translate-x-1/2 rounded-full bg-[#0a0a0b]" />

        <div
          className="flex aspect-[9/19.5] w-full flex-col overflow-hidden rounded-[2.3rem] text-[#18231c]"
          style={{
            background: openProject
              ? "#ffffff"
              : "radial-gradient(120% 60% at 15% 0%, #f1f6f2 0%, transparent 60%), radial-gradient(90% 60% at 100% 100%, #d6e4d8 0%, transparent 70%), #e4ede5",
          }}
        >
          {/* status bar */}
          <div
            className={`flex shrink-0 items-center justify-between px-7 pb-2 pt-[18px] text-[0.72rem] font-semibold ${
              openProject ? "border-b border-[#eef1ee] bg-[#f7f9f7]" : ""
            }`}
          >
            <span className="pl-1">{formatTime(now)}</span>
            <StatusIcons />
          </div>

          {openProject ? (
            <>
              <div
                key={openProject.slug}
                className="safari-open min-h-0 flex-1 overflow-y-auto"
              >
                <ProjectPage project={openProject} />
              </div>

              {/* Safari bottom bar: address + toolbar */}
              <div className="shrink-0 border-t border-[#e3e8e4] bg-[#f7f9f7]/95 px-3 pb-6 pt-2 backdrop-blur-md">
                <div className="flex items-center gap-2 rounded-xl bg-[#e8ece9] px-3 py-2 text-[0.66rem]">
                  <span className="font-semibold text-[#4b5f51]" aria-hidden>
                    aA
                  </span>
                  <span className="min-w-0 flex-1 truncate text-center text-[#18231c]">
                    ismailahmed.dev/projects/{openProject.slug}
                  </span>
                  <span className="text-[#4b5f51]" aria-hidden>
                    ↻
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between px-3 text-[#2f6fe4]">
                  <button
                    type="button"
                    onClick={() => setOpenSlug(null)}
                    aria-label="Back to tabs"
                    className="px-1 text-[1.2rem] leading-none"
                  >
                    ‹
                  </button>
                  <span className="text-[0.66rem] font-medium text-[#7f9183]">
                    {openProject.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpenSlug(null)}
                    aria-label="Show all tabs"
                    className="px-1"
                  >
                    <TabsIcon />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* tab overview */}
              <div className="safari-open min-h-0 flex-1 overflow-y-auto px-3 pb-4 pt-3">
                <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                  {projects.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => open(item.slug)}
                      className="group text-left"
                      aria-label={`Open ${item.name}`}
                    >
                      <span
                        className={`relative block aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-[0_6px_18px_rgba(24,35,28,0.14)] transition-transform group-active:scale-95 ${
                          item.slug === lastSlug
                            ? "ring-2 ring-[#2f6fe4] ring-offset-2 ring-offset-[#e4ede5]"
                            : ""
                        }`}
                      >
                        {/* live mini render of the page */}
                        <span
                          className="pointer-events-none absolute left-0 top-0 block w-[250%] origin-top-left scale-[0.4]"
                          aria-hidden
                        >
                          <ProjectPage project={item} thumbnail />
                        </span>
                      </span>
                      <span className="mt-1.5 flex items-center justify-center gap-1.5 px-1">
                        <Favicon project={item} />
                        <span className="truncate text-[0.64rem] font-semibold text-[#24322a]">
                          {item.name}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-between border-t border-[#d6e0d8] bg-[#f4f7f4]/90 px-5 pb-6 pt-3 backdrop-blur-md">
                <span
                  className="w-10 text-[1.2rem] font-light leading-none text-[#2f6fe4]"
                  aria-hidden
                >
                  +
                </span>
                <span className="text-[0.74rem] font-semibold text-[#18231c]">
                  {projects.length} Tabs
                </span>
                <button
                  type="button"
                  onClick={() => lastSlug && open(lastSlug)}
                  className="w-10 text-right text-[0.74rem] font-semibold text-[#2f6fe4]"
                >
                  Done
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SafariIcon({ path }: { path: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

// Dev stack as a terminal session; lines type in one after another per project.
function StackTerminal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const github = project.links.find((link) => link.label === "GitHub");
  const lines: { text: string; tone: "prompt" | "out" | "ok" | "item" }[] = [
    { text: `cd ~/projects/${project.slug}`, tone: "prompt" },
    { text: "stack --list", tone: "prompt" },
    ...project.tech.map((tech) => ({ text: tech, tone: "item" as const })),
    { text: `✓ ${project.tech.length} technologies`, tone: "ok" },
    ...(github
      ? [
          { text: "git remote get-url origin", tone: "prompt" as const },
          { text: github.href.replace("https://", ""), tone: "out" as const },
        ]
      : []),
  ];

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl bg-[#0f1412] shadow-[0_30px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(0,0,0,0.25)]"
      role="dialog"
      aria-label={`Terminal — ${project.name} dev stack`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/6 bg-[#1a201d] px-3.5 py-2.5">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close terminal"
          className="group flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#ff5f57] lg:h-3 lg:w-3"
        >
          <span className="text-[0.5rem] leading-none text-[#4d0000] opacity-0 transition-opacity group-hover:opacity-100">
            ×
          </span>
        </button>
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="flex-1 pr-10 text-center font-mono text-[0.68rem] text-[#7f9183]">
          zsh — {project.slug}
        </span>
      </div>

      <div
        key={project.slug}
        className="min-h-0 flex-1 overflow-y-auto whitespace-pre-wrap break-words px-4 py-3.5 font-mono text-[0.66rem] lg:text-[0.76rem] leading-[1.75] text-[#d6e4d7]"
      >
        {lines.map((line, index) => (
          <p
            key={`${index}-${line.text}`}
            className="terminal-in"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {line.tone === "prompt" ? (
              <>
                <span className="text-[#7fa188]">ismail@macbook</span>{" "}
                <span className="text-[#5a7568]">%</span> {line.text}
              </>
            ) : null}
            {line.tone === "item" ? (
              <>
                <span style={{ color: project.accent }}> ▸ </span>
                {line.text}
              </>
            ) : null}
            {line.tone === "ok" ? (
              <span className="text-[#7dd97d]"> {line.text}</span>
            ) : null}
            {line.tone === "out" ? (
              <span className="text-[#91a693]"> {line.text}</span>
            ) : null}
          </p>
        ))}
        <p
          className="terminal-in"
          style={{ animationDelay: `${lines.length * 90}ms` }}
        >
          <span className="text-[#7fa188]">ismail@macbook</span>{" "}
          <span className="text-[#5a7568]">%</span>{" "}
          <span className="terminal-cursor inline-block h-[1em] w-[0.55em] translate-y-[0.15em] bg-[#c2d8c4]" />
        </p>
      </div>
    </div>
  );
}

// The page each Safari tab shows: overview, what it does and links, beside the stack terminal.
function DesktopProjectPage({
  project,
  onOpenTerminal,
}: {
  project: Project;
  onOpenTerminal: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="grid h-full min-h-0 grid-cols-[1.1fr_1fr] gap-5 overflow-y-auto bg-white px-6 py-5 text-[#18231c] lg:gap-8 lg:px-10 lg:py-8 xl:gap-10 xl:px-12 xl:py-10">
      <div className="page-in min-w-0">
        <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#7f9183]">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: project.accent }}
          />
          {project.year} · {project.status}
        </p>
        <h3 className="mt-2 text-[clamp(1.8rem,2.6vw,2.6rem)] font-black leading-[1.02] tracking-[-0.035em]">
          {project.name}
        </h3>
        <p className="mt-3 max-w-[34rem] text-[0.78rem] leading-[1.6] text-[#4b5f51] lg:text-[0.9rem]">
          {project.summary}
        </p>

        <h4 className="mt-6 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#7f9183]">
          What it does
        </h4>
        <ul className="mt-2.5 space-y-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[0.74rem] leading-[1.5] text-[#24322a] lg:text-[0.84rem]"
            >
              <span
                className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: project.accent }}
              />
              {item}
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.links.map((link, index) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-semibold transition-[transform,background-color] duration-300 hover:-translate-y-0.5 ${
                  index === 0
                    ? "bg-[#18231c] text-white hover:bg-[#2f5139]"
                    : "border border-[#d9e2db] text-[#18231c] hover:bg-[#eef3ef]"
                }`}
              >
                {link.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <div className="page-in min-w-0 self-start [animation-delay:120ms]">
        <div className="rounded-2xl border border-[#e3e8e4] bg-[#f6f8f6] p-5 lg:p-6">
          <h4 className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#7f9183]">
            Dev stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white px-2.5 py-1 font-mono text-[0.66rem] text-[#415348] ring-1 ring-[#e3e8e4] lg:text-[0.72rem]"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onOpenTerminal}
            className="group mt-5 flex w-full items-center justify-between rounded-xl bg-[#0f1412] px-4 py-3 text-left transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,20,18,0.25)]"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1f2723] font-mono text-[0.7rem] font-bold text-[#7dd97d] ring-1 ring-white/10">
                {">_"}
              </span>
              <span>
                <span className="block text-[0.78rem] font-semibold text-white">
                  Open in Terminal
                </span>
                <span className="block font-mono text-[0.62rem] text-[#7f9183]">
                  stack --list
                </span>
              </span>
            </span>
            <span className="text-[#7f9183] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LaptopFrame() {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const [terminal, setTerminal] = useState<{
    origin: string;
    closing: boolean;
  } | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const project =
    projects.find((item) => item.slug === activeSlug) ?? projects[0];

  // The window zooms out of (and back into) whatever opened it, like macOS.
  const openTerminal = (event: MouseEvent<HTMLButtonElement>) => {
    const screen = screenRef.current?.getBoundingClientRect();
    const button = event.currentTarget.getBoundingClientRect();
    const origin = screen
      ? `${button.left + button.width / 2 - screen.left}px ${button.top + button.height / 2 - screen.top}px`
      : "center";
    setTerminal({ origin, closing: false });
  };

  const closeTerminal = () => {
    setTerminal((current) => (current ? { ...current, closing: true } : null));
  };

  useEffect(() => {
    if (!terminal || terminal.closing) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTerminal((current) =>
          current ? { ...current, closing: true } : null,
        );
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [terminal]);

  if (!project) {
    return null;
  }

  return (
    <div className="relative w-[88%] max-w-[73rem] xl:w-full">
      <style>{`
        @keyframes page-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes terminal-in {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes mac-window-in {
          from { opacity: 0; transform: scale(0.06); }
          60%  { opacity: 1; }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes mac-window-out {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.06); }
        }
        .mac-window-in { animation: mac-window-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .mac-window-out { animation: mac-window-out 0.32s cubic-bezier(0.55, 0, 0.75, 0.2) both; }
        .page-in { animation: page-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .terminal-in { animation: terminal-in 0.35s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .page-in, .terminal-in, .mac-window-in, .mac-window-out { animation-duration: 1ms; }
        }
      `}</style>

      <div className="relative rounded-[2rem] bg-[linear-gradient(180deg,#1d1d1f_0%,#080809_100%)] p-[10px] shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
        <div className="absolute left-1/2 top-[7px] z-20 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />

        <div
          ref={screenRef}
          className="relative overflow-hidden rounded-[1.55rem] border border-white/6 bg-white"
        >
          <div className="flex aspect-[16/10] w-full flex-col">
            {/* ── Safari toolbar ── */}
            <div className="flex shrink-0 items-center gap-4 border-b border-[#e3e6e4] bg-[#f6f7f6] px-4 py-2.5 text-[#6b7a70]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-3">
                <SafariIcon path="M2.5 3.5h11v9h-11zM6 3.5v9" />
                <SafariIcon path="M10 3 5 8l5 5" />
                <span className="opacity-40">
                  <SafariIcon path="m6 3 5 5-5 5" />
                </span>
              </div>
              <div className="mx-auto flex w-[min(30rem,48%)] items-center justify-center gap-1.5 rounded-lg bg-[#e9ecea] px-3 py-1.5 text-[0.74rem] text-[#18231c]">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="currentColor"
                  className="opacity-50"
                  aria-hidden
                >
                  <path d="M2 5V3.5a3 3 0 0 1 6 0V5h.5A1.5 1.5 0 0 1 10 6.5v4A1.5 1.5 0 0 1 8.5 12h-7A1.5 1.5 0 0 1 0 10.5v-4A1.5 1.5 0 0 1 1.5 5H2zm1.5 0h3V3.5a1.5 1.5 0 0 0-3 0V5z" />
                </svg>
                <span className="truncate">
                  ismailahmed.dev/projects/{project.slug}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <SafariIcon path="M8 2v8M5 5l3-3 3 3M3.5 8.5v4h9v-4" />
                <SafariIcon path="M8 3v10M3 8h10" />
                <SafariIcon path="M4.5 2.5h9v9M2.5 4.5h9v9h-9z" />
              </div>
            </div>

            {/* ── tab bar: one tab per project ── */}
            <div
              className="flex shrink-0 gap-px border-b border-[#e3e6e4] bg-[#eceeed] px-2 pt-1.5"
              role="tablist"
              aria-label="Projects"
            >
              {projects.map((item) => {
                const active = item.slug === project.slug;

                return (
                  <button
                    key={item.slug}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveSlug(item.slug)}
                    className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-t-lg px-3 py-1.5 text-[0.74rem] transition-colors duration-200 ${
                      active
                        ? "bg-white font-medium text-[#18231c] shadow-[0_-1px_0_rgba(0,0,0,0.04)]"
                        : "text-[#6b7a70] hover:bg-white/60 hover:text-[#18231c]"
                    }`}
                  >
                    <Favicon project={item} />
                    <span className="truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>

            <div key={project.slug} className="min-h-0 flex-1" role="tabpanel">
              <DesktopProjectPage
                project={project}
                onOpenTerminal={openTerminal}
              />
            </div>
          </div>

          {terminal ? (
            <div
              className={`pointer-events-none absolute inset-0 z-30 ${terminal.closing ? "mac-window-out" : "mac-window-in"}`}
              style={{ transformOrigin: terminal.origin }}
              onAnimationEnd={(event) => {
                if (event.animationName === "mac-window-out") {
                  setTerminal(null);
                }
              }}
            >
              <div className="pointer-events-auto absolute right-[5%] top-[17%] h-[70%] w-[52%]">
                <StackTerminal project={project} onClose={closeTerminal} />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mx-auto -mt-[4px] h-[30px] w-[112%] -translate-x-[5.36%] rounded-b-[2rem] bg-[linear-gradient(180deg,#323236_0%,#1a1a1d_45%,#050506_100%)] shadow-[0_24px_36px_rgba(0,0,0,0.5)]" />
      <div className="mx-auto -mt-[25px] h-[24px] w-[27%] rounded-b-[999px] bg-[linear-gradient(180deg,#454549_0%,#232326_100%)]" />

      <div className="pointer-events-none absolute bottom-0 left-[4%] h-[7px] w-[10%] rounded-full bg-[#0f0f10]" />
      <div className="pointer-events-none absolute bottom-0 right-[4%] h-[7px] w-[10%] rounded-full bg-[#0f0f10]" />
    </div>
  );
}
