import Link from 'next/link';

type LanguageSwitchProps = {
  lang: 'pl' | 'en';
};

export function LanguageSwitch({ lang }: LanguageSwitchProps) {
  return (
    <div className="ml-2 flex items-center overflow-hidden rounded border border-gray-800 bg-black/40">
      <Link
        aria-current={lang === 'pl' ? 'page' : undefined}
        className={
          lang === 'pl'
            ? 'bg-primary px-2 py-1 font-mono text-[10px] font-bold text-white'
            : 'px-2 py-1 font-mono text-[10px] font-bold text-gray-500 transition-colors hover:text-primary'
        }
        href="/"
        prefetch={false}
      >
        PL
      </Link>
      <Link
        aria-current={lang === 'en' ? 'page' : undefined}
        className={
          lang === 'en'
            ? 'bg-primary px-2 py-1 font-mono text-[10px] font-bold text-white'
            : 'px-2 py-1 font-mono text-[10px] font-bold text-gray-500 transition-colors hover:text-primary'
        }
        href="/en"
        prefetch={false}
      >
        EN
      </Link>
    </div>
  );
}