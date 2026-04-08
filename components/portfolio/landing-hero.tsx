type LandingHeroProps = {
  onOpenLaptop: () => void;
  onOpenContact: () => void;
};

export default function LandingHero({
  onOpenLaptop,
  onOpenContact,
}: LandingHeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent px-5 py-6 md:px-8 md:py-8 lg:px-10">
      <div className="relative mx-auto flex min-h-screen max-w-[92rem] flex-col">
        <div className="flex items-center justify-between gap-6 pt-2">
          <div className="text-[#1a281f]">
            <p className="text-[0.68rem] font-black uppercase leading-none tracking-[-0.04em] md:text-[0.9rem]">
              ISMAIL AHMED
            </p>
            <p className="text-[0.68rem] font-black uppercase leading-none tracking-[-0.04em] md:text-[0.9rem]">
              PORTFOLIO
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#415348] md:flex">
            <a
              href="#laptop"
              onClick={(event) => {
                event.preventDefault();
                onOpenLaptop();
              }}
            >
              Work
            </a>
            <a
              href="#laptop"
              onClick={(event) => {
                event.preventDefault();
                onOpenLaptop();
              }}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                onOpenContact();
              }}
            >
              Contact
            </a>
            <div className="flex items-center gap-3">
              <span>Terminal</span>
              <span className="relative inline-flex h-6 w-12 items-center rounded-full border border-[#5f7566]/35 bg-[#dbe8dc] p-1">
                <span className="h-4 w-4 rounded-full bg-[#415348]" />
              </span>
            </div>
          </nav>

          <button
            type="button"
            onClick={onOpenLaptop}
            className="rounded-xl border border-[#415348]/10 bg-[#1c2a21] px-5 py-3 text-sm font-semibold text-[#eff5ef] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Open
          </button>
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center pb-12 pt-12 text-center md:pt-16">
          <div className="terminal-pulse rounded-[2rem] border border-[#6e8673]/35 bg-[#edf4ed]/82 px-5 py-4 shadow-[0_0_0_1px_rgba(90,115,98,0.08),0_24px_80px_rgba(104,128,111,0.2)]">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#415348]" />
              <span className="h-2 w-2 rounded-full bg-[#68806e]" />
              <span className="h-2 w-2 rounded-full bg-[#a2b7a5]" />
            </div>
            <div className="font-mono text-left text-[0.72rem] text-[#1d2b22] md:text-sm">
              <p className="terminal-line terminal-line-slow max-w-max">
                $ cat ~/portfolio/contact.json&nbsp;&nbsp;[ok] email github
                linkedin ready
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-[90rem]">
            <span className="mb-1 block text-[clamp(1.2rem,2vw,1.8rem)] font-black uppercase leading-none tracking-[-0.08em] text-[#44574b] md:ml-[8%]">
              YOUR
            </span>
            <h1
              className="text-[clamp(4.8rem,16vw,14rem)] font-black uppercase leading-[0.84] tracking-[-0.1em] text-[#18231c]"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              FULL STACK
            </h1>
            <div className="mt-[-0.4rem] flex items-start justify-center gap-2 md:gap-5">
              <span className="pt-[1.8vw] text-[clamp(1.2rem,2vw,1.8rem)] font-black uppercase leading-none tracking-[-0.08em] text-[#44574b]">
                &
              </span>
              <h1
                className="text-[clamp(4.4rem,14vw,12.5rem)] font-black uppercase leading-[0.84] tracking-[-0.1em] text-[#18231c]"
                style={{
                  fontFamily:
                    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                }}
              >
            CREATIVE ENGINEER
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
