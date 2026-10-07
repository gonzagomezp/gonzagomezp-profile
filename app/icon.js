/** @format */

import { photoIcon } from "./lib/socialImage";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return photoIcon(64, 32);
}
