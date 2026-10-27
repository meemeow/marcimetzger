import { IMAGE_VIEWING_MS, READING_WORDS_PER_MINUTE } from "@/lib/constants";

export function readingTimeMs(text: string) {
  const wordCount = text.trim().split(/\s+/).length;
  return Math.round((wordCount / READING_WORDS_PER_MINUTE) * 60_000) + IMAGE_VIEWING_MS;
}
