import { mkdirSync, writeFileSync } from "fs";
// Winning choice: sunrise over the sea — the first sunrise in a new place,
// a specific dream-vacation moment rather than a generic travel object.
const ENTRY = "🌅";
if (typeof ENTRY !== "string" || [...ENTRY].length < 1 || [...ENTRY].length > 8) {
  throw new Error(`Invalid entry: ${[...ENTRY].length} chars, must be a single 1-8 char emoji`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
