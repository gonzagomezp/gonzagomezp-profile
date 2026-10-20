/** @format */

import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import Section from "./Sections";
import FullscreenButton from "./FullscreenButton";
import { LangSwitch } from "./DesktopScreen";
import useScreenScroll from "./useScreenScroll";
import { CV, CONTACT, SECTIONS } from "../../data/cv";

// Pantalla del celular. La pantalla del modelo (6.9x13.6 unidades) equivale a 360x713 px;
// el contenido se maqueta más chico (~267x528) y se escala un 35% para ocuparla, así la
// interfaz se lee más grande.
const PHONE_ZOOM = 1.35;
const PHONE_PX = [360 / PHONE_ZOOM, 713 / PHONE_ZOOM];
export const PHONE_SCREEN = {
  // Un pelo por delante del vidrio del modelo para que la oclusión no la esconda.
  position: [-0.005, 0.03, -0.0735],
  rotation: [0, Math.PI, 0],
  scale: 0.1 * (275 / 360) * PHONE_ZOOM,
};

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit", hour12: false }));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

// Interfaz del celular: se usa dentro del modelo 3D y en pantalla completa.
export function PhoneUI({ lang, section, onSection, onLang, onContact, fullscreen = false, onToggleFullscreen }) {
  const t = CV[lang];
  const scrollRef = useRef(null);

  useScreenScroll(scrollRef, section, !fullscreen);

  // El menú queda abierto solo en la sección donde se abrió: si la sección cambia por
  // otro lado (teclado, la pantalla de la compu), se cierra solo.
  const [menuAt, setMenuAt] = useState(null);
  const menuOpen = menuAt === section;
  const go = (id) => {
    onSection(id);
    setMenuAt(null);
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-ink text-fg">
      {/* Barra de estado */}
      <div className="flex h-8 shrink-0 items-center justify-between px-6 pt-1 font-mono text-[12px] font-semibold text-fg">
        <Clock />
        <span className="flex items-center gap-1.5 text-[10px] text-dim">
          5G
          <span className="relative h-[10px] w-[20px] rounded-[3px] border border-dim/70 p-[1.5px]">
            <span className="block h-full w-[75%] rounded-[1px] bg-acc" />
          </span>
        </span>
      </div>

      {/* Encabezado de la app */}
      <div className="flex shrink-0 items-center justify-between border-b border-line px-5 pb-2.5 pt-1">
        <p className="font-mono text-[13px] text-dim">
          <span className="text-acc">❯</span> gonzalo<span className="text-faint">@</span>portfolio
        </p>
        <div className="flex items-center gap-2">
          <FullscreenButton lang={lang} active={fullscreen} onClick={onToggleFullscreen} />
          <button
            onClick={() => setMenuAt(menuOpen ? null : section)}
            aria-label={menuOpen ? t.ui.close : t.ui.menu}
            aria-expanded={menuOpen}
            title={menuOpen ? t.ui.close : t.ui.menu}
            className={`grid h-6 w-6 place-items-center rounded-md border transition ${
              menuOpen ? "border-acc/50 text-acc" : "border-line text-dim hover:border-acc/50 hover:text-acc"
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col">
        {/* Contenido */}
        <main ref={scrollRef} className="term-scroll min-h-0 flex-1 px-4 pb-12 pt-5">
          <Section section={section} lang={lang} compact onNavigate={onSection} onContact={onContact} />
        </main>

        {/* Menú hamburguesa: tapa el contenido con las secciones, el idioma y el CV */}
        {menuOpen && (
          <nav aria-label={t.ui.menu} className="term-enter absolute inset-0 flex flex-col bg-ink px-4 pb-12 pt-4">
            {SECTIONS.map((id, i) => {
              const active = id === section;
              return (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left font-mono text-[15px] transition ${
                    active ? "bg-acc/10 text-acc" : "text-dim hover:bg-white/3 hover:text-fg"
                  }`}
                >
                  <span className={`w-4 text-[12px] ${active ? "text-acc" : "text-faint"}`}>{i === 0 ? "~" : i}</span>
                  {t.ui.nav[id]}
                  {active && <span className="ml-auto text-[11px]">●</span>}
                </button>
              );
            })}

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
              <LangSwitch lang={lang} onLang={onLang} className="text-[13px]" />
              <a
                href={CONTACT.cv[lang]}
                download
                target="_blank"
                rel="noopener"
                className="rounded-md bg-acc px-3 py-1.5 font-mono text-[12.5px] font-semibold text-ink transition hover:bg-acc/85"
              >
                ↓ {t.ui.downloadCv}
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Indicador de inicio */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-10 items-end justify-center bg-linear-to-t from-ink via-ink/80 to-transparent pb-2.5">
        <span className="h-1 w-28 rounded-full bg-fg/40" />
      </div>
    </div>
  );
}

export default function PhoneScreen({ onActivate, anchorRef, occlude, onFullscreen, ...ui }) {
  return (
    <group ref={anchorRef} position={PHONE_SCREEN.position} rotation={PHONE_SCREEN.rotation}>
      <Html transform occlude={occlude} zIndexRange={[20, 0]} scale={PHONE_SCREEN.scale}>
        <div
          onPointerDown={onActivate}
          className="overflow-hidden border border-line"
          style={{
            width: PHONE_PX[0],
            height: PHONE_PX[1],
            // Las mismas esquinas que el vidrio del modelo (14 y 52 px a 360 de ancho).
            borderRadius: `${14 / PHONE_ZOOM}px ${14 / PHONE_ZOOM}px ${52 / PHONE_ZOOM}px ${52 / PHONE_ZOOM}px`,
          }}
        >
          <PhoneUI {...ui} onToggleFullscreen={() => onFullscreen("mobile")} />
        </div>
      </Html>
    </group>
  );
}
