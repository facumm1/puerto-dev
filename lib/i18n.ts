export type Language = "en" | "es"

export interface Translations {
  nav: {
    services: string
    portfolio: string
    about: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
  }
  services: {
    title: string
    subtitle: string
    mobile: {
      title: string
      shortText: string
      description: string
    }
    web: {
      title: string
      shortText: string
      description: string
    }
    data: {
      title: string
      shortText: string
      description: string
    }
  }
  contact: {
    title: string
    subtitle: string
    email: {
      title: string
      description: string
      cta: string
    }
    whatsapp: {
      title: string
      description: string
      cta: string
    }
    social: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Puerto Dev",
      subtitle: "We build mobile apps, web apps, and turn data into insights.",
      description:
        "Professional software development studio focused on innovation, reliability, and scalable solutions for modern businesses.",
      cta: "See Projects",
    },
    services: {
      title: "Our Services",
      subtitle: "We specialize in creating innovative solutions that drive your business forward",
      mobile: {
        title: "Mobile Applications",
        shortText: "iOS & Android apps with seamless user experiences and robust performance.",
        description:
          "Native and cross-platform mobile apps built with cutting-edge technologies for iOS and Android platforms.",
      },
      web: {
        title: "Web Applications",
        shortText: "Responsive web solutions built with React, Next.js, and modern technologies.",
        description:
          "Modern, responsive web applications using the latest frameworks and best practices for optimal performance.",
      },
      data: {
        title: "Data Analysis",
        shortText: "Turn raw data into powerful insights with advanced analytics and visualization.",
        description:
          "Transform your data into actionable insights with advanced analytics, visualization, and business intelligence solutions.",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to start your next project? Let's discuss how we can help bring your ideas to life.",
      email: {
        title: "Email Us",
        description: "Send us an email and we'll get back to you within 24 hours with a detailed response.",
        cta: "Send Email",
      },
      whatsapp: {
        title: "WhatsApp",
        description: "For quick questions and immediate responses. Available during business hours.",
        cta: "Chat on WhatsApp",
      },
      social: "Follow us on social media",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      portfolio: "Portafolio",
      about: "Acerca",
      contact: "Contacto",
    },
    hero: {
      title: "Puerto Dev",
      subtitle: "Construimos aplicaciones móviles, aplicaciones web y convertimos datos en insights.",
      description:
        "Estudio profesional de desarrollo de software enfocado en innovación, confiabilidad y soluciones escalables para empresas modernas.",
      cta: "Ver Proyectos",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Nos especializamos en crear soluciones innovadoras que impulsan tu negocio hacia adelante",
      mobile: {
        title: "Aplicaciones Móviles",
        shortText: "Apps iOS y Android con experiencias de usuario fluidas y rendimiento robusto.",
        description:
          "Aplicaciones móviles nativas y multiplataforma construidas con tecnologías de vanguardia para plataformas iOS y Android.",
      },
      web: {
        title: "Aplicaciones Web",
        shortText: "Soluciones web responsivas construidas con React, Next.js y tecnologías modernas.",
        description:
          "Aplicaciones web modernas y responsivas utilizando los frameworks más recientes y mejores prácticas para un rendimiento óptimo.",
      },
      data: {
        title: "Análisis de Datos",
        shortText: "Convierte datos en bruto en insights poderosos con análisis avanzado y visualización.",
        description:
          "Transforma tus datos en insights accionables con análisis avanzado, visualización y soluciones de inteligencia empresarial.",
      },
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle:
        "¿Listo para comenzar tu próximo proyecto? Hablemos sobre cómo podemos ayudarte a dar vida a tus ideas.",
      email: {
        title: "Envíanos un Email",
        description: "Envíanos un email y te responderemos dentro de 24 horas con una respuesta detallada.",
        cta: "Enviar Email",
      },
      whatsapp: {
        title: "WhatsApp",
        description: "Para preguntas rápidas y respuestas inmediatas. Disponible durante horario comercial.",
        cta: "Chatear en WhatsApp",
      },
      social: "Síguenos en redes sociales",
    },
  },
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}
