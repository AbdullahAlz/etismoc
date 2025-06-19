'use client';

import { useLocale } from '@/lib/i18n';
import { siteConfig } from '@/data/global';
export default function TermsPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className={`py-20 bg-white dark:bg-gray-900 transition-colors ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
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
              {isRTL ? 'قبول الشروط' : 'Acceptance of Terms'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isRTL ?
                `باستخدام موقع ${siteConfig.name.ar} الإلكتروني، فإنك توافق على الالتزام بهذه الشروط والأحكام.` :
                `By using the website provided by  ${siteConfig.name.en}, you agree to be bound by these terms and conditions.`
              }
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'استخدام الموقع' : 'Use of Website'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isRTL ?
                `يجب عليك استخدام هذا الموقع بطريقة قانونية ومسؤولة، وعدم انتهاك أي قوانين أو لوائح معمول بها.` :
                `You must use this website in a legal and responsible manner, and not violate any applicable laws or regulations.`
              }
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'الملكية الفكرية' : 'Intellectual Property'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isRTL ?
                `جميع المحتويات والمواد الموجودة على موقع ${siteConfig.name.ar} محمية بحقوق الطبع والنشر وحقوق الملكية الفكرية الأخرى.` :
                `All content and materials on this website are protected by copyright and other intellectual property rights.`
              }
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'إخلاء المسؤولية' : 'Disclaimer'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isRTL ?
                ' نحن نقدم موقعنا الإلكتروني "كما هو" دون أي ضمانات. نحن لا نتحمل المسؤولية عن أي أضرار قد تنشأ عن استخدامه.' :
                'We provide this website "as is" without any warranties. We are not liable for any damages that may arise from the use of this website.'
              }
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {isRTL ?
                'إذا كان لديك أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا' :
                'If you have questions about these Terms of Service, please contact us'
              }
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
