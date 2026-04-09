"use client";

import { useState } from "react";
import { screenPages } from "@/components/portfolio/data";
import IntroPage from "@/components/portfolio/laptop/intro-page";
import ProjectsPage from "@/components/portfolio/laptop/projects-page";
import StackPage from "@/components/portfolio/laptop/stack-page";

const pages = [IntroPage, StackPage, ProjectsPage];

export default function LaptopFrame() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full max-w-5xl">
      <div className="relative rounded-[2rem] bg-[linear-gradient(180deg,#1d1d1f_0%,#080809_100%)] p-[10px] shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
        <div className="absolute left-1/2 top-[7px] z-20 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />

        <div className="overflow-hidden rounded-[1.55rem] border border-white/6 bg-[#dce8dd]">
          <div className="aspect-[16/10] w-full bg-[linear-gradient(180deg,#eff5ef_0%,#d8e4d8_100%)]">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-[#6b816f]/12 bg-[#edf4ed]/85 px-3 py-2 text-[0.58rem] text-[#53675b] md:px-5 md:py-3 md:text-[0.72rem]">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7f9783]" />
                  <span className="h-2 w-2 rounded-full bg-[#a6b8a8]" />
                  <span className="h-2 w-2 rounded-full bg-[#d0ddd1]" />
                </div>
                <div className="rounded-full border border-[#6b816f]/12 bg-white/55 px-3 py-1 text-[#42564a]">
                  ismailahmed.dev
                </div>
              </div>

              <div className="relative min-h-0 flex-1 overflow-hidden">
                <div className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-1.5 md:right-4 md:gap-2">
                  {screenPages.map((page, index) => (
                    <span
                      key={page}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-6 bg-[#496055]"
                          : "w-2 bg-[#9db2a0]"
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
