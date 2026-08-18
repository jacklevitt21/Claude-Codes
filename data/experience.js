/* =========================================================================
   PROJECT DATA
   ---------------------------------------------------------------------
   This site focuses on engineering projects — not a full resume replica
   (that's what resume.pdf is for). Each project here gets:
     1. A card on the homepage / projects page
     2. Its own detail page in projects/<id>.html with a photo gallery

   HOW TO ADD A NEW PROJECT
   1. Copy one of the objects below.
   2. Give it a unique "id" (no spaces) — this must match a file you
      create at projects/<id>.html (copy projects/_template.html).
   3. Fill in the fields, save, refresh.

   HOW TO ADD PHOTOS / DESIGN FILES TO A PROJECT
   Put image files in assets/images/<id>/ and list them in that
   project's "gallery" array, e.g.:
     gallery: [
       { src: 'assets/images/recovery-systems-lead/bulkhead-cad.jpg', caption: 'Bulkhead CAD model' },
       { src: 'assets/images/recovery-systems-lead/ground-test.jpg', caption: 'Parachute deployment ground test' }
     ]
   Leave it as [] and the detail page will just show empty placeholder
   tiles reminding you to add images.

   FIELD GUIDE
   - oneLiner: short caption shown on the grid card (not the full bullets).
   - image: main thumbnail, shown on the card and at the top of the
     detail page. null shows a plain placeholder box instead.
   - gallery: array of { src, caption } — shown on the detail page only.
   ========================================================================= */

const EXPERIENCES = [
  {
    id: 'recovery-systems-lead',
    title: 'Recovery Systems Lead',
    org: 'Princeton Rocketry',
    category: 'engineering',
    dates: 'Sep 2025 – Present',
    location: 'Princeton, NJ',
    image: null,
    oneLiner: 'Parachute recovery systems and CFD analysis for 30,000-ft high-powered rockets.',
    summary: 'Leads recovery systems engineering for the team’s 30,000-ft high-powered rockets — parachute deployment mechanisms, aerodynamic analysis, and structural hardware.',
    bullets: [
      'Led recovery systems engineering for 30,000-ft high-powered rockets, developing parachute deployment mechanisms and conducting ground testing to validate mission-critical flight hardware.',
      'Performed CFD simulations of rocket geometries to evaluate airflow behavior, aerodynamic stability, and performance impacts across flight regimes.',
      'Designed, fabricated, and validated optimized bulkhead structures using CAD and manufacturing processes, improving structural performance while optimizing subsystem mass.'
    ],
    tags: ['CAD', 'CFD', 'OpenRocket', 'Manufacturing'],
    gallery: []
  },
  {
    id: 'reworld-mechanical-intern',
    title: 'Mechanical/Operations Engineering Intern',
    org: 'Reworld',
    category: 'engineering',
    dates: 'May 2026 – Aug 2026',
    location: '',
    image: null,
    oneLiner: 'Plant-wide structural analysis and P&IDs for a waste-to-energy facility.',
    summary: 'Performed a plant-wide structural analysis and produced engineering drawings and documentation for a waste-to-energy facility.',
    bullets: [
      'Performed and authored a plant-wide structural analysis across 50+ mechanical systems, evaluating load paths, support conditions, and equipment integrity to identify areas requiring engineering review and improve maintenance planning.',
      'Developed and revised P&IDs and CAD models for plant equipment and utility systems, producing accurate engineering drawings that supported communication between operations, maintenance, and external vendors.',
      'Developed technical engineering documentation detailing component mechanics, failure modes, and maintenance principles of critical plant equipment to improve operator understanding of system functionality.'
    ],
    tags: ['Structural Analysis', 'P&IDs', 'CAD', 'AutoCAD'],
    gallery: []
  },
  {
    id: 'orbis-metallicum',
    title: 'Manufacturing Systems Engineering Intern',
    org: 'Orbis-Metallicum LLC',
    category: 'engineering',
    dates: 'Dec 2025 – Present',
    location: '',
    image: null,
    oneLiner: 'A global EV gigacasting manufacturing database, plus next-gen conductor and battery materials modeling.',
    summary: 'Builds a global EV gigacasting manufacturing database and evaluates next-generation conductor materials and battery chemistries.',
    bullets: [
      'Built and optimized a global manufacturing database of EV gigacasting, integrating casting architecture, machine tonnage, and component-level design specifications across 12 OEMs and 40+ facilities, comprising 2,000+ data points.',
      'Evaluated graphene and graphene-doped aluminum/copper composites as next-generation electrical conductors, benchmarking theoretical thermal and electrical conductivity gains against incumbent materials to assess feasibility for weight-sensitive aerospace and high-power electronics applications.',
      'Developed first-principles models of automotive battery chemistries, analyzing material composition, manufacturing processes, and electrochemical performance tradeoffs to evaluate future technology adoption.'
    ],
    tags: ['Data Analysis', 'Materials', 'Modeling'],
    gallery: []
  },
  {
    id: 'rabitz-lab',
    title: 'Undergraduate Research Assistant',
    org: 'Princeton University — Rabitz Lab',
    category: 'research',
    dates: 'Aug 2026 – Present',
    location: 'Princeton, NJ',
    image: null,
    oneLiner: 'Cryogenic infrared spectroscopy supporting a new cell-mapping microscopy instrument.',
    summary: 'Collects cryogenic infrared spectra of biological molecules to support a novel microscopy instrument for mapping molecule distribution within cells.',
    bullets: [
      'Collected and analyzed cryogenic infrared spectra of biological small molecules to generate high-quality reference datasets, directly supporting development of a novel microscopy instrument designed to map the spatial distribution of molecules within cells in their native state.',
      'Performed spectroscopy experiments under cryogenic conditions, applying data processing and spectral analysis techniques to characterize biological molecules while ensuring reproducible, high-fidelity results.',
      'Collaborated with faculty and research mentors to interpret infrared spectroscopy data and validate reference spectra, accelerating efforts to develop new methods for studying cellular metabolism and molecular organization.'
    ],
    subtitle: 'Working with PhD candidate Amr Sobeh under the direction of Dr. Herschel Rabitz and Dr. Martin Jonikas.',
    tags: ['Spectroscopy', 'Data Analysis'],
    gallery: []
  },
  {
    id: 'empowered-innovations',
    title: 'Founder',
    org: 'Empowered Innovations Inc.',
    category: 'engineering',
    dates: 'Jan 2023 – Present',
    location: '',
    image: null,
    oneLiner: 'A nonprofit that designs and 3D-prints assistive devices on request.',
    summary: 'Co-founded a nonprofit — with 4 fellow high school seniors as ITEEA REACH Challenge semifinalists — that designs and 3D-prints affordable assistive devices on request.',
    bullets: [
      'Oversees the full design lifecycle — needs assessment, prototyping in Fusion 360, 3D printing, testing, and shipped delivery.',
      'Designed and delivered the Portion Plate, a custom adaptive plate built for a 4-year-old with an eating condition.',
      'Designed and delivered a Coin Calculator, an assistive device built for a 39-year-old man with Down syndrome.'
    ],
    tags: ['Fusion 360', '3D Printing', 'Nonprofit'],
    gallery: []
  }

  /* -----------------------------------------------------------------------
     ADD YOUR OWN PROJECT BELOW THIS LINE — copy this template, fill it
     in, then create projects/your-id.html (copy projects/_template.html).
  -----------------------------------------------------------------------

  ,{
    id: 'unique-id-no-spaces',
    title: 'Project or Role Title',
    org: 'Organization / Team Name',
    category: 'engineering', // engineering | research
    dates: 'Mon YYYY – Mon YYYY',
    location: '',
    image: null, // or 'assets/images/unique-id-no-spaces/thumb.jpg'
    oneLiner: 'One sentence shown on the project grid card.',
    summary: 'One or two sentences describing the project, shown on its detail page.',
    bullets: [
      'Specific thing you built or did.',
      'A result or metric, if you have one.'
    ],
    tags: ['Tag One', 'Tag Two'],
    gallery: [
      { src: 'assets/images/unique-id-no-spaces/photo1.jpg', caption: 'What this photo shows' }
    ]
  }

  ----------------------------------------------------------------------- */
];
