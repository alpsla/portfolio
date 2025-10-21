import fs from 'node:fs';
import path from 'node:path';

type Kind = 'video' | 'pdf' | 'slide' | 'image' | 'link' | 'doc';
const repoRoot = process.cwd();
const assetsRoot = path.join(repoRoot, 'public', 'assets');

const extToKind: Record<string, Kind> = {
  '.mp4': 'video',
  '.mov': 'video',
  '.mkv': 'video',
  '.webm': 'video',
  '.pdf': 'pdf',
  '.ppt': 'slide',
  '.pptx': 'slide',
  '.png': 'image',
  '.jpg': 'image',
  '.jpeg': 'image',
  '.gif': 'image',
  '.webp': 'image',
};

function detectKind(file: string): Kind {
  const ext = path.extname(file).toLowerCase();
  return extToKind[ext] ?? 'doc';
}

function listFilesRecursive(dir: string): string[] {
  const out: string[] = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFilesRecursive(full));
    else out.push(full);
  }
  return out;
}

function toPublicSrc(absPath: string): string {
  const rel = path.relative(path.join(repoRoot, 'public'), absPath);
  return '/' + rel.split(path.sep).join('/');
}

function printForSlug(slug: string) {
  const slugDir = path.join(assetsRoot, slug);
  if (!fs.existsSync(slugDir)) {
    console.error(`No assets found for slug: ${slug}`);
    return;
  }
  const files = listFilesRecursive(slugDir);
  const attachments = files.map((abs) => {
    const src = toPublicSrc(abs);
    const title = path.basename(abs);
    const kind = detectKind(abs);
    return { kind, title, src, sensitivity: 'public' as const };
  });

  console.log('\n// Attachments for', slug);
  console.log(JSON.stringify(attachments, null, 2));

  const stub = {
    id: slug,
    slug,
    title: slug
      .split('-')
      .map((s) => (s[0] ? s[0].toUpperCase() + s.slice(1) : s))
      .join(' '),
    owner: '',
    summary: '',
    problem: '',
    solution: '',
    techStack: [],
    metrics: [],
    screenshots: [],
    status: 'draft' as const,
    attachments,
    links: [],
    tags: [
      { key: 'platform:apple', label: 'Apple' },
      { key: 'platform:android', label: 'Android' },
    ],
  };
  console.log('\n// Full PROJECT stub for', slug);
  console.log(JSON.stringify(stub, null, 2));
}

function main() {
  const slugArgIdx = process.argv.indexOf('--slug');
  if (slugArgIdx !== -1 && process.argv[slugArgIdx + 1]) {
    printForSlug(process.argv[slugArgIdx + 1]);
    return;
  }
  if (!fs.existsSync(assetsRoot)) {
    console.error('No public/assets directory found.');
    process.exit(1);
  }
  for (const entry of fs.readdirSync(assetsRoot, { withFileTypes: true })) {
    if (entry.isDirectory()) printForSlug(entry.name);
  }
}

main();


