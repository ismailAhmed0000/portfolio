"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type WorkCardOverlayProps = {
  onClose: () => void;
  onViewLaptop: () => void;
};

export default function WorkCardOverlay({
  onClose,
}: WorkCardOverlayProps) {
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

      {/* Column anchored to top:0, right-center of viewport */}
      <div
        className={`pointer-events-none fixed top-0 z-[1] flex flex-col items-center ${closing ? "card-exit-anim" : "card-drop-anim"}`}
        style={{ right: "clamp(2.5rem, 14vw, 11rem)" }}
        onAnimationEnd={(event) => {
          if (event.animationName === "card-exit") {
            onClose();
          }
        }}
      >
        {/* ── DARK WOVEN STRAP ── */}
        <div
          className="w-[16px] shrink-0"
          style={{
            height: "clamp(64px, 12vh, 112px)",
            background:
              "repeating-linear-gradient(180deg,#050505 0px,#101010 2px,#0a0a0a 4px,#030303 6px,#0c0c0c 8px)",
            boxShadow:
              "inset 2px 0 0 rgba(255,255,255,0.04), inset -2px 0 0 rgba(0,0,0,0.65), 2px 0 10px rgba(0,0,0,0.55)",
          }}
          aria-hidden
        />

        {/* ── METAL CARABINER CLIP ── */}
        <div className="pointer-events-none relative flex shrink-0 flex-col items-center" aria-hidden>
          <div
            style={{
              width: "24px",
              height: "36px",
              borderRadius: "5px 5px 4px 4px",
              background:
                "linear-gradient(175deg,#c8cdd4 0%,#8e949e 28%,#a8aeb8 55%,#606670 80%,#8a9098 100%)",
              boxShadow:
                "inset 1px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 0 rgba(0,0,0,0.3), 0 4px 14px rgba(0,0,0,0.6)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "10px",
                height: "2px",
                background: "#4a5058",
                borderRadius: "1px",
                transform: "translate(-50%,-50%)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.18)",
              }}
            />
          </div>
          <div
            style={{
              width: "18px",
              height: "9px",
              borderRadius: "0 0 9px 9px",
              border: "2.5px solid #8e949e",
              borderTop: "none",
              background: "transparent",
              marginTop: "-2px",
              boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.35)",
            }}
          />
        </div>

        {/* ── DARK PLASTIC SLEEVE ── */}
        <div
          className="pointer-events-auto relative shrink-0"
          style={{
            width: "clamp(228px, 21vw, 308px)",
            padding: "7px",
            background:
              "linear-gradient(145deg,rgba(22,24,28,0.97) 0%,rgba(12,14,18,0.98) 100%)",
            borderRadius: "13px",
            border: "2px solid rgba(42,48,56,0.85)",
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.5), 0 32px 80px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.04)",
            marginTop: "-2px",
            pointerEvents: closing ? "none" : "auto",
          }}
        >
          {/* sleeve top slot grooves */}
          <div className="mb-1.5 flex justify-center gap-2" aria-hidden>
            {[0, 1].map((i) => (
              <div
                key={i}
                style={{
                  width: "34px",
                  height: "7px",
                  background:
                    "linear-gradient(180deg,#14161c 0%,#0a0b0e 100%)",
                  borderRadius: "3px",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.85)",
                  border: "1px solid rgba(255,255,255,0.03)",
                }}
              />
            ))}
          </div>

          {/* ── CARD INSIDE SLEEVE (DARK THEME) ── */}
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              background: "#040506",
              boxShadow:
                "0 2px 20px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.02)",
            }}
          >
            {/* card header */}
            <div
              className="relative overflow-hidden"
              style={{
                height: "clamp(72px, 13vh, 104px)",
                background:
                  "linear-gradient(135deg,#0c0d10 0%,#08090c 45%,#030304 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.03)",
              }}
            >
              {/* subtle wave accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  right: "-16px",
                  width: "65%",
                  height: "70px",
                  background: "rgba(255,255,255,0.015)",
                  borderRadius: "60% 0 0 60%",
                }}
                aria-hidden
              />
              {/* subtle divider bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg,transparent,rgba(48,54,62,0.9) 22%,rgba(58,66,76,0.95) 50%,rgba(48,54,62,0.9) 78%,transparent)",
                  opacity: 0.65,
                }}
                aria-hidden
              />
              <div className="relative flex h-full items-center gap-2.5 px-3.5">
                <span
                  className="font-black"
                  style={{
                    fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                    letterSpacing: "0.06em",
                    fontFamily: "monospace",
                    color: "rgba(92,100,112,0.96)",
                  }}
                >
                  IA
                </span>
                <span
                  style={{
                    fontSize: "0.52rem",
                    fontFamily: "monospace",
                    color: "rgba(58,64,74,0.92)",
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  PORTFOLIO
                </span>
              </div>
            </div>

            {/* card body */}
            <div className="relative px-3.5 pb-6 pt-5">
              {/* left dark accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[6px]"
                style={{
                  background:
                    "linear-gradient(180deg,#101218 0%,#060708 100%)",
                  borderRight: "1px solid rgba(255,255,255,0.02)",
                }}
                aria-hidden
              />

              {/* circular photo */}
              <div
                className="mx-auto mb-5"
                style={{
                  width: "clamp(64px, 11vw, 86px)",
                  height: "clamp(88px, 16vh, 118px)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(48,54,64,0.85)",
                    boxShadow:
                      "0 0 0 2px rgba(0,0,0,0.6), 0 8px 22px rgba(0,0,0,0.65)",
                    position: "relative",
                    background: "#050608",
                  }}
                >
                  <Image
                    src="/work-card-placeholder.svg"
                    alt=""
                    fill
                    className="object-cover object-center opacity-90"
                    sizes="86px"
                    priority
                  />
                </div>
              </div>

              <p
                id="work-card-title"
                className="text-center font-bold uppercase"
                style={{
                  fontSize: "clamp(0.78rem, 1.5vw, 0.95rem)",
                  letterSpacing: "0.04em",
                  color: "rgba(118,126,138,0.97)",
                }}
              >
                Ismail Ahmed
              </p>
              <p
                className="mt-2 text-center font-semibold"
                style={{
                  fontSize: "clamp(0.56rem, 0.95vw, 0.68rem)",
                  color: "rgba(72,80,90,0.92)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Full Stack Engineer
              </p>

              {/* dark info strip */}
              <div
                className="relative mt-6 overflow-hidden"
                style={{
                  borderRadius: "7px",
                  background:
                    "linear-gradient(135deg,#050608 0%,#020304 100%)",
                  border: "1px solid rgba(255,255,255,0.03)",
                  padding: "0.85rem 0.85rem",
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontSize: "0.52rem",
                      color: "rgba(72,78,88,0.95)",
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Staff No.
                  </span>
                  <span
                    style={{
                      fontSize: "0.55rem",
                      color: "rgba(88,96,108,0.95)",
                      fontFamily: "monospace",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                    }}
                  >
                    67
                  </span>
                </div>
                <div
                  className="mt-1.5"
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)",
                  }}
                  aria-hidden
                />
                <div className="mt-1.5 flex items-center justify-between">
                  <span
                    style={{
                      fontSize: "0.52rem",
                      color: "rgba(72,78,88,0.95)",
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Valid Thru
                  </span>
                  <span
                    style={{
                      fontSize: "0.52rem",
                      color: "rgba(68,76,86,0.9)",
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    12 / 26
                  </span>
                </div>
              </div>

              {/* barcode */}
              <div
                className="mx-auto mt-6 flex items-end justify-center gap-[1.5px]"
                style={{ width: "84%" }}
                aria-hidden
              >
                {Array.from({ length: 34 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-[2px]"
                    style={{
                      height: `${11 + ((i * 13 + 5) % 6) * 3}px`,
                      background: "rgba(70,78,88,0.45)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
