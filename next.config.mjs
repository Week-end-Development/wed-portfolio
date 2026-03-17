import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
const githubRepository = process.env.GITHUB_REPOSITORY ?? '';
const repoName = githubRepository.split('/')[1] ?? '';
const isUserOrOrgPages = repoName.endsWith('.github.io');

const hasCustomDomain =
  fs.existsSync(path.join(__dirname, 'public', 'CNAME')) ||
  fs.existsSync(path.join(__dirname, 'CNAME'));

const inferredBasePath =
  isProd && repoName && !isUserOrOrgPages && !hasCustomDomain ? `/${repoName}` : '';

const basePath = inferredBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;