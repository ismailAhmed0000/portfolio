import { screenPages } from "@/components/portfolio/data";
import IntroPage from "@/components/portfolio/laptop/intro-page";
import ProjectsPage from "@/components/portfolio/laptop/projects-page";
import StackPage from "@/components/portfolio/laptop/stack-page";

type LaptopFrameProps = {
  activeScreenPage: number;
  laptopReveal: number;
  laptopTransform: string;
  screenOffset: number;
};

export default function LaptopFrame({
  activeScreenPage,
  laptopReveal,
  laptopTransform,
  screenOffset,
}: LaptopFrameProps) {
  return (
    <div
      className="relative w-full max-w-5xl transform-gpu transition-transform duration-300 will-change-transform"
      style={{
        opacity: 0.35 + laptopReveal * 0.65,
        transform: laptopTransform,
        transformOrigin: "center bottom",
      }}
    >
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
                      className={`h-2 rounded-full transition-all duration-500 ${
                        activeScreenPage === index
                          ? "w-6 bg-[#496055]"
                          : "w-2 bg-[#9db2a0]"
                      }`}
                    />
                  ))}
                </div>

                <div
                  className="h-full will-change-transform"
                  style={{
                    transform: `translateY(-${screenOffset}%)`,
                    transition: "transform 220ms linear",
                  }}
                >
                  <IntroPage />
                  <StackPage />
                  <ProjectsPage />
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
