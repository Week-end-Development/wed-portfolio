import type { MetadataRoute } from 'next';
import { getSiteUrl } from '../lib/site-url';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const basePath = siteUrl.pathname === '/' ? '' : siteUrl.pathname.replace(/\/$/, '');
  const absoluteUrl = (path: string) => `${siteUrl.origin}${basePath}${path}`;
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/en/'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
