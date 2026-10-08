"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import {
  githubProfileUrl,
  mobileApps,
  terminalContacts,
  type MobileApp,
} from "@/components/portfolio/data";
import {
  formatTime,
  PHONE_WIDTH_SMALL,
  StatusIcons,
  useCurrentMinute,
} from "@/components/portfolio/phone-status";
import { clamp, easeOutCubic } from "@/components/portfolio/utils";

type MobileFrameProps = {
  progress: number;
};

const WALLPAPER =
  "radial-gradient(120% 70% at 20% 10%, #a2b7a5 0%, transparent 60%), radial-gradient(100% 60% at 90% 90%, #2f5139 0%, transparent 65%), linear-gradient(170deg, #68806e 0%, #415348 55%, #18231c 100%)";

const APP_TABS = ["Overview", "Preview", "Links"] as const;
type AppTab = (typeof APP_TABS)[number];

const TAB_ICON: Record<AppTab, string> = {
  Overview: "◎",
  Preview: "▣",
  Links: "↗",
};

function subscribeToWide(onChange: () => void) {
  const query = window.matchMedia("(min-width: 768px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

// Phones skip the sideways slide-in so no half-phone hangs off screen.
function useIsWide() {
  return useSyncExternalStore(
    subscribeToWide,
    () => window.matchMedia("(min-width: 768px)").matches,
    () => true,
  );
}

const email = terminalContacts.find((contact) => contact.command === "email");

const DOCK = [
  { label: "Mail", glyph: "✉", href: email?.href ?? "#contact", bg: "#3b82f6" },
  { label: "GitHub", glyph: "⌥", href: githubProfileUrl, bg: "#24292f" },
  {
    label: "Resume",
    glyph: "❏",
    href: "/resume.pdf",
    bg: "#e8eee9",
    fg: "#18231c",
  },
] as const;

function AppIcon({ app, size }: { app: MobileApp; size: "sm" | "lg" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center font-mono font-bold text-[#0b0f0c] shadow-[0_6px_14px_rgba(0,0,0,0.35)] ${
        size === "lg"
          ? "h-12 w-12 rounded-[0.9rem] text-[0.8rem]"
          : "aspect-square w-[min(3.25rem,100%)] rounded-[28%] text-[0.78rem] md:w-14"
      }`}
      style={{
        background: `linear-gradient(150deg, ${app.accent} 0%, color-mix(in srgb, ${app.accent} 70%, #000) 100%)`,
      }}
      aria-hidden
    >
      {app.initials}
    </span>
  );
}

function HomeScreen({
  now,
  onOpen,
}: {
  now: Date | null;
  onOpen: (slug: string) => void;
}) {
  const date = now
    ? now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "\u00a0";

  return (
    <div className="phone-screen-in flex h-full flex-col px-5 pb-6 md:px-6 md:pb-7">
      {/* clock widget */}
      <div className="mt-2 text-center text-white">
        <p className="text-[0.8rem] font-semibold opacity-85 md:text-[0.9rem]">
          {date}
        </p>
        <p className="text-[4.2rem] font-bold leading-none tracking-[-0.04em] md:text-[5rem]">
          {formatTime(now)}
        </p>
      </div>

      {/* app grid */}
      <div className="mt-8 grid grid-cols-4 gap-x-2 gap-y-5">
        {mobileApps.map((app) => (
          <button
            key={app.slug}
            type="button"
            onClick={() => onOpen(app.slug)}
            className="group flex flex-col items-center gap-1.5"
          >
            <span className="flex w-full justify-center transition-transform duration-200 group-hover:-translate-y-0.5 group-active:scale-90">
              <AppIcon app={app} size="sm" />
            </span>
            <span className="w-full truncate text-center text-[0.56rem] font-medium tracking-[-0.01em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-[0.68rem]">
              {app.name}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto">
        {/* page dots */}
        <div className="mb-3 flex justify-center gap-1.5" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>

        {/* dock */}
        <div className="flex justify-around rounded-[1.6rem] bg-white/20 px-3 py-3 backdrop-blur-md">
          {DOCK.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={
                item.href.startsWith("http") || item.href.endsWith(".pdf")
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-[1rem] text-[1.35rem] shadow-[0_6px_14px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-90 md:h-14 md:w-14"
              style={{
                background: item.bg,
                color: "fg" in item ? item.fg : "#fff",
              }}
            >
              {item.glyph}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function OverviewTab({ app }: { app: MobileApp }) {
  return (
    <>
      <p className="text-[0.82rem] leading-[1.6] text-[#d5ddd7] md:text-[0.9rem]">
        {app.summary}
      </p>

      <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[#7f9183]">
        Highlights
      </p>
      <ul className="mt-2 space-y-2">
        {app.highlights.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 rounded-xl bg-[#1a1e24] px-3 py-2.5 text-[0.76rem] text-[#e7f1e8] md:text-[0.82rem]"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: app.accent }}
            />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[#7f9183]">
        Built with
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {app.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/8 bg-[#111418] px-2.5 py-1 font-mono text-[0.62rem] text-[#a7b5aa]"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

function PreviewTab({ app }: { app: MobileApp }) {
  if (app.image) {
    return (
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/8">
        <Image
          src={app.image}
          alt={`${app.name} screenshot`}
          fill
          className="object-cover object-top"
          sizes="20rem"
        />
      </div>
    );
  }

  // Mock screen until a real screenshot is added to the app data.
  return (
    <div className="flex aspect-[9/14] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-white/8 bg-[#111418]">
      <AppIcon app={app} size="lg" />
      <span className="font-mono text-[0.62rem] text-[#546e7a]">
        screenshot coming soon
      </span>
    </div>
  );
}

function LinksTab({ app }: { app: MobileApp }) {
  if (app.links.length === 0) {
    return (
      <p className="font-mono text-[0.7rem] text-[#546e7a]">
        Links coming soon.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {app.links.map((link) => (
        <a
          key={link.href + link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl bg-[#1a1e24] px-3.5 py-3 text-[0.8rem] font-semibold text-[#e7f1e8] transition-colors hover:bg-[#222831]"
        >
          {link.label}
          <span style={{ color: app.accent }}>↗</span>
        </a>
      ))}
    </div>
  );
}

function AppScreen({
  app,
  tab,
  onTab,
  onBack,
}: {
  app: MobileApp;
  tab: AppTab;
  onTab: (tab: AppTab) => void;
  onBack: () => void;
}) {
  return (
    <div className="phone-screen-in flex h-full flex-col">
      <div className="px-5 md:px-6">
        <button
          type="button"
          onClick={onBack}
          className="font-mono text-[0.72rem] text-[#7dd97d] transition-colors hover:text-[#a6eba6]"
        >
          ‹ Apps
        </button>

        <div className="mt-3 flex items-center gap-3">
          <AppIcon app={app} size="lg" />
          <div className="min-w-0">
            <p className="truncate text-[1.05rem] font-black tracking-[-0.01em] text-[#f3f8f4]">
              {app.name}
            </p>
            <p className="truncate font-mono text-[0.62rem] text-[#7f9183]">
              {app.platforms.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div
        key={tab}
        className="phone-screen-in mt-4 min-h-0 flex-1 overflow-y-auto px-5 pb-4 md:px-6"
        role="tabpanel"
      >
        {tab === "Overview" ? <OverviewTab app={app} /> : null}
        {tab === "Preview" ? <PreviewTab app={app} /> : null}
        {tab === "Links" ? <LinksTab app={app} /> : null}
      </div>

      {/* bottom tab bar */}
      <div
        className="grid grid-cols-3 border-t border-white/6 bg-[#111418]/90 px-2 pb-6 pt-2 md:pb-7"
        role="tablist"
      >
        {APP_TABS.map((item) => {
          const active = item === tab;

          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onTab(item)}
              className={`flex flex-col items-center gap-0.5 py-1 text-[0.6rem] font-semibold transition-colors ${
                active ? "" : "text-[#6b7a70] hover:text-[#c9d3cb]"
              }`}
              style={active ? { color: app.accent } : undefined}
            >
              <span className="text-[0.95rem] leading-none">
                {TAB_ICON[item]}
              </span>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function MobileFrame({ progress }: MobileFrameProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [tab, setTab] = useState<AppTab>("Overview");
  const now = useCurrentMinute();
  const wide = useIsWide();

  const clamped = clamp(progress, 0, 1);
  const eased = easeOutCubic(clamped);
  const openApp = mobileApps.find((app) => app.slug === openSlug);

  return (
    <div
      className="relative"
      style={{
        width: wide
          ? "min(34rem, 78vw, calc((100dvh - 5rem) * 9 / 19.5))"
          : PHONE_WIDTH_SMALL,
        transform: wide
          ? `translate3d(${(1 - eased) * 60}%, 0, 0) rotateY(${(1 - eased) * -16}deg) scale(${0.92 + eased * 0.08})`
          : `translate3d(0, ${(1 - eased) * 8}%, 0) scale(${0.94 + eased * 0.06})`,
        opacity: 0.12 + eased * 0.88,
        pointerEvents: clamped > 0.85 ? "auto" : "none",
        willChange: "transform, opacity",
      }}
    >
      <style>{`
        @keyframes phone-screen-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .phone-screen-in { animation: phone-screen-in 0.28s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .phone-screen-in { animation: none; }
        }
      `}</style>

      <div className="relative rounded-[3rem] bg-[linear-gradient(180deg,#1d1d1f_0%,#080809_100%)] p-[12px] shadow-[0_28px_80px_rgba(0,0,0,0.55)] md:rounded-[3.6rem] md:p-[16px]">
        <div className="absolute left-1/2 top-[14px] z-20 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-[#0a0a0b] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] md:top-[18px] md:h-[32px] md:w-[120px]" />

        <div
          className="relative flex aspect-[9/19.5] w-full flex-col overflow-hidden rounded-[2.35rem] border border-white/6 transition-[background] duration-300 md:rounded-[2.85rem]"
          style={{ background: openApp ? "#15181c" : WALLPAPER }}
        >
          {/* status bar */}
          <div className="flex shrink-0 items-center justify-between px-7 pb-4 pt-4 text-[0.72rem] font-semibold text-white md:pt-5 md:text-[0.8rem]">
            <span className="pl-2">{formatTime(now)}</span>
            <StatusIcons />
          </div>

          <div className="min-h-0 flex-1 pt-2">
            {openApp ? (
              <AppScreen
                key={openApp.slug}
                app={openApp}
                tab={tab}
                onTab={setTab}
                onBack={() => setOpenSlug(null)}
              />
            ) : (
              <HomeScreen
                now={now}
                onOpen={(slug) => {
                  setOpenSlug(slug);
                  setTab("Overview");
                }}
              />
            )}
          </div>

          {/* home indicator doubles as a "go home" gesture */}
          <button
            type="button"
            aria-label="Go to home screen"
            onClick={() => setOpenSlug(null)}
            className="absolute bottom-1 left-1/2 flex h-4 w-[34%] -translate-x-1/2 items-center md:bottom-2 md:w-[30%]"
          >
            <span className="h-[5px] w-full rounded-full bg-white/25 md:h-[6px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
