/** @format */

"use client";

import { useProgress } from "@react-three/drei";
import { CV, CONTACT } from "../data/cv";

export const VERSION = "2026.10.06";

export default function IntroOverlay({ lang, onLang, ready, leaving, onStart }) {
  const t = CV[lang];
  const { progress } = useProgress();
  const pct = ready ? 100 : Math.min(99, Math.round(progress));

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-[#030504] px-6 transition-opacity duration-[1200ms] ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(rgb(74 222 128) 1px, transparent 1px), linear-gradient(90deg, rgb(74 222 128) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <div className="absolute right-5 top-5 flex overflow-hidden rounded-lg border border-line font-mono text-xs">
        {["es", "en"].map((l) => (
          <button
            key={l}
            onClick={() => onLang(l)}
            className={`px-3 py-1.5 transition ${lang === l ? "bg-acc/15 text-acc" : "text-faint hover:text-fg"}`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-md font-mono">
        <div className="space-y-1.5 text-[13px] text-dim">
          {t.ui.boot.map((line, i) => (
            <p key={line} style={{ animation: `boot-line .4s ease-out ${0.15 + i * 0.35}s both` }}>
              <span className="text-acc">[ ok ]</span> {line}
            </p>
          ))}
        </div>

        <h1 className="mt-8 font-sans text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{CONTACT.name}</h1>
        <p className="term-glow mt-2 text-sm text-acc">{t.role}</p>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-[11px] uppercase tracking-[0.2em] text-faint">
            <span>{t.ui.loading}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-[3px] overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-acc transition-[width] duration-300" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <button
          onClick={onStart}
          disabled={!ready}
          className="group mt-8 inline-flex w-full items-center justify-between rounded-xl border border-acc/40 bg-acc/10 px-5 py-4 text-left text-acc transition hover:bg-acc/20 disabled:cursor-wait disabled:opacity-40"
        >
          <span className="text-base font-semibold">
            <span className="text-faint">$ </span>
            {t.ui.enter.toLowerCase()}
            <span className="term-cursor" />
          </span>
          <span className="rounded-md border border-acc/30 px-2 py-0.5 text-[11px] text-acc/80">⏎ Enter</span>
        </button>

        <p className="mt-6 text-center text-[11px] text-faint">v{VERSION}</p>
      </div>
    </div>
  );
}
