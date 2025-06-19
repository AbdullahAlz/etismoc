'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from '@/lib/i18n';
import { Mail, Phone, MapPin, Send, Shield, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/global';

export default function ContactPage() {
  const locale = useLocale();
  const { t } = useTranslations();
  const isRTL = locale === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaChallenge, setCaptchaChallenge] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaInput, setCaptchaInput] = useState('');

  const locationCoords = { lat: 34.728224, lng: 36.7077392 };
  const googleMapsUrl = `https://maps.google.com/?q=${locationCoords.lat},${locationCoords.lng}`;

  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaChallenge({ num1, num2, answer: num1 + num2 });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCaptchaInput(value);
    setCaptchaVerified(parseInt(value) === captchaChallenge.answer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert(isRTL ? 'يرجى إدخال كود التحقق' : 'Please complete the captcha verification');
      return;
    }

    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(isRTL ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setCaptchaInput('');
    setCaptchaVerified(false);

    // Generate new captcha
    const num1 = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    setCaptchaChallenge({ num1, num2, answer: num1 + num2 });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      label: t('contact.emailLabel'),
      value: siteConfig.contact.email
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      label: t('contact.phone'),
      value: siteConfig.contact.phone
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      label: t('contact.address'),
      value: siteConfig.contact.address[locale]
    }
  ];

  return (
    <div className={`bg-white dark:bg-gray-900 transition-colors ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {isRTL ? 'معلومات الاتصال' : 'Contact Information'}
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-800 p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {info.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clickable Map Screenshot */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {isRTL ? 'موقعنا على الخريطة' : 'Our Location'}
                </h3>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Map Screenshot */}
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-700 dark:to-gray-600 border border-gray-300 dark:border-gray-600 flex items-center justify-center relative overflow-hidden">
                    <img
                      src="/map.png"
                      className="dark:hidden"
                    />
                    <img
                      src="/map-dark.png"
                      className="hidden dark:block"
                    />
                    {
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">

                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {isRTL ? `مكتب ${siteConfig.name.ar} `  : `${siteConfig.name.en} office`}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {isRTL ? 'انقر للفتح في خرائط جوجل' : 'Click to open in Google Maps'}
                          </p>
                        </div>
                      </div>
                    }

                    <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 shadow-md group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </div>

                    <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {isRTL ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t('contact.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={t('contact.email')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>

                {/* Captcha Section */}
                <div className="bg-gray-50 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 rtl:text-lg">
                      {isRTL
                        ? 'أكّد أنك لست بوت'
                        : 'Verify you are not a robot'
                      }
                    </h3>
                  </div>

                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-lg font-mono">
                      <span className="text-gray-900 dark:text-white">{captchaChallenge.num1}</span>
                      <span className="text-gray-600 dark:text-gray-400">+</span>
                      <span className="text-gray-900 dark:text-white">{captchaChallenge.num2}</span>
                      <span className="text-gray-600 dark:text-gray-400">=</span>
                    </div>

                    <input
                      type="number"
                      value={captchaInput}
                      onChange={handleCaptchaInputChange}
                      placeholder="?"
                      required
                      className="w-16 px-2 py-1 text-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />

                    {captchaVerified && (
                      <div className="text-green-600 dark:text-green-400 text-sm">
                        ✓ {isRTL ? 'تم التحقق' : 'Verified'}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {isRTL
                      ? 'يرجى حل المعادلة الحسابية البسيطة أعلاه للتحقق من أنك لست روبوت'
                      : 'Please solve the simple math equation above to verify you are not a robot'
                    }
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!captchaVerified}
                  className={`w-full px-6 py-3 font-semibold transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse ${captchaVerified
                    ? 'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                >
                  <Send className="w-5 h-5" />
                  <span>{t('contact.send')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
