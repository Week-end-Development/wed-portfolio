import { SendIcon } from '@/components/icons/system-icons';

type ContactSectionProps = {
  formAction?: string;
  lang: 'pl' | 'en';
};

const contactContent = {
  pl: {
    title: 'Napisz do nas',
    subtitle: 'Jeśli zainteresowały Cię nasze projekty — odezwij się.',
    description:
      'Chętnie pogadamy, wymienimy feedback albo złapiemy współpracę przy czymś ciekawym.',
    name: 'Imię',
    email: 'Email',
    message: 'Twoja wiadomość...',
    namePlaceholder: 'Twoje imię...',
    emailPlaceholder: 'Twój email...',
    messagePlaceholder: 'Opisz wymagania projektu lub temat rozmowy...',
    button: 'NADAJ_WIADOMOŚĆ.CMD',
  },
  en: {
    title: 'Write to us',
    subtitle: 'If our projects caught your attention — get in touch.',
    description:
      'We will gladly talk, exchange feedback or discuss collaboration on something interesting.',
    name: 'Name',
    email: 'Email',
    message: 'Your message...',
    namePlaceholder: 'Your name...',
    emailPlaceholder: 'Your email...',
    messagePlaceholder: 'Describe project requirements or the topic you want to discuss...',
    button: 'SEND_MESSAGE.CMD',
  },
} as const;

export function ContactSection({
  formAction = 'https://formspree.io/f/REPLACE_ME',
  lang,
}: ContactSectionProps) {
  const t = contactContent[lang];

  return (
    <section className="relative border-t border-white/5 py-24" id="contact">
      <div
        aria-hidden="true"
        className="bg-blueprint-grid pointer-events-none absolute inset-0 opacity-10"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <div className="tech-card relative overflow-hidden rounded-sm border border-gray-800 bg-[#0a080c] p-10 md:p-14">
          <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
          <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />

          <div className="mb-10 text-center">
            <h2 className="font-display mb-2 text-2xl font-bold uppercase tracking-wide text-white">
              {t.title}
            </h2>
            <p className="mb-2 px-4 font-mono text-xs text-gray-400">
              {t.subtitle}
            </p>
            <p className="px-4 font-mono text-[11px] text-gray-500">
              {t.description}
            </p>
          </div>

          <form action={formAction} className="space-y-6" method="POST">
            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              name="_gotcha"
              tabIndex={-1}
              type="text"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary"
                  htmlFor={`${lang}-name`}
                >
                  {t.name}
                </label>
                <input
                  className="w-full rounded-none border border-gray-700 bg-gray-900/50 px-4 py-3 font-mono text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
                  id={`${lang}-name`}
                  name="name"
                  placeholder={t.namePlaceholder}
                  required
                  type="text"
                />
              </div>

              <div>
                <label
                  className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary"
                  htmlFor={`${lang}-email`}
                >
                  {t.email}
                </label>
                <input
                  className="w-full rounded-none border border-gray-700 bg-gray-900/50 px-4 py-3 font-mono text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
                  id={`${lang}-email`}
                  name="email"
                  placeholder={t.emailPlaceholder}
                  required
                  type="email"
                />
              </div>
            </div>

            <div>
              <label
                className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-primary"
                htmlFor={`${lang}-message`}
              >
                {t.message}
              </label>
              <textarea
                className="w-full rounded-none border border-gray-700 bg-gray-900/50 px-4 py-3 font-mono text-sm text-white outline-none transition-all placeholder:text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary"
                id={`${lang}-message`}
                name="message"
                placeholder={t.messagePlaceholder}
                required
                rows={4}
              />
            </div>

            <button
              className="flex w-full items-center justify-center gap-2 border border-transparent bg-primary px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-white/20 hover:bg-primary_hover"
              type="submit"
            >
              <SendIcon className="h-4 w-4" />
              {t.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}