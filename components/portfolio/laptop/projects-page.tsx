import { experienceItems } from "@/components/portfolio/data";

const kw = "text-[#c792ea]";
const str = "text-[#c3e88d]";
const fn = "text-[#82aaff]";
const prop = "text-[#89ddff]";
const comment = "text-[#546e7a] italic";
const num = "text-[#f78c6c]";

export default function ProjectsPage() {
  return (
    <section className="grid h-full min-h-0 grid-cols-[0.26fr_1fr] overflow-hidden bg-[#1e2228] text-[#edf6ef]">
      {/* ── Sidebar ── */}
      <aside className="min-h-0 overflow-y-hidden border-r border-white/6 bg-[#171a1f] p-3 md:p-5">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#7f9183] md:text-[0.76rem]">
          Explorer
        </p>
        <div className="mt-4 space-y-1.5 font-mono text-[0.72rem] text-[#a7b5aa] md:text-[0.84rem]">
          <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#546e7a]">
            <span>›</span> intro.tsx
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#546e7a]">
            <span>›</span> stack.json
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-[#7dd97d]/20 bg-[#0f1114] px-2 py-1.5 text-[#7dd97d]">
            <span className="text-[#546e7a]">›</span> experience.md
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/5 bg-[#111418] p-3">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#546e7a] md:text-[0.7rem]">
            experience
          </p>
          <p className="mt-2 text-[0.78rem] font-semibold text-[#f5fbf6] md:text-[0.9rem]">
            {experienceItems.length} positions
          </p>
          <p className="mt-1 font-mono text-[0.68rem] leading-5 text-[#7f9183] md:text-[0.76rem]">
            Backend systems · APIs · Technical support
          </p>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="grid h-full min-h-0 grid-rows-[auto_1fr]">
        <div className="border-b border-white/6 bg-[#1b1f25] px-4 py-2.5 md:px-6">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] text-[#546e7a] md:text-[0.75rem]">
            <span>src</span><span>/</span>
            <span className="text-[#89ddff]">experience.md</span>
          </div>
        </div>

        <div className="min-h-0 overflow-y-hidden px-4 py-4 font-mono text-[0.7rem] leading-[1.7] md:px-6 md:py-5 md:text-[0.82rem]">
          {experienceItems.map((exp, ei) => {
            const start = ei === 0 ? 1 : 1 + experienceItems[0].bullets.length + 7;
            return (
              <div key={exp.company}>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{start}</span>
                  <span>
                    <span className={comment}>
                      {"## " + (ei + 1) + ". " + exp.role + " — " + exp.company}
                    </span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{start + 1}</span>
                  <span>
                    <span className={kw}>const</span>{" "}
                    <span className={fn}>position</span>{" "}
                    <span className="text-[#89ddff]">=</span>{" "}
                    <span className="text-[#89ddff]">{"{"}</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{start + 2}</span>
                  <span className="pl-4">
                    <span className={prop}>role</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className={str}>&quot;{exp.role}&quot;</span>
                    <span className="text-[#89ddff]">,</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{start + 3}</span>
                  <span className="pl-4">
                    <span className={prop}>company</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className={str}>&quot;{exp.company}&quot;</span>
                    <span className="text-[#89ddff]">,</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{start + 4}</span>
                  <span className="pl-4">
                    <span className={prop}>type</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className={str}>&quot;{exp.type}&quot;</span>
                    <span className="text-[#89ddff]">,</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{start + 5}</span>
                  <span className="pl-4">
                    <span className={prop}>responsibilities</span>
                    <span className="text-[#89ddff]">: [</span>
                  </span>
                </div>
                {exp.bullets.map((bullet, bi) => (
                  <div key={bi} className="flex gap-3">
                    <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">
                      {start + 6 + bi}
                    </span>
                    <span className="pl-8">
                      <span className="text-[#546e7a]/80">{num}</span>
                      <span className={str}>&quot;{bullet}&quot;</span>
                      {bi < exp.bullets.length - 1 && (
                        <span className="text-[#89ddff]">,</span>
                      )}
                    </span>
                  </div>
                ))}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">
                    {start + 6 + exp.bullets.length}
                  </span>
                  <span className="pl-4">
                    <span className="text-[#89ddff]">],</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">
                    {start + 7 + exp.bullets.length}
                  </span>
                  <span>
                    <span className="text-[#89ddff]">{"}"}</span>
                    <span className="text-[#89ddff]">;</span>
                  </span>
                </div>
                {ei < experienceItems.length - 1 && (
                  <div className="flex gap-3">
                    <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60" />
                    <span className="text-transparent">.</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
