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
  portfolio: {
    title: string
    subtitle: string
  }
  projects: {
    dosArroyosMobile: {
      title: string
      description: string
    }
    dosArroyosWeb: {
      title: string
      description: string
    },
    puertoRanaCatalogo: {
      title: string
      description: string
    },
    puertoRanaGestion: {
      title: string
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
  about: {
    title: string
    intro: string
    missionTitle: string
    mission: string
    values: {
      innovation: {
        title: string
        description: string
      }
      reliability: {
        title: string
        description: string
      }
      collaboration: {
        title: string
        description: string
      }
    }
    checklist: string[]
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
      description: "Professional software development studio focused on innovation, reliability, and scalable solutions for modern businesses.",
      cta: "See Projects",
    },
    services: {
      title: "Our Services",
      subtitle: "We specialize in creating innovative solutions that drive your business forward",
      mobile: {
        title: "Mobile Applications",
        shortText: "iOS & Android apps with seamless user experiences and robust performance.",
        description: "Native and cross-platform mobile apps built with cutting-edge technologies for iOS and Android platforms.",
      },
      web: {
        title: "Web Applications",
        shortText: "Responsive web solutions built with React, Next.js, and modern technologies.",
        description: "Modern, responsive web applications using the latest frameworks and best practices for optimal performance.",
      },
      data: {
        title: "Data Analysis",
        shortText: "Turn raw data into powerful insights with advanced analytics and visualization.",
        description: "Transform your data into actionable insights with advanced analytics, visualization, and business intelligence solutions.",
      },
    },
    portfolio: {
      title: "Our Projects",
      subtitle: "Some of the work we've done to help our clients grow in the digital world.",
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
    projects: {
      dosArroyosMobile: {
        title: "Dos Arroyos Cambios - Mobile App",
        description: "Mobile application allowing clients to buy and sell currencies quickly and securely.",
      },
      dosArroyosWeb: {
        title: "Dos Arroyos Cambios - Web App",
        description: "Internal web platform to manage operations, update currency rates, and handle orders.",
      },
      puertoRanaCatalogo: {
        title: "Puerto Rana - Catalog",
        description: "Web application to showcase products and facilitate customer orders, built with Next.js.",
      },
      puertoRanaGestion: {
        title: "Puerto Rana - Management",
        description: "Internal application to manage orders, purchases, and suppliers efficiently and systematically.",
      }
    },    
    about: {
      title: "About Puerto Dev",
      intro:
        "We’re a small development studio that loves building web and mobile apps. We work closely with each client to understand their needs and create simple, useful, and well-crafted solutions.",
      missionTitle: "Our Mission",
      mission:
        "To help people and businesses bring their ideas to the digital world with easy-to-use products made with care.",
      values: {
        innovation: {
          title: "Innovation",
          description: "We look for creative and practical solutions for every project.",
        },
        reliability: {
          title: "Reliability",
          description: "Clean, stable code built to last.",
        },
        collaboration: {
          title: "Collaboration",
          description: "We work closely with our clients every step of the way.",
        },
      },
      checklist: [
        "Clear, maintainable code",
        "Agile and flexible workflow",
        "Testing and quality control",
        "Support after delivery",
      ],
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
      subtitle: "Desarrollamos experiencias digitales a tu medida.",
      description:
        "Somos un equipo de desarrolladores apasionados por hacer tu proyecto realidad, con atención cercana y soluciones simples pero efectivas.",
      cta: "Conocé nuestros proyectos",
    },    
    services: {
      title: "Nuestros Servicios",
      subtitle: "Creamos soluciones digitales simples y efectivas para que tu proyecto funcione de verdad.",
      mobile: {
        title: "Apps Móviles",
        shortText: "Desarrollamos apps iOS y Android con React Native, rápidas y fáciles de usar.",
        description:
          "Creamos aplicaciones móviles con React Native que funcionan en iOS y Android, enfocadas en la experiencia del usuario y el rendimiento.",
      },
      web: {
        title: "Aplicaciones Web",
        shortText: "Soluciones web modernas con Next.js y React, responsivas y funcionales.",
        description:
          "Diseñamos y desarrollamos aplicaciones web con Next.js y React, asegurando rapidez, escalabilidad y experiencia de usuario fluida.",
      },
      data: {
        title: "Análisis de Datos",
        shortText: "Transformamos datos en información clara y útil para tu negocio.",
        description:
          "Te ayudamos a interpretar tus datos con gráficos y dashboards interactivos, facilitando decisiones basadas en información real.",
      },
    },
    portfolio: {
      title: "Nuestros Proyectos",
      subtitle: "Algunos de los trabajos que realizamos para ayudar a nuestros clientes a crecer en el mundo digital.",
    },
    projects: {
      dosArroyosMobile: {
        title: "Dos Arroyos Cambios - App Móvil",
        description: "Aplicación móvil para que los clientes puedan comprar y vender divisas de forma rápida y segura.",
      },
      dosArroyosWeb: {
        title: "Dos Arroyos Cambios - Web App",
        description: "Plataforma web interna para gestionar operaciones, actualizar precios de divisas y administrar pedidos.",
      },
      puertoRanaCatalogo: {
        title: "Puerto Rana - Catálogo",
        description: "Aplicación web para mostrar productos y facilitar pedidos de clientes, construida con Next.js.",
      },
      puertoRanaGestion: {
        title: "Puerto Rana - Gestión",
        description: "Aplicación interna para gestionar pedidos, compras y proveedores de forma ágil y ordenada.",
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
    about: {
      title: "Sobre Puerto Dev",
      intro:
        "Somos un pequeño estudio de desarrollo que disfruta creando aplicaciones web y móviles. Trabajamos de forma cercana con cada cliente para entender sus necesidades y construir soluciones simples, útiles y bien hechas.",
      missionTitle: "Nuestra misión",
      mission:
        "Ayudar a personas y empresas a llevar sus ideas al mundo digital con productos que sean fáciles de usar y hechos con dedicación.",
      values: {
        innovation: {
          title: "Innovación",
          description: "Buscamos soluciones creativas y prácticas para cada proyecto.",
        },
        reliability: {
          title: "Confianza",
          description: "Código limpio, estable y pensado para durar.",
        },
        collaboration: {
          title: "Colaboración",
          description: "Trabajamos codo a codo con nuestros clientes en cada paso.",
        },
      },
      checklist: [
        "Código claro y fácil de mantener",
        "Metodología ágil y flexible",
        "Pruebas y control de calidad",
        "Acompañamiento después de la entrega",
      ],
    },
  },
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}
