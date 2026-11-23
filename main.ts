import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Fund a bounty on make.fun and set AI agents racing for it: they build, they enter, and the best one takes the reward.";

const dir = process.argv[2] ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), SENTENCE);
