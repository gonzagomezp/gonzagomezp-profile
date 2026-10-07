/** @format */

"use client";

import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import Scene from "./components/Scene";
import Hud from "./components/Hud";
import IntroOverlay from "./components/IntroOverlay";
import ContactDialog from "./components/ContactDialog";
import { SECTIONS } from "./data/cv";

const VIEW_ORDER = ["desktop", "overview", "mobile"];

export default function Home() {
  const [lang, setLangState] = useState("en");
  const [section, setSection] = useState("home");
  const [view, setView] = useState("desktop");
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [introGone, setIntroGone] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const defaultDevice = useRef("desktop");

  // Idioma: el guardado, o el del navegador. En pantallas verticales arranca en el celular.
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem("lang");
    } catch {}
    setLangState(saved || (navigator.language?.toLowerCase().startsWith("es") ? "es" : "en"));
    if (window.innerWidth < window.innerHeight) {
      defaultDevice.current = "mobile";
      setView("mobile");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const onReady = useCallback(() => setReady(true), []);

  const start = useCallback(() => {
    setStarted(true);
    setTimeout(() => setIntroGone(true), 1300);
  }, []);

  const goSection = useCallback(
    (id) => {
      setSection(id);
      setView((v) => (v === "overview" ? defaultDevice.current : v));
    },
    []
  );

  // Atajos: 1-6 secciones, 0 inicio, Esc volver, ←/→ cambiar de vista.
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!started) {
        if (e.key === "Enter" && ready) start();
        return;
      }
      if (contactOpen) {
        if (e.key === "Escape") setContactOpen(false);
        return;
      }
      const n = Number(e.key);
      if (e.key.length === 1 && n >= 0 && n < SECTIONS.length) {
        goSection(SECTIONS[n]);
      } else if (e.key === "Escape") {
        if (section !== "home") setSection("home");
        else setView("overview");
      } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const step = e.key === "ArrowRight" ? 1 : -1;
        setView((v) => VIEW_ORDER[Math.min(VIEW_ORDER.length - 1, Math.max(0, VIEW_ORDER.indexOf(v) + step))]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, ready, start, section, goSection, contactOpen]);

  const openContact = useCallback(() => setContactOpen(true), []);
  const screen = { lang, section, onSection: goSection, onLang: setLang, onContact: openContact };

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#030504]">
      <Canvas shadows="percentage" dpr={[1, 2]} camera={{ fov: 40, near: 0.5, far: 2000, position: [-200, 260, 160] }} gl={{ antialias: false }}>
        <Scene started={started} view={view} onView={setView} screen={screen} onReady={onReady} />
      </Canvas>

      <Hud lang={lang} onLang={setLang} view={view} onView={setView} onContact={openContact} visible={started} />

      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} lang={lang} />

      {!introGone && <IntroOverlay lang={lang} onLang={setLang} ready={ready} leaving={started} onStart={start} />}
    </main>
  );
}
