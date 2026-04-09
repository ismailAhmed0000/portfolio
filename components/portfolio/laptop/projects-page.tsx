import { projectCards } from "@/components/portfolio/data";

export default function ProjectsPage() {
  return (
    <section className="flex min-h-full flex-col bg-[linear-gradient(180deg,rgba(243,247,243,0.95),rgba(225,235,225,0.98))] p-3 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#5d7463] md:text-[0.7rem]">
            Selected Work
          </p>
          <h3 className="mt-2 text-[0.95rem] font-black uppercase leading-[0.92] tracking-[-0.08em] text-[#16211b] md:text-[1.65rem]">
            Projects I&apos;ve helped bring to life
          </h3>
        </div>
        <div className="rounded-2xl border border-[#6b816f]/14 bg-white/68 px-3 py-2 text-right">
          <p className="text-[0.5rem] uppercase tracking-[0.18em] text-[#677c6d] md:text-[0.62rem]">
            Role
          </p>
          <p className="mt-1 text-[0.9rem] font-bold text-[#16211b] md:text-[1.35rem]">
            Full Stack
          </p>
        </div>
      </div>

      <div className="mt-3 grid flex-1 gap-2.5 md:mt-5 md:gap-3">
        {projectCards.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.15rem] border border-[#6b816f]/14 bg-white/72 p-3 shadow-[0_12px_34px_rgba(116,140,123,0.08)] md:p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-[#667b6c] md:text-[0.62rem]">
                    {project.type}
                  </p>
                  <span className="h-1 w-1 rounded-full bg-[#7d9580]" />
                  <p className="text-[0.48rem] font-medium uppercase tracking-[0.18em] text-[#718674] md:text-[0.58rem]">
                    {project.year}
                  </p>
                </div>
                <h4 className="mt-1 text-[0.82rem] font-bold text-[#16211b] md:text-[1.08rem]">
                  {project.title}
                </h4>
              </div>

              <span className="rounded-full bg-[#d9e6da] px-2.5 py-1 text-[0.46rem] font-semibold text-[#34473c] md:text-[0.58rem]">
                {project.role}
              </span>
            </div>

            <p className="mt-2 max-w-[36rem] text-[0.54rem] leading-4 text-[#42564a] md:text-[0.68rem] md:leading-5">
              {project.summary}
            </p>

            <div className="mt-3 rounded-[0.95rem] border border-[#6b816f]/12 bg-[#edf4ed] px-3 py-2.5">
              <p className="text-[0.48rem] font-semibold uppercase tracking-[0.2em] text-[#657a6b] md:text-[0.56rem]">
                Contribution
              </p>
              <p className="mt-1 text-[0.54rem] leading-4 text-[#37493f] md:text-[0.66rem] md:leading-5">
                {project.impact}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
