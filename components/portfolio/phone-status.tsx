"use client";

import { useSyncExternalStore } from "react";

// Current minute as a stable snapshot; null on the server so hydration matches.
function subscribeToMinute(onChange: () => void) {
  const id = window.setInterval(onChange, 5000);
  return () => window.clearInterval(id);
}

export function useCurrentMinute() {
  const minute = useSyncExternalStore(
    subscribeToMinute,
    () => Math.floor(Date.now() / 60000),
    () => null,
  );

  return minute === null ? null : new Date(minute * 60000);
}

export function formatTime(date: Date | null) {
  if (!date) {
    return "9:41";
  }

  const hours = date.getHours() % 12 || 12;
  return `${hours}:${String(date.getMinutes()).padStart(2, "0")}`;
}

export function StatusIcons() {
  return (
    <span className="flex items-center gap-1" aria-hidden>
      <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
        <rect x="0" y="7" width="3" height="4" rx="0.8" />
        <rect x="4.5" y="5" width="3" height="6" rx="0.8" />
        <rect x="9" y="2.5" width="3" height="8.5" rx="0.8" />
        <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
      </svg>
      <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
        <path d="M7.5 2.2c2.1 0 4 .8 5.5 2.1l1.2-1.3A9.7 9.7 0 0 0 7.5.4 9.7 9.7 0 0 0 .8 3l1.2 1.3a8 8 0 0 1 5.5-2.1z" />
        <path d="M7.5 5.4c1.2 0 2.3.4 3.2 1.2l1.2-1.3a6.6 6.6 0 0 0-8.8 0l1.2 1.3c.9-.8 2-1.2 3.2-1.2z" />
        <circle cx="7.5" cy="9.3" r="1.6" />
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect
          x="0.5"
          y="0.5"
          width="21"
          height="11"
          rx="3.2"
          stroke="currentColor"
          opacity="0.45"
        />
        <rect x="2" y="2" width="15" height="8" rx="2" fill="currentColor" />
        <path
          d="M23 4v4c.8-.3 1.3-1.1 1.3-2S23.8 4.3 23 4z"
          fill="currentColor"
          opacity="0.45"
        />
      </svg>
    </span>
  );
}

// Shared iPhone width on small screens, so phones shown side by side match.
export const PHONE_WIDTH_SMALL =
  "min(20rem, 74vw, calc((100svh - 13rem) * 9 / 19.5))";
