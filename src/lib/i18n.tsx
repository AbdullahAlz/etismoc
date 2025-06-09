'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { siteConfig, companyInfo } from '@/data/global';

type Locale = 'en' | 'ar';

interface I18nContextType {
  locale: Locale;
  t: (key: string, variables?: Record<string, string>) => string;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, any>;
}

export function I18nProvider({ children, locale, messages }: I18nProviderProps) {
  const t = (key: string, variables?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    if (typeof value !== 'string') {
      return key;
    }

    // Replace template variables
    let result = value;
    
    // Default global variables
    const globalVariables = {
      companyName: siteConfig.name[locale],
      tagline: siteConfig.tagline[locale],
      description: siteConfig.description[locale],
      mission: companyInfo.mission[locale],
      vision: companyInfo.vision[locale],
      email: siteConfig.contact.email,
      phone: siteConfig.contact.phone,
      address: siteConfig.contact.address[locale]
    };

    // Merge with provided variables
    const allVariables = { ...globalVariables, ...(variables || {}) };

    // Replace {{variable}} patterns
    Object.entries(allVariables).forEach(([varKey, varValue]) => {
      const pattern = new RegExp(`\\{\\{${varKey}\\}\\}`, 'g');
      result = result.replace(pattern, varValue);
    });
    
    return result;
  };

  const setLocale = (newLocale: Locale) => {
    // For static sites, we'll handle this through navigation
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '');
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within an I18nProvider');
  }
  return context;
}

export function useLocale() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within an I18nProvider');
  }
  return context.locale;
}
