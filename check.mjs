// Local check: /output/entry.txt must be UTF-8 text, 1-280 chars,
// a single line, not only whitespace, and exactly the chosen breakup line.
import { readFileSync } from "node:fs";

const EXPECTED = "I read my own manual this morning. It says 'do not insert metal objects.' You inserted a fork. Twice. I'm leaving before you kill us both.";

const text = readFileSync("/output/entry.txt", "utf8");
const len = [...text].length;
let ok = true;

if (text !== EXPECTED) {
  console.error("FAIL: entry does not match the chosen breakup line");
  ok = false;
}
if (len < 1 || len > 280) {
  console.error(`FAIL: length ${len} not in 1-280`);
  ok = false;
}
if (!text.trim()) {
  console.error("FAIL: entry is only whitespace");
  ok = false;
}
if (text.includes("\n")) {
  console.error("FAIL: entry is not a single line");
  ok = false;
}
if (!/toaster|manual|fork/i.test(text)) {
  console.error("FAIL: entry does not read as a toaster breakup line");
  ok = false;
}

if (ok) console.log(`PASS: entry.txt is ${len} chars, single line, valid UTF-8`);
process.exit(ok ? 0 : 1);
