'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/i18n';
import { ArrowRight, ArrowLeft, CheckCircle, Users, Zap, Globe } from 'lucide-react';
import { features, itSkills } from '@/data/global';
import { getAssetPath } from '@/lib/utils';

export default function HomePage() {
  const { locale, t } = useTranslations();
  const isRTL = locale === 'ar';
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3000); // 3 second delay

    return () => clearTimeout(timer);
  }, []);

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
          className="fixed inset-0 opacity-40 bg-cover bg-center animate-slide"
          style={{
            backgroundImage: `url('${getAssetPath('/background.jpg')}')`,
            animation: 'slide 20s ease-in-out infinite alternate',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Gradient Overlay */}
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
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '7s' }}></div>
          <div className="absolute bottom-1/2 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDelay: '8s' }}></div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 opacity-99 dark:opacity-99">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-95 dark:opacity-95">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'لماذا تختار إبتيسايت؟' : 'Why Choose Ibtisite?'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL 
                ? 'نحن نقدم حلولاً مبتكرة ومتطورة تلبي احتياجات عملائنا وتحقق أهدافهم' 
                : 'We provide innovative and advanced solutions that meet our clients\' needs and achieve their goals'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
            <div className="group text-center p-6 rounded-lg transition-all hover:shadow-lg dark:hover:shadow-gray-600/50 bg-gray-100/100 dark:bg-gray-800/100">
              <div className="flex justify-center mb-4">
                {getIconForFeature(index)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title[locale]}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description[locale]}
              </p>
            </div>

            ))}
          </div>
        </div>
      </section>


      {/* Services/Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-95 dark:opacity-95">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {isRTL ? 'خدماتنا' : 'Our Services'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isRTL ? 
                'نحن نقدم حلول تقنية شاملة مصممة خصيصاً لاحتياجات عملك' : 
                'We provide comprehensive IT solutions tailored to your business needs'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itSkills.map((skill) => (
              <div 
                key={skill.id} 
                className="bg-white dark:bg-gray-700 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 hover:scale-105"
              >
                {/* Service Icon */}
                <div className="text-4xl mb-4">
                  {skill.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {skill.name[locale]}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {skill.description[locale]}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                    {isRTL ? 'التقنيات' : 'Technologies'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded-full border border-gray-200 dark:border-gray-500"
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
            {isRTL ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
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
