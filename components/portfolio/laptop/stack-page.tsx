import { stackGroups } from "@/components/portfolio/data";

const kw = "text-[#c792ea]";
const str = "text-[#c3e88d]";
const fn = "text-[#82aaff]";
const prop = "text-[#89ddff]";
const comment = "text-[#546e7a] italic";

export default function StackPage() {
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
          <div className="flex items-center gap-1.5 rounded-lg border border-[#7dd97d]/20 bg-[#0f1114] px-2 py-1.5 text-[#7dd97d]">
            <span className="text-[#546e7a]">›</span> stack.json
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#546e7a]">
            <span>›</span> experience.md
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/5 bg-[#111418] p-3">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#546e7a] md:text-[0.7rem]">
            stack.json
          </p>
          <p className="mt-2 font-mono text-[0.7rem] leading-5 text-[#7f9183] md:text-[0.8rem]">
            Languages, frameworks, and databases I use to ship end-to-end work.
          </p>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="grid h-full min-h-0 grid-rows-[auto_1fr]">
        <div className="border-b border-white/6 bg-[#1b1f25] px-4 py-2.5 md:px-6">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] text-[#546e7a] md:text-[0.75rem]">
            <span>src</span><span>/</span>
            <span className="text-[#89ddff]">stack.json</span>
          </div>
        </div>

        <div className="min-h-0 overflow-y-hidden px-4 py-4 font-mono text-[0.7rem] leading-[1.7] md:px-6 md:py-5 md:text-[0.82rem]">
          <div className="flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">1</span>
            <span className="text-[#89ddff]">{"{"}</span>
          </div>

          {stackGroups.map((group, gi) => {
            const baseLineNo = 2 + gi * 6;
            return (
              <div key={group.title}>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{baseLineNo}</span>
                  <span className="pl-4">
                    <span className={comment}>{"// " + group.summary}</span>
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{baseLineNo + 1}</span>
                  <span className="pl-4">
                    <span className={prop}>&quot;{group.title}&quot;</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className="text-[#89ddff]">[</span>
                  </span>
                </div>
                {group.items.map((item, ii) => (
                  <div key={item} className="flex gap-3">
                    <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{baseLineNo + 2 + ii}</span>
                    <span className="pl-8">
                      <span className={str}>&quot;{item}&quot;</span>
                      {ii < group.items.length - 1 && <span className="text-[#89ddff]">,</span>}
                    </span>
                  </div>
                ))}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{baseLineNo + 2 + group.items.length}</span>
                  <span className="pl-4">
                    <span className="text-[#89ddff]">]</span>
                    {gi < stackGroups.length - 1 && <span className="text-[#89ddff]">,</span>}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">
              {2 + stackGroups.reduce((a, g) => a + g.items.length + 3, 0)}
            </span>
            <span className="text-[#89ddff]">{"}"}</span>
          </div>

          <div className="mt-4 flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60" />
            <span className="text-transparent">.</span>
          </div>
          <div className="flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60" />
            <span>
              <span className={comment}>{"// favourite combo"}</span>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60" />
            <span>
              <span className={kw}>const</span>{" "}
              <span className={fn}>goto</span>{" "}
              <span className="text-[#89ddff]">=</span>{" "}
              <span className={str}>&quot;Laravel + Next.js + PostgreSQL&quot;</span>
              <span className="text-[#89ddff]">;</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
