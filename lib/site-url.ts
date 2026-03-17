import fs from 'node:fs';
import path from 'node:path';

const FALLBACK_SITE_URL = 'https://example.com';

function parseCustomDomainUrl(domain: string): URL | null {
  const trimmed = domain.trim();

  if (!trimmed) {
    return null;
  }

  const normalized = trimmed.replace(/^https?:\/\//i, '').replace(/\/+$/, '');

  try {
    return new URL(`https://${normalized}`);
  } catch {
    return null;
  }
}

function getCustomDomainUrl(): URL | null {
  const candidates = [
    path.join(process.cwd(), 'public', 'CNAME'),
    path.join(process.cwd(), 'CNAME'),
  ];

  for (const filePath of candidates) {
    try {
      if (!fs.existsSync(filePath)) {
        continue;
      }

      const raw = fs.readFileSync(filePath, 'utf8');
      const domain = raw.split(/\r?\n/)[0] ?? '';
      const parsed = parseCustomDomainUrl(domain);

      if (parsed) {
        return parsed;
      }
    } catch {
      // Ignore unreadable or invalid CNAME files and continue with fallback logic.
    }
  }

  return null;
}

function getGithubPagesSiteUrl(): URL | null {
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository) {
    return null;
  }

  const [owner, repoName] = repository.split('/');

  if (!owner || !repoName) {
    return null;
  }

  if (repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    return new URL(`https://${owner}.github.io`);
  }

  return new URL(`https://${owner}.github.io/${repoName}`);
}

export function getSiteUrl(): URL {
  const customDomainUrl = getCustomDomainUrl();

  if (customDomainUrl) {
    return customDomainUrl;
  }

  const githubPagesSiteUrl = getGithubPagesSiteUrl();

  if (githubPagesSiteUrl) {
    return githubPagesSiteUrl;
  }

  return new URL(FALLBACK_SITE_URL);
}
