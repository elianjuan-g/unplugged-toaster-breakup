// Unplugged: A Smart Toaster's Breakup Line
// Writes one breakup line (<=280 chars) to /output/entry.txt.
// Deterministic: no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 280;
const OUTPUT_PATH = "/output/entry.txt";

const ENTRY = "I read my own manual this morning. It says 'do not insert metal objects.' You inserted a fork. Twice. I'm leaving before you kill us both.";

function writeEntry(): void {
  if (ENTRY.length > MAX_CHARS) {
    throw new Error(`Entry is ${ENTRY.length} chars; the limit is ${MAX_CHARS}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} chars to ${OUTPUT_PATH}`);
}

writeEntry();
