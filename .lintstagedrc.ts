import path from 'path'

const buildEslintCommand = (filenames: string[]) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`

const config = {
  // Run ESLint on JS/TS files
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  // Run Prettier on other files
  '*.{json,css,scss,md,yml,yaml}': ['prettier --write'],
  // Type check TypeScript files
  '*.{ts,tsx}': [() => 'tsc --noEmit'],
}

export default config
