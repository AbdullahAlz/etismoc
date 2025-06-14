'use client';

import { useTranslations } from '@/lib/i18n';
import { Target, Eye, Users, Award } from 'lucide-react';
import { siteConfig, companyInfo } from '@/data/global';

export default function AboutPage() {
  const { locale, t } = useTranslations();
  const isRTL = locale === 'ar';

  const stats = [
    { number: '100+', label: isRTL ? 'عميل راضي' : 'Happy Clients' },
    { number: '50+', label: isRTL ? 'مشروع مكتمل' : 'Projects Completed' },
    { number: '5+', label: isRTL ? 'سنوات خبرة' : 'Years Experience' },
    { number: '24/7', label: isRTL ? 'دعم العملاء' : 'Customer Support' },
  ];

  const team = [
    {
      name: isRTL ? 'سامي الزين' : 'Sami Alzein',
      role: isRTL ? 'المدير التنفيذي' : 'CEO & Founder',
      description: isRTL ? 
        'رائد في مجال التكنولوجيا مع خبرة تزيد عن 15 عاماً في بناء الشركات الناجحة' :
        'Technology entrepreneur with over 15 years of experience building successful companies'
    },
    {
      name: isRTL ? 'سارة أحمد' : 'Sarah Johnson',
      role: isRTL ? 'مدير التكنولوجيا' : 'CTO',
      description: isRTL ?
        'خبيرة في التكنولوجيا والابتكار مع شغف بتطوير حلول متطورة' :
        'Technology and innovation expert with a passion for developing cutting-edge solutions'
    },
    {
      name: isRTL ? 'محمد علي' : 'Mike Davis',
      role: isRTL ? 'مدير التسويق' : 'Marketing Director',
      description: isRTL ?
        'استراتيجي تسويق متمرس يركز على بناء علاقات قوية مع العملاء' :
        'Experienced marketing strategist focused on building strong customer relationships'
    }
  ];

  return (
    <div className={`bg-white dark:bg-gray-900 transition-colors ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="bg-primary-100 dark:bg-primary-800 p-4 rounded-full">
                  <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {companyInfo.mission[locale]}
              </p>
            </div>

            {/* Vision */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="bg-primary-100 dark:bg-primary-800 p-4 rounded-full">
                  <Eye className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.vision')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {companyInfo.vision[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL ? 
                'القيم الأساسية التي توجه عملنا وتشكل ثقافتنا' :
                'The core values that guide our work and shape our culture'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.values.map((value, index) => (
              <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.name[locale]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'فريقنا' : 'Our Team'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL ? 
                'تعرف على الفريق المتميز الذي يقود رؤيتنا ويحقق أهدافنا' :
                'Meet the exceptional team that drives our vision and achieves our goals'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="w-24 h-24 bg-primary-600 dark:bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
