import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { terminalContacts } from "@/components/portfolio/data";

type TerminalLine =
  | {
      id: number;
      type: "system" | "input";
      text: string;
    }
  | {
      id: number;
      type: "contact";
      label: string;
      value: string;
      href?: string;
    };

type TerminalLineDraft =
  | {
      type: "system" | "input";
      text: string;
    }
  | {
      type: "contact";
      label: string;
      value: string;
      href?: string;
    };

const baseLines: TerminalLine[] = [
  {
    id: 1,
    type: "system",
    text: "Press Enter to reveal contact details, or type help.",
  },
  {
    id: 2,
    type: "system",
    text: "Commands: email, github, linkedin, all, clear",
  },
];

export default function ContactTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>(baseLines);
  const nextIdRef = useRef(baseLines.length + 1);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const contactsByCommand = useMemo(
    () =>
      Object.fromEntries(
        terminalContacts.map((contact) => [contact.command, contact]),
      ),
    [],
  );

  useEffect(() => {
    historyRef.current?.scrollTo({
      top: historyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const createLine = (line: TerminalLineDraft): TerminalLine =>
    ({
      ...line,
      id: nextIdRef.current++,
    }) as TerminalLine;

  const revealAllContacts = () =>
    terminalContacts.map((contact) =>
      createLine({
        type: "contact",
        label: contact.label,
        value: contact.value,
        href: contact.href,
      }),
    );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedCommand = command.trim().toLowerCase();

    if (normalizedCommand === "clear") {
      nextIdRef.current = baseLines.length + 1;
      setHistory(baseLines);
      setCommand("");
      return;
    }

    const nextLines: TerminalLine[] = [
      createLine({
        type: "input",
        text: normalizedCommand || "enter",
      }),
    ];

    if (!normalizedCommand || normalizedCommand === "all") {
      nextLines.push(...revealAllContacts());
    } else if (normalizedCommand === "help") {
      nextLines.push(
        createLine({
          type: "system",
          text: "Try email, github, linkedin, all, or clear.",
        }),
      );
    } else {
      const contact = contactsByCommand[normalizedCommand];

      if (contact) {
        nextLines.push(
          createLine({
            type: "contact",
            label: contact.label,
            value: contact.value,
            href: contact.href,
          }),
        );
      } else {
        nextLines.push(
          createLine({
            type: "system",
            text: `Command not found: ${normalizedCommand}`,
          }),
          createLine({
            type: "system",
            text: "Use help to see available commands.",
          }),
        );
      }
    }

    setHistory((current) => [...current, ...nextLines]);
    setCommand("");
  };

  return (
    <section
      id="contact"
      className="relative bg-[#c2d8c4] px-5 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#566c5c]">
              Contact Terminal
            </p>
            <h2 className="mt-2 text-[clamp(2rem,4vw,3.6rem)] font-black uppercase leading-[0.9] tracking-[-0.08em] text-[#18231c]">
              Let&apos;s connect
            </h2>
          </div>
          <p className="max-w-xs text-right text-sm leading-6 text-[#4b5f51]">
            Press Enter and the terminal prints your contact links in a Mac
            style window.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-[1.75rem] border border-[#243129]/20 bg-[#0d1110] shadow-[0_28px_90px_rgba(42,63,50,0.28)]"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center justify-between border-b border-white/6 bg-[linear-gradient(180deg,#1b211f_0%,#141917_100%)] px-4 py-3 text-sm text-[#b7c7b9] md:px-5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <p className="font-mono text-[0.74rem] uppercase tracking-[0.22em] text-[#819283]">
              zsh - contact
            </p>
            <div className="w-[3.25rem]" />
          </div>

          <div
            ref={historyRef}
            className="h-[25rem] overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(37,46,41,0.56),transparent_28%),linear-gradient(180deg,#0f1412_0%,#0b0f0e_100%)] px-4 py-4 font-mono text-[0.82rem] text-[#d6e4d7] md:px-5 md:py-5 md:text-[0.92rem]"
          >
            <div className="space-y-3">
              {history.map((line) => {
                if (line.type === "input") {
                  return (
                    <div key={line.id} className="flex gap-3 text-[#c2d8c4]">
                      <span className="text-[#7fa188]">ismail@portfolio %</span>
                      <span>{line.text}</span>
                    </div>
                  );
                }

                if (line.type === "contact") {
                  return (
                    <div
                      key={line.id}
                      className="rounded-xl border border-[#29352f] bg-white/3 px-3 py-2.5 text-[#e7f1e8]"
                    >
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#89a08c]">
                        {line.label}
                      </p>
                      <a
                        href={line.href}
                        target={line.href?.startsWith("http") ? "_blank" : undefined}
                        rel={
                          line.href?.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="mt-1 inline-block break-all text-[0.92rem] text-[#dff2df] underline decoration-[#5d7864]/65 underline-offset-4"
                      >
                        {line.value}
                      </a>
                    </div>
                  );
                }

                return (
                  <p key={line.id} className="text-[#91a693]">
                    {line.text}
                  </p>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/6 bg-[#111614] px-4 py-3 md:px-5"
          >
            <label className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#7fa188]">
                ismail@portfolio %
              </span>
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  spellCheck={false}
                  className="w-full border-0 bg-transparent pr-4 font-mono text-sm text-[#eef8ef] outline-none placeholder:text-[#4a5a4f]"
                  placeholder="press Enter or type a command"
                />
                <span className="terminal-cursor pointer-events-none absolute right-0 top-1/2 h-4 w-2 -translate-y-1/2 rounded-[2px] bg-[#c2d8c4]" />
              </div>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
