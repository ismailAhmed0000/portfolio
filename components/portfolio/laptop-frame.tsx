"use client";

import { useState } from "react";
import { screenPages } from "@/components/portfolio/data";
import IntroPage from "@/components/portfolio/laptop/intro-page";
import ProjectsPage from "@/components/portfolio/laptop/projects-page";
import StackPage from "@/components/portfolio/laptop/stack-page";

const pages = [IntroPage, StackPage, ProjectsPage];
const tabLabels = ["intro.tsx", "stack.json", "projects.md"];

export default function LaptopFrame() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full max-w-[73rem]">
      <div className="relative rounded-[2rem] bg-[linear-gradient(180deg,#1d1d1f_0%,#080809_100%)] p-[10px] shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
        <div className="absolute left-1/2 top-[7px] z-20 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />

        <div className="overflow-hidden rounded-[1.55rem] border border-white/6 bg-[#111315]">
          <div className="aspect-[16/10] w-full bg-[#111315]">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/5 bg-[#181b1f] px-3 py-2 text-[0.62rem] text-[#a9b6ab] md:px-5 md:py-3 md:text-[0.78rem]">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="rounded-full border border-white/8 bg-white/4 px-3 py-1 text-[#d5ddd7]">
                  ismailahmed.dev
                </div>
              </div>

              <div className="flex items-center gap-1 border-b border-white/5 bg-[#15181c] px-2 pt-2 md:px-3">
                {tabLabels.map((label, index) => (
                  <div
                    key={label}
                    className={`rounded-t-[0.9rem] border border-b-0 px-3 py-2 font-mono text-[0.58rem] md:px-4 md:text-[0.72rem] ${
                      activeIndex === index
                        ? "border-white/8 bg-[#1e2228] text-[#eff6f0]"
                        : "border-transparent bg-transparent text-[#7e8a82]"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="relative min-h-0 flex-1 overflow-hidden bg-[#1e2228]">
                <div className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-1.5 md:right-4 md:gap-2">
                  {screenPages.map((page, index) => (
                    <span
                      key={page}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-6 bg-[#7dd97d]"
                          : "w-2 bg-[#456253]"
                      }`}
                    />
                  ))}
                </div>

                <div
                  className="laptop-scroll h-full snap-y snap-mandatory overflow-y-auto overscroll-contain scroll-smooth"
                  onScroll={(event) => {
                    const viewportHeight = event.currentTarget.clientHeight;

                    if (viewportHeight === 0) {
                      return;
                    }

                    const nextIndex = Math.round(
                      event.currentTarget.scrollTop / viewportHeight,
                    );

                    setActiveIndex(
                      Math.max(0, Math.min(screenPages.length - 1, nextIndex)),
                    );
                  }}
                >
                  {pages.map((PageComponent, index) => (
                    <div key={screenPages[index]} className="min-h-full snap-start">
                      <PageComponent />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-[4px] h-[30px] w-[112%] -translate-x-[5.36%] rounded-b-[2rem] bg-[linear-gradient(180deg,#323236_0%,#1a1a1d_45%,#050506_100%)] shadow-[0_24px_36px_rgba(0,0,0,0.5)]" />
      <div className="mx-auto -mt-[25px] h-[24px] w-[27%] rounded-b-[999px] bg-[linear-gradient(180deg,#454549_0%,#232326_100%)]" />

      <div className="pointer-events-none absolute bottom-0 left-[4%] h-[7px] w-[10%] rounded-full bg-[#0f0f10]" />
      <div className="pointer-events-none absolute bottom-0 right-[4%] h-[7px] w-[10%] rounded-full bg-[#0f0f10]" />
    </div>
  );
}
