import {
  Braces,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Server,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import NextImage from 'next/image';
import {
  ArrowRightAltIcon,
  SettingsSuggestIcon,
} from '@/components/icons/system-icons';

type DashboardSectionProps = {
  lang: 'pl' | 'en';
};

const stackItems = [
  {
    name: 'PYTHON',
    subtitle: 'BACKEND_CORE',
    icon: Braces,
    iconClass: 'h-4 w-4',
  },
  {
    name: 'NEXT.JS',
    subtitle: 'FRONTEND_UI',
    icon: Sparkles,
    iconClass: 'h-4 w-4',
  },
  {
    name: 'NESTJS',
    subtitle: 'API_GATEWAY',
    icon: Server,
    iconClass: 'h-3.5 w-3.5',
  },
  {
    name: 'POSTGRES',
    subtitle: 'DATA_STORE',
    icon: Database,
    iconClass: 'h-3.5 w-3.5',
  },
  {
    name: 'AWS',
    subtitle: 'CLOUD_INFRA',
    icon: Cloud,
    iconClass: 'h-3.5 w-3.5',
  },
] as const satisfies ReadonlyArray<{
  name: string;
  subtitle: string;
  icon: LucideIcon;
  iconClass: string;
}>;

const projectsContent = {
  pl: {
    title: 'Nasze projekty',
    path: '/home/wed/projects/public',
    repo: 'Repo_GitHub',
    projectTitle: 'Harcerski System Stopni',
    projectDescription:
      'Projekt aktualnie w trakcie tworzenia. Repozytorium rozwojowe systemu rozwijanego przez Week-end Development.',
    projectLinkAria:
      'Otwórz repozytorium projektu Harcerski System Stopni na GitHub',
    tags: ['WIP', 'GitHub', 'Repo'],
    sourceCode: 'KOD_ŹRÓDŁOWY',
    processes: 'PROCESY_W_TOKU',
    creating: 'Tworzenie nowych projektów',
    pipeline: 'STATUS: AKTYWNY_PIPELINE',
    pipelineDescription:
      'Obecnie rozwijamy nowe koncepcje, walidujemy założenia i przygotowujemy kolejne repozytoria do publikacji. Sekcja pozostaje aktywna, nawet jeśli publicznie widoczny jest tylko jeden projekt.',
    pipelineTags: ['IDEATION', 'ARCHITECTURE', 'MVP_QUEUE'],
    progress: [
      ['ANALIZA_WYMAGAŃ', 'AKTYWNA', 'text-green-500', 'w-[88%]'],
      ['PROTOTYPOWANIE', 'W TOKU', 'text-primary', 'w-[64%]'],
      ['PRZYGOTOWANIE_REPO', 'KOLEJKA', 'text-gray-500', 'w-[32%]'],
    ],
    load: 'Obciążenie_Sys',
    normal: 'Normalne',
  },
  en: {
    title: 'Our projects',
    path: '/home/wed/projects/public',
    repo: 'Repo_GitHub',
    projectTitle: 'Scout Rank System',
    projectDescription:
      'Project currently under development. Development repository of the system built by Week-end Development.',
    projectLinkAria:
      'Open Scout Rank System project repository on GitHub',
    tags: ['WIP', 'GitHub', 'Repo'],
    sourceCode: 'SOURCE_CODE',
    processes: 'PROCESSES_IN_PROGRESS',
    creating: 'Creating new projects',
    pipeline: 'STATUS: ACTIVE_PIPELINE',
    pipelineDescription:
      'We are currently developing new concepts, validating assumptions and preparing additional repositories for publication. The section remains active even if only one project is publicly visible.',
    pipelineTags: ['IDEATION', 'ARCHITECTURE', 'MVP_QUEUE'],
    progress: [
      ['REQUIREMENTS_ANALYSIS', 'ACTIVE', 'text-green-500', 'w-[88%]'],
      ['PROTOTYPING', 'IN_PROGRESS', 'text-primary', 'w-[64%]'],
      ['REPOSITORY_SETUP', 'QUEUE', 'text-gray-500', 'w-[32%]'],
    ],
    load: 'System_Load',
    normal: 'Normal',
  },
} as const;

export function DashboardSection({ lang }: DashboardSectionProps) {
  const t = projectsContent[lang];

  return (
    <section
      className="relative border-t border-white/5 bg-background-dark py-24"
      id="dashboard"
    >
      <div
        aria-hidden="true"
        className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          <aside className="flex w-full shrink-0 flex-col gap-6 lg:w-64">
            <div className="sticky top-24">
              <div className="mb-8 p-1">
                <h2 className="mb-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  <SettingsSuggestIcon className="h-4 w-4" />
                  KONFIGURACJA_STACKA
                </h2>

                <div className="space-y-3">
                  {stackItems.map((item) => (
                    <div
                      key={item.name}
                      className="tech-card group flex cursor-default items-center gap-3 rounded p-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center border border-gray-700 bg-gray-900 text-gray-400 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                        <item.icon className={item.iconClass} strokeWidth={2.2} />
                      </div>

                      <div>
                        <p className="font-mono text-xs font-bold text-gray-200">
                          {item.name}
                        </p>
                        <p className="font-mono text-[10px] text-gray-500">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-gray-800 pt-6">
                <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase text-gray-500">
                  <span>{t.load}</span>
                  <span className="text-green-500">{t.normal}</span>
                </div>

                <div className="relative h-1 w-full overflow-hidden bg-gray-800">
                  <div className="absolute inset-y-0 left-0 w-[75%] bg-primary" />
                  <div className="absolute inset-0 h-full w-full animate-[shimmer_2s_infinite] bg-white/20" />
                </div>
              </div>
            </div>
          </aside>

          <main className="flex flex-1 flex-col">
            <div className="mb-10 flex items-end justify-between border-b border-gray-800 pb-4">
              <div>
                <h2 className="font-display mb-1 text-2xl font-bold uppercase tracking-tight text-white">
                  {t.title}
                </h2>
                <p className="font-mono text-xs text-gray-500">{t.path}</p>
              </div>

              <a
                className="group flex items-center gap-2 font-mono text-xs font-bold uppercase text-primary transition-colors hover:text-white"
                href="https://github.com/Week-end-Development"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t.repo}
                <ArrowRightAltIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="space-y-6">
              <div className="card-trigger tech-card group flex min-h-55 flex-col rounded p-0 md:flex-row">
                <div className="relative flex flex-col items-center justify-center border-r border-gray-800/50 bg-black/40 p-6 md:w-56">
                  <div className="project-img-placeholder absolute inset-0 opacity-20" />

                  <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
                    <NextImage
                      alt="Scout Rank System logo"
                      className="h-auto max-h-30 w-auto max-w-42.5 object-contain opacity-95 transition-transform duration-500 group-hover:scale-[1.03]"
                      height={100}
                      priority={false}
                      src="/images/hss-logo-dark.webp"
                      unoptimized
                      width={170}
                    />
                  </div>

                  <div className="absolute left-2 top-2 font-mono text-[8px] text-gray-600">
                    ID: HSS_APP_01
                  </div>

                  <div className="absolute bottom-2 right-2 flex gap-1">
                    <div className="h-1 w-1 animate-pulse rounded-full bg-yellow-500" />
                    <span className="font-mono text-[8px] uppercase tracking-wider text-yellow-500">
                      Dev
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-primary">
                        {t.projectTitle}
                      </h3>

                      <a
                        aria-label={t.projectLinkAria}
                        className="shrink-0 text-gray-600 transition-colors hover:text-white"
                        href="https://github.com/Nikovsky/Harcerski-System-Stopni"
                        rel="noopener noreferrer"
                        target="_blank"
                        title={t.projectLinkAria}
                      >
                        <span className="sr-only">{t.projectLinkAria}</span>
                        <ExternalLink className="h-3 w-3" strokeWidth={2.4} />
                      </a>
                    </div>

                    <p className="mb-4 font-mono text-sm leading-relaxed text-gray-400">
                      {t.projectDescription}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {t.tags.map((tag, index) => (
                        <span
                          key={tag}
                          className={
                            index === 0
                              ? 'bg-primary/10 px-2 py-1 font-mono text-[10px] font-bold uppercase text-primary'
                              : 'border border-gray-800 px-2 py-1 font-mono text-[10px] font-bold uppercase text-gray-500'
                          }
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      className="flex items-center gap-1 font-mono text-xs text-white opacity-0 transition-opacity hover:text-primary group-hover:opacity-100"
                      href="https://github.com/Nikovsky/Harcerski-System-Stopni"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>{t.sourceCode}</span>
                      <Code2 className="h-3 w-3" strokeWidth={2.4} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="tech-card mt-8 rounded p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-4 border-b border-gray-800 pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      {t.processes}
                    </p>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                      {t.creating}
                    </h3>
                  </div>

                  <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    {t.pipeline}
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="max-w-2xl font-mono text-sm leading-relaxed text-gray-400">
                      {t.pipelineDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {t.pipelineTags.map((tag, index) => (
                        <span
                          key={tag}
                          className={
                            index === 0
                              ? 'bg-primary/10 px-2 py-1 font-mono text-[10px] font-bold uppercase text-primary'
                              : 'border border-gray-800 px-2 py-1 font-mono text-[10px] font-bold uppercase text-gray-500'
                          }
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {t.progress.map(([label, value, valueClass, width]) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                          <span className="text-gray-500">{label}</span>
                          <span className={valueClass}>{value}</span>
                        </div>

                        <div className="h-1 w-full overflow-hidden bg-gray-800">
                          <div className={`h-full bg-primary ${width}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}