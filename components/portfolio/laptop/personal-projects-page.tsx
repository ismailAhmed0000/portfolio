import { personalProjects } from "@/components/portfolio/data";

const kw = "text-[#c792ea]";
const str = "text-[#c3e88d]";
const fn = "text-[#82aaff]";
const prop = "text-[#89ddff]";
const comment = "text-[#546e7a] italic";
const num = "text-[#f78c6c]";

const statusColor: Record<string, string> = {
  live: "text-[#c3e88d] border-[#c3e88d]/25 bg-[#122116]",
  personal: "text-[#82aaff] border-[#82aaff]/20 bg-[#0e1524]",
};

export default function PersonalProjectsPage() {
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
          <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#546e7a]">
            <span>›</span> experience.md
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-[#7dd97d]/20 bg-[#0f1114] px-2 py-1.5 text-[#7dd97d]">
            <span className="text-[#546e7a]">›</span> projects.ts
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[#546e7a] md:text-[0.7rem]">
            Legend
          </p>
          {[
            ["live", "Deployed"],
            ["personal", "Side project"],
          ].map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className={`rounded-full border px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.1em] md:text-[0.62rem] ${statusColor[key]}`}
              >
                {key}
              </span>
              <span className="font-mono text-[0.6rem] text-[#546e7a] md:text-[0.68rem]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="grid h-full min-h-0 grid-rows-[auto_1fr]">
        {/* Tab bar */}
        <div className="border-b border-white/6 bg-[#1b1f25] px-4 py-2.5 md:px-6">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] text-[#546e7a] md:text-[0.75rem]">
            <span>src</span><span>/</span>
            <span className="text-[#89ddff]">projects.ts</span>
          </div>
        </div>

        {/* Code area */}
        <div className="min-h-0 overflow-y-hidden px-4 py-4 font-mono text-[0.68rem] leading-[1.65] md:px-6 md:py-5 md:text-[0.8rem]">
          <div className="flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">1</span>
            <span className={comment}>{"// Personal & hobby builds"}</span>
          </div>
          <div className="flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">2</span>
            <span className="text-transparent">.</span>
          </div>

          {personalProjects.map((proj, pi) => {
            const base = 3 + pi * 9;
            return (
              <div key={proj.name}>
                {/* project header comment */}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base}</span>
                  <span>
                    <span className={comment}>{"// " + (pi + 1) + ". " + proj.name}</span>
                  </span>
                </div>
                {/* const declaration */}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base + 1}</span>
                  <span>
                    <span className={kw}>const </span>
                    <span className={fn}>{proj.name.replace(/[\s&]/g, "_").toLowerCase()}</span>
                    <span className="text-[#89ddff]"> = {"{"}</span>
                  </span>
                </div>
                {/* name */}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base + 2}</span>
                  <span className="pl-4">
                    <span className={prop}>name</span>
                    <span className="text-[#89ddff]">:</span>
                    <span className={str}> &quot;{proj.name}&quot;</span>
                    <span className="text-[#89ddff]">,</span>
                  </span>
                </div>
                {/* year + status inline */}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base + 3}</span>
                  <span className="pl-4">
                    <span className={prop}>year</span>
                    <span className="text-[#89ddff]">:</span>
                    <span className={num}> {proj.year}</span>
                    <span className="text-[#89ddff]">,  </span>
                    <span className={prop}>status</span>
                    <span className="text-[#89ddff]">:</span>
                    <span className={str}> &quot;{proj.status}&quot;</span>
                    <span className="text-[#89ddff]">,</span>
                  </span>
                </div>
                {/* tech */}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base + 4}</span>
                  <span className="pl-4">
                    <span className={prop}>tech</span>
                    <span className="text-[#89ddff]">: [</span>
                    {proj.tech.map((t, ti) => (
                      <span key={t}>
                        <span className={str}>&quot;{t}&quot;</span>
                        {ti < proj.tech.length - 1 && <span className="text-[#89ddff]">, </span>}
                      </span>
                    ))}
                    <span className="text-[#89ddff]">],</span>
                  </span>
                </div>
                {/* desc */}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base + 5}</span>
                  <span className="pl-4">
                    <span className={prop}>desc</span>
                    <span className="text-[#89ddff]">:</span>
                    <span className={str}> &quot;{proj.desc}&quot;</span>
                    <span className="text-[#89ddff]">,</span>
                  </span>
                </div>
                {/* closing brace */}
                <div className="flex gap-3">
                  <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base + 6}</span>
                  <span>
                    <span className="text-[#89ddff]">{"}"}</span>
                    <span className="text-[#89ddff]">;</span>
                  </span>
                </div>
                {/* blank line between entries */}
                {pi < personalProjects.length - 1 && (
                  <div className="flex gap-3">
                    <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{base + 7}</span>
                    <span className="text-transparent">.</span>
                  </div>
                )}
              </div>
            );
          })}

          {/* export */}
          <div className="mt-1 flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60" />
            <span className="text-transparent">.</span>
          </div>
          <div className="flex gap-3">
            <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60" />
            <span>
              <span className={kw}>export </span>
              <span className="text-[#89ddff]">{"{"}</span>
              {personalProjects.map((p, pi) => (
                <span key={p.name}>
                  <span className={fn}> {p.name.replace(/[\s&]/g, "_").toLowerCase()}</span>
                  {pi < personalProjects.length - 1 && <span className="text-[#89ddff]">,</span>}
                </span>
              ))}
              <span className="text-[#89ddff]">{" }"}</span>
              <span className="text-[#89ddff]">;</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
