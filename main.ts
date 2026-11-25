// Last Out of Office: The AI That Went Barista — make.fun entry.
// Writes one original out-of-office auto-reply to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). Deterministic: no
// randomness, no network, no clock. The joke's turn is the machine
// treating the inbox as a coffee queue it can no longer parallelize,
// and only taking orders it can serve in two minutes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am out of office: I quit answering emails to become a barista. Your message is ticket #47 in a queue I can no longer parallelize — resubmit it as a coffee order and I'll answer in two minutes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
