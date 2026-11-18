// Todos los textos del sitio, por idioma. Misma estructura en `es` y `en`.
export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

export const ui = {
  es: {
    htmlLang: "es-AR",
    meta: {
      title: "Patricio Resio | Desarrollador Frontend",
      description:
        "Portfolio de Patricio Resio, desarrollador frontend junior en Buenos Aires. React, TypeScript y sitios multilingües.",
    },
    skip: "Saltar al contenido",
    nav: {
      label: "Navegación principal",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
      cv: "CV",
      switchLang: "Switch to English",
    },
    hero: {
      eyebrow: "Desarrollador frontend · Buenos Aires",
      title: "Interfaces claras, rápidas y en varios idiomas.",
      lede: "Soy Patricio Resio, desarrollador frontend junior. Trabajo con React y TypeScript, y estoy sumando backend. Busco un equipo donde aportar y seguir creciendo.",
      cv: "Ver CV",
      contact: "Escribime",
      proof: [
        { value: "4", label: "idiomas en un mismo sitio, en mi último proyecto" },
        { value: "C1", label: "inglés, certificado por EF SET" },
        { value: "0 KB", label: "de JavaScript en esta página" },
      ],
    },
    projects: {
      number: "01",
      title: "Proyectos",
      intro:
        "Trabajos reales, con sus decisiones: qué problema había, qué elegí y qué resultó.",
      caseStudy: "Ver caso de estudio",
      status: {
        live: "En producción",
        launching: "Lanzamiento en curso",
        pending: "Listo, pendiente de lanzamiento",
        collab: "Colaboración",
      },
    },
    experience: {
      number: "02",
      title: "Experiencia",
      items: [
        {
          period: "2026",
          role: "Desarrollador Frontend",
          org: "La Casa de los Vientos",
          points: [
            "Desarrollo de una landing page mobile-first para una hostería en Salta.",
            "Implementación de galería, visualización de habitaciones, disponibilidad y contacto.",
            "Desarrollo de una experiencia web en cuatro idiomas.",
          ],
        },
        {
          period: "mayo – junio 2024",
          role: "Colaborador Frontend",
          org: "Adopta Un Junior",
          points: [
            "Colaboración en el desarrollo de componentes y secciones de una aplicación web dentro de un proyecto compartido.",
            "Participación en el sitio de divulgación científica Ciencia Cerca (marca de España): navbar, botones y cards siguiendo la estética de la marca.",
          ],
        },
        {
          period: "2023",
          role: "Desarrollador Frontend",
          org: "Trashumar Ediciones",
          points: [
            "Desarrollo de una plataforma web para una editorial independiente, con autenticación, perfiles de usuario, catálogo de libros y gestión de proyectos.",
            "Integración de Firebase para autenticación, base de datos y almacenamiento.",
            "Trabajo en componentes responsive y mejoras de rendimiento, incluida la carga de imágenes.",
          ],
        },
        {
          period: "2013",
          role: "Sistema de inscripciones (proyecto de prácticas)",
          org: "E.E.T. N.º 2 de Lomas de Zamora",
          points: [
            "Desarrollo de un programa CRUD para el registro de alumnos.",
            "Desarrollo individual con Visual Basic, C++ y SQL, como trabajo de prácticas de la carrera técnica.",
          ],
        },
      ],
    },
    stack: {
      number: "03",
      title: "Stack",
      groups: [
        { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"] },
        { label: "UI y estilos", items: ["Tailwind CSS", "Material UI", "Bootstrap", "Sass"] },
        { label: "Herramientas", items: ["Git", "GitHub", "Vite", "npm"] },
        { label: "Servicios y datos", items: ["Firebase", "Firestore", "Firebase Authentication", "Firebase Storage"] },
        { label: "En aprendizaje", items: ["Backend"] },
      ],
    },
    education: {
      number: "04",
      title: "Educación",
      items: [
        { period: "Desde 2026", name: "Universidad Nacional de Lanús (UNLa)", detail: "Licenciatura en Sistemas", inProgress: "En curso" },
        { period: "2022 – 2023", name: "Coderhouse", detail: "Formación en Desarrollo Web, JavaScript y React" },
        { period: "2008 – 2013", name: "E.E.T. N.º 2 de Lomas de Zamora", detail: "Bachiller técnico con orientación en redes y programación" },
      ],
      languagesTitle: "Idiomas",
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "C1 · certificado por EF SET" },
      ],
    },
    contact: {
      number: "05",
      title: "Hablemos.",
      lede: "Estoy buscando mi próxima oportunidad como desarrollador frontend. Escribime y te respondo a la brevedad.",
      name: "Tu nombre",
      email: "Tu email",
      message: "Tu mensaje",
      send: "Enviar mensaje",
      thanksTitle: "¡Gracias!",
      thanksText: "Recibí tu mensaje. Te respondo a la brevedad.",
      back: "Volver al inicio",
    },
    footer: { rights: "Todos los derechos reservados." },
    caseStudy: {
      back: "← Todos los proyectos",
      role: "Rol",
      year: "Año",
      status: "Estado",
      stack: "Stack",
      links: "Enlaces",
      code: "Código",
      demo: "Demo",
    },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "Patricio Resio | Frontend Developer",
      description:
        "Portfolio of Patricio Resio, junior frontend developer based in Buenos Aires. React, TypeScript and multilingual websites.",
    },
    skip: "Skip to content",
    nav: {
      label: "Main navigation",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      cv: "CV",
      switchLang: "Cambiar a español",
    },
    hero: {
      eyebrow: "Frontend developer · Buenos Aires",
      title: "Clear, fast interfaces, in more than one language.",
      lede: "I'm Patricio Resio, a junior frontend developer. I work with React and TypeScript, and I'm adding backend skills. I'm looking for a team where I can contribute and keep growing.",
      cv: "View CV",
      contact: "Get in touch",
      proof: [
        { value: "4", label: "languages in a single site, in my latest project" },
        { value: "C1", label: "English, EF SET certified" },
        { value: "0 KB", label: "of JavaScript on this page" },
      ],
    },
    projects: {
      number: "01",
      title: "Projects",
      intro:
        "Real work, with the reasoning behind it: what the problem was, what I chose and how it turned out.",
      caseStudy: "Read the case study",
      status: {
        live: "In production",
        launching: "Launching soon",
        pending: "Ready, pending launch",
        collab: "Collaboration",
      },
    },
    experience: {
      number: "02",
      title: "Experience",
      items: [
        {
          period: "2026",
          role: "Frontend Developer",
          org: "La Casa de los Vientos",
          points: [
            "Built a mobile-first landing page for an inn in Salta, Argentina.",
            "Implemented a gallery, room views, availability and contact features.",
            "Delivered the website in four languages.",
          ],
        },
        {
          period: "May – June 2024",
          role: "Frontend Contributor",
          org: "Adopta Un Junior",
          points: [
            "Contributed components and sections to a web application within a shared team project.",
            "Worked on the science outreach website Ciencia Cerca (a brand from Spain): navbar, buttons and cards following the brand's aesthetic.",
          ],
        },
        {
          period: "2023",
          role: "Frontend Developer",
          org: "Trashumar Ediciones",
          points: [
            "Built a web platform for an independent publisher, including authentication, user profiles, a book catalog and project management.",
            "Integrated Firebase for authentication, database and storage.",
            "Built responsive components and improved performance, including image loading.",
          ],
        },
        {
          period: "2013",
          role: "Enrollment System (internship project)",
          org: "E.E.T. N.º 2 de Lomas de Zamora",
          points: [
            "Built a CRUD program for student registration.",
            "Developed independently with Visual Basic, C++ and SQL as internship work for a technical degree.",
          ],
        },
      ],
    },
    stack: {
      number: "03",
      title: "Stack",
      groups: [
        { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"] },
        { label: "UI & styling", items: ["Tailwind CSS", "Material UI", "Bootstrap", "Sass"] },
        { label: "Tools", items: ["Git", "GitHub", "Vite", "npm"] },
        { label: "Services & data", items: ["Firebase", "Firestore", "Firebase Authentication", "Firebase Storage"] },
        { label: "Currently learning", items: ["Backend"] },
      ],
    },
    education: {
      number: "04",
      title: "Education",
      items: [
        { period: "Since 2026", name: "Universidad Nacional de Lanús (UNLa)", detail: "Bachelor's degree in Systems (Licenciatura en Sistemas)", inProgress: "In progress" },
        { period: "2022 – 2023", name: "Coderhouse", detail: "Web Development, JavaScript and React training" },
        { period: "2008 – 2013", name: "E.E.T. N.º 2 de Lomas de Zamora", detail: "Technical high school diploma, networking and programming track" },
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "C1 · EF SET certified" },
      ],
    },
    contact: {
      number: "05",
      title: "Let's talk.",
      lede: "I'm looking for my next opportunity as a frontend developer. Write to me and I'll get back to you soon.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send message",
      thanksTitle: "Thank you!",
      thanksText: "I got your message. I'll get back to you soon.",
      back: "Back to home",
    },
    footer: { rights: "All rights reserved." },
    caseStudy: {
      back: "← All projects",
      role: "Role",
      year: "Year",
      status: "Status",
      stack: "Stack",
      links: "Links",
      code: "Code",
      demo: "Demo",
    },
  },
} as const;

export const socials = {
  github: "https://github.com/PatricioResio",
  linkedin: "https://www.linkedin.com/in/patricio-resio/",
  email: "patricio.resio@gmail.com",
  whatsapp: "https://wa.me/5491167448855",
  cv: { es: "/CV-Patricio-Resio-ES.pdf", en: "/CV-Patricio-Resio-EN.pdf" },
};
