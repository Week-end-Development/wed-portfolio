import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { getSiteUrl } from '../lib/site-url';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false,
});

const siteUrl = getSiteUrl();
const copyCodeButtonScript = String.raw`(() => {
  const resetTimers = new WeakMap();

  const setCopiedState = (button, copied) => {
    const label = button.querySelector('[data-copy-label]');
    const idleIcon = button.querySelector('[data-copy-icon-idle]');
    const successIcon = button.querySelector('[data-copy-icon-success]');

    if (label) {
      const nextLabel = copied
        ? label.getAttribute('data-copy-label-success')
        : label.getAttribute('data-copy-label-idle');

      if (nextLabel) {
        label.textContent = nextLabel;
      }

      label.classList.toggle('text-green-400', copied);
    }

    if (idleIcon) {
      idleIcon.classList.toggle('hidden', copied);
    }

    if (successIcon) {
      successIcon.classList.toggle('hidden', !copied);
    }

    button.dataset.copyState = copied ? 'copied' : 'idle';
  };

  document.addEventListener('click', async (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const button = target.closest('[data-copy-code]');

    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const payload = button.getAttribute('data-copy-code');

    if (!payload) {
      return;
    }

    try {
      await navigator.clipboard.writeText(decodeURIComponent(payload));
      setCopiedState(button, true);

      const previousTimeout = resetTimers.get(button);

      if (previousTimeout) {
        window.clearTimeout(previousTimeout);
      }

      const timeout = window.setTimeout(() => {
        setCopiedState(button, false);
      }, 1500);

      resetTimers.set(button, timeout);
    } catch {
      setCopiedState(button, false);
    }
  });
})();`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'WED | Landing Page',
    template: '%s | WED',
  },
  description:
    'Week-end Development — projekty tworzone po godzinach. Landing page w stylu dark-tech.',
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/',
      'en-US': '/en/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    alternateLocale: ['en_US'],
    url: '/',
    siteName: 'WEEK-END DEVELOPMENT',
    title: 'WED | Landing Page',
    description:
      'Week-end Development — projekty tworzone po godzinach. Landing page w stylu dark-tech.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth dark" lang="pl" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} relative overflow-x-hidden bg-background-dark font-sans text-gray-300 antialiased selection:bg-primary selection:text-white`}
      >
        {children}
        <script dangerouslySetInnerHTML={{ __html: copyCodeButtonScript }} />
      </body>
    </html>
  );
}