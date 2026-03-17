import NextImage from 'next/image';
import Link from 'next/link';
import { LanguageSwitch } from '@/components/ui/language-switch';
import { getPublicAssetPath } from '@/lib/public-asset-path';

type NavbarProps = {
  lang: 'pl' | 'en';
};

const navContent = {
  pl: {
    technologies: '// TECHNOLOGIE',
    projects: '// PROJEKTY',
    team: '// ZESPÓŁ',
    contact: 'KONTAKT()',
  },
  en: {
    technologies: '// TECHNOLOGIES',
    projects: '// PROJECTS',
    team: '// TEAM',
    contact: 'CONTACT()',
  },
} as const;

export function Navbar({ lang }: NavbarProps) {
  const t = navContent[lang];

  return (
    <nav className="glass-panel fixed top-0 z-40 w-full border-b border-white/5 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              className="group flex cursor-pointer items-center"
              href={lang === 'pl' ? '/' : '/en'}
            >
              <div className="mr-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded border border-primary/50 bg-primary/10 transition-colors group-hover:border-primary">
                <NextImage
                  alt="Week-end Development logo"
                  className="h-full w-full object-cover"
                  height={40}
                  priority
                  src={getPublicAssetPath('/images/wed-logo.webp')}
                  unoptimized
                  width={40}
                />
              </div>

              <div className="mx-3 h-4 w-px bg-gray-700" />
              <div className="font-mono text-xs uppercase tracking-widest text-gray-500">
                sys_ver_2.0
              </div>
            </Link>
          </div>

          <div className="hidden items-center space-x-6 md:flex">
            <a
              className="font-mono text-xs uppercase tracking-widest text-gray-400 transition-colors hover:text-primary"
              href="#dashboard"
            >
              {t.technologies}
            </a>
            <a
              className="font-mono text-xs uppercase tracking-widest text-gray-400 transition-colors hover:text-primary"
              href="#dashboard"
            >
              {t.projects}
            </a>
            <a
              className="font-mono text-xs uppercase tracking-widest text-gray-400 transition-colors hover:text-primary"
              href="#team"
            >
              {t.team}
            </a>

            <LanguageSwitch lang={lang} />

            <a
              className="border border-primary/50 bg-primary/10 px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white"
              href="#contact"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}