import { I18nProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/lib/theme';
import { Inter, Cairo } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export const metadata = {
  title: 'Ibtisite - Innovative Solutions for Tomorrow',
  description: 'Ibtisite is a cutting-edge startup dedicated to delivering exceptional solutions that transform businesses and drive growth.',
  keywords: 'startup, innovation, technology, solutions, business',
  openGraph: {
    title: 'Ibtisite - Innovative Solutions for Tomorrow',
    description: 'Ibtisite is a cutting-edge startup dedicated to delivering exceptional solutions that transform businesses and drive growth.',
    type: 'website',
  },
};

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    return (await import(`@/messages/en.json`)).default;
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${cairo.variable}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={locale === 'ar' ? 'font-arabic' : 'font-sans'}>
        <ThemeProvider>
          <I18nProvider locale={locale as 'en' | 'ar'} messages={messages}>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
