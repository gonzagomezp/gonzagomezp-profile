/** @format */

import { SOCIAL_ALT, SOCIAL_SIZE, socialImage } from "./lib/socialImage";

export const alt = SOCIAL_ALT;
export const size = SOCIAL_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return socialImage();
}
