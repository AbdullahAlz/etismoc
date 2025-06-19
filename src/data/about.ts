import { teardownCrashReporter } from "next/dist/build/swc";

interface LocalizedText {
  en: string;
  ar: string;
}

interface ValueItem {
  name: LocalizedText;
  description: LocalizedText;
  icon?: string;
}

export const aboutData = {
  whoWeAre: {
    title: {
      en: "Who We Are",
      ar: "من نحن"
    },
    description: {
      en: "We are a team of passionate Syrian computer scientists, united by our shared mission to provide innovative solutions for a promising future. With expertise ranging from software development, Machine Learning to Cybersecurity, we bring unique perspectives for an Syrian era poised for growth and transformation",
      ar: "نحن فريق من المطورين السوريين ذو شغف، تُوحِّدنا رسالتنا المشتركة لتقديم حلولٍ مبتكرةٍ لمستقبلٍ واعدٍ. ومن خلال خبرتنا في تطوير البرمجيات, الذكاء الإصطناعي والأمن السيبراني، نسعى لتوفير أفضل المنتجات لمستقبل مشرق في سوريا"
    },
    image: "/images/about-team.jpg",
    showMore: {
      en: "Show more",
      ar: "عرض المزيد"
    }
  },
  fullStory: {
    mission: {
      en: "Reviving the Syrian tech industry through innovative solutions and a commitment to excellence.",
      ar: "إحداث نهضة في التكنولوجيا السورية من خلال حلول مبتكرة والتزام بالتميز."
    },
    vision: {
      en: "To become a leading and driving force on the Syrian tech scene, encouraging development and innovation.",
      ar: "أن نصبح قوة رائدة ومحركة في مجال التكنولوجيا السورية، تشجيعاً على التطوير والابتكار."
    },
    story: {
      en: "Our startup was founded as soon as the promise of a new era in Syria became clear. We recognized the need for a strong technological foundation to support the rebuilding of our country",
      ar: "تأسست شركتنا الناشئة مع ظهور فرصة جديدة لسوريا. أدركنا الحاجة إلى أساس تقني قوي لدعم إعادة بناء بلادنا"
    },
    values: [
      {
        name: {
          en: "Efficiency",
          ar: "الكفاءة"
        },
        description: {
          en: "We prioritize efficient solutions to provide practical products that are not affected by the limitations of internet speed in Syria",
          ar: "الأولوية  هي توفير منتجات عمليّة لا تتأثر بحدود سرعة الإنترنت في سوريا"
        },
        icon: "Zap"
      },
      {
        name: {
          en: "Initiative",
          ar: "المبادرة"
        },
        description: {
          en: "Our success originates from every team member's initiative and commitment",
          ar: "نجاحنا ينطلق من مبادرة كل عضو في الفريق والتزامه"
        },
        icon: "Rocket"
      },
      {
        name: {
          en: "Localization",
          ar: "التوطين"
        },
        description: {
          en: "We realize the importance of providing software primarily tailored for our Arabic-speaking Syrian community",
          ar: "ندرك أهمية توفير البرمجيات المخصصة بشكل أساسي لمجتمعنا السوري الناطق بالعربية"
        },
        icon: "MapPin"
      }
    ]
  },
  team: [
    {
      name: {
        en: "Mouhanad Derbas",
        ar: "مهند درباس"
      },
      role: {
        en: "Lead Backend Developer",
        ar: "مطور رئيسي للواجهة الخلفية",
      },
      image: null,
      bio: {
        en: "Years of experience in backend development and maintaining complex systems",
        ar: "سنوات من الخبرة في تطوير الجهة الخلفية وتَحْسِين الأنظمة المعقدة"
      }
    },
    {
      name: {
        en: "Sami Alzein",
        ar: "سامي الزين"
      },
      role: {
        en: "Founder & CEO and Lead Developer",
        ar: "مؤسس ومدير تنفيذي ومطوِّر رئيسي",
      },
      image: null,
      bio: {
        en: "An experienced software engineer with a talent for innovation",
        ar: "مهندس برمجيات ذو خبرة واسعة و موهبة في الابتكار"
      }
    },
    {
      name: {
        en: "Osaid Qattan",
        ar: "أُسيد قطّان"
      },
      role: {
        en: "Frontend Developer and Cybersecurity Specialist",
        ar: "مطور واجهة أمامية ومتخصص في الأمن السيبراني",
      },
      image: null,
      bio: {
        en: "Highly experienced in frontend development, specialized in cybersecurity and web security",
        ar: "ذو خبرة عالية في تطوير الواجهة الأمامية، متخصص في الأمن السيبراني وأمن الويب"
      }
    },
    {
      name: {
        en: "Abdulaziz Kattan",
        ar: "عبد العزيز قطّان"
      },
      role: {
        en: "Frontend Developer and Cybersecurity Specialist",
        ar: "مطور واجهة أمامية ومتخصص في الأمن السيبراني",
      },
      image: null,
      bio: {
        en: "Highly experienced in frontend development, specialized in cybersecurity and web security",
        ar: "ذو خبرة عالية في تطوير الواجهة الأمامية، متخصص في الأمن السيبراني وأمن الويب"
      }
    },
    {
      name: {
        en: "Mohammad Kheir Abdoh",
        ar: "محمد خير عبده"
      },
      role: {
        en: "Backend Developer and ...",
        ar: "مطور واجهة خلفية و...",
      },
      image: null,
      bio: {
        en: "Robust knowledge in backend development and management of workflows",
        ar: "معرفة قوية في تطوير الواجهة الخلفية وإدارة سير العمل"
      }
    },
    {
      name: {
        en: "Abdulkader X",
        ar: "عبد القادر إكس"
      },
      role: {
        en: "Backend Developer and Database Specialist",
        ar: "مطور واجهة خلفية ومتخصص في قواعد البيانات",
      },
      image: null,
      bio: {
        en: "Key experience in backend design and database management",
        ar: "خبرة رئيسية في تصميم الواجهة الخلفية وإدارة قواعد البيانات"
      }
    },
    {
      name: {
        en: "Mohammad Ali Qattan",
        ar: "محمد علي قطّان"
      },
      role: {
        en: "Frontend Developer and Cybersecurity Specialist",
        ar: "مطور واجهة أمامية",
      },
      image: null,
      bio: {
        en: "Highly experienced in frontend development",
        ar: "ذو خبرة عالية في تطوير الواجهة الأمامية، "
      }
    },
    {
      name: {
        en: "Abdullah Alzein",
        ar: "عبد الله الزين"
      },
      role: {
        en: "Backend Developer Intern",
        ar: "مطور واجهة خلفية متدرب",
      },
      image: null,
      bio: {
        en: "A promising intern with a strong foundation in backend technologies and specialization in ML",
        ar: "متدرب واعد ذو أساس قوي في تقنيات الواجهة الخلفية وتخصص في الذكاء الاصطناعي"
      }
    },
  ]
};
