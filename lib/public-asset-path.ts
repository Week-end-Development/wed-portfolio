import fs from 'node:fs';
import path from 'node:path';

function getGitHubPagesBasePath(): string {
  const isProd = process.env.NODE_ENV === 'production';
  const githubRepository = process.env.GITHUB_REPOSITORY ?? '';
  const repoName = githubRepository.split('/')[1] ?? '';
  const isUserOrOrgPages = repoName.endsWith('.github.io');

  const hasCustomDomain =
    fs.existsSync(path.join(process.cwd(), 'public', 'CNAME')) ||
    fs.existsSync(path.join(process.cwd(), 'CNAME'));

  if (!isProd || !repoName || isUserOrOrgPages || hasCustomDomain) {
    return '';
  }

  return `/${repoName}`;
}

const publicAssetBasePath = getGitHubPagesBasePath();

export function getPublicAssetPath(assetPath: string): string {
  const normalizedPath = assetPath.startsWith('/')
    ? assetPath
    : `/${assetPath}`;

  return `${publicAssetBasePath}${normalizedPath}`;
}
