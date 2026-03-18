import { getSiteUrl } from './site-url';

type StructuredDataLang = 'pl' | 'en';

const contentByLang = {
  pl: {
    pageUrlSuffix: '/',
    languageTag: 'pl-PL',
    title: 'Week-end Development | Strony i aplikacje webowe',
    description:
      'Tworzymy nowoczesne strony i aplikacje webowe w Next.js, NestJS, PostgreSQL i AWS.',
  },
  en: {
    pageUrlSuffix: '/en/',
    languageTag: 'en-US',
    title: 'Week-end Development | Websites and web applications',
    description:
      'We build modern websites and web applications with Next.js, NestJS, PostgreSQL, and AWS.',
  },
} as const;

function getBaseUrl(): string {
  const siteUrl = getSiteUrl();
  const basePath = siteUrl.pathname === '/' ? '' : siteUrl.pathname.replace(/\/$/, '');

  return `${siteUrl.origin}${basePath}`;
}

export function getLandingPageJsonLd(lang: StructuredDataLang): string {
  const baseUrl = getBaseUrl();
  const rootUrl = `${baseUrl}/`;
  const pageContent = contentByLang[lang];
  const pageUrl = `${baseUrl}${pageContent.pageUrlSuffix}`;
  const organizationId = `${rootUrl}#organization`;
  const websiteId = `${rootUrl}#website`;
  const webpageId = `${pageUrl}#webpage`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'WEEK-END DEVELOPMENT',
        url: rootUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/wed-logo.webp`,
          width: 512,
          height: 512,
        },
        sameAs: [
          'https://github.com/Nikovsky',
          'https://github.com/bos-8',
          'https://www.linkedin.com/in/nikolasfeduniewicz/',
          'https://www.linkedin.com/in/kacper-boss/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: rootUrl,
        name: 'WEEK-END DEVELOPMENT',
        inLanguage: ['pl-PL', 'en-US'],
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: pageUrl,
        name: pageContent.title,
        description: pageContent.description,
        inLanguage: pageContent.languageTag,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': organizationId,
        },
      },
    ],
  };

  return JSON.stringify(graph);
}