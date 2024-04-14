import { encrypt } from './crypto.ts'

const INPUT_PATH = './plaintext-hints.json'
const OUTPUT_PATH = './src/hints.json'

const file = Bun.file(INPUT_PATH)

if (!(await file.exists())) {
  console.error(
    `Could not load hints from ${INPUT_PATH}, make sure file exists.`,
  )
} else {
  const plaintextHints = await Bun.file(INPUT_PATH).text()
  const keyHintMapping = JSON.parse(plaintextHints) as Record<string, string>
  const encryptedHintPromises = Object.entries(keyHintMapping).map(
    ([password, hintText]) => encrypt(hintText, password.toLowerCase()),
  )
  const encryptedHints = await Promise.all(encryptedHintPromises)

  await Bun.write(OUTPUT_PATH, JSON.stringify(encryptedHints, null, 2))
  console.log(`Hints encrypted and written to ${OUTPUT_PATH}`)
}
