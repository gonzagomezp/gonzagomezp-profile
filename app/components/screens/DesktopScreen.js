/** @format */

import { Html } from "@react-three/drei";
import { useRef } from "react";
import Section from "./Sections";
import useScreenScroll from "./useScreenScroll";
import { CV, CONTACT, SECTIONS } from "../../data/cv";

// Pantalla del monitor. El Html mide 2080x1200 px (52x30 unidades del modelo);
// el contenido se maqueta a 1040x600 y se escala con `zoom: 2` para que el
// navegador lo rasterice nítido.
export const DESKTOP_SCREEN = {
  position: [17.6, 114, 5.75],
  rotation: [0, Math.PI / 2 + Math.PI, 0],
  size: [52, 30],
};

function LangSwitch({ lang, onLang }) {
  return (
    <div className="flex overflow-hidden rounded-md border border-line font-mono text-[11px]">
      {["es", "en"].map((l) => (
        <button
          key={l}
          onClick={() => onLang(l)}
          className={`px-2 py-0.5 transition ${lang === l ? "bg-acc/15 text-acc" : "text-faint hover:text-fg"}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function DesktopScreen({ lang, section, onSection, onLang, onContact, onActivate, anchorRef }) {
  const t = CV[lang];
  const scrollRef = useRef(null);
  useScreenScroll(scrollRef, section);

  const path = section === "home" ? "~" : `~/${t.ui.nav[section]}`;

  return (
    <group ref={anchorRef} position={DESKTOP_SCREEN.position} rotation={DESKTOP_SCREEN.rotation}>
      <Html transform occlude zIndexRange={[20, 0]} scale={1}>
        <div
          onPointerDown={onActivate}
          className="h-[1200px] w-[2080px] overflow-hidden rounded-[18px] bg-ink"
          style={{ boxShadow: "inset 0 0 120px rgb(0 0 0 / 0.65)" }}
        >
          <div className="flex h-[600px] w-[1040px] flex-col text-fg" style={{ zoom: 2 }}>
            {/* Barra de título */}
            <div className="flex h-9 shrink-0 items-center justify-between border-b border-line bg-panel/80 px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <p className="font-mono text-[11.5px] text-dim">
                gonzalo@portfolio: <span className="text-acc2">{path}</span>
              </p>
              <LangSwitch lang={lang} onLang={onLang} />
            </div>

            <div className="flex min-h-0 flex-1">
              {/* Navegación lateral */}
              <nav className="flex w-[196px] shrink-0 flex-col border-r border-line bg-panel/40 px-3 py-4">
                <p className="mb-2 px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">explorer</p>
                {SECTIONS.map((id, i) => {
                  const active = id === section;
                  return (
                    <button
                      key={id}
                      onClick={() => onSection(id)}
                      className={`group mb-0.5 flex items-center gap-2 rounded-md px-2 py-1.5 text-left font-mono text-[12.5px] transition ${
                        active ? "bg-acc/10 text-acc" : "text-dim hover:bg-white/[0.03] hover:text-fg"
                      }`}
                    >
                      <span className={`w-4 text-[10.5px] ${active ? "text-acc" : "text-faint"}`}>{i === 0 ? "~" : i}</span>
                      {t.ui.nav[id]}
                      {active && <span className="ml-auto text-[10px]">●</span>}
                    </button>
                  );
                })}

                <div className="mt-auto space-y-2 px-1">
                  <a
                    href={CONTACT.cv[lang]}
                    download
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-center gap-1.5 rounded-md bg-acc px-2 py-1.5 font-mono text-[11.5px] font-semibold text-ink transition hover:bg-acc/85"
                  >
                    ↓ {t.ui.downloadCv}
                  </a>
                  <div className="space-y-0.5 pt-1 text-center font-mono text-[9.5px] text-faint">
                    {t.ui.keys.split(" · ").map((k) => (
                      <p key={k}>{k}</p>
                    ))}
                  </div>
                </div>
              </nav>

              {/* Contenido */}
              <main ref={scrollRef} className="term-scroll min-w-0 flex-1 px-9 py-7">
                <Section section={section} lang={lang} onNavigate={onSection} onContact={onContact} />
              </main>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}
