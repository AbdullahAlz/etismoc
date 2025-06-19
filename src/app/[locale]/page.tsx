'use client';
import { useState } from 'react';
import { useTranslations } from '@/lib/i18n';
import { ArrowRight, ArrowLeft, CheckCircle, Users, Zap, Globe } from 'lucide-react';
import { services } from '@/data/services';
import { news } from '@/data/news';
import { aboutData } from '@/data/about';
import { getAssetPath } from '@/lib/utils';

export default function HomePage() {
  const { locale, t } = useTranslations();
  const isRTL = locale === 'ar';
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);



  const getIconForFeature = (index: number) => {
    const icons = [
      <Zap key="zap" className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      <Users key="users" className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      <Globe key="globe" className="w-8 h-8 text-primary-600 dark:text-primary-400" />
    ];
    return icons[index] || <CheckCircle key="check" className="w-8 h-8 text-primary-600 dark:text-primary-400" />;
  };

  const getServiceIcon = (IconComponent: any) => {
    return <IconComponent className="w-16 h-16 text-primary-600 dark:text-primary-400" />;
  };

  return (
    <div className={`bg-white dark:bg-gray-900 transition-colors ${isRTL ? 'rtl' : 'ltr'}`}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 to-blue-900/95 dark:from-gray-900/98 dark:to-gray-800/98">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{
              backgroundImage: `url('${getAssetPath('/background.jpg')}')`,
              // backgroundAttachment: 'fixed'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {t('home.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            {t('home.subtitle')}
          </p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t('home.description')}
          </p>

        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-white/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>


      {/* News Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'أخبار' : 'News & Stories'}
            </h2>

          </div>

          <div className={`grid gap-8 text-left rtl:text-right ${news.filter(item => item.featured).length === 1
              ? 'place-items-center'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
            {news.filter(item => item.featured).map((newsItem, index, arr) => (
              <div
                key={newsItem.id}
                className={`w-full ${arr.length === 1 || (arr.length % 3 === 1 && index === arr.length - 1)
                    ? 'max-w-md mx-auto'
                    : ''
                  }`}
              >
                <div className="bg-white dark:bg-gray-700 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {newsItem.title[locale]}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {newsItem.description[locale]}
                    </p>
                    <div
                      className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(newsItem.date).toLocaleDateString(locale === 'ar' ? 'fr-FR' : 'de-DE')}
                      </span>
                      <a
                        href={`/${locale}/news/${newsItem.slug}`}
                        className={`inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        {isRTL ? (
                          <>
                            <ArrowLeft className="w-5 h-5 ml-2" />
                            <span className="font-medium px-2">المزيد</span>
                          </>
                        ) : (
                          <>
                            <span className="font-medium">Read more</span>
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {aboutData.whoWeAre.title[locale]}
            </h2>
          </div>

          <div className="text-left rtl:text-right max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {aboutData.whoWeAre.description[locale]}
            </p>

            <a
              href={`/${locale}/about`}
              className={`inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors font-medium ${isRTL ? 'flex-row-reverse' : ''
                }`}
            >
              {isRTL ? (
                <>
                  <ArrowLeft className="w-5 h-5 ml-2" />
                  <span>{aboutData.whoWeAre.showMore[locale]}</span>
                </>
              ) : (
                <>
                  <span>{aboutData.whoWeAre.showMore[locale]}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('nav.services')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 dark:bg-gray-800 p-8 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.name[locale]}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description[locale]}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                    {isRTL ? 'التقنيات المستخدمة' : 'Technologies Used'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm px-3 py-1 border border-gray-200 dark:border-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-600 dark:bg-primary-700 opacity-99">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isRTL ? 'مستعدٌّ للبدء؟' : 'Ready to Get Started?'}
          </h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
            {isRTL ?
              'اتصل بنا و حقِّق أهدافك التقنية'
              : 'Contact us and achieve your tech goals'
            }
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-8 py-3 font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors inline-flex items-center"
          >
            {t('nav.contact')}
            {isRTL ? <ArrowLeft className="ml-2 w-5 h-5" /> : <ArrowRight className="ml-2 w-5 h-5" />}
          </a>
        </div>
      </section>
    </div>
  );
}
