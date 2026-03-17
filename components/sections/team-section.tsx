type TeamSectionProps = {
  lang: 'pl' | 'en';
};

const teamContent = {
  pl: {
    title: 'Nasz Zespół',
    subtitle: 'Znaleziono 2 aktywnych operatorów.',
    members: [
      {
        initials: 'NF',
        operator: 'OP_01',
        name: 'Nikolas Feduniewicz',
        role: '[ Spec_Backend ]',
        quote: '"Tworzenie backendu z priorytetem wydajności."',
        links: [
          {
            label: '[GH]',
            href: 'https://github.com/Nikovsky',
          },
          {
            label: '[LI]',
            href: 'https://www.linkedin.com/in/nikolasfeduniewicz/',
          },
        ],
      },
      {
        initials: 'KB',
        operator: 'OP_02',
        name: 'Kacper Boś',
        role: '[ Arch_AWS ]',
        quote: '"Architektura skalowalnych schematów baz danych i infrastruktury chmurowej."',
        links: [
          {
            label: '[GH]',
            href: 'https://github.com/bos-8',
          },
          {
            label: '[LI]',
            href: 'https://www.linkedin.com/in/kacper-boss/',
          },
        ],
      },
    ],
  },
  en: {
    title: 'Our Team',
    subtitle: 'Found 2 active operators.',
    members: [
      {
        initials: 'NF',
        operator: 'OP_01',
        name: 'Nikolas Feduniewicz',
        role: '[ Spec_Backend ]',
        quote: '"Building backend systems with performance as the top priority."',
        links: [
          {
            label: '[GH]',
            href: 'https://github.com/Nikovsky',
          },
          {
            label: '[LI]',
            href: 'https://www.linkedin.com/in/nikolasfeduniewicz/',
          },
        ],
      },
      {
        initials: 'KB',
        operator: 'OP_02',
        name: 'Kacper BoŚ',
        role: '[ Arch_AWS ]',
        quote: '"Architecture of scalable database schemas and cloud infrastructure."',
        links: [
          {
            label: '[GH]',
            href: 'https://github.com/bos-8',
          },
          {
            label: '[LI]',
            href: 'https://www.linkedin.com/in/kacper-boss/',
          },
        ],
      },
    ],
  },
} as const;

export function TeamSection({ lang }: TeamSectionProps) {
  const t = teamContent[lang];

  return (
    <section
      className="relative overflow-hidden border-t border-white/5 bg-background-dark py-24"
      id="team"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold uppercase tracking-tighter text-white">
            {t.title}
          </h2>
          <p className="font-mono text-xs text-gray-500">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {t.members.map((member) => (
            <div
              key={`${lang}-${member.name}`}
              className="card-trigger tech-card group flex flex-col items-center rounded p-8 text-center"
            >
              <div className="relative mb-6">
                <div className="relative z-10 flex h-24 w-24 items-center justify-center border border-primary/40 bg-gray-900 font-mono text-2xl font-bold text-primary">
                  {member.initials}
                </div>

                <div className="absolute top-2 left-2 z-0 h-24 w-24 border border-gray-700" />

                <div className="absolute -top-4 -right-4 font-mono text-[9px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {member.operator}
                </div>
              </div>

              <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>

              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">
                {member.role}
              </p>

              <div className="my-4 w-full border-t border-gray-800" />

              <p className="mb-6 max-w-xs font-mono text-xs leading-relaxed text-gray-400">
                {member.quote}
              </p>

              <div className="flex gap-4">
                {member.links.map((link) => (
                  <a
                    key={link.label}
                    className="font-mono text-sm text-gray-600 transition-colors hover:text-primary"
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}