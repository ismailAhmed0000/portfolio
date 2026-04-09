import { projectCards } from "@/components/portfolio/data";

export default function ProjectsPage() {
  return (
    <section className="grid min-h-full grid-cols-[0.28fr_1fr] bg-[#1e2228] text-[#edf6ef]">
      <aside className="border-r border-white/6 bg-[#171a1f] p-4 md:p-6">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[#7f9183] md:text-[0.84rem]">
          Explorer
        </p>

        <div className="mt-5 space-y-3 font-mono text-[0.82rem] text-[#a7b5aa] md:text-[0.96rem]">
          <div className="px-3 py-2">src/intro.tsx</div>
          <div className="px-3 py-2">src/stack.json</div>
          <div className="rounded-xl border border-[#7dd97d]/20 bg-[#0f1114] px-3 py-2 text-[#7dd97d]">
            src/projects.md
          </div>
        </div>

        <div className="mt-8 rounded-[1.2rem] border border-white/6 bg-[#111418] p-4">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#7f9183] md:text-[0.82rem]">
            selected work
          </p>
          <p className="mt-3 text-[1rem] font-semibold text-[#f5fbf6] md:text-[1.2rem]">
            Full stack builds
          </p>
          <p className="mt-2 text-[0.92rem] leading-7 text-[#b6c2b9] md:text-[1.02rem]">
            Product experiences where frontend polish and backend structure had
            to work together.
          </p>
        </div>
      </aside>

      <div className="grid min-h-full grid-rows-[auto_1fr]">
        <div className="border-b border-white/6 bg-[#1b1f25] px-5 py-4 md:px-8 md:py-5">
          <p className="font-mono text-[0.8rem] uppercase tracking-[0.2em] text-[#89a18f] md:text-[0.94rem]">
            projects.md
          </p>
          <h2 className="mt-3 max-w-[28rem] text-[1.7rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#f2f8f3] md:text-[2.8rem]">
            Products I have designed, built, and refined
          </h2>
        </div>

        <div className="grid gap-4 p-5 md:p-8">
          {projectCards.map((project, index) => (
            <article
              key={project.title}
              className="rounded-[1.5rem] border border-white/7 bg-[#14181d] p-5 shadow-[0_18px_36px_rgba(0,0,0,0.2)] md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[0.74rem] uppercase tracking-[0.16em] text-[#89a18f] md:text-[0.88rem]">
                    <span>0{index + 1}</span>
                    <span>{project.type}</span>
                    <span className="h-1 w-1 rounded-full bg-[#5c745f]" />
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-3 text-[1.3rem] font-black uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-[2rem]">
                    {project.title}
                  </h3>
                </div>

                <span className="rounded-full border border-[#7dd97d]/18 bg-[#122116] px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8be18b] md:text-[0.82rem]">
                  {project.role}
                </span>
              </div>

              <p className="mt-4 max-w-[44rem] text-[0.98rem] leading-7 text-[#bbc7bf] md:text-[1.12rem] md:leading-8">
                {project.summary}
              </p>

              <div className="mt-5 rounded-[1.25rem] border border-white/6 bg-[#101317] p-4 md:p-5">
                <p className="font-mono text-[0.74rem] uppercase tracking-[0.16em] text-[#89a18f] md:text-[0.86rem]">
                  impact
                </p>
                <p className="mt-3 text-[0.94rem] leading-7 text-[#d5dfd8] md:text-[1.06rem] md:leading-8">
                  {project.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
