'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/i18n';
import { ArrowRight, ArrowLeft, CheckCircle, Users, Zap, Globe } from 'lucide-react';
import { features } from '@/data/global';
import { services } from '@/data/services';
import { latestNews } from '@/data/news';
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

  return (
    <div className={`bg-white dark:bg-gray-900 transition-colors ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section with Fixed Background */}
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


          {/* {showScrollIndicator && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          )} */}
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
              {isRTL ? 'الأخبار' : 'News'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'اطلع على آخر الأخبار والتطورات في عالم التكنولوجيا'
                : 'Stay updated with the latest news and developments in technology'
              }
            </p>
          </div>

          {/* Latest News Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {latestNews.title[locale]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {latestNews.description[locale]}
                </p>

                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(latestNews.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                  </span>
                  <a
                    href={`/${locale}/news/${latestNews.slug}`}
                    className={`inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors ${isRTL ? 'flex-row-reverse' : ''
                      }`}
                  >
                    {isRTL ? (
                      <>
                        <ArrowLeft className="w-6 h-6 ml-2" />
                        <span className="font-medium">اقرأ المزيد</span>
                      </>
                    ) : (
                      <>
                        <span className="font-medium">Read more</span>
                        <ArrowRight className="w-6 h-6 ml-2" />
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
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

          <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={aboutData.whoWeAre.image}
                  alt={aboutData.whoWeAre.title[locale]}
                  className="w-full h-96 object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('nav.services')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-gray-50 dark:bg-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:scale-105 ${service.image ? 'flex flex-col md:flex-row' : ''
                  } ${isRTL ? 'md:flex-row-reverse' : ''}`}
              >
                {service.image && (
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img
                      src={service.image}
                      alt={service.name[locale]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`p-6 ${service.image ? 'md:w-2/3' : 'w-full'}`}>
                  {/* Service Icon */}
                  <div className="text-4xl mb-4">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.name[locale]}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description[locale]}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                      {isRTL ? 'التقنيات' : 'Technologies'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
              'انضم إلى عملائنا الراضين واكتشف كيف يمكن لحلولنا أن تحول عملك' :
              'Join our satisfied clients and discover how our solutions can transform your business'
            }
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors inline-flex items-center"
          >
            {t('nav.contact')}
            {isRTL ? <ArrowLeft className="ml-2 w-5 h-5" /> : <ArrowRight className="ml-2 w-5 h-5" />}
          </a>
        </div>
      </section>
    </div>
  );
}
