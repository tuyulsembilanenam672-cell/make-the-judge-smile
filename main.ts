// make-the-judge-smile: writes one line about a small good thing today.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The bus driver held the doors at 7:40 while Mrs. Hart shuffled across with her shopping, then tapped the timetable and said it could wait for her.";

const points = [...LINE].length;
if (points < 1 || points > 200) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${points} code points to ${join(outDir, "entry.txt")}`);
