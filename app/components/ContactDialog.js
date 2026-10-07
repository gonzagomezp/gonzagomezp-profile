/** @format */

"use client";

import { useEffect, useRef } from "react";
import { CV, CONTACT, contactLinks } from "../data/cv";

function Option({ href, external, icon, iconClass, title, detail, autoFocus }) {
  const ref = useRef(null);
  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);
  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-line bg-ink/60 p-4 outline-none transition hover:border-acc/50 hover:bg-acc/5 focus-visible:border-acc/70"
    >
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${iconClass}`}>{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold text-fg">{title}</span>
        <span className="block truncate font-mono text-[12px] text-dim">{detail}</span>
      </span>
      <span className="text-faint transition group-hover:translate-x-0.5 group-hover:text-acc">→</span>
    </a>
  );
}

export default function ContactDialog({ open, onClose, lang }) {
  const t = CV[lang];
  const links = contactLinks(lang);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
      style={{ animation: "term-enter .2s ease-out both" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div
        className="w-full max-w-md rounded-2xl border border-line bg-panel p-6 shadow-2xl"
        style={{ boxShadow: "0 30px 80px rgb(0 0 0 / 0.6), 0 0 0 1px rgb(74 222 128 / 0.06)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[12px] text-dim">
              <span className="text-acc">gonzalo@portfolio</span>
              <span className="text-faint">:~$ </span>contact
            </p>
            <h2 id="contact-title" className="mt-2 text-[22px] font-semibold tracking-tight text-fg">
              {t.ui.contactTitle}
            </h2>
            <p className="mt-1 text-[14px] text-dim">{t.ui.contactSubtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label={t.ui.close}
            className="rounded-lg border border-line px-2 py-1 font-mono text-[12px] text-dim transition hover:border-acc/40 hover:text-fg"
          >
            esc
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <Option
            autoFocus
            href={links.whatsapp}
            external
            title={t.ui.contactWhatsapp}
            detail={CONTACT.whatsappDisplay}
            iconClass="bg-[#25D366]/15 text-[#25D366]"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
              </svg>
            }
          />
          <Option
            href={links.email}
            title={t.ui.contactEmail}
            detail={CONTACT.email}
            iconClass="bg-acc2/10 text-acc2"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
