import { introHighlights } from "@/components/portfolio/data";

export default function IntroPage() {
  return (
    <section className="grid min-h-full grid-cols-[0.28fr_1fr] bg-[#1e2228] text-[#edf6ef]">
      <aside className="border-r border-white/6 bg-[#171a1f] p-4 md:p-6">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[#7f9183] md:text-[0.84rem]">
          Explorer
        </p>

        <div className="mt-5 space-y-3 font-mono text-[0.82rem] text-[#a7b5aa] md:text-[0.96rem]">
          <div className="rounded-xl border border-[#7dd97d]/20 bg-[#0f1114] px-3 py-2 text-[#7dd97d]">
            src/intro.tsx
          </div>
          <div className="px-3 py-2">src/stack.json</div>
          <div className="px-3 py-2">src/projects.md</div>
          <div className="px-3 py-2">contact/terminal.sh</div>
        </div>

        <div className="mt-8 rounded-[1.2rem] border border-white/6 bg-[#111418] p-4">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#7f9183] md:text-[0.82rem]">
            Status
          </p>
          <p className="mt-3 text-[1rem] font-semibold text-[#eff7f1] md:text-[1.25rem]">
            Full Stack Developer
          </p>
          <p className="mt-2 text-[0.9rem] leading-6 text-[#aebbb2] md:text-[1rem]">
            Shipping thoughtful UI, solid backend logic, and cleaner product
            journeys.
          </p>
        </div>
      </aside>

      <div className="grid min-h-full grid-rows-[auto_1fr_auto]">
        <div className="border-b border-white/6 bg-[#1b1f25] px-5 py-4 md:px-8 md:py-5">
          <p className="font-mono text-[0.8rem] uppercase tracking-[0.2em] text-[#89a18f] md:text-[0.94rem]">
            introduction.tsx
          </p>
          <h2 className="mt-3 max-w-[26rem] text-[1.7rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#f2f8f3] md:text-[2.8rem]">
            Building full stack products with product-level care
          </h2>
        </div>

        <div className="grid gap-5 p-5 md:grid-cols-[1.15fr_0.85fr] md:p-8">
          <div className="rounded-[1.5rem] border border-white/7 bg-[#14181d] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.22)] md:p-7">
            <div className="flex items-center gap-2 font-mono text-[0.78rem] text-[#7dd97d] md:text-[0.9rem]">
              <span>01</span>
              <span className="text-[#5f7366]">{"// profile"}</span>
            </div>

            <h3 className="mt-4 text-[1.8rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[3rem]">
              Ismail
              <br />
              Ahmed
            </h3>

            <p className="mt-5 max-w-[32rem] text-[1rem] leading-7 text-[#bcc8c0] md:text-[1.18rem] md:leading-8">
              I design and build complete digital products, moving from
              polished frontend experiences to dependable APIs, application
              logic, and structured data systems that support real users.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-[#7dd97d]/18 bg-[#12161a] p-5 md:p-6">
              <p className="font-mono text-[0.76rem] uppercase tracking-[0.18em] text-[#89a18f] md:text-[0.9rem]">
                execution
              </p>
              <p className="mt-3 text-[1.15rem] font-bold uppercase leading-tight tracking-[-0.04em] text-[#f4fbf6] md:text-[1.6rem]">
                Thoughtful interfaces.
                <br />
                Reliable backend systems.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/6 bg-[#111418] p-5 md:p-6">
              <p className="font-mono text-[0.76rem] uppercase tracking-[0.18em] text-[#89a18f] md:text-[0.9rem]">
                summary
              </p>
              <p className="mt-3 text-[0.95rem] leading-7 text-[#b8c4bb] md:text-[1.08rem] md:leading-8">
                I enjoy turning rough ideas into clean, maintainable products
                that feel calm on the surface and dependable underneath.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-white/6 bg-[#181c21] p-5 md:grid-cols-3 md:p-6">
          {introHighlights.map((item, index) => (
            <div
              key={item.label}
              className="rounded-[1.25rem] border border-white/6 bg-[#111418] px-4 py-4"
            >
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[#7f9183] md:text-[0.84rem]">
                0{index + 1} {item.label}
              </p>
              <p className="mt-2 text-[1rem] font-semibold text-[#f3fbf4] md:text-[1.22rem]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
