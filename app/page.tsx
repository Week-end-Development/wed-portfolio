import type { Metadata } from 'next';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { DashboardSection } from '@/components/sections/dashboard-section';
import { HeroSection } from '@/components/sections/hero-section';
import { TeamSection } from '@/components/sections/team-section';
import { getLandingPageJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Week-end Development | Strony i aplikacje webowe',
  description:
    'Tworzymy nowoczesne strony i aplikacje webowe w Next.js, NestJS, PostgreSQL i AWS.',
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/',
      'en-US': '/en/',
    },
  },
  openGraph: {
    title: 'Week-end Development | Strony i aplikacje webowe',
    description:
      'Tworzymy nowoczesne strony i aplikacje webowe w Next.js, NestJS, PostgreSQL i AWS.',
    locale: 'pl_PL',
    url: '/',
  },
  twitter: {
    title: 'Week-end Development | Strony i aplikacje webowe',
    description:
      'Tworzymy nowoczesne strony i aplikacje webowe w Next.js, NestJS, PostgreSQL i AWS.',
  },
};

export default function HomePage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 blueprint-bg" />
      <div className="blueprint-bg-active" />
      <div className="scanline pointer-events-none fixed inset-0 z-50 mix-blend-overlay" />

      <Navbar lang="pl" />

      <main
        className="relative overflow-x-hidden bg-background-dark font-sans text-gray-300 antialiased selection:bg-primary selection:text-white"
        id="top"
        lang="pl"
      >
        <HeroSection lang="pl" />
        <DashboardSection lang="pl" />
        <AboutSection lang="pl" />
        <TeamSection lang="pl" />
        <ContactSection lang="pl" />
      </main>

      <Footer lang="pl" />
      <script
        dangerouslySetInnerHTML={{ __html: getLandingPageJsonLd('pl') }}
        type="application/ld+json"
      />
    </>
  );
}