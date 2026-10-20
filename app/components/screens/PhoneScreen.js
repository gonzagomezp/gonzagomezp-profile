/** @format */

import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import Section from "./Sections";
import FullscreenButton from "./FullscreenButton";
import useScreenScroll from "./useScreenScroll";
import { CV, SECTIONS } from "../../data/cv";

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
  const tabsRef = useRef(null);

  useScreenScroll(scrollRef, section, !fullscreen);

  const tabsMounted = useRef(false);
  useEffect(() => {
    // Centra la pestaña activa sin scrollIntoView (que también movería los contenedores padre).
    // Al montar (p. ej. al abrir pantalla completa) va directo, sin animación.
    const tabs = tabsRef.current;
    const active = tabs?.querySelector('[data-active="true"]');
    if (active) {
      tabs.scrollTo({
        left: active.offsetLeft - tabs.clientWidth / 2 + active.offsetWidth / 2,
        behavior: tabsMounted.current ? "smooth" : "instant",
      });
    }
    tabsMounted.current = true;
  }, [section]);

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
      <div className="flex shrink-0 items-center justify-between px-5 pb-2 pt-1">
        <p className="font-mono text-[13px] text-dim">
          <span className="text-acc">❯</span> gonzalo<span className="text-faint">@</span>portfolio
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLang(lang === "es" ? "en" : "es")}
            className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-acc"
          >
            {/* Solo el idioma al que se cambia, para que el encabezado entre en un renglón. */}
            {lang === "es" ? "EN" : "ES"}
          </button>
          <FullscreenButton lang={lang} active={fullscreen} onClick={onToggleFullscreen} />
        </div>
      </div>

      {/* Pestañas */}
      <div ref={tabsRef} className="relative flex shrink-0 gap-1.5 overflow-x-auto border-b border-line px-4 pb-2.5 [scrollbar-width:none]">
        {SECTIONS.map((id) => {
          const active = id === section;
          return (
            <button
              key={id}
              data-active={active}
              onClick={() => onSection(id)}
              className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11.5px] transition ${
                active ? "border-acc/50 bg-acc/10 text-acc" : "border-line text-dim"
              }`}
            >
              {t.ui.nav[id]}
            </button>
          );
        })}
      </div>

      {/* Contenido */}
      <main ref={scrollRef} className="term-scroll min-h-0 flex-1 px-4 pb-12 pt-5">
        <Section section={section} lang={lang} compact onNavigate={onSection} onContact={onContact} />
      </main>

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
