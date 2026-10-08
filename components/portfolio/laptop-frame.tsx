"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/components/portfolio/data";
import {
  formatTime,
  StatusIcons,
  useCurrentMinute,
} from "@/components/portfolio/phone-status";

const FILES = ["overview.md", "preview.png", "links.json"] as const;
type ProjectFile = (typeof FILES)[number];

const FILE_ICON: Record<ProjectFile, string> = {
  "overview.md": "M↓",
  "preview.png": "▣",
  "links.json": "{}",
};

const str = "text-[#c3e88d]";
const prop = "text-[#89ddff]";
const comment = "text-[#546e7a] italic";

function OverviewFile({ project }: { project: Project }) {
  return (
    <div className="font-mono text-[0.74rem] leading-[1.7] text-[#cfd9d1] md:text-[0.82rem]">
      <p className="text-[1.1em] font-bold text-[#f5fbf6]">
        <span className="text-[#546e7a]"># </span>
        {project.name}
      </p>
      <p className={`mt-1 ${comment}`}>
        {project.year} · {project.status}
      </p>

      <p className="mt-3 max-w-[46rem] font-sans text-[1.05em] leading-[1.6] text-[#d5ddd7]">
        {project.summary}
      </p>

      <p className="mt-4 font-bold text-[#f5fbf6]">
        <span className="text-[#546e7a]">## </span>Highlights
      </p>
      <ul className="mt-1 space-y-0.5">
        {project.highlights.map((item) => (
          <li key={item}>
            <span style={{ color: project.accent }}>- </span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-4 font-bold text-[#f5fbf6]">
        <span className="text-[#546e7a]">## </span>Stack
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/8 bg-[#111418] px-2 py-0.5 text-[#a7b5aa]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function PreviewFile({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative h-full min-h-[8rem] w-full overflow-hidden rounded-lg border border-white/8">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 60rem, 90vw"
        />
      </div>
    );
  }

  // Mock window until a real screenshot is added to the project data.
  return (
    <div className="flex h-full min-h-[8rem] items-center justify-center">
      <div className="w-[min(100%,34rem)] overflow-hidden rounded-lg border border-white/8 bg-[#111418] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-1 border-b border-white/5 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
        <div className="flex aspect-[16/8] flex-col items-center justify-center gap-2 p-4 text-center">
          <span
            className="text-[1.4rem] font-black tracking-[-0.04em] md:text-[2.4rem]"
            style={{ color: project.accent }}
          >
            {project.name}
          </span>
          <span className="font-mono text-[0.55rem] text-[#546e7a] md:text-[0.72rem]">
            screenshot coming soon
          </span>
        </div>
      </div>
    </div>
  );
}

function LinksFile({ project }: { project: Project }) {
  return (
    <div className="font-mono text-[0.74rem] leading-[1.8] break-all text-[#cfd9d1] md:break-normal md:text-[0.82rem]">
      <p>{"{"}</p>
      {project.links.length === 0 ? (
        <p className={`pl-4 ${comment}`}>{"// links coming soon"}</p>
      ) : (
        project.links.map((link, index) => (
          <p key={link.href + link.label} className="pl-4">
            <span className={prop}>&quot;{link.label.toLowerCase()}&quot;</span>
            <span>: </span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${str} underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-current`}
            >
              &quot;{link.href}&quot;
            </a>
            {index < project.links.length - 1 ? "," : null}
          </p>
        ))
      )}
      <p>{"}"}</p>
    </div>
  );
}

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

function PhoneBrowser() {
  const now = useCurrentMinute();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [lastSlug, setLastSlug] = useState(projects[0]?.slug);
  const openProject = projects.find((item) => item.slug === openSlug);

  const open = (slug: string) => {
    setOpenSlug(slug);
    setLastSlug(slug);
  };

  return (
    <div
      className="relative md:hidden"
      style={{ width: "min(21rem, 84vw, calc((100dvh - 6rem) * 9 / 19.5))" }}
    >
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

export default function LaptopFrame() {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const [activeFile, setActiveFile] = useState<ProjectFile>("overview.md");

  const project =
    projects.find((item) => item.slug === activeSlug) ?? projects[0];

  if (!project) {
    return null;
  }

  const openProject = (slug: string) => {
    setActiveSlug(slug);
    setActiveFile("overview.md");
  };

  return (
    <>
      {/* Phones get an iPhone with Safari tabs; the laptop shows from md. */}
      <PhoneBrowser />

      <div className="relative hidden w-[88%] max-w-[73rem] md:block xl:w-full">
        <div className="relative rounded-[1.1rem] bg-[linear-gradient(180deg,#1d1d1f_0%,#080809_100%)] p-[6px] shadow-[0_18px_60px_rgba(0,0,0,0.45)] md:rounded-[2rem] md:p-[10px] md:shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
          <div className="absolute left-1/2 top-[2px] z-20 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] md:top-[7px] md:h-[8px] md:w-[8px]" />

          <div className="overflow-hidden rounded-[0.8rem] border border-white/6 bg-[#111315] md:rounded-[1.55rem]">
            <div className="aspect-[16/10] w-full bg-[#111315]">
              <div className="flex h-full flex-col">
                {/* ── browser tabs: one per project ── */}
                <div
                  className="flex items-end gap-1 overflow-x-auto bg-[#15181c] px-2 pt-2 [mask-image:linear-gradient(90deg,#000_85%,transparent)] [scrollbar-width:none] md:px-3 md:[mask-image:none]"
                  role="tablist"
                  aria-label="Projects"
                >
                  <div className="mb-2 mr-2 flex shrink-0 items-center gap-1.5 self-center md:mr-3 md:gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  {projects.map((item) => {
                    const active = item.slug === project.slug;

                    return (
                      <button
                        key={item.slug}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => openProject(item.slug)}
                        className={`flex shrink-0 items-center gap-2 rounded-t-[0.7rem] px-3 py-2 text-[0.7rem] transition-colors md:px-4 md:text-[0.74rem] ${
                          active
                            ? "bg-[#1e2228] text-[#eff6f0]"
                            : "text-[#7e8a82] hover:bg-white/4 hover:text-[#c9d3cb]"
                        }`}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: item.accent }}
                          aria-hidden
                        />
                        {item.name}
                      </button>
                    );
                  })}
                </div>

                {/* ── address bar ── */}
                <div className="flex items-center gap-2 border-b border-white/5 bg-[#1e2228] px-3 py-1.5 text-[0.66rem] md:px-4 md:py-2 md:text-[0.74rem]">
                  <span className="text-[#546e7a]" aria-hidden>
                    ‹ ›
                  </span>
                  <div className="flex-1 truncate rounded-full border border-white/8 bg-[#111418] px-3 py-1 font-mono text-[#a7b5aa]">
                    <span className="text-[#546e7a]">ismailahmed.dev/</span>
                    projects/{project.slug}/
                    <span className="text-[#eff6f0]">{activeFile}</span>
                  </div>
                </div>

                {/* ── page: file explorer + open file ── */}
                <div className="flex min-h-0 flex-1 flex-col bg-[#1e2228] text-[#edf6ef] lg:grid lg:grid-cols-[0.24fr_1fr]">
                  <aside className="hidden min-h-0 overflow-y-auto border-r border-white/6 bg-[#171a1f] p-4 lg:block">
                    <p className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-[#7f9183] md:text-[0.68rem]">
                      Explorer
                    </p>
                    <p className="mt-2 truncate font-mono text-[0.55rem] text-[#a7b5aa] md:mt-3 md:text-[0.76rem]">
                      ⌄ {project.slug}
                    </p>
                    <div className="mt-1 space-y-0.5 md:space-y-1">
                      {FILES.map((file) => {
                        const active = file === activeFile;

                        return (
                          <button
                            key={file}
                            type="button"
                            onClick={() => setActiveFile(file)}
                            className={`flex w-full items-center gap-1.5 rounded-md border px-1.5 py-1 text-left font-mono text-[0.55rem] transition-colors md:gap-2 md:px-2 md:py-1.5 md:text-[0.76rem] ${
                              active
                                ? "border-[#7dd97d]/20 bg-[#0f1114] text-[#7dd97d]"
                                : "border-transparent text-[#a7b5aa] hover:bg-white/4 hover:text-[#eff6f0]"
                            }`}
                          >
                            <span className="w-4 shrink-0 text-center text-[0.85em] text-[#546e7a]">
                              {FILE_ICON[file]}
                            </span>
                            <span className="truncate">{file}</span>
                          </button>
                        );
                      })}
                    </div>
                  </aside>

                  {/* file tabs replace the explorer below lg */}
                  <div className="flex shrink-0 gap-1 overflow-x-auto border-b border-white/6 bg-[#171a1f] px-2 py-1.5 lg:hidden">
                    {FILES.map((file) => (
                      <button
                        key={file}
                        type="button"
                        onClick={() => setActiveFile(file)}
                        className={`flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-[0.7rem] transition-colors ${
                          file === activeFile
                            ? "bg-[#0f1114] text-[#7dd97d]"
                            : "text-[#a7b5aa]"
                        }`}
                      >
                        <span className="text-[#546e7a]">
                          {FILE_ICON[file]}
                        </span>
                        {file}
                      </button>
                    ))}
                  </div>

                  <div
                    key={`${project.slug}/${activeFile}`}
                    className="min-h-0 flex-1 overflow-y-auto p-4 md:p-7"
                    role="tabpanel"
                  >
                    {activeFile === "overview.md" ? (
                      <OverviewFile project={project} />
                    ) : null}
                    {activeFile === "preview.png" ? (
                      <PreviewFile project={project} />
                    ) : null}
                    {activeFile === "links.json" ? (
                      <LinksFile project={project} />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-[2px] h-[14px] md:-mt-[4px] md:h-[30px] w-[112%] -translate-x-[5.36%] rounded-b-[2rem] bg-[linear-gradient(180deg,#323236_0%,#1a1a1d_45%,#050506_100%)] shadow-[0_24px_36px_rgba(0,0,0,0.5)]" />
        <div className="mx-auto -mt-[12px] h-[10px] w-[27%] rounded-b-[999px] bg-[linear-gradient(180deg,#454549_0%,#232326_100%)] md:-mt-[25px] md:h-[24px]" />

        <div className="pointer-events-none absolute bottom-0 left-[4%] h-[4px] md:h-[7px] w-[10%] rounded-full bg-[#0f0f10]" />
        <div className="pointer-events-none absolute bottom-0 right-[4%] h-[4px] md:h-[7px] w-[10%] rounded-full bg-[#0f0f10]" />
      </div>
    </>
  );
}
