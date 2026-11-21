import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `Three of us lifted it: you, me, and three.
I said the count. You answered with your back.
On two, the door I'd left unlocked clicked shut.
On three, the beam left the ground.

You went home at six. I am still here
under a beam that neither of us holds.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
