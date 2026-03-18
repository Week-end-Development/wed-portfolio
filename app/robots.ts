import type { MetadataRoute } from 'next';
import { getSiteUrl } from '../lib/site-url';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const basePath = siteUrl.pathname === '/' ? '' : siteUrl.pathname.replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl.origin}${basePath}/sitemap.xml`,
    host: siteUrl.origin,
  };
}
