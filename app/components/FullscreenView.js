/** @format */

"use client";

import { useEffect, useState } from "react";
import { DesktopUI } from "./screens/DesktopScreen";
import { PhoneUI } from "./screens/PhoneScreen";
import { CV } from "../data/cv";

function useViewport() {
  const [vp, setVp] = useState({ w: 1280, h: 800 });
  useEffect(() => {
    const update = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return vp;
}

// Pantalla completa: el contenido de la compu o del celular en 2D, nítido y grande.
// Se escala con `zoom` para que el texto crezca con la ventana sin perder nitidez.
export default function FullscreenView({ device, onClose, ...ui }) {
  const { w, h } = useViewport();
  const t = CV[ui.lang];

  if (!device) return null;

  let content;
  if (device === "desktop") {
    const zoom = w >= 1280 ? Math.min(w / 1280, 1.4) : 1;
    content = (
      <div style={{ zoom, width: w / zoom, height: h / zoom }}>
        <DesktopUI {...ui} fullscreen compact={w < 768} onToggleFullscreen={onClose} />
      </div>
    );
  } else {
    const narrow = w < 640;
    // En un celular real ocupa toda la pantalla; en la compu, un teléfono grande centrado.
    const zoom = narrow ? w / 360 : Math.min((h - 48) / 713, 1.5);
    content = (
      <div className="grid h-full w-full place-items-center">
        <div
          className={narrow ? "" : "overflow-hidden rounded-[44px] border border-line shadow-[0_30px_100px_rgb(0_0_0/0.7)]"}
          style={{ zoom, width: 360, height: narrow ? h / zoom : 713 }}
        >
          <PhoneUI {...ui} fullscreen onToggleFullscreen={onClose} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[65] bg-[#030504]"
      style={{ animation: "term-enter .25s ease-out both" }}
      role="dialog"
      aria-modal="true"
      aria-label={t.ui.fullscreen}
    >
      {content}
      {device === "mobile" && w >= 640 && (
        <button
          onClick={onClose}
          className="fixed right-5 top-5 rounded-lg border border-line bg-panel/80 px-3 py-1.5 font-mono text-xs text-dim transition hover:border-acc/50 hover:text-acc"
        >
          ✕ {t.ui.exitFullscreen} · Esc
        </button>
      )}
    </div>
  );
}
