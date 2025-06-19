let globalname = "Ibtikar";
let tld = "uk";
export const siteConfig = {
  name: {
    en: globalname,
    ar: "ابتكار"
  },
  tagline: {
    en: "We craft Syria's IT-future",
    ar: "نصوغ مستقبل سوريا التقني"
  },
  get description() {
    return {
      en: `${globalname} is a cutting-edge startup dedicated to delivering exceptional solutions that transform businesses and drive growth.`,
      ar: `${this.name.ar} هي شركة ناشئة متطورة مكرسة لتقديم حلول استثنائية تحول الأعمال وتدفع النمو.`
    };
  },
  
  contact: {
    email: `info@${globalname}.${tld}`,
    phone: "+1 (555) 123-4567",
    address: {
      en: "Al-Insha'at,, Homs, Syria",
      ar: "الإنشاءات، خلف جامع الدروبي، حمص، سوريا"
    }
  },

  social: {
    website: `https://${globalname}.${tld}`,
    linkedin: `https://linkedin.com/company/${globalname}`,
    twitter: `https://twitter.com/${globalname}`,
    github: `https://github.com/${globalname}`
  },

  seo: {
    keywords: "startup, innovation, technology, solutions, business, IT services, web development, consulting",
    author: `${globalname} Team`
  }
};

export const navigation = [
  {
    key: "home",
    href: "/",
    name: {
      en: "Home",
      ar: "الرئيسية"
    }
  },
  {
    key: "about",
    href: "/about",
    name: {
      en: "About Us",
      ar: "من نحن"
    }
  },
  // {
  //   key: "careers",
  //   href: "/careers",
  //   name: {
  //     en: "Careers",
  //     ar: "الوظائف"
  //   }
  // },
  {
    key: "contact",
    href: "/contact",
    name: {
      en: "Contact Us",
      ar: "اتصل بنا"
    }
  }
];
