/** @format */

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Imagen para compartir el link (Open Graph / Twitter), generada en el build.
export const SOCIAL_SIZE = { width: 1200, height: 630 };
export const SOCIAL_ALT = "Gonzalo Gómez Pizarro — AI Engineer | Full Stack & Cloud";

export async function photoSrc() {
  const data = await readFile(join(process.cwd(), "public/profile.jpg"), "base64");
  return `data:image/jpeg;base64,${data}`;
}

export async function socialImage() {
  const photo = await photoSrc();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          gap: 64,
          background: "radial-gradient(circle at 25% 40%, #0f2a1c 0%, #070b09 55%, #030504 100%)",
          color: "#dbe7e0",
          fontFamily: "monospace",
        }}
      >
        <img
          src={photo}
          width={300}
          height={300}
          style={{ borderRadius: 40, border: "3px solid rgba(74,222,128,0.55)", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#8b9d93" }}>
            <span style={{ color: "#4ade80" }}>gonzalo@portfolio</span>
            <span>:~$ whoami</span>
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginTop: 22, letterSpacing: -2 }}>Gonzalo</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Gómez Pizarro</div>
          <div style={{ fontSize: 32, color: "#4ade80", marginTop: 26 }}>AI Engineer | Full Stack & Cloud</div>
          <div style={{ fontSize: 24, color: "#56665d", marginTop: 36 }}>gonzagomezp.com</div>
        </div>
      </div>
    ),
    SOCIAL_SIZE
  );
}

export async function photoIcon(size, radius) {
  const photo = await photoSrc();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "transparent" }}>
        <img src={photo} width={size} height={size} style={{ borderRadius: radius, objectFit: "cover" }} />
      </div>
    ),
    { width: size, height: size }
  );
}
