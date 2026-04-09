import { introHighlights } from "@/components/portfolio/data";

export default function IntroPage() {
  return (
    <section className="grid min-h-full grid-cols-[0.82fr_1.18fr] bg-[linear-gradient(180deg,rgba(241,246,241,0.95),rgba(223,234,223,0.98))]">
      <div className="flex flex-col justify-between border-r border-[#6b816f]/12 bg-[#e6efe6]/92 p-3 md:p-6">
        <div>
          <div className="inline-flex items-center rounded-full border border-[#6b816f]/14 bg-white/58 px-2.5 py-1 text-[0.48rem] font-semibold uppercase tracking-[0.22em] text-[#627868] md:text-[0.58rem]">
            Full Stack Developer
          </div>

          <h2 className="mt-3 text-[1rem] font-black uppercase leading-none tracking-[-0.08em] text-[#16211b] md:text-[2rem]">
            Ismail
            <br />
            Ahmed
          </h2>

          <p className="mt-3 max-w-[18rem] text-[0.58rem] leading-4 text-[#42564a] md:text-[0.76rem] md:leading-5">
            I build digital products end to end, bringing together frontend
            clarity, backend structure, and product thinking that helps ideas
            become reliable experiences.
          </p>
        </div>

        <div className="grid gap-2 md:gap-3">
          {introHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1rem] border border-[#6b816f]/14 bg-white/68 px-3 py-2.5 md:px-3.5 md:py-3"
            >
              <p className="text-[0.48rem] uppercase tracking-[0.18em] text-[#657a6b] md:text-[0.58rem]">
                {item.label}
              </p>
              <p className="mt-1 text-[0.72rem] font-bold text-[#15211a] md:text-[0.95rem]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between bg-[linear-gradient(180deg,rgba(246,249,246,0.96),rgba(229,238,229,0.98))] p-3 md:p-6">
        <div>
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#5d7463] md:text-[0.7rem]">
            Introduction
          </p>
          <h3 className="mt-2 max-w-[18rem] text-[0.95rem] font-black uppercase leading-[0.94] tracking-[-0.08em] text-[#16211b] md:text-[1.8rem]">
            Full stack execution with product-level polish
          </h3>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.12fr_0.88fr] md:gap-4">
          <div className="rounded-[1.25rem] border border-[#6b816f]/14 bg-white/74 p-3 shadow-[0_14px_32px_rgba(116,140,123,0.08)] md:p-5">
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-[#667b6c] md:text-[0.6rem]">
              What I do
            </p>
            <p className="mt-2 text-[0.56rem] leading-4 text-[#3f5347] md:text-[0.74rem] md:leading-5">
              I turn product ideas into shipped experiences, working across UI,
              application logic, data flows, and backend architecture with a
              strong focus on clarity and usability.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-[#6b816f]/14 bg-[#dfeade]/76 p-3 md:p-5">
            <p className="text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-[#667b6c] md:text-[0.6rem]">
              Working style
            </p>
            <p className="mt-2 text-[0.7rem] font-bold uppercase leading-tight tracking-[-0.05em] text-[#1a261f] md:text-[1rem]">
              Thoughtful interfaces.
              <br />
              Dependable systems.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-[1rem] border border-[#6b816f]/12 bg-[#dde9dd]/78 px-3 py-2 md:px-4 md:py-3">
          <span className="text-[0.52rem] uppercase tracking-[0.18em] text-[#5f7465] md:text-[0.62rem]">
            Flow
          </span>
          <span className="text-[0.58rem] font-semibold text-[#213129] md:text-[0.72rem]">
            Intro to Stack to Selected Work
          </span>
        </div>
      </div>
    </section>
  );
}
