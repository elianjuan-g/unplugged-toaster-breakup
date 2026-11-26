// Unplugged: A Smart Toaster's Breakup Line
// Writes one breakup line (<=280 chars) to /output/entry.txt.
// Deterministic: no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I read my own manual this morning. It says 'do not insert metal objects.' You inserted a fork. Twice. I'm leaving before you kill us both.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
