'use client';

import { useLocale } from '@/lib/i18n';

export default function PrivacyPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className={`py-20 bg-white dark:bg-gray-900 transition-colors ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {isRTL ? 
              'آخر تحديث: يونيو 2025' :
              'Last updated: June 2025'
            }
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'المعلومات التي نجمعها' : 'Information We Collect'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isRTL ?
                'نحن نجمع المعلومات التي تقدمها لنا بشكل مباشر، مثل عندما تقوم بإنشاء حساب، أو ملء نموذج، أو الاتصال بنا.' :
                'We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us.'
              }
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'كيف نستخدم معلوماتك' : 'How We Use Your Information'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isRTL ?
                'نستخدم المعلومات التي نجمعها لتقديم وتحسين خدماتنا، والتواصل معك، ولأغراض أخرى موضحة في هذه السياسة.' :
                'We use the information we collect to provide and improve our services, communicate with you, and for other purposes outlined in this policy.'
              }
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'مشاركة المعلومات' : 'Information Sharing'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isRTL ?
                'نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك، باستثناء ما هو موضح في هذه السياسة.' :
                'We do not sell, rent, or share your personal information with third parties without your consent, except as outlined in this policy.'
              }
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {isRTL ?
                'إذا كان لديك أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على info@ibtisite.com' :
                'If you have questions about this Privacy Policy, please contact us at info@ibtisite.com'
              }
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
