'use client';
import { useTranslations } from '@/lib/i18n';
import { ArrowRight, ArrowLeft, MapPin, Clock, Briefcase } from 'lucide-react';
import { careers } from '@/data/careers';

export default function CareersPage() {
  const { locale, t } = useTranslations();
  const isRTL = locale === 'ar';

  return (
    <div className={`bg-white dark:bg-gray-900 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-600 dark:from-primary-800 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {isRTL ? 'الوظائف' : 'Careers'}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {isRTL 
              ? 'انضم إلى فريقنا وكن جزءًا من مستقبل التكنولوجيا'
              : 'Join our team and be part of the future of technology'
            }
          </p>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'الفرص المتاحة' : 'Available Opportunities'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL 
                ? 'اكتشف الفرص الوظيفية المثيرة التي تنتظرك في شركتنا'
                : 'Discover exciting career opportunities waiting for you at our company'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careers.map((job) => (
              <div 
                key={job.id}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title[locale]}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {job.department[locale]}
                  </p>
                </div>

                <div className={`flex flex-wrap gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center text-gray-600 dark:text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <MapPin className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span className="text-sm">{job.location[locale]}</span>
                  </div>
                  <div className={`flex items-center text-gray-600 dark:text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Briefcase className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span className="text-sm">{job.type[locale]}</span>
                  </div>
                  <div className={`flex items-center text-gray-600 dark:text-gray-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span className="text-sm">
                      {isRTL ? 'منذ' : 'Posted'} {new Date(job.posted).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {job.description[locale]}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {isRTL ? 'المتطلبات:' : 'Requirements:'}
                  </h4>
                  <ul className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {job.requirements.map((req, index) => (
                      <li key={index} className={`text-gray-600 dark:text-gray-300 flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className={`text-primary-600 dark:text-primary-400 ${isRTL ? 'ml-2' : 'mr-2'} mt-1`}>•</span>
                        <span>{req[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/${locale}/contact`}
                  className={`inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 transition-colors font-medium ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  {isRTL ? (
                    <>
                      <ArrowLeft className="w-5 h-5 ml-2" />
                      <span>تقدم الآن</span>
                    </>
                  ) : (
                    <>
                      <span>Apply Now</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* No Current Openings Message */}
          {careers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {isRTL ? 'لا توجد وظائف متاحة حالياً' : 'No Current Openings'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {isRTL 
                  ? 'نحن نبحث دائماً عن المواهب المتميزة. تواصل معنا لمعرفة الفرص المستقبلية.'
                  : 'We\'re always looking for exceptional talent. Contact us to learn about future opportunities.'
                }
              </p>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 transition-colors font-medium"
              >
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
