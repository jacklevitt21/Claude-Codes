/* =========================================================================
   SKILLS DATA — shown on skills.html, grouped into categories.
   To add a skill: find the right category object and add a string to its
   "items" array. To add a whole new category: copy one of the objects.
   ========================================================================= */

const SKILL_GROUPS = [
  {
    title: 'Analysis & Design',
    icon: 'gear',
    items: [
      'Computational Fluid Dynamics (CFD)',
      'CAD Modeling',
      'Structural Analysis',
      'Manufacturing Design',
      'Systems Engineering'
    ]
  },
  {
    title: 'Engineering Software',
    icon: 'code',
    items: [
      'MATLAB',
      'Python',
      'C++',
      'SolidWorks',
      'PTC Creo',
      'Autodesk Fusion 360',
      'AutoCAD',
      'OpenRocket',
      'LaTeX'
    ]
  },
  {
    title: 'Research & Lab',
    icon: 'flask',
    items: [
      'Cryogenic Infrared Spectroscopy',
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
  },
  {
    title: 'Additional',
    icon: 'doc',
    items: [
      'Microsoft Suite',
      'Spanish (Intermediate)',
      'NYS Seal of Biliteracy'
    ]
  }
];
