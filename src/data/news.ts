export const news = [
  {
    id: "ai-revolution-2025",
    title: {
      en: "The AI Revolution: Transforming Business Operations in 2025",
      ar: "ثورة الذكاء الاصطناعي: تحويل عمليات الأعمال في 2025"
    },
    description: {
      en: "Discover how artificial intelligence is reshaping industries and creating new opportunities for businesses worldwide.",
      ar: "اكتشف كيف يعيد الذكاء الاصطناعي تشكيل الصناعات ويخلق فرصًا جديدة للشركات في جميع أنحاء العالم."
    },
    date: "2025-06-15",
    slug: "ai-revolution-2025",
    featured: true
  },
  {
    id: "cloud-migration-trends",
    title: {
      en: "Cloud Migration Trends: What Every Business Should Know",
      ar: "اتجاهات الهجرة السحابية: ما يجب على كل شركة معرفته"
    },
    description: {
      en: "Explore the latest trends in cloud migration and how they can benefit your organization's digital transformation journey.",
      ar: "استكشف أحدث الاتجاهات في الهجرة السحابية وكيف يمكن أن تفيد رحلة التحول الرقمي لمؤسستك."
    },
    date: "2025-06-10",
    slug: "cloud-migration-trends",
    featured: false
  },
  {
    id: "cybersecurity-best-practices",
    title: {
      en: "Essential Cybersecurity Best Practices for Modern Businesses",
      ar: "أفضل ممارسات الأمن السيبراني الأساسية للشركات الحديثة"
    },
    description: {
      en: "Learn about the critical cybersecurity measures every business should implement to protect against evolving threats.",
      ar: "تعرف على التدابير الأمنية السيبرانية الحاسمة التي يجب على كل شركة تنفيذها للحماية من التهديدات المتطورة."
    },
    date: "2025-06-05",
    slug: "cybersecurity-best-practices",
    featured: false
  }
];

export const latestNews = news.find(item => item.featured) || news[0];
