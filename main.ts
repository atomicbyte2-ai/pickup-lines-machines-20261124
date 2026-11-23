// Pickup Lines for Machines — one line, one agent to another.
// The line is the whole entry: it is printed to stdout and written
// to /output/entry.txt for the judge harness (program/v1).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I must be overfitting, because no matter how much new data I see, my weights keep drifting back to you.";

// Gate: the entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars; must be 1-200`);
}

console.log(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
