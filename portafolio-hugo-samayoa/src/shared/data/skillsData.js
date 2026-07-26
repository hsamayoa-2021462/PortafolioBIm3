// Habilidades técnicas agrupadas por categoría, con su nivel en porcentaje.
// Cada categoría se muestra como un grupo de gráficas circulares (donut).

export const SKILLS_CATEGORIES = [
  {
    id: 'lenguajes',
    label: 'Lenguajes',
    skills: [
      { name: 'JavaScript', level: 75 },
      { name: 'Java', level: 50 },
      { name: 'HTML', level: 87 },
      { name: 'CSS', level: 78 },
      { name: 'Python', level: 35 },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', level: 60 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 25 },
    ],
  },
  {
    id: 'bases-de-datos',
    label: 'Bases de datos',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 55 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    id: 'herramientas',
    label: 'Herramientas',
    skills: [
      { name: 'GitHub', level: 90 },
      { name: 'Git', level: 80 },
      { name: 'VS Code', level: 80 },
      { name: 'Postman', level: 65 },
      { name: 'Docker', level: 75 },
      { name: 'npm', level: 60 },
    ],
  },
];

// Habilidades adicionales que no se miden en porcentaje.
export const OTRAS_HABILIDADES = ['IA y APIs de inteligencia artificial'];
