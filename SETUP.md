# Project Setup (Pinned Versions)

## Versions (use exactly)
- Node.js: 20.11.1
- npm: 10.5.0

Packages:
- next: 14.2.5
- react: 18.3.1
- react-dom: 18.3.1
- typescript: 5.6.3
- @types/react: 18.3.5
- @types/node: 20.11.30
- eslint: 8.57.0
- eslint-config-next: 14.2.5
- prettier: 3.3.3
- tsx: 4.19.2

## Install Node (macOS with nvm)
```bash
brew install nvm
mkdir -p ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
nvm install 20.11.1
nvm use 20.11.1
node -v
npm -v
```

## Optional pin file
```bash
echo "v20.11.1" > .nvmrc
```

## Install dependencies (exact versions)
```bash
npm i -E next@14.2.5 react@18.3.1 react-dom@18.3.1
npm i -D -E typescript@5.6.3 @types/react@18.3.5 @types/node@20.11.30 \
  eslint@8.57.0 eslint-config-next@14.2.5 prettier@3.3.3 tsx@4.19.2
```

## package.json scripts (merge with existing)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "validate:external": "tsx scripts/validate-external.ts"
  }
}
```

## Create next.config.js (if missing)
```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
```

## .eslintrc.json (if missing)
```json
{ "extends": ["next/core-web-vitals"] }
```

## Run locally
```bash
npm install
npm run dev
```

## Build/validate (public-safe)
```bash
NEXT_PUBLIC_MODE=external npm run build || true
npm run validate:external
```

## Team prompt (Cursor)
“Please prepare my environment using SETUP.md in the repo: install Node 20.11.1 (nvm), npm 10.5.0, install pinned deps exactly as listed, create next.config.js and .eslintrc.json if missing, then run npm run dev and verify validate:external passes. Use the exact commands from SETUP.md.”
