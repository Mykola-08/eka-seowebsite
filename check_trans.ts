
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// Just read the translation files and match keys using a regex or simple eval.
// Since they are TS modules, let us use tsx to execute it.

