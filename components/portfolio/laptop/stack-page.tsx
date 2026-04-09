import { stackGroups } from "@/components/portfolio/data";

export default function StackPage() {
  return (
    <section className="grid min-h-full grid-cols-[0.8fr_1.2fr] bg-[linear-gradient(180deg,rgba(238,245,238,0.96),rgba(220,232,220,0.98))]">
      <div className="flex flex-col justify-between border-r border-[#6b816f]/12 bg-[#e3eee3]/92 p-3 md:p-6">
        <div>
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#5d7463] md:text-[0.7rem]">
            Stack Overview
          </p>
          <h3 className="mt-2 text-[0.95rem] font-black uppercase leading-[0.94] tracking-[-0.08em] text-[#16211b] md:text-[1.75rem]">
            Tools and systems I build with
          </h3>
        </div>

        <div className="rounded-[1.2rem] border border-[#6b816f]/14 bg-white/66 p-3 md:p-4">
          <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#667b6c] md:text-[0.62rem]">
            Philosophy
          </p>
          <p className="mt-2 text-[0.56rem] leading-4 text-[#405448] md:text-[0.72rem] md:leading-5">
            I like stacks that support speed during development and confidence
            in production, with codebases that stay readable as products grow.
          </p>
        </div>
      </div>

      <div className="grid content-center gap-3 p-3 md:gap-4 md:p-6">
        {stackGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.2rem] border border-[#6b816f]/14 bg-white/72 p-3 shadow-[0_12px_32px_rgba(116,140,123,0.08)] md:p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.22em] text-[#667b6c] md:text-[0.62rem]">
                  {group.title}
                </p>
                <p className="mt-1 max-w-[24rem] text-[0.54rem] leading-4 text-[#43574b] md:text-[0.68rem] md:leading-5">
                  {group.summary}
                </p>
              </div>
              <span className="rounded-full bg-[#dbe8dc] px-2.5 py-1 text-[0.46rem] font-semibold uppercase tracking-[0.16em] text-[#385044] md:text-[0.56rem]">
                Core
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5 md:gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#6b816f]/14 bg-[#edf4ed] px-2 py-1 text-[0.5rem] font-medium text-[#24322a] md:px-2.5 md:text-[0.66rem]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
