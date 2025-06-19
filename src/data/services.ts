import { Globe, Smartphone, Cloud, BarChart3, Shield, Rocket } from 'lucide-react';

export const services = [
  {
    id: "web-development",
    icon: Globe,
    name: {
      en: "Web Development",
      ar: "تطوير المواقع"
    },
    description: {
      en: "Full-stack web development using modern and efficient frameworks for responsive and user-friendly websites",
      ar: "تطوير مواقع ويب متجاوبة وسهلة الاستخدام بمساعدة أحدث أساليب العمل"
    },
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "app-development",
    icon: Smartphone,
    name: {
      en: "Application Development",
      ar: "تطوير التطبيقات"
    },
    description: {
      en: "Native and cross-platform applications for iOS, Android and Web, delivering the best user experiences.",
      ar: "صياغة تطبيقات فريدة على أنظمة iOS و Android و الويب، مع التركيز على حاجات المستخدمين "
    },
    technologies: ["React", "Flutter", "Spring Boot", "PostgreSQL", "Docker"]
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    name: {
      en: "Data Analytics and AI",
      ar: "تحليل البيانات و ذكاء اصطناعي"
    },
    description: {
      en: "Advanced analytics and machine learning solutions to provide insights and drive business decisions",
      ar: "تطوير أنظمة متقدمة لتحليل و عرض البيانات وحلول ذكاء اصطناعي"
    },
    technologies: ["PyTorch", "SciPy", "NumPy", "Matplotlib"]
  },
  {
    id: "cybersecurity",
    icon: Shield,
    name: {
      en: "Cybersecurity",
      ar: "الأمن السيبراني"
    },
    description: {
      en: "Protection against security threats by providing comprehensive measures",
      ar: "حماية ضد التهديدات الأمنية من خلال توفير تدابير شاملة"
    },
    technologies: ["Penetration Testing", "Security Audits", "Compliance"]
  }
];
