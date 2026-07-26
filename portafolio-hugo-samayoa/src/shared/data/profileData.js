// Datos generales del desarrollador.
// La foto de perfil se coloca en: public/assets/images/profile/foto-perfil.jpg
// (o .png / .webp) y se referencia abajo en `photo`.
// El CV se coloca en: public/assets/docs/cv-hugo-samayoa.pdf

export const PROFILE = {
  nombre: 'Hugo Benjamin',
  apellido: 'Samayoa Díaz',
  titulo: 'Desarrollador Web',
  frase: '“Para ser grande, primero debes aprender a ser pequeño”',
  bio: 'Soy un desarrollador apasionado por la tecnología y el desarrollo de aplicaciones web. Me gusta crear soluciones funcionales, aprender nuevas tecnologías y mejorar continuamente mis habilidades. Mi objetivo es participar en proyectos que representen desafíos reales y contribuir al desarrollo de software de calidad.',
  metas: [
    'Participar en proyectos de alto impacto con aprendizaje a tecnologías nuevas',
    'Conseguir experiencia dentro del mundo laboral en desarrollo de software',
  ],
  fortalezas: ['Aprendizaje rápido', 'Trabajo en equipo', 'Liderazgo'],
  datosGenerales: {
    edad: '18 años',
    correo: 'hugobenjaminsamayoadiaz@gmail.com',
    telefono: '5967 7843',
    anosProgramando: '3 años',
    estudiandoActualmente: true,
    lugarEstudio: 'Kinal, Informática — Guatemala, Guatemala',
  },
  educacion: {
    institucion: 'Instituto Centro Técnico Laboral Kinal',
    carrera: 'Informática',
    inicio: 2024,
    fin: 2026,
    enCurso: true,
    certificacion: 'CCNA',
  },
  // Reemplazar '#' por los enlaces reales cuando estén disponibles.
  redes: {
    linkedin: 'https://www.linkedin.com/in/hugo-benjam%C3%ADn-samayoa-d%C3%ADaz-502649425/',
    computrabajo: '#',
    github: 'https://github.com/hsamayoa-2021462',
  },
  // Ruta donde debe colocarse la foto de perfil (placeholder por ahora).
  photo: '/assets/images/profile/foto-perfil.jpg',
  // Ruta donde debe colocarse el CV en PDF (placeholder por ahora).
  cv: '/assets/docs/cv-hugo-samayoa.pdf',
};
