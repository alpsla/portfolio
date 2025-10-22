/*
 * Validator: dependency versions (pinned policy)
 * Fails if critical deps drift from the agreed versions/ranges in SETUP.md
 */

import fs from 'node:fs';
import path from 'node:path';

type Pkg = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

function fail(msg: string): never {
  // eslint-disable-next-line no-console
  console.error(msg);
  process.exit(1);
}

function getPkg(): Pkg {
  const pkgPath = path.join(process.cwd(), 'package.json');
  const raw = fs.readFileSync(pkgPath, 'utf8');
  return JSON.parse(raw) as Pkg;
}

function expectExact(depMap: Record<string, string | undefined>, name: string, expected: string) {
  const v = depMap[name];
  if (!v) fail(`Missing dependency: ${name}`);
  if (v !== expected) fail(`Version drift for ${name}: found ${v}, expected ${expected}`);
}

function expectStartsWith(depMap: Record<string, string | undefined>, name: string, expectedPrefix: string) {
  const v = depMap[name];
  if (!v) fail(`Missing dependency: ${name}`);
  const normalized = v.replace(/^\^|~|>=?/g, '');
  if (!normalized.startsWith(expectedPrefix)) fail(`Version drift for ${name}: found ${v}, expected prefix ${expectedPrefix}.*`);
}

const pkg = getPkg();
const deps = pkg.dependencies || {};
const dev = pkg.devDependencies || {};

// Exact pins
expectExact(deps, 'next', '14.2.5');
expectExact(deps, 'react', '18.3.1');
expectExact(deps, 'react-dom', '18.3.1');
expectExact(dev, 'typescript', '5.6.3');
expectExact(dev, 'eslint', '8.57.0');
expectExact(dev, 'eslint-config-next', '14.2.5');
expectExact(dev, 'prettier', '3.3.3');
expectExact(dev, 'tsx', '4.19.2');

// Range allowances (prefix-based)
expectStartsWith(dev, 'tailwindcss', '3.4.'); // v3 only
expectStartsWith(dev, 'postcss', '8.4.');
expectStartsWith(dev, 'autoprefixer', '10.4.');

// eslint-disable-next-line no-console
console.log('Dependency versions validated.');


