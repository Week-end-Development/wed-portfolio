import { CopyCodeButton } from '@/components/ui/copy-code-button';

type HeroSectionProps = {
  lang: 'pl' | 'en';
};

const heroContent = {
  pl: {
    systemOnline: 'System_Online',
    subtitle: 'Week-end Development — projekty tworzone po godzinach.',
    description:
      'Jesteśmy dwuosobowym zespołem studentów. Dłubiemy w Pythonie, Next.js, NestJS, PostgreSQL i AWS, tworząc własne aplikacje i prototypy.',
    primaryCta: '[ ZOBACZ_PROJEKTY ]',
    secondaryCta: 'POZNAJ_ZESPÓŁ',
    code: `class Zespol_WED:
    def __init__(self):
        self.status = 'studenci'
        self.stack = ['Python', 'Next.js']
        self.focus = 'innowacja'`,
    line1: 'class Zespol_WED:',
    line2: 'def __init__(self):',
    line3: "self.status = 'studenci'",
    line4: "self.stack = ['Python', 'Next.js']",
    line5: "self.focus = 'innowacja'",
  },
  en: {
    systemOnline: 'System_Online',
    subtitle: 'Week-end Development — projects built after hours.',
    description:
      'We are a two-person student team. We work with Python, Next.js, NestJS, PostgreSQL and AWS, building our own applications and prototypes.',
    primaryCta: '[ VIEW_PROJECTS ]',
    secondaryCta: 'MEET_THE_TEAM',
    code: `class Team_WED:
    def __init__(self):
        self.status = 'students'
        self.stack = ['Python', 'Next.js']
        self.focus = 'innovation'`,
    line1: 'class Team_WED:',
    line2: 'def __init__(self):',
    line3: "self.status = 'students'",
    line4: "self.stack = ['Python', 'Next.js']",
    line5: "self.focus = 'innovation'",
  },
} as const;

export function HeroSection({ lang }: HeroSectionProps) {
  const t = heroContent[lang];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-20 pt-32">
      <div className="absolute top-40 left-10 h-32 w-32 border-l border-t border-primary/20 opacity-50" />
      <div className="absolute right-10 bottom-20 h-32 w-32 border-r border-b border-primary/20 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-4 origin-left -rotate-90"
      >
        <span className="block h-px w-28 bg-primary/50" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-none bg-primary" />
            {t.systemOnline}
          </div>

          <h1 className="font-display mb-6 text-4xl leading-none font-bold tracking-tight text-white md:text-6xl">
            WEEK-END
            <br />
            <span className="bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              DEVELOPMENT
            </span>
          </h1>

          <p className="font-display mb-2 max-w-lg text-lg leading-snug font-semibold text-gray-200">
            {t.subtitle}
          </p>

          <p className="mb-8 max-w-lg border-l-2 border-primary/30 pl-4 font-mono text-sm leading-relaxed text-gray-400">
            {t.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="group flex items-center justify-center gap-2 border border-transparent bg-primary px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white/20 hover:bg-primary_hover"
              href="#dashboard"
            >
              {t.primaryCta}
            </a>

            <a
              className="flex items-center justify-center border border-gray-700 bg-transparent px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-gray-300 transition-all hover:border-primary hover:text-primary"
              href="#team"
            >
              {t.secondaryCta}
            </a>
          </div>
        </div>

        <div className="card-trigger group relative">
          <div className="relative overflow-hidden rounded-sm border border-gray-800 bg-[#0a080c] shadow-2xl transition-all group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(125,29,99,0.15)]">
            <div className="flex items-center justify-between border-b border-gray-800 bg-[#120e16] px-4 py-2">
              <div className="flex gap-2 font-mono text-[10px] text-gray-500">
                <span>root@wed-server:~</span>
              </div>

              <div className="flex items-center gap-4">
                <CopyCodeButton code={t.code} />
                <div className="ml-2 flex gap-1.5">
                  <div className="h-2 w-2 border border-gray-600" />
                  <div className="h-2 w-2 border border-gray-600" />
                </div>
              </div>
            </div>

            <div className="h-45 p-6 font-mono text-xs leading-relaxed text-gray-400 md:text-sm">
              <div className="grid h-full grid-cols-[30px_1fr] gap-2">
                <div className="select-none border-r border-gray-800 pr-2 text-right text-gray-700">
                  01
                  <br />
                  02
                  <br />
                  03
                  <br />
                  04
                  <br />
                  05
                  <br />
                  06
                </div>

                <div className="relative">
                  <div className="typewriter-line line-1">
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-yellow-200">{t.line1.replace('class ', '').replace(':', '')}</span>:
                  </div>

                  <div className="typewriter-line line-2 pl-4">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-300">__init__</span>(self):
                  </div>

                  <div className="typewriter-line line-3 pl-8">
                    {t.line3.split("'")[0]}
                    <span className="text-green-400">'{t.line3.split("'")[1]}'</span>
                  </div>

                  <div className="typewriter-line line-4 pl-8">
                    {t.line4.split('[')[0]}[
                    <span className="text-green-400">'Python'</span>,{' '}
                    <span className="text-green-400">'Next.js'</span>]
                  </div>

                  <div className="typewriter-line line-5 pl-8">
                    {t.line5.split("'")[0]}
                    <span className="text-green-400">'{t.line5.split("'")[1]}'</span>
                    <span className="cursor-blink" />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMTBoMnptMCA0aDJ6bTAgNGgyem0wLTRoMnptMC00aDJ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGZpbGw9Im5vbmUiLz48L3N2Zz4=")',
              }}
            />
          </div>

          <div className="absolute -right-4 -bottom-4 h-24 w-24 border-r border-b border-primary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute -top-4 -left-4 h-24 w-24 border-t border-l border-primary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </section>
  );
}