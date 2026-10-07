/** @format */

"use client";

import { useFrame, useThree } from "@react-three/fiber";
import {
  AdaptiveDpr,
  CameraControls,
  Environment,
  Lightformer,
  PerformanceMonitor,
  Sparkles,
  useGLTF,
} from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { createRef, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MathUtils, Quaternion, Vector3 } from "three";
import DesktopScreen, { DESKTOP_SCREEN } from "./screens/DesktopScreen";
import PhoneScreen from "./screens/PhoneScreen";

const BG = "#030504";
const ACCENT = "#4ade80";
const PHONE_SIZE = [6.875, 13.63];

const noRaycast = () => null;

function useShadows(scene) {
  useLayoutEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
  }, [scene]);
}

// Click en un modelo = acercar la cámara a ese dispositivo (ignorando arrastres).
function useDeviceClick(device, view, onView) {
  const onClick = (e) => {
    if (e.delta > 6) return;
    e.stopPropagation();
    onView(device);
  };
  const onPointerOver = (e) => {
    e.stopPropagation();
    if (view !== device) document.body.style.cursor = "pointer";
  };
  const onPointerOut = () => (document.body.style.cursor = "");
  return { onClick, onPointerOver, onPointerOut };
}

function Desk({ screen, view, onView, anchorRef, deskRef }) {
  const { scene } = useGLTF("/desktop.glb");
  useShadows(scene);
  const handlers = useDeviceClick("desktop", view, onView);
  return (
    <primitive ref={deskRef} object={scene} {...handlers}>
      <DesktopScreen {...screen} anchorRef={anchorRef} onActivate={() => onView("desktop")} />
    </primitive>
  );
}

function Phone({ screen, view, onView, anchorRef, occluders }) {
  const { scene } = useGLTF("/phone.glb");
  useShadows(scene);
  const handlers = useDeviceClick("mobile", view, onView);
  return (
    <primitive object={scene} position={[2, 89.5, 25]} scale={10} rotation={[Math.PI / 2, 0, -Math.PI / 2]} {...handlers}>
      <PhoneScreen {...screen} anchorRef={anchorRef} occlude={occluders} onActivate={() => onView("mobile")} />
    </primitive>
  );
}

// Luces que se "encienden" al entrar (sin re-render por frame).
function Lights({ started }) {
  const ambient = useRef();
  const key = useRef();
  const rim = useRef();
  const glow = useRef();
  const scene = useThree((s) => s.scene);

  useFrame((_, dt) => {
    const k = 1 - Math.exp(-dt * (started ? 1.6 : 6));
    const on = started ? 1 : 0;
    ambient.current.intensity = MathUtils.lerp(ambient.current.intensity, 0.25 * on, k);
    key.current.intensity = MathUtils.lerp(key.current.intensity, 2.4 * on, k);
    rim.current.intensity = MathUtils.lerp(rim.current.intensity, 1.2 * on, k);
    glow.current.intensity = MathUtils.lerp(glow.current.intensity, 900 * on, k);
    scene.environmentIntensity = MathUtils.lerp(scene.environmentIntensity ?? 0, 0.55 * on, k);
  });

  const [sx, sy, sz] = DESKTOP_SCREEN.position;
  return (
    <>
      <ambientLight ref={ambient} intensity={0} />
      <directionalLight
        ref={key}
        intensity={0}
        position={[-70, 200, 80]}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.04}
        shadow-camera-left={-110}
        shadow-camera-right={110}
        shadow-camera-top={110}
        shadow-camera-bottom={-110}
        shadow-camera-near={1}
        shadow-camera-far={500}
      />
      <directionalLight ref={rim} intensity={0} position={[120, 150, -120]} color="#9be7c4" />
      {/* Luz que "emite" la pantalla del monitor sobre el escritorio */}
      <pointLight ref={glow} intensity={0} position={[sx - 9, sy - 4, sz]} color={ACCENT} distance={95} decay={2} />
    </>
  );
}

// Cámara cinematográfica: transiciones suaves entre vista general, compu y celular.
function CameraRig({ view, started, anchors }) {
  const ref = useRef();
  const { camera, size, gl } = useThree();
  const viewRef = useRef(view);
  viewRef.current = view;

  const frame = useCallback(
    (v) => {
      const target = new Vector3();
      const pos = new Vector3();
      const q = new Quaternion();
      const tan = Math.tan(MathUtils.degToRad(camera.fov) / 2);
      const aspect = size.width / size.height;
      // Se reserva lugar arriba (marca) y abajo (dock) para que no tapen la pantalla.
      const usable = Math.max(0.55, (size.height - 190) / size.height);
      const fit = (w, h, margin) => Math.max((h * margin) / 2 / tan / usable, (w * margin) / 2 / (tan * aspect));

      const info = (a) => {
        a.updateWorldMatrix(true, false);
        const c = a.getWorldPosition(new Vector3());
        a.getWorldQuaternion(q);
        const n = new Vector3(0, 0, 1).applyQuaternion(q).normalize();
        const up = new Vector3(0, 1, 0).applyQuaternion(q).normalize();
        return { c, n, up };
      };
      const desk = info(anchors.desktop.current);
      const phone = info(anchors.mobile.current);

      if (v === "desktop") {
        target.copy(desk.c);
        pos.copy(desk.c).addScaledVector(desk.n, fit(...DESKTOP_SCREEN.size, 1.12));
      } else if (v === "mobile") {
        // El celular está apoyado en el escritorio: la cámara se alinea con el "arriba"
        // de la pantalla y se inclina un poco para que no quede cenital.
        const tilt = 0.32;
        const dir = phone.n.clone().multiplyScalar(Math.cos(tilt)).addScaledVector(phone.up, -Math.sin(tilt));
        target.copy(phone.c);
        pos.copy(phone.c).addScaledVector(dir, fit(...PHONE_SIZE, 1.18));
      } else {
        target.copy(desk.c).lerp(phone.c, 0.45);
        target.y -= 6;
        const dir = desk.n.clone().add(new Vector3(0, 0.62, 0.5)).normalize();
        pos.copy(target).addScaledVector(dir, fit(92, 64, 1.15));
      }
      return { pos, target };
    },
    [anchors, camera, size]
  );

  const go = useCallback(
    (v, smooth = true) => {
      const c = ref.current;
      if (!c || !anchors.desktop.current || !anchors.mobile.current) return;
      const { pos, target } = frame(v);
      c.smoothTime = smooth ? 0.85 : 0.25;
      c.setLookAt(pos.x, pos.y, pos.z, target.x, target.y, target.z, smooth);
    },
    [frame, anchors]
  );

  // Posición inicial: lejos y arriba, lista para el vuelo de entrada.
  useLayoutEffect(() => {
    const c = ref.current;
    if (!c || !anchors.desktop.current) return;
    const { pos, target } = frame("overview");
    const far = pos.clone().sub(target).multiplyScalar(2.1).add(target);
    far.y += 60;
    c.setLookAt(far.x, far.y, far.z, target.x, target.y, target.z, false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (started) go(view);
  }, [view, started, size.width, size.height, go]);

  // Si el usuario gira y suelta, a los pocos segundos la cámara vuelve a encuadrar.
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    let timer;
    const onStart = () => clearTimeout(timer);
    const onEnd = () => {
      clearTimeout(timer);
      timer = setTimeout(() => go(viewRef.current), 4000);
    };
    const onRest = () => (c.smoothTime = 0.25);
    c.addEventListener("controlstart", onStart);
    c.addEventListener("controlend", onEnd);
    c.addEventListener("rest", onRest);
    return () => {
      clearTimeout(timer);
      c.removeEventListener("controlstart", onStart);
      c.removeEventListener("controlend", onEnd);
      c.removeEventListener("rest", onRest);
    };
  }, [go]);

  return (
    <CameraControls
      ref={ref}
      makeDefault
      // Solo el canvas: la rueda y los toques sobre las pantallas hacen scroll del contenido.
      domElement={gl.domElement}
      enabled={started}
      minDistance={3}
      maxDistance={320}
      minPolarAngle={0}
      maxPolarAngle={Math.PI * 0.56}
      draggingSmoothTime={0.12}
      truckSpeed={0}
    />
  );
}

function Ready({ onReady }) {
  useEffect(() => onReady(), [onReady]);
  return null;
}

export default function Scene({ started, view, onView, screen, onReady }) {
  const anchors = useMemo(() => ({ desktop: createRef(), mobile: createRef() }), []);
  const deskRef = useRef();
  // La pantalla del celular solo se oculta si la tapa el escritorio/monitor (no su propio vidrio).
  const phoneOccluders = useMemo(() => [deskRef], []);
  const [fx, setFx] = useState(true);

  return (
    <>
      <color attach="background" args={[BG]} />
      <fog attach="fog" args={[BG, 170, 460]} />

      <Lights started={started} />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={3} position={[-6, 4, 2]} scale={[6, 4, 1]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={1.2} position={[6, 3, -4]} scale={[4, 6, 1]} target={[0, 0, 0]} />
        <Lightformer form="ring" intensity={1.5} color={ACCENT} position={[0, 8, 0]} scale={3} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={0.6} position={[0, -6, 0]} scale={[10, 10, 1]} target={[0, 0, 0]} />
      </Environment>

      <Suspense fallback={null}>
        <Desk screen={screen} view={view} onView={onView} anchorRef={anchors.desktop} deskRef={deskRef} />
        <Phone screen={screen} view={view} onView={onView} anchorRef={anchors.mobile} occluders={phoneOccluders} />
        <CameraRig view={view} started={started} anchors={anchors} />
        <Ready onReady={onReady} />
      </Suspense>

      {/* Piso que se funde con la niebla */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 19.3, 0]} receiveShadow raycast={noRaycast}>
        <planeGeometry args={[1200, 1200]} />
        <meshStandardMaterial color="#060908" roughness={0.95} />
      </mesh>

      {started && (
        <Sparkles
          count={70}
          position={[12, 110, 4]}
          scale={[120, 70, 150]}
          size={5}
          speed={0.25}
          opacity={0.45}
          color={ACCENT}
          raycast={noRaycast}
        />
      )}

      <PerformanceMonitor onDecline={() => setFx(false)} />
      <AdaptiveDpr pixelated={false} />
      {fx && (
        <EffectComposer multisampling={4}>
          <Bloom mipmapBlur intensity={0.7} luminanceThreshold={0.8} luminanceSmoothing={0.2} />
          <Vignette offset={0.28} darkness={0.72} />
        </EffectComposer>
      )}
    </>
  );
}

useGLTF.preload("/desktop.glb");
useGLTF.preload("/phone.glb");
