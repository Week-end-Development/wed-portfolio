type FooterProps = {
  lang: 'pl' | 'en';
};

const footerContent = {
  pl: {
    status: 'STATUS_SYSTEMU: WSZYSTKIE_SYSTEMY_OK',
    legal:
      '© 2026 WEEK-END DEVELOPMENT // Wszystkie prawa zastrzeżone // BUILD_V.2.0.4',
  },
  en: {
    status: 'SYSTEM_STATUS: ALL_SYSTEMS_OK',
    legal: '© 2026 WEEK-END DEVELOPMENT // All rights reserved // BUILD_V.2.0.4',
  },
} as const;

export function Footer({ lang }: FooterProps) {
  const t = footerContent[lang];

  return (
    <footer className="relative z-20 border-t border-white/5 bg-[#0a080c] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xl font-bold tracking-tighter text-primary">
            [WED]
          </span>
          <div className="h-4 w-[1px] bg-gray-800" />
          <span className="font-mono text-[10px] text-gray-500">{t.status}</span>
        </div>

        <div className="font-mono text-[10px] text-gray-600">{t.legal}</div>
      </div>
    </footer>
  );
}