# Project Setup (Pinned Versions)

## Versions (use exactly)
- Node.js: 20.11.1
- npm: 10.5.0

### Core Dependencies
- next: 14.2.5
- react: 18.3.1
- react-dom: 18.3.1

### Dev Dependencies
- typescript: 5.6.3
- @types/react: 18.3.5
- @types/node: 20.11.30
- eslint: 8.57.0
- eslint-config-next: 14.2.5
- prettier: 3.3.3
- tsx: 4.19.2
- **tailwindcss: 3.4.1** (Important: Use v3, not v4)
- **postcss: 8.4.35**
- **autoprefixer: 10.4.17**
- @testing-library/react: 16.3.0
- @testing-library/jest-dom: 6.9.1
- jest: 30.2.0
- jest-environment-jsdom: 30.2.0
- husky: 9.1.7
- lint-staged: 16.2.5

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

## Install dependencies

### Option 1: Install from package.json (Recommended)
```bash
npm install
```

### Option 2: Install exact versions manually
```bash
# Core dependencies
npm i -E next@14.2.5 react@18.3.1 react-dom@18.3.1

# Dev dependencies
npm i -D -E typescript@5.6.3 @types/react@18.3.5 @types/node@20.11.30 \
  eslint@8.57.0 eslint-config-next@14.2.5 prettier@3.3.3 tsx@4.19.2

# Tailwind CSS (IMPORTANT: v3, not v4)
npm i -D tailwindcss@^3.4.1 postcss@^8.4.35 autoprefixer@^10.4.17

# Testing libraries (optional)
npm i -D @testing-library/react@^16.3.0 @testing-library/jest-dom@^6.9.1 \
  jest@^30.2.0 jest-environment-jsdom@^30.2.0

# Git hooks (optional)
npm i -D husky@^9.1.7 lint-staged@^16.2.5
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

## Configuration Files

These files should already exist in the repository. If missing, create them:

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;
```

### .eslintrc.json
```json
{
  "extends": ["next/core-web-vitals"]
}
```

### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
```

### postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}
```

## Environment Variables

Create `.env.local` in the project root:

```bash
# Create environment file
echo "NEXT_PUBLIC_MODE=internal" > .env.local
```

Or manually create `.env.local`:
```env
# Build mode: internal or external
NEXT_PUBLIC_MODE=internal
```

**Note:** `.env.local` is gitignored. Each developer needs to create their own.

## Run locally
```bash
# Make sure dependencies are installed
npm install

# Start development server
npm run dev
```

The server will start at http://localhost:3000 (or 3001 if 3000 is in use).

## Build/validate (public-safe)
```bash
# Build for external/public consumption
NEXT_PUBLIC_MODE=external npm run build || true

# Validate external build safety
npm run validate:external
```

## Complete First-Time Setup

Follow these steps in order for a fresh setup:

```bash
# 1. Clone and navigate to project
git clone <repo-url> portfolio
cd portfolio

# 2. Install dependencies
npm install

# 3. Create environment file
echo "NEXT_PUBLIC_MODE=internal" > .env.local

# 4. Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Troubleshooting

### Tailwind CSS PostCSS Plugin Error

**Error:** `It looks like you're trying to use tailwindcss directly as a PostCSS plugin`

**Solution:**
```bash
# Uninstall Tailwind v4 and install v3
npm uninstall tailwindcss
npm install -D tailwindcss@^3.4.1 postcss autoprefixer

# Ensure postcss.config.js uses .js extension (not .mjs)
# Ensure tailwind.config.js uses .js extension (not .ts)
```

### Port Already in Use

**Symptom:** `⚠ Port 3000 is in use, trying 3001 instead`

**Solution:**
```bash
# Kill existing Next.js dev servers
pkill -f "next dev"

# Then restart
npm run dev
```

### Environment Variables Not Loading

**Symptom:** SafetyBanner not showing or wrong build mode

**Solution:**
```bash
# 1. Verify .env.local exists and has correct content
cat .env.local

# 2. Restart dev server (required for env changes)
pkill -f "next dev"
npm run dev

# 3. Look for confirmation in terminal:
# "- Environments: .env.local" or "Reload env: .env.local"
```

### Missing .next Directory or Build Manifest Errors

**Symptom:** `ENOENT: no such file or directory, open '.next/fallback-build-manifest.json'`

**Solution:**
```bash
# Clean and restart
rm -rf .next
npm run dev
```

### Module Not Found Errors

**Symptom:** Cannot find module errors for components or utilities

**Solution:**
```bash
# Ensure all configuration files exist
ls -la next.config.js .eslintrc.json tailwind.config.js postcss.config.js
ls -la src/app/layout.tsx src/app/globals.css

# If any are missing, see "Configuration Files" section above
```

## Team Prompt (for Cursor AI)

"Please set up my environment using SETUP.md: install Node 20.11.1 (nvm), install all dependencies including Tailwind CSS v3, create .env.local with NEXT_PUBLIC_MODE=internal, then run npm run dev. Verify all configuration files exist (next.config.js, .eslintrc.json, tailwind.config.js, postcss.config.js, src/app/layout.tsx, src/app/globals.css). Use exact commands from SETUP.md."
