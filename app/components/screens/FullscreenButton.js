/** @format */

import { CV } from "../../data/cv";

// Botón ⛶ para abrir/cerrar la pantalla completa (contenido 2D a pantalla llena).
export default function FullscreenButton({ lang, active, onClick, className = "" }) {
  const label = active ? CV[lang].ui.exitFullscreen : CV[lang].ui.fullscreen;
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`grid h-6 w-6 place-items-center rounded-md border border-line text-dim transition hover:border-acc/50 hover:text-acc ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        {active ? (
          <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
        ) : (
          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
        )}
      </svg>
    </button>
  );
}
