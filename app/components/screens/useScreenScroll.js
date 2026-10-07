/** @format */

import { useEffect } from "react";

// Scroll de las pantallas del modelo 3D manejado a mano.
// El scroll nativo sobre elementos con transform 3D no es confiable (el navegador
// a veces no detecta qué contenedor scrollear), así que la rueda y el touch se
// traducen a scrollTop, con suavizado e inercia. `resetKey` vuelve arriba al cambiar.
export default function useScreenScroll(ref, resetKey) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTop = 0;

    let target = 0;
    let raf = 0;
    let lastY = 0;
    let lastT = 0;
    let velocity = 0;

    const clamp = (v) => Math.max(0, Math.min(el.scrollHeight - el.clientHeight, v));
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // Rueda: se acerca al objetivo con easing.
    const ease = () => {
      const diff = target - el.scrollTop;
      if (Math.abs(diff) < 0.5) {
        el.scrollTop = target;
        raf = 0;
        return;
      }
      el.scrollTop += diff * 0.22;
      raf = requestAnimationFrame(ease);
    };

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? el.clientHeight : 1;
      target = clamp((raf ? target : el.scrollTop) + e.deltaY * unit);
      if (!raf) raf = requestAnimationFrame(ease);
    };

    // Touch: el desplazamiento en pantalla se convierte a píxeles del contenido
    // (la pantalla está escalada y en perspectiva).
    const scale = () => {
      const h = el.getBoundingClientRect().height;
      return h > 0 && el.offsetHeight > 0 ? h / el.offsetHeight : 1;
    };

    const glide = () => {
      velocity *= 0.95;
      if (Math.abs(velocity) < 0.05) {
        raf = 0;
        return;
      }
      el.scrollTop = clamp(el.scrollTop + velocity * 16);
      raf = requestAnimationFrame(glide);
    };

    const onTouchStart = (e) => {
      stop();
      lastY = e.touches[0].clientY;
      lastT = performance.now();
      velocity = 0;
    };

    const onTouchMove = (e) => {
      const y = e.touches[0].clientY;
      const now = performance.now();
      const dy = (lastY - y) / scale();
      e.preventDefault();
      el.scrollTop = clamp(el.scrollTop + dy);
      velocity = dy / Math.max(1, now - lastT);
      lastY = y;
      lastT = now;
    };

    const onTouchEnd = () => {
      if (Math.abs(velocity) > 0.05) raf = requestAnimationFrame(glide);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      stop();
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [ref, resetKey]);
}
