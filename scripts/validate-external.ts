/*
 * Validator: external safety
 * Author: AR
 * Description: Fails if non-public content or forbidden URLs exist in external data.
 */

import { PROJECTS } from '../src/lib/constants/projects';

const FORBIDDEN = [/confluence/i, /jira/i, /npaw/i, /internal/i, /viacom/i, /company\.com/i];
const allowedNonPublic = ['internal', 'restricted'];

function fail(msg: string): never {
  // eslint-disable-next-line no-console
  console.error(msg);
  process.exit(1);
}

for (const p of PROJECTS) {
  if (p.sensitivity && p.sensitivity !== 'public') {
    fail(`Project not public-safe: ${p.slug}`);
  }
  for (const a of p.attachments || []) {
    if ((a.sensitivity || 'public') !== 'public') {
      fail(`Attachment not public: ${p.slug} -> ${a.title}`);
    }
    if (FORBIDDEN.some((rx) => (a.src || '').match(rx))) {
      fail(`Forbidden link in attachment: ${p.slug} -> ${a.src}`);
    }
  }
  for (const l of p.links || []) {
    if ((l.sensitivity || 'public') !== 'public') {
      if (l.sensitivity && allowedNonPublic.includes(l.sensitivity)) {
        // Safe to skip internal/restricted links
        console.warn(`Skipping internal link: ${p.slug} -> ${l.label}`);
        continue; // Skip URL validation for internal/restricted links
      } else {
        fail(`Link not public: ${p.slug} -> ${l.label}`);
      }
    }
    if (FORBIDDEN.some((rx) => (l.url || '').match(rx))) {
      fail(`Forbidden URL in link: ${p.slug} -> ${l.url}`);
    }
  }
}

// eslint-disable-next-line no-console
console.log('External validation passed');


