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

  const toAjaxAction = (action) => {
    const trimmed = action.trim();

    if (!trimmed) {
      return '';
    }

    if (trimmed.includes('formsubmit.co/') && !trimmed.includes('/ajax/')) {
      return trimmed.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    }

    return trimmed;
  };

  const setAjaxFormStatus = (form, status) => {
    const statusNode = form.querySelector('[data-form-status]');

    if (!(statusNode instanceof HTMLElement)) {
      return;
    }

    statusNode.classList.remove('text-gray-500', 'text-green-400', 'text-red-400');

    if (status === 'success') {
      statusNode.textContent = statusNode.getAttribute('data-status-success') || '';
      statusNode.classList.add('text-green-400');
      return;
    }

    if (status === 'error') {
      statusNode.textContent = statusNode.getAttribute('data-status-error') || '';
      statusNode.classList.add('text-red-400');
      return;
    }

    statusNode.textContent = '\u00A0';
    statusNode.classList.add('text-gray-500');
  };

  const setAjaxSubmittingState = (form, submitting) => {
    const submitButton = form.querySelector('[data-submit-button]');

    if (!(submitButton instanceof HTMLButtonElement)) {
      return;
    }

    const label = submitButton.querySelector('[data-submit-label]');
    const idleText = submitButton.getAttribute('data-label-idle') || '';
    const loadingText = submitButton.getAttribute('data-label-loading') || idleText;

    submitButton.disabled = submitting;

    if (label instanceof HTMLElement) {
      label.textContent = submitting ? loadingText : idleText;
    }
  };

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

    const scrollTopLink = target.closest('[data-scroll-top]');

    if (scrollTopLink instanceof HTMLAnchorElement) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (window.location.hash) {
        window.history.replaceState(
          null,
          '',
          window.location.pathname + window.location.search,
        );
      }

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

  document.addEventListener('submit', async (event) => {
    const target = event.target;

    if (!(target instanceof HTMLFormElement)) {
      return;
    }

    if (target.getAttribute('data-ajax-form') !== 'true') {
      return;
    }

    event.preventDefault();

    if (target.dataset.submitting === 'true') {
      return;
    }

    const endpointCandidate =
      target.getAttribute('data-ajax-endpoint') ||
      target.getAttribute('action') ||
      '';
    const endpoint = toAjaxAction(endpointCandidate);

    if (!endpoint) {
      return;
    }

    target.dataset.submitting = 'true';
    setAjaxSubmittingState(target, true);
    setAjaxFormStatus(target, 'idle');

    const formData = new FormData(target);
    const payload = {};

    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        payload[key] = value;
      }
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json().catch(() => null);

      if (
        !response.ok ||
        (responseData &&
          (responseData.success === false || responseData.success === 'false'))
      ) {
        throw new Error('Request failed');
      }

      target.reset();
      setAjaxFormStatus(target, 'success');
    } catch {
      setAjaxFormStatus(target, 'error');
    } finally {
      setAjaxSubmittingState(target, false);
      target.dataset.submitting = 'false';
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