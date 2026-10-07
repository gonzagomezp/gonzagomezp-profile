/** @format */

"use client";

import { useEffect, useState } from "react";
import { CV, CONTACT } from "../data/cv";

const ICONS = {
  overview: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M11 18.5h2" />
    </svg>
  ),
};

export default function Hud({ lang, onLang, view, onView, onContact, onFullscreen, visible }) {
  const t = CV[lang];
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(() => setShowHint(false), 7000);
    return () => clearTimeout(id);
  }, [visible]);

  return (
    <div className={`transition-opacity duration-700 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      {/* Marca */}
      <div className="fixed left-4 top-4 z-50 flex items-center gap-3 sm:left-6 sm:top-5">
        <span className="grid h-9 w-9 place-items-center rounded-lg border border-acc/30 bg-acc/10 font-mono text-[13px] font-semibold text-acc">
          GG
        </span>
        <div className="hidden leading-tight sm:block">
          <p className="text-sm font-semibold text-fg">{CONTACT.name}</p>
          <p className="font-mono text-[11px] text-acc/80">{t.role}</p>
        </div>
      </div>

      {/* Ayuda */}
      <p
        className={`fixed inset-x-0 bottom-[86px] z-50 px-4 text-center font-mono text-[11px] text-dim transition-opacity duration-700 ${
          showHint ? "opacity-100" : "opacity-0"
        }`}
      >
        {t.ui.hint}
        <span className="hidden md:inline"> · {t.ui.keys}</span>
      </p>

      {/* Dock */}
      <nav className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
        <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-black/55 p-1.5 shadow-2xl backdrop-blur-xl">
          {["desktop", "overview", "mobile"].map((v) => (
            <button
              key={v}
              onClick={() => onView(v)}
              aria-label={t.ui.views[v]}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-xs transition ${
                view === v ? "bg-acc/15 text-acc" : "text-dim hover:bg-white/5 hover:text-fg"
              }`}
            >
              {ICONS[v]}
              <span className="hidden sm:inline">{t.ui.views[v]}</span>
            </button>
          ))}

          <button
            onClick={onFullscreen}
            aria-label={t.ui.fullscreen}
            title={`${t.ui.fullscreen} (F)`}
            className="flex items-center rounded-xl px-3 py-2 text-dim transition hover:bg-white/5 hover:text-fg"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
            </svg>
          </button>

          <span className="mx-1 h-6 w-px bg-white/10" />

          <button
            onClick={() => onLang(lang === "es" ? "en" : "es")}
            className="rounded-xl px-3 py-2 font-mono text-xs text-dim transition hover:bg-white/5 hover:text-fg"
            aria-label="Language"
          >
            <span className={lang === "es" ? "text-acc" : ""}>ES</span>
            <span className="text-faint"> / </span>
            <span className={lang === "en" ? "text-acc" : ""}>EN</span>
          </button>

          <button
            onClick={onContact}
            className="flex items-center gap-1.5 rounded-xl border border-acc/40 px-3 py-2 font-mono text-xs font-semibold text-acc transition hover:bg-acc/10"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 5h16v11H8l-4 4V5Z" />
            </svg>
            <span className="hidden sm:inline">{t.ui.contact}</span>
          </button>

          <a
            href={CONTACT.cv[lang]}
            download
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1.5 rounded-xl bg-acc px-3 py-2 font-mono text-xs font-semibold text-ink transition hover:bg-acc/85"
          >
            ↓ <span>CV</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
