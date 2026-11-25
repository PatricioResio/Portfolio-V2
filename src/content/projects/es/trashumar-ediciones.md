---
title: "Trashumar Ediciones"
summary: "Plataforma web para una editorial independiente: autenticación, perfiles, catálogo editorial, proyectos y herramientas para su comunidad."
role: "Diseño y desarrollo frontend"
year: "2023"
status: "launching"
stack: ["React", "Vite", "Firebase", "Material UI", "Formik", "Leaflet", "Swiper"]
order: 2
links:
  - { label: "Código", url: "https://github.com/PatricioResio/TrashumarEdiciones" }
cover: "../../../assets/trashumar.webp"
coverAlt: "Página de inicio de Trashumar Ediciones con un carrusel sobre un bosque de eucaliptos"
---

## Contexto

Trashumar Ediciones es una editorial independiente, nómada y federal. El proyecto necesitaba una plataforma propia para presentar su catálogo, dar visibilidad a sus proyectos y facilitar el contacto entre las personas que forman parte de su comunidad.

## Desafío

Desarrollar una experiencia que reuniera contenido editorial y herramientas de gestión en un mismo sitio, contemplando distintos tipos de usuarios y necesidades: lectores, autores, colaboradores y distribuidores.

## Mi trabajo

Me encargué del diseño y desarrollo frontend, desde la estructura inicial hasta la implementación de las principales funcionalidades.

- **Autenticación y perfiles:** integración del inicio de sesión y gestión de perfiles de usuario.
- **Catálogo y proyectos:** interfaces para presentar libros y proyectos editoriales.
- **Comunidad y distribuidores:** perfiles con información pública, datos de contacto y zonas de distribución.
- **Mapas:** visualización de zonas de distribución mediante Leaflet y herramientas de ubicación.
- **Formularios:** validación y gestión de formularios con Formik y Yup, junto con integración de servicios externos.
- **Interfaz responsive:** componentes y layouts adaptados a distintos tamaños de pantalla.

## Decisiones técnicas

- Utilicé **React y Vite** para desarrollar la interfaz y organizar el proyecto en componentes.
- Integré **Firebase Authentication, Cloud Firestore y Cloud Storage** para autenticación, persistencia de datos y almacenamiento de archivos.
- Utilicé **Material UI** con un tema personalizado para mantener consistencia visual.
- Incorporé herramientas específicas como **Formik, Yup, Swiper y Leaflet** para resolver formularios, galerías y funcionalidades geográficas.

## Estado actual

La primera etapa de desarrollo frontend y las integraciones existentes con Firebase forman la base funcional de la plataforma. Actualmente estoy trabajando en la creación del backend para continuar su evolución y completar la siguiente etapa del proyecto.

El desarrollo sigue activo; por eso, el estado publicado aquí corresponde a un proyecto en evolución y no a una versión final cerrada.
