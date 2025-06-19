'use client';
import { useTranslations } from '@/lib/i18n';
import { services } from '@/data/services';

export default function ServicesPage() {
  const { locale, t } = useTranslations();
  const isRTL = locale === 'ar';

  return (
    <div className={`bg-white dark:bg-gray-900 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-600 dark:from-primary-800 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('nav.services')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-50 dark:bg-gray-800 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 ${
                  service.image ? 'flex flex-col lg:flex-row' : ''
                } ${isRTL ? 'lg:flex-row-reverse' : ''}`}
              >
                {service.image && (
                  <div className="lg:w-1/3 h-64 lg:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.name[locale]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`p-8 ${service.image ? 'lg:w-2/3' : 'w-full'}`}>
                  {/* Service Icon */}
                  <div className="text-5xl mb-6">
                    {service.icon}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.name[locale]}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description[locale]}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                      {isRTL ? 'التقنيات المستخدمة' : 'Technologies Used'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm px-3 py-1 border border-gray-200 dark:border-gray-600"
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {isRTL ? 'هل تحتاج مساعدة في اختيار الخدمة المناسبة؟' : 'Need Help Choosing the Right Service?'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {isRTL 
              ? 'تواصل معنا اليوم ودعنا نساعدك في إيجاد الحل المثالي لاحتياجات عملك'
              : 'Contact us today and let us help you find the perfect solution for your business needs'
            }
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 font-semibold transition-colors inline-block"
          >
            {t('nav.contact')}
          </a>
        </div>
      </section>
    </div>
  );
}
