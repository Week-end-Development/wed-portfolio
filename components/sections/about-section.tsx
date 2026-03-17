import {
  CodeIcon,
  LightbulbIcon,
  RocketLaunchIcon,
} from '@/components/icons/system-icons';

type AboutSectionProps = {
  lang: 'pl' | 'en';
};

const aboutContent = {
  pl: {
    title: 'Krótko o nas',
    subtitle: 'Zamieniamy kofeinę w ustrukturyzowaną logikę.',
    cards: [
      {
        icon: 'lightbulb',
        title: '01. Pomysł',
        text:
          'Analiza wymagań i projektowanie architektury systemu. Definiujemy przestrzeń problemową przed napisaniem pierwszej linii kodu.',
      },
      {
        icon: 'code',
        title: '02. Prototyp',
        text:
          'Iteracyjne cykle rozwoju. Budowanie rdzenia MVP, testowanie modułów i optymalizacja bazy kodu pod kątem wydajności.',
      },
      {
        icon: 'rocket',
        title: '03. Iteracje',
        text:
          'Push produkcyjny i monitoring. Zapewnienie stabilności poprzez potoki CI/CD i zbieranie metryk zwrotnych od użytkowników.',
      },
    ],
  },
  en: {
    title: 'About us',
    subtitle: 'We turn caffeine into structured logic.',
    cards: [
      {
        icon: 'lightbulb',
        title: '01. Idea',
        text:
          'Requirements analysis and system architecture design. We define the problem space before writing the first line of code.',
      },
      {
        icon: 'code',
        title: '02. Prototype',
        text:
          'Iterative development cycles. Building the MVP core, testing modules and optimizing the codebase for performance.',
      },
      {
        icon: 'rocket',
        title: '03. Iterations',
        text:
          'Production push and monitoring. Ensuring stability through CI/CD pipelines and collecting user feedback metrics.',
      },
    ],
  },
} as const;

function AboutCardIcon({ icon }: { icon: 'lightbulb' | 'code' | 'rocket' }) {
  if (icon === 'lightbulb') {
    return <LightbulbIcon className="h-6 w-6" />;
  }

  if (icon === 'code') {
    return <CodeIcon className="h-6 w-6" />;
  }

  return <RocketLaunchIcon className="h-6 w-6" />;
}

export function AboutSection({ lang }: AboutSectionProps) {
  const t = aboutContent[lang];

  return (
    <section
      className="relative border-t border-white/5 bg-background-dark py-24"
      id="about"
    >
      <div
        aria-hidden="true"
        className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block border border-primary/30 px-3 py-1">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {t.title}
            </h2>
          </div>

          <p className="mx-auto max-w-xl font-mono text-sm text-gray-400">
            <span className="text-primary">&gt;</span> {t.subtitle}
          </p>
        </div>

        <div className="relative py-12">
          <div className="absolute left-0 top-[6.5rem] z-0 hidden h-[1px] w-full bg-gray-800 md:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {t.cards.map((card) => (
              <div key={card.title} className="relative z-10 card-trigger group">
                <div className="tech-card flex h-full flex-col items-center rounded border border-gray-800 bg-[#0f0b12] p-8 text-center hover:border-primary/50">
                  <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-sm border border-gray-700 bg-gray-900 transition-all group-hover:border-primary group-hover:text-primary">
                    <AboutCardIcon icon={card.icon} />
                  </div>

                  <h3 className="font-display mb-2 text-lg font-bold uppercase tracking-wide text-white">
                    {card.title}
                  </h3>

                  <p className="font-mono text-xs leading-relaxed text-gray-500">
                    {card.text}
                  </p>

                  <div className="mt-auto w-full pt-4">
                    <div className="h-[1px] w-full bg-gray-800 transition-colors group-hover:bg-primary/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}