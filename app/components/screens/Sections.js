/** @format */

import { useState } from "react";
import { CV, CONTACT, SECTIONS, contactLinks } from "../../data/cv";

// Secciones del CV, compartidas por la pantalla de la compu y la del celular.
// `compact` = layout de una columna (celular).

// Comando que "se ejecutó" para mostrar cada sección (el nombre sale del idioma activo).
const COMMANDS = {
  home: () => "whoami",
  about: (n) => `cat ${n}.md`,
  experience: (n) => `cat ${n}.log`,
  projects: (n) => `ls ${n}/`,
  skills: () => "cat stack.json",
  education: (n) => `cat ${n}.md`,
  contact: (n) => `cat ${n}.vcf`,
};

function useCopy() {
  const [copied, setCopied] = useState("");
  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1800);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return [copied, copy];
}

function Prompt({ section, t }) {
  const name = t.ui.nav[section];
  const path = section === "home" ? "~" : `~/${name}`;
  const cmd = COMMANDS[section](name);
  return (
    <p className="mb-5 font-mono text-[12px] text-dim">
      <span className="text-acc">gonzalo@portfolio</span>
      <span className="text-faint">:</span>
      <span className="text-acc2">{path}</span>
      <span className="text-faint">$ </span>
      {cmd}
      <span className="term-cursor" />
    </p>
  );
}

function Label({ children }) {
  return (
    <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
      <span className="text-acc">{"// "}</span>
      {children}
    </h3>
  );
}

function Card({ className = "", children }) {
  return <div className={`rounded-xl border border-line bg-panel/70 p-4 ${className}`}>{children}</div>;
}

function Chip({ children }) {
  return (
    <span className="rounded-md border border-line bg-ink px-2 py-[3px] font-mono text-[11.5px] leading-tight text-fg/90">
      {children}
    </span>
  );
}

function ExtLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-mono text-acc2 underline-offset-4 hover:underline ${className}`}
    >
      {children} ↗
    </a>
  );
}

function CvButton({ lang, t, variant = "solid", label }) {
  const solid = "bg-acc text-ink hover:bg-acc/85";
  const ghost = "border border-acc/40 text-acc hover:bg-acc/10";
  return (
    <a
      href={CONTACT.cv[lang]}
      download
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-[12.5px] font-semibold transition ${
        variant === "solid" ? solid : ghost
      }`}
    >
      <span aria-hidden>↓</span>
      {label || `${t.ui.downloadCv} (${lang.toUpperCase()})`}
    </a>
  );
}

function Home({ t, lang, compact, onNavigate, onContact }) {
  return (
    <div>
      <div className={compact ? "flex flex-col items-start gap-4" : "flex items-center gap-7"}>
        <img
          src={CONTACT.photo}
          alt={CONTACT.name}
          className={`${compact ? "h-20 w-20" : "h-32 w-32"} shrink-0 rounded-2xl object-cover ring-1 ring-acc/40`}
          style={{ boxShadow: "0 0 40px rgb(74 222 128 / 0.15)" }}
        />
        <div>
          <h1 className={`${compact ? "text-[28px]" : "text-[42px]"} font-semibold leading-[1.05] tracking-tight text-fg`}>
            {CONTACT.name}
          </h1>
          <p className="term-glow mt-2 font-mono text-[13px] text-acc">{t.role}</p>
          <p className="mt-1 font-mono text-[12px] text-dim">📍 {t.location}</p>
        </div>
      </div>

      <p className={`mt-6 ${compact ? "text-[13.5px]" : "text-[15px]"} leading-relaxed text-dim`}>{t.summary}</p>

      <div className="mt-5 space-y-1.5 font-mono text-[12.5px]">
        {t.now.map((n) => (
          <div key={n.org} className="text-fg/90">
            <span className="text-acc">▸ </span>
            {n.role} <span className="text-faint">@</span> <span className="text-acc2">{n.org}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <CvButton lang={lang} t={t} />
        <button
          onClick={onContact}
          className="rounded-lg border border-line px-3.5 py-2 font-mono text-[12.5px] text-fg transition hover:border-acc/50 hover:text-acc"
        >
          {t.ui.contactMe} →
        </button>
      </div>

      <div className={`mt-8 grid gap-2 ${compact ? "grid-cols-2" : "grid-cols-3"}`}>
        {SECTIONS.slice(1).map((id, i) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="group rounded-lg border border-line bg-panel/60 px-3 py-2.5 text-left font-mono text-[12.5px] text-dim transition hover:border-acc/50 hover:bg-acc/5 hover:text-fg"
          >
            <span className="text-faint group-hover:text-acc">[{i + 1}]</span> {t.ui.nav[id]}
          </button>
        ))}
      </div>
    </div>
  );
}

function About({ t, compact }) {
  return (
    <div className="space-y-6">
      <p className={`${compact ? "text-[14px]" : "text-[16px]"} leading-relaxed text-fg/90`}>{t.summary}</p>

      <div>
        <Label>{t.ui.current}</Label>
        <div className={`grid gap-2.5 ${compact ? "grid-cols-1" : "grid-cols-3"}`}>
          {t.now.map((n) => (
            <Card key={n.org} className="p-3.5!">
              <p className="font-mono text-[11.5px] text-acc">{n.role}</p>
              <p className="mt-1 text-[14px] font-medium text-fg">{n.org}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <Label>{t.ui.languages}</Label>
        <Card>
          <ul className="space-y-1.5 text-[13.5px] text-fg/90">
            {t.languages.map((l) => (
              <li key={l}>
                <span className="text-acc">› </span>
                {l}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

function Experience({ t, compact }) {
  return (
    <ol className="relative ml-1.5 border-l border-line">
      {t.experience.map((job) => (
        <li key={job.company} className="relative mb-7 pl-6 last:mb-1">
          <span
            className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
              job.current ? "bg-acc shadow-[0_0_10px_rgb(74_222_128/0.8)]" : "bg-faint"
            }`}
          />
          <div className={compact ? "" : "flex items-baseline justify-between gap-4"}>
            <h2 className="text-[18px] font-semibold text-fg">
              {job.company} <span className="text-[13px] font-normal text-faint">· {job.place}</span>
            </h2>
            <span className="shrink-0 font-mono text-[11.5px] text-dim">{job.dates}</span>
          </div>
          <p className="mt-1 font-mono text-[12px] text-acc">{job.role}</p>
          {job.links && (
            <div className="mt-1.5 flex gap-3 text-[12px]">
              {job.links.map((l) => (
                <ExtLink key={l.href} href={l.href}>
                  {l.label}
                </ExtLink>
              ))}
            </div>
          )}
          <ul className={`mt-3 space-y-2 ${compact ? "text-[13px]" : "text-[14px]"} leading-relaxed text-dim`}>
            {job.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="select-none text-acc/70">›</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function Projects({ t, compact }) {
  return (
    <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-2"}`}>
      {t.projects.map((p) => (
        <Card key={p.name} className="flex flex-col">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-[18px] font-semibold text-fg">{p.name}</h2>
            <span className="shrink-0 font-mono text-[11px] text-dim">{p.dates}</span>
          </div>
          <p className="mt-1 font-mono text-[12px] text-acc">{p.role}</p>
          <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-dim">{p.description}</p>
          {p.stack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          )}
          {p.href && (
            <div className="mt-4 text-[12.5px]">
              <ExtLink href={p.href}>{p.label}</ExtLink>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

function Skills({ t, compact }) {
  return (
    <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-2"}`}>
      {t.skills.map((g) => (
        <Card key={g.group}>
          <p className="mb-3 font-mono text-[12px] text-acc">
            {g.group} <span className="text-faint">({g.items.length})</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function Education({ t }) {
  return (
    <div className="space-y-6">
      {t.education.map((e) => (
        <Card key={e.school} className="p-5!">
          <p className="font-mono text-[12px] text-acc">{e.dates}</p>
          <h2 className="mt-1.5 text-[20px] font-semibold text-fg">{e.degree}</h2>
          <p className="mt-0.5 text-[14px] text-dim">{e.school}</p>
        </Card>
      ))}
      <div>
        <Label>{t.ui.otherExperience}</Label>
        <Card>
          {t.other.map((o) => (
            <div key={o.title} className="text-[13.5px]">
              <p className="font-medium text-fg">{o.title}</p>
              <p className="mt-1 text-dim">{o.description}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

function Contact({ t, lang, compact, onContact }) {
  const [copied, copy] = useCopy();
  const links = contactLinks(lang);
  const rows = [
    { key: "whatsapp", label: "WhatsApp", value: CONTACT.whatsappDisplay, href: links.whatsapp, external: true },
    { key: "email", label: t.ui.email, value: CONTACT.email, href: links.email, copy: true },
    { key: "phone", label: t.ui.phone, value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`, copy: true },
    { key: "linkedin", label: "LinkedIn", value: "linkedin.com/in/gonzagomezp", href: CONTACT.linkedin, external: true },
    { key: "github", label: "GitHub", value: "github.com/gonzagomezp", href: CONTACT.github, external: true },
    { key: "location", label: t.ui.location, value: t.location },
  ];

  return (
    <div className="space-y-6">
      <button
        onClick={onContact}
        className="inline-flex items-center gap-2 rounded-lg bg-acc px-4 py-2.5 font-mono text-[13px] font-semibold text-ink transition hover:bg-acc/85"
      >
        <span aria-hidden>✉</span> {t.ui.contact}
      </button>

      <Card className="p-0!">
        {rows.map((r) => (
          <div
            key={r.key}
            className={`flex ${compact ? "flex-col items-start gap-1" : "items-center justify-between gap-4"} border-b border-line px-4 py-3 last:border-b-0`}
          >
            <span className="w-24 shrink-0 font-mono text-[11.5px] uppercase tracking-wider text-faint">{r.label}</span>
            <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
              {r.href ? (
                <a
                  href={r.href}
                  target={r.external ? "_blank" : undefined}
                  rel={r.external ? "noopener noreferrer" : undefined}
                  className="truncate font-mono text-[13px] text-fg hover:text-acc2"
                >
                  {r.value}
                  {r.external && " ↗"}
                </a>
              ) : (
                <span className="font-mono text-[13px] text-fg">{r.value}</span>
              )}
              {r.copy && (
                <button
                  onClick={() => copy(r.value, r.key)}
                  className={`shrink-0 rounded-md border px-2 py-1 font-mono text-[11px] transition ${
                    copied === r.key
                      ? "border-acc/60 bg-acc/10 text-acc"
                      : "border-line text-dim hover:border-acc/40 hover:text-acc"
                  }`}
                >
                  {copied === r.key ? t.ui.copied : t.ui.copy}
                </button>
              )}
            </div>
          </div>
        ))}
      </Card>

      <div>
        <Label>{t.ui.downloadCv}</Label>
        <div className="flex flex-wrap gap-2.5">
          <CvButton lang="es" t={t} label="CV · Español" />
          <CvButton lang="en" t={t} variant="ghost" label="CV · English" />
        </div>
      </div>
    </div>
  );
}

const VIEWS = { home: Home, about: About, experience: Experience, projects: Projects, skills: Skills, education: Education, contact: Contact };

export default function Section({ section, lang, compact = false, onNavigate, onContact }) {
  const t = CV[lang];
  const View = VIEWS[section] || Home;
  return (
    <div key={`${section}-${lang}`} className="term-enter">
      <Prompt section={section} t={t} />
      {section !== "home" && (
        <h1 className={`mb-6 font-mono ${compact ? "text-[22px]" : "text-[28px]"} font-semibold text-fg`}>
          <span className="text-acc">{">"}</span> {t.ui.nav[section]}
        </h1>
      )}
      <View t={t} lang={lang} compact={compact} onNavigate={onNavigate} onContact={onContact} />
    </div>
  );
}
