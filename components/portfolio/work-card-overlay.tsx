"use client";

import { useCallback, useEffect, useState } from "react";

type WorkCardOverlayProps = {
  onClose: () => void;
  onViewLaptop: () => void;
};

// Fine cross-hatch that reads as woven lanyard fabric.
const WEAVE =
  "repeating-linear-gradient(0deg,rgba(255,255,255,0.05) 0px,rgba(255,255,255,0.05) 1px,transparent 1px,transparent 3px), repeating-linear-gradient(90deg,rgba(0,0,0,0.12) 0px,rgba(0,0,0,0.12) 1px,transparent 1px,transparent 4px)";

export default function WorkCardOverlay({ onClose }: WorkCardOverlayProps) {
  const [entered, setEntered] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setEntered(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  const beginClose = useCallback(() => {
    setClosing((alreadyClosing) => {
      if (alreadyClosing) {
        return alreadyClosing;
      }

      return true;
    });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        beginClose();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [beginClose]);

  return (
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-card-title"
    >
      <style>{`
        @keyframes card-drop {
          0%   { transform: translateY(-100%); opacity: 0; }
          40%  { opacity: 1; }
          58%  { transform: translateY(4%); }
          72%  { transform: translateY(-2.5%); }
          83%  { transform: translateY(1.2%); }
          91%  { transform: translateY(-0.5%); }
          96%  { transform: translateY(0.2%); }
          100% { transform: translateY(0); opacity: 1; }
        }
        .card-drop-anim {
          animation: card-drop 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes card-exit {
          0%   { transform: translateY(0); opacity: 1; }
          11%  { transform: translateY(5%); }
          28%  { transform: translateY(-20%); }
          42%  { transform: translateY(-8%); }
          56%  { transform: translateY(-46%); }
          70%  { transform: translateY(-34%); }
          82%  { transform: translateY(-62%); }
          91%  { transform: translateY(-52%); }
          97%  { transform: translateY(-58%); }
          100% { transform: translateY(-118%); opacity: 0; }
        }
        .card-exit-anim {
          animation: card-exit 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[3px]"
        style={{
          opacity: entered && !closing ? 1 : 0,
          transition: "opacity 0.55s ease",
          pointerEvents: closing ? "none" : "auto",
        }}
        aria-label="Close work card"
        onClick={beginClose}
      />

      {/* Column anchored to top:0, centred horizontally */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[1] flex justify-center">
        <div
          className={`flex flex-col items-center ${closing ? "card-exit-anim" : "card-drop-anim"}`}
          onAnimationEnd={(event) => {
            if (event.animationName === "card-exit") {
              onClose();
            }
          }}
        >
          {/* ── WOVEN GREEN LANYARD ── long enough to hang the card mid-screen */}
          <div
            className="relative z-[2] flex shrink-0 flex-col items-center"
            style={{ marginBottom: "-26px" }}
            aria-hidden
          >
            {/* wide upper strap */}
            <div
              className="w-[34px]"
              style={{
                height: "max(40px, calc(50vh - 330px))",
                background: `${WEAVE}, linear-gradient(90deg,#1f3a29 0%,#2f5139 22%,#2b4b35 78%,#1c3424 100%)`,
                boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
              }}
            />

            {/* fabric tapers into the crimp */}
            <div
              className="w-[34px]"
              style={{
                height: "14px",
                clipPath: "polygon(0 0,100% 0,82% 100%,18% 100%)",
                background: `${WEAVE}, linear-gradient(90deg,#1f3a29,#2f5139 50%,#1c3424)`,
              }}
            />

            {/* metal crimp sleeve */}
            <div
              className="relative -my-[3px] h-[46px] w-[26px] rounded-[4px]"
              style={{
                background:
                  "linear-gradient(90deg,#4f5450 0%,#9ba19c 18%,#e4e8e4 34%,#a9afaa 52%,#6c726d 74%,#3c403d 100%)",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -2px 3px rgba(0,0,0,0.35)",
              }}
            >
              <span className="absolute inset-x-0 bottom-[7px] h-px bg-black/25" />
            </div>

            {/* narrower lower strap looping through the card slot */}
            <div
              className="w-[26px]"
              style={{
                height: "50px",
                clipPath: "polygon(0 0,100% 0,100% 72%,94% 100%,6% 100%,0 72%)",
                background: `${WEAVE}, linear-gradient(90deg,#1f3a29,#2f5139 45%,#1c3424)`,
                boxShadow: "inset 0 -8px 10px rgba(0,0,0,0.25)",
              }}
            />
          </div>

          {/* ── PASS ── */}
          <div
            className="pointer-events-auto relative shrink-0"
            style={{
              width: "clamp(260px, 26vw, 340px)",
              padding: "1.1rem 1.25rem 1.4rem",
              background: "#c5c7c3",
              borderRadius: "14px",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.5)",
              pointerEvents: closing ? "none" : "auto",
            }}
          >
            {/* strap slot */}
            <div
              className="mx-auto h-[10px] w-[58px] rounded-full bg-[#1b1d1b]"
              style={{ boxShadow: "inset 0 2px 3px rgba(0,0,0,0.6)" }}
              aria-hidden
            />

            <div className="mt-6 flex items-center justify-between font-mono text-[0.68rem] tracking-[0.06em] text-[#2a2d29]">
              <span>DEVELOPER PASS</span>
              <span>01 / ∞</span>
            </div>

            {/* lime panel */}
            <div
              className="mt-4 flex items-center justify-center rounded-[4px] bg-[#a4c062]"
              style={{ aspectRatio: "1.55 / 1" }}
              aria-hidden
            >
              <span className="font-mono text-[clamp(4rem,7vw,5.5rem)] font-black leading-none text-[#151715]">
                {"{ }"}
              </span>
            </div>

            <h2
              id="work-card-title"
              className="mt-6 text-[clamp(1.6rem,2.6vw,2.1rem)] font-bold leading-[1.08] tracking-[-0.01em] text-[#1b1d1b]"
            >
              Creative
              <br />
              developer.
            </h2>

            <div className="mt-4 space-y-1.5 font-mono text-[0.7rem] tracking-[0.04em] text-[#2a2d29]">
              <p>FULL STACK + MOBILE</p>
              <p>IDEAS → EXPERIENCES</p>
            </div>

            {/* barcode */}
            <div
              className="mt-5 flex h-[30px] w-[86%] items-stretch gap-[2px]"
              aria-hidden
            >
              {Array.from({ length: 46 }).map((_, i) => (
                <span
                  key={i}
                  className="block bg-[#1b1d1b]"
                  style={{ width: `${1 + ((i * 7 + 3) % 3)}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
