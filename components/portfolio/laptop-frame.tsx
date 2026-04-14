"use client";

import { screenPages } from "@/components/portfolio/data";
import IntroPage from "@/components/portfolio/laptop/intro-page";
import ProjectsPage from "@/components/portfolio/laptop/projects-page";
import StackPage from "@/components/portfolio/laptop/stack-page";
import PersonalProjectsPage from "@/components/portfolio/laptop/personal-projects-page";

const pages = [IntroPage, StackPage, ProjectsPage, PersonalProjectsPage];
const tabLabels = ["intro.tsx", "stack.json", "experience.md", "projects.ts"];

type LaptopFrameProps = {
  activeIndex: number;
};

export default function LaptopFrame({ activeIndex }: LaptopFrameProps) {
  const clamped = Math.max(0, Math.min(screenPages.length - 1, activeIndex));

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
                      clamped === index
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
                        clamped === index
                          ? "w-6 bg-[#7dd97d]"
                          : "w-2 bg-[#456253]"
                      }`}
                    />
                  ))}
                </div>

                <div className="h-full overflow-hidden">
                  <div
                    className="flex h-full flex-col"
                    style={{
                      transform: `translateY(${-clamped * 100}%)`,
                      transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                      willChange: "transform",
                    }}
                  >
                    {pages.map((PageComponent, index) => (
                      <div
                        key={screenPages[index]}
                        className="h-full w-full shrink-0 overflow-hidden"
                      >
                        <PageComponent />
                      </div>
                    ))}
                  </div>
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
