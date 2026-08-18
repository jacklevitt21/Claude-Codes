/* =========================================================================
   SKILLS DATA — shown on skills.html, grouped into categories.
   To add a skill: find the right category object and add a string to its
   "items" array. To add a whole new category: copy one of the objects.
   ========================================================================= */

const SKILL_GROUPS = [
  {
    title: 'Engineering & Design',
    icon: 'gear',
    items: [
      'CAD Software', // TODO (Jack): name your specific tool(s), e.g. SolidWorks, Fusion 360, Onshape
      '3D Printing & Rapid Prototyping',
      'Mechanical Systems Design',
      'Recovery / Aerospace Systems',
      'Design for Manufacturing'
    ]
  },
  {
    title: 'Programming & Data',
    icon: 'code',
    items: [
      'Python',
      'Statistical Analysis & Regression Modeling',
      'Data Visualization (Matplotlib, Seaborn)',
      'Anomaly Detection',
      'Quantitative Modeling'
    ]
  },
  {
    title: 'Research & Lab',
    icon: 'flask',
    items: [
      'Experimental Design',
      'PCR & DNA Sequencing',
      'Scientific Research & Methodology',
      'First-Principles Modeling',
      'Materials & Battery Chemistry Analysis'
    ]
  },
  {
    title: 'Leadership & Communication',
    icon: 'users',
    items: [
      'Team Leadership',
      'Event Direction & Program Management',
      'Investment Analysis',
      'Editorial / Copy Editing',
      'Teaching & Mentorship'
    ]
  }
];
