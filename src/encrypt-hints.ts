import { existsSync } from "https://deno.land/std@0.204.0/fs/exists.ts";
import { encrypt } from "./crypto.ts";

const INPUT_PATH = "./plaintext-hints.json"
const OUTPUT_PATH = "./src/hints.json"

if (!existsSync(INPUT_PATH)) {
  console.error(`Could not load hints from ${INPUT_PATH}, make sure file exists.`)
  Deno.exit()
}

const plaintextHints = await Deno.readTextFile(INPUT_PATH);
const keyHintMapping = JSON.parse(plaintextHints) as Record<string, string>
const encryptedHintPromises = Object.entries(keyHintMapping).map(
  ([password, hintText]) => encrypt(hintText, password.toLowerCase())
);
const encryptedHints = await Promise.all(encryptedHintPromises)

await Deno.writeTextFile(OUTPUT_PATH, JSON.stringify(encryptedHints, null, 2));
