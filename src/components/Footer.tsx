'use client';

import { useTranslations, useLocale } from '@/lib/i18n';
import { navigation } from '@/data/global';
import Link from 'next/link';

const Footer = () => {
  const { locale, t } = useTranslations();
  const isRTL = locale === 'ar';

  return (
    <footer className={`bg-gray-900 dark:bg-gray-950 text-white transition-colors opacity-99 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('footer.company')}
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href === '/' ? '' : item.href}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('footer.information')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
