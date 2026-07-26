# Portafolio — Hugo Benjamin Samayoa Díaz

Portafolio de desarrollador construido con **React + Vite**, en un monorepo
de un solo paquete con arquitectura **feature-based** (inspirada en la
estructura de referencia: `app/`, `features/`, `shared/`).

## Cómo correrlo

Este proyecto usa **pnpm** como gestor de paquetes.

```bash
pnpm install
pnpm dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

Para generar la build de producción:

```bash
pnpm build
pnpm preview
```

## Estructura del proyecto

```
src/
  app/
    App.jsx                 // Compone todas las secciones de la página
  features/
    welcome/                // Apartado 1: Bienvenida
      Welcome.jsx
    about/                  // Apartado 2: Sobre ti
      About.jsx
      IntroBlock.jsx         // "¡Hola! Soy Hugo" + foto + descripción
      GoalsStrengths.jsx     // Metas y fortalezas
      GeneralData.jsx        // Datos generales (edad, contacto, etc.)
    skills/                 // Habilidades técnicas (gráficas donut)
      Skills.jsx
    education/              // Formación y experiencia
      Education.jsx
    projects/               // Proyectos (portafolio técnico)
      Projects.jsx
      ProjectCard.jsx
    contact/                // Apartado 3: LinkedIn / CompuTrabajo / GitHub + CV
      Contact.jsx
  shared/
    components/
      layout/
        Navbar.jsx           // Menú fijo con sección activa
        Footer.jsx
      ui/
        DonutChart.jsx        // Gráfica circular animada de habilidades
        DotPattern.jsx         // Decoración de puntos del diseño
        Reveal.jsx              // Wrapper de animación al hacer scroll
        SectionHeading.jsx
    hooks/
      useReveal.js            // Animación scroll-reveal (IntersectionObserver)
      useActiveSection.js     // Detecta la sección visible para el Navbar
    data/
      profileData.js          // Nombre, bio, datos generales, redes, CV, foto
      skillsData.js            // Habilidades por categoría y porcentaje
      educationData.js         // Formación / experiencia / certificaciones
      projectsData.js           // Proyectos (con placeholders)
    utils/
      constants.js              // Secciones de navegación
  index.css                     // Sistema de diseño completo (tokens + estilos)
  main.jsx
public/
  assets/
    images/
      profile/                 // ← FOTO DE PERFIL va aquí
      projects/
        proyecto-1/             // ← Capturas del proyecto 1
        proyecto-2/              // ← Capturas del proyecto 2
        proyecto-3/               // ← Capturas del proyecto 3
    docs/                        // ← CV EN PDF va aquí
    icons/
```

## Dónde completar tu información (placeholders)

Todo lo que falta por llenar está marcado en el código y, cuando aplica,
visible directamente en la página como una nota (por ejemplo "Espacio para
foto de perfil"). Aquí el detalle exacto de **qué archivo editar** y **en
qué carpeta poner cada archivo**:

| Qué falta | Dónde poner el archivo | Qué editar en el código |
|---|---|---|
| Foto de perfil | `public/assets/images/profile/foto-perfil.jpg` | `src/shared/data/profileData.js` → campo `photo` (ya apunta a esa ruta). Luego, en `src/features/about/IntroBlock.jsx`, descomenta la línea `<img src={PROFILE.photo} ... />` y borra el `<span>` placeholder. |
| CV en PDF | `public/assets/docs/cv-hugo-samayoa.pdf` | `src/shared/data/profileData.js` → campo `cv` (ya apunta a esa ruta). El botón "Descargar CV" en `Contact.jsx` ya usa esta ruta, no requiere cambios. |
| Proyectos (mínimo 3) | Capturas en `public/assets/images/projects/proyecto-1/`, `proyecto-2/`, `proyecto-3/` (agrega más carpetas `proyecto-4/`, etc. si quieres más proyectos) | `src/shared/data/projectsData.js` → reemplaza los textos entre `[ ]` (título, descripción, tecnologías) y los enlaces `github`/`demo`. En `src/features/projects/ProjectCard.jsx`, reemplaza el `<span>` placeholder por `<img src={project.imagenes[0]} alt={project.titulo} />`. |
| Link de LinkedIn | — (solo URL) | `src/shared/data/profileData.js` → `redes.linkedin` |
| Link de CompuTrabajo | — (solo URL) | `src/shared/data/profileData.js` → `redes.computrabajo` |
| Link de GitHub | — (solo URL) | `src/shared/data/profileData.js` → `redes.github` |
| Experiencia laboral / prácticas | — | `src/shared/data/educationData.js` → arreglo `EXPERIENCIA` |

## Notas de diseño

- Paleta: fondo crema texturizado (`#f5f1e6`), tinta carbón (`#262420`),
  acento azul claro (`#62b6d9`) y tarjetas oscuras (`#201e1a`) para
  "Experiencia" y "Contacto", replicando el layout del brief de diseño
  proporcionado (con el rosa cambiado por azul claro).
- Tipografía: **Archivo** (peso 800/900) para títulos y **Work Sans** para
  texto de cuerpo, cargadas desde Google Fonts en `index.html`.
- Todas las secciones usan `data-reveal` + `IntersectionObserver`
  (`useReveal`) para animarse suavemente al hacer scroll.
- Las habilidades se muestran como gráficas circulares (donut) en SVG,
  animadas al entrar en el viewport (`DonutChart.jsx`).
- Diseño responsive: navbar con menú hamburguesa en móvil, grids que
  colapsan a 1–2 columnas por debajo de 960px y 720px.
