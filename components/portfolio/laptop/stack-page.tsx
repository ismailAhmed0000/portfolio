import { stackGroups } from "@/components/portfolio/data";

export default function StackPage() {
  return (
    <section className="grid min-h-full grid-cols-[0.28fr_1fr] bg-[#1e2228] text-[#edf6ef]">
      <aside className="border-r border-white/6 bg-[#171a1f] p-4 md:p-6">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[#7f9183] md:text-[0.84rem]">
          Explorer
        </p>

        <div className="mt-5 space-y-3 font-mono text-[0.82rem] text-[#a7b5aa] md:text-[0.96rem]">
          <div className="px-3 py-2">src/intro.tsx</div>
          <div className="rounded-xl border border-[#7dd97d]/20 bg-[#0f1114] px-3 py-2 text-[#7dd97d]">
            src/stack.json
          </div>
          <div className="px-3 py-2">src/projects.md</div>
        </div>

        <div className="mt-8 rounded-[1.2rem] border border-white/6 bg-[#111418] p-4">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#7f9183] md:text-[0.82rem]">
            stack.exe
          </p>
          <p className="mt-3 text-[0.98rem] leading-7 text-[#b4c0b7] md:text-[1.08rem]">
            Tools I reach for when building product UI, backend logic, and the
            layer in between.
          </p>
        </div>
      </aside>

      <div className="grid min-h-full grid-rows-[auto_1fr]">
        <div className="border-b border-white/6 bg-[#1b1f25] px-5 py-4 md:px-8 md:py-5">
          <p className="font-mono text-[0.8rem] uppercase tracking-[0.2em] text-[#89a18f] md:text-[0.94rem]">
            stack.json
          </p>
          <h2 className="mt-3 max-w-[28rem] text-[1.7rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#f2f8f3] md:text-[2.8rem]">
            Tools and systems I use to ship end-to-end work
          </h2>
        </div>

        <div className="grid gap-4 p-5 md:p-8">
          {stackGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-[1.5rem] border border-white/7 bg-[#14181d] p-5 shadow-[0_18px_36px_rgba(0,0,0,0.2)] md:p-6"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[0.76rem] uppercase tracking-[0.18em] text-[#89a18f] md:text-[0.9rem]">
                    0{index + 1} {group.title}
                  </p>
                  <p className="mt-3 max-w-[42rem] text-[0.98rem] leading-7 text-[#bbc7bf] md:text-[1.12rem] md:leading-8">
                    {group.summary}
                  </p>
                </div>

                <span className="rounded-full border border-[#7dd97d]/18 bg-[#122116] px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8be18b] md:text-[0.82rem]">
                  core
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-[#20252b] px-3 py-2 text-[0.88rem] font-medium text-[#eef7f0] md:px-4 md:text-[1rem]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
