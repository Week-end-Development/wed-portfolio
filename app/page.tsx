import type { Metadata } from 'next';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { DashboardSection } from '@/components/sections/dashboard-section';
import { HeroSection } from '@/components/sections/hero-section';
import { TeamSection } from '@/components/sections/team-section';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/',
      'en-US': '/en/',
    },
  },
  openGraph: {
    locale: 'pl_PL',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 blueprint-bg" />
      <div className="blueprint-bg-active" />
      <div className="scanline pointer-events-none fixed inset-0 z-50 mix-blend-overlay" />

      <Navbar lang="pl" />

      <main className="relative overflow-x-hidden bg-background-dark font-sans text-gray-300 antialiased selection:bg-primary selection:text-white">
        <HeroSection lang="pl" />
        <DashboardSection lang="pl" />
        <AboutSection lang="pl" />
        <TeamSection lang="pl" />
        <ContactSection lang="pl" />
      </main>

      <Footer lang="pl" />
    </>
  );
}