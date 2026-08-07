"use client";

import { githubProfileUrl, mobileApps } from "@/components/portfolio/data";
import { clamp, easeOutCubic } from "@/components/portfolio/utils";

type MobileFrameProps = {
  progress: number;
};

const CARD_SPAN = 0.6 / mobileApps.length;

export default function MobileFrame({ progress }: MobileFrameProps) {
  const clamped = clamp(progress, 0, 1);
  const eased = easeOutCubic(clamped);
  const headerProgress = easeOutCubic(clamp(clamped / 0.3, 0, 1));

  return (
    <div
      className="relative"
      style={{
        width: "min(34rem, 92vw, calc((100dvh - 5rem) * 9 / 19.5))",
        transform: `translate3d(${(1 - eased) * 60}%, 0, 0) rotateY(${(1 - eased) * -16}deg) scale(${0.92 + eased * 0.08})`,
        opacity: 0.12 + eased * 0.88,
        pointerEvents: clamped > 0.85 ? "auto" : "none",
        willChange: "transform, opacity",
      }}
    >
      <div className="relative rounded-[3rem] bg-[linear-gradient(180deg,#1d1d1f_0%,#080809_100%)] p-[12px] shadow-[0_28px_80px_rgba(0,0,0,0.55)] md:rounded-[3.6rem] md:p-[16px]">
        <div className="absolute left-1/2 top-[14px] z-20 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-[#0a0a0b] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] md:top-[18px] md:h-[32px] md:w-[120px]" />

        <div className="relative aspect-[9/19.5] w-full overflow-y-auto overflow-x-hidden rounded-[2.35rem] border border-white/6 bg-[#15181c] md:rounded-[2.85rem]">
          <div className="flex min-h-full flex-col px-5 pb-7 pt-11 md:px-6 md:pb-8 md:pt-14">
            <div
              style={{
                opacity: headerProgress,
                transform: `translate3d(0, ${(1 - headerProgress) * 10}px, 0)`,
              }}
            >
              <h3 className="text-xl font-black tracking-[-0.02em] text-[#f3f8f4] md:text-2xl">
                My Apps
              </h3>
              <p className="mt-1 font-mono text-[0.68rem] text-[#7f9183] md:text-[0.76rem]">
                {mobileApps.length} projects · source &amp; downloads
              </p>
            </div>

            <div className="mt-5 flex-1 space-y-3 md:mt-6">
              {mobileApps.map((app, index) => {
                const start = 0.16 + index * CARD_SPAN;
                const cardEased = easeOutCubic(
                  clamp((clamped - start) / (CARD_SPAN + 0.06), 0, 1),
                );

                return (
                  <div
                    key={app.name}
                    className="rounded-2xl border border-white/6 bg-[#1a1e24] p-3.5 md:rounded-3xl md:p-4"
                    style={{
                      opacity: cardEased,
                      transform: `translate3d(0, ${(1 - cardEased) * 20}px, 0)`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-[0.7rem] font-bold text-[#0b0f0c] md:h-12 md:w-12 md:text-[0.76rem]"
                        style={{ background: app.accent }}
                      >
                        {app.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-[0.92rem] font-bold text-[#f3f8f4] md:text-[1.02rem]">
                          {app.name}
                        </p>
                        <p className="truncate font-mono text-[0.62rem] text-[#7dd97d] md:text-[0.7rem]">
                          {app.tech.join(" · ")}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-[0.74rem] leading-5 text-[#a7b5aa] md:text-[0.8rem]">
                      {app.desc}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        className="flex-1 rounded-full bg-[#7dd97d] px-3 py-2 text-center font-mono text-[0.68rem] font-bold text-[#10241a] transition-colors duration-300 hover:bg-[#93e393] md:text-[0.72rem]"
                      >
                        Download
                      </button>
                      <a
                        href={githubProfileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-full bg-[#23272d] px-3 py-2 text-center font-mono text-[0.68rem] font-bold text-[#e7f1e8] transition-colors duration-300 hover:bg-[#2b3038] md:text-[0.72rem]"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-2 left-1/2 h-[5px] w-[34%] -translate-x-1/2 rounded-full bg-white/25 md:bottom-3 md:h-[6px] md:w-[30%]" />
        </div>
      </div>
    </div>
  );
}
