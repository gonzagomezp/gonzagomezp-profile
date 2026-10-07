/** @format */

import { photoIcon } from "./lib/socialImage";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS ya redondea los íconos: va cuadrado.
export default function AppleIcon() {
  return photoIcon(180, 0);
}
