import { introHighlights } from "@/components/portfolio/data";

const kw = "text-[#c792ea]";
const str = "text-[#c3e88d]";
const fn = "text-[#82aaff]";
const prop = "text-[#89ddff]";
const comment = "text-[#546e7a] italic";
const num = "text-[#f78c6c]";

export default function IntroPage() {
  return (
    <section className="grid h-full min-h-0 grid-cols-[0.26fr_1fr] overflow-hidden bg-[#1e2228] text-[#edf6ef]">
      {/* ── Sidebar ── */}
      <aside className="min-h-0 overflow-y-hidden border-r border-white/6 bg-[#171a1f] p-3 md:p-5">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#7f9183] md:text-[0.76rem]">
          Explorer
        </p>
        <div className="mt-4 space-y-1.5 font-mono text-[0.72rem] text-[#a7b5aa] md:text-[0.84rem]">
          <div className="flex items-center gap-1.5 rounded-lg border border-[#7dd97d]/20 bg-[#0f1114] px-2 py-1.5 text-[#7dd97d]">
            <span className="text-[#546e7a]">›</span> intro.tsx
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#546e7a]">
            <span>›</span> stack.json
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#546e7a]">
            <span>›</span> experience.md
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1.5 text-[#546e7a]">
            <span>›</span> terminal.sh
          </div>
        </div>

        <div className="mt-6 space-y-1.5">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[#546e7a] md:text-[0.7rem]">
            Contact
          </p>
          {[
            ["email", "ismaeeeelahmed20@gmail.com"],
            ["phone", "9135668"],
            ["github", "ismailAhmed0000"],
          ].map(([label, val]) => (
            <div key={label} className="font-mono text-[0.6rem] md:text-[0.7rem]">
              <span className={prop}>{label}</span>
              <span className="text-[#89ddff]">:</span>{" "}
              <span className={str}>&quot;{val}&quot;</span>
            </div>
          ))}
        </div>
      </aside>

      {/* ── Main editor area ── */}
      <div className="grid h-full min-h-0 grid-rows-[auto_1fr_auto]">
        {/* breadcrumb / filename bar */}
        <div className="border-b border-white/6 bg-[#1b1f25] px-4 py-2.5 md:px-6">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] text-[#546e7a] md:text-[0.75rem]">
            <span>src</span>
            <span>/</span>
            <span className="text-[#89ddff]">intro.tsx</span>
          </div>
        </div>

        {/* code area */}
        <div className="min-h-0 overflow-y-hidden">
          <div className="space-y-0 px-4 py-4 font-mono text-[0.7rem] leading-[1.7] md:px-6 md:py-5 md:text-[0.82rem]">
            {/* line 1 */}
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">1</span>
              <span className={comment}>{"// Ismail Ahmed — Software Developer"}</span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">2</span>
              <span className="text-transparent">.</span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">3</span>
              <span>
                <span className={kw}>const</span>{" "}
                <span className={fn}>profile</span>{" "}
                <span className="text-[#89ddff]">=</span>{" "}
                <span className="text-[#89ddff]">{"{"}</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">4</span>
              <span className="pl-4">
                <span className={prop}>name</span>
                <span className="text-[#89ddff]">:</span>{" "}
                <span className={str}>&quot;Ismail Ahmed&quot;</span>
                <span className="text-[#89ddff]">,</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">5</span>
              <span className="pl-4">
                <span className={prop}>role</span>
                <span className="text-[#89ddff]">:</span>{" "}
                <span className={str}>&quot;Software Developer&quot;</span>
                <span className="text-[#89ddff]">,</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">6</span>
              <span className="pl-4">
                <span className={prop}>degree</span>
                <span className="text-[#89ddff]">:</span>{" "}
                <span className={str}>&quot;BSc Software Engineering&quot;</span>
                <span className="text-[#89ddff]">,</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">7</span>
              <span>
                <span className="text-[#89ddff]">{"}"}</span>
                <span className="text-[#89ddff]">;</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">9</span>
              <span className="text-transparent">.</span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">10</span>
              <span className={comment}>{"// Objective"}</span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">11</span>
              <span>
                <span className={kw}>const</span>{" "}
                <span className={fn}>objective</span>{" "}
                <span className="text-[#89ddff]">=</span>{" "}
                <span className={str}>&quot;</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">12</span>
              <span className="pl-4 text-[#c3e88d]/85">
                Software developer with a Bachelor&apos;s degree
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">13</span>
              <span className="pl-4 text-[#c3e88d]/85">
                in Software Engineering. Proficient in multiple
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">14</span>
              <span className="pl-4 text-[#c3e88d]/85">
                languages, experienced across the full SDLC.
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">15</span>
              <span>
                <span className={str}>&quot;</span>
                <span className="text-[#89ddff]">;</span>
              </span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">16</span>
              <span className="text-transparent">.</span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">17</span>
              <span className={comment}>{"// Education"}</span>
            </div>
            {[
              ["18", "BSc Software Engineering", "Mianz International College"],
              ["19", "Diploma in Software Engineering", "Mianz International College"],
              ["20", "Higher Secondary Education", "CHSE"],
            ].map(([line, deg, inst]) => (
              <div key={line} className="flex gap-3">
                <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">{line}</span>
                <span>
                  <span className={comment}>{"// "}</span>
                  <span className={fn}>{deg}</span>
                  <span className={comment}>{" — " + inst}</span>
                </span>
              </div>
            ))}
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">21</span>
              <span className="text-transparent">.</span>
            </div>
            <div className="flex gap-3">
              <span className="w-5 shrink-0 select-none text-right text-[#546e7a]/60">22</span>
              <span>
                <span className={kw}>export default</span>{" "}
                <span className={fn}>profile</span>
                <span className="text-[#89ddff]">;</span>
              </span>
            </div>
          </div>
        </div>

        {/* status bar */}
        <div className="grid gap-2 border-t border-white/6 bg-[#181c21] px-4 py-3 md:grid-cols-3 md:px-6">
          {introHighlights.map((item, index) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/5 bg-[#111418] px-3 py-2.5"
            >
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[#546e7a] md:text-[0.7rem]">
                <span className={num}>0{index + 1}</span> {item.label}
              </p>
              <p className="mt-1 font-mono text-[0.78rem] font-semibold text-[#c3e88d] md:text-[0.9rem]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
