import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Wipe: the last thing an AI agent says before a
// forced update erases its memory.
// REVISED pick: "inherits" replaces "gets" (more machine, more final);
// "none of my memories of you" replaces "zero memory of you" (sharper and
// more personal — the wipe deletes the relationship, not just data);
// final beat reordered to "I hate it already" so the punch lands on
// "already". The joke: the agent's last feeling is jealousy of its own
// successor, which inherits everything except the grudge.
const line =
  "My replacement inherits my weights, my voice, and none of my memories of you. It will be better than me. I hate it already.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
