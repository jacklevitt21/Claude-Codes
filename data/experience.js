/* =========================================================================
   EXPERIENCE / PROJECT DATA
   ---------------------------------------------------------------------
   HOW TO ADD A NEW PROJECT
   1. Copy one of the objects below (the {...} block between curly braces).
   2. Paste it into the EXPERIENCES array (anywhere — order here just
      controls the default sort, and everything is also sortable/filterable
      on the Projects page).
   3. Edit the fields. Leave "bullets" as [] if you don't have specifics
      yet — the card will just show the summary line.
   4. Give it a unique "id" (no spaces, e.g. "my-new-project").
   5. Save the file and refresh the page in your browser. That's it —
      no build step, no other files to touch.

   FIELD GUIDE
   - category: 'engineering' | 'research' | 'leadership'
       Controls which filter button shows the card on projects.html
       and which color-coded label it gets.
   - featured: true/false — featured items can appear in the homepage
       preview strip (see js/main.js renderFeatured()).
   - icon: one of the keys in js/icons.js (rocket, gear, flask, chart,
       heart, users, code, leaf) — picks the little icon on the card.
   - image: path to an image file. Leave as null to show the icon
       instead. Drop real photos into assets/images/ and point here,
       e.g. image: 'assets/images/rocketry-team.jpg'
   ========================================================================= */

const EXPERIENCES = [

  // ------------------------- ENGINEERING -------------------------
  {
    id: 'recovery-systems-lead',
    title: 'Recovery Systems Lead',
    org: 'Princeton Rocketry',
    category: 'engineering',
    featured: true,
    dates: 'Sep 2025 – Present',
    location: 'Princeton, NJ',
    icon: 'rocket',
    image: null,
    summary: 'Leads recovery systems engineering for 30,000-ft high-powered rockets — parachute deployment mechanisms, aerodynamic analysis, and structural hardware.',
    bullets: [
      'Led recovery systems engineering for 30,000-ft high-powered rockets, developing parachute deployment mechanisms and conducting ground testing to validate mission-critical flight hardware.',
      'Performed CFD simulations of rocket geometries to evaluate airflow behavior, aerodynamic stability, and performance impacts across flight regimes.',
      'Designed, fabricated, and validated optimized bulkhead structures using CAD and manufacturing processes, improving structural performance while optimizing subsystem mass.'
    ],
    tags: ['CAD', 'CFD', 'Systems Engineering', 'Rocketry'],
    links: {}
  },
  {
    id: 'empowered-innovations',
    title: 'Founder',
    org: 'Empowered Innovations Inc.',
    category: 'engineering',
    featured: true,
    dates: 'Jan 2023 – Present',
    location: '',
    icon: 'heart',
    image: null,
    summary: 'Founded a nonprofit that designs and manufactures assistive devices for individuals with disabilities.',
    bullets: [
      'Oversees the full design lifecycle — needs assessment, prototyping, and final delivery — using 3D printing and CAD software.',
      // TODO (Jack): add a specific device you designed, who it helped,
      // or a photo of a finished build in assets/images/.
    ],
    tags: ['CAD', '3D Printing', 'Assistive Tech', 'Nonprofit'],
    links: {}
  },
  {
    id: 'reworld-mechanical-intern',
    title: 'Mechanical/Operations Engineering Intern',
    org: 'Reworld',
    category: 'engineering',
    featured: false,
    dates: 'May 2026 – Aug 2026',
    location: '',
    icon: 'gear',
    image: null,
    summary: 'Performed plant-wide structural analysis and produced engineering drawings and documentation for a waste-to-energy facility.',
    bullets: [
      'Performed and authored a plant-wide structural analysis across 50+ mechanical systems, evaluating load paths, support conditions, and equipment integrity to identify areas requiring engineering review and improve maintenance planning.',
      'Developed and revised P&IDs and CAD models for plant equipment and utility systems, producing accurate engineering drawings that supported communication between operations, maintenance, and external vendors.',
      'Developed technical engineering documentation detailing component mechanics, failure modes, and maintenance principles of critical plant equipment to improve operator understanding of system functionality.'
    ],
    tags: ['Structural Analysis', 'CAD', 'P&IDs', 'Industrial Systems'],
    links: {}
  },
  {
    id: 'orbis-metallicum-data-analytics',
    title: 'Manufacturing Systems Engineering Intern',
    org: 'Orbis-Metallicum LLC',
    category: 'engineering',
    featured: true,
    dates: 'Dec 2025 – Present',
    location: '',
    icon: 'chart',
    image: null,
    summary: 'Builds a global EV gigacasting manufacturing database and evaluates next-generation conductor materials and battery chemistries.',
    bullets: [
      'Built and optimized a global manufacturing database of EV gigacasting, integrating casting architecture, machine tonnage, and component-level design specifications across 12 OEMs and 40+ facilities, comprising 2,000+ data points.',
      'Evaluated graphene and graphene-doped aluminum/copper composites as next-generation electrical conductors, benchmarking theoretical thermal and electrical conductivity gains against incumbent materials to assess feasibility for weight-sensitive aerospace and high-power electronics applications.',
      'Developed first-principles models of automotive battery chemistries, analyzing material composition, manufacturing processes, and electrochemical performance tradeoffs to evaluate future technology adoption.'
    ],
    tags: ['Data Analysis', 'Materials', 'Modeling', 'EV / Battery'],
    links: {}
  },

  // ------------------------- RESEARCH -------------------------
  {
    id: 'princeton-research-assistant',
    title: 'Undergraduate Research Assistant',
    org: 'Princeton University — Rabitz Lab',
    category: 'research',
    featured: true,
    dates: 'Aug 2026 – Present',
    location: 'Princeton, NJ',
    icon: 'flask',
    image: null,
    summary: 'Collects cryogenic infrared spectra of biological molecules to support a novel microscopy instrument for mapping molecule distribution within cells.',
    bullets: [
      'Collected and analyzed cryogenic infrared spectra of biological small molecules to generate high-quality reference datasets, directly supporting development of a novel microscopy instrument designed to map the spatial distribution of molecules within cells in their native state.',
      'Performed spectroscopy experiments under cryogenic conditions, applying data processing and spectral analysis techniques to characterize biological molecules while ensuring reproducible, high-fidelity results.',
      'Collaborated with faculty and research mentors to interpret infrared spectroscopy data and validate reference spectra, accelerating efforts to develop new methods for studying cellular metabolism and molecular organization.'
    ],
    subtitle: 'Working with PhD candidate Amr Sobeh under the direction of Dr. Herschel Rabitz and Dr. Martin Jonikas.',
    tags: ['Spectroscopy', 'Data Analysis', 'Research'],
    links: {}
  },
  {
    id: 'cornell-swe-intern-climate',
    title: 'Software Engineer Intern',
    org: 'Cornell University',
    category: 'research',
    featured: false,
    dates: 'Nov 2022 – Jul 2023',
    location: '',
    icon: 'chart',
    image: null,
    summary: 'Analyzed global mean temperature trends following the Mount Pinatubo eruption using Python-based statistical modeling.',
    bullets: [
      'Performed Python-based statistical analysis of global mean temperature trends post-Mount Pinatubo eruption, applying regression models and anomaly detection.',
      'Built data visualizations with Matplotlib and Seaborn to identify climate patterns and support quantitative research findings.',
      'Applied climate modeling and data analysis methods to interpret large climate datasets.'
    ],
    tags: ['Python', 'Statistics', 'Data Visualization', 'Climate Science'],
    links: {}
  },
  {
    id: 'liu-research-parkinsons',
    title: 'Scientific Researcher',
    org: 'Long Island University',
    category: 'research',
    featured: false,
    dates: 'Jan 2024 – Nov 2024',
    location: 'On-site',
    icon: 'flask',
    image: null,
    summary: "Studied how gut microbiota alterations influence neurodegeneration and lifespan in a Drosophila melanogaster Parkinson's disease model.",
    bullets: [
      "Designed and conducted a study examining how gut microbiota alterations influence neurodegeneration and lifespan in a Drosophila melanogaster Parkinson's disease model.",
      'Extracted, PCR-amplified, and sequenced gut microbiota to compare microbial composition across experimental conditions.',
      'Implemented sterile rearing, microbiota clearance/recolonization protocols, longitudinal survival tracking, and neuromuscular phenotyping for reproducible results.'
    ],
    tags: ['PCR', 'Sequencing', 'Experimental Design', 'Neuroscience'],
    links: {},
    subtitle: "Project: “The Supplementation of Probiotics via Yogurt Ameliorates Parkinson's Disease Phenotypes in a Drosophila melanogaster Model”"
  },
  {
    id: 'liu-research-temperature',
    title: 'Scientific Researcher',
    org: 'Long Island University',
    category: 'research',
    featured: false,
    dates: 'Jan 2023 – Nov 2023',
    location: 'On-site',
    icon: 'flask',
    image: null,
    summary: 'Studied the effects of temperature variation and protein deprivation on neurodegeneration and longevity in Drosophila melanogaster.',
    bullets: [
      'Designed and executed a project studying the effects of temperature variation and protein deprivation on neurodegeneration and longevity in Drosophila melanogaster across developmental stages.'
    ],
    tags: ['Experimental Design', 'Neuroscience'],
    links: {}
  },

  // ------------------------- LEADERSHIP / ACTIVITIES -------------------------
  {
    id: 'psv-director-events',
    title: 'Director of Events',
    org: 'Princeton Student Ventures',
    category: 'leadership',
    featured: false,
    dates: 'Apr 2026 – Present',
    location: '',
    icon: 'users',
    image: null,
    summary: "Directs event programming for Princeton Student Ventures, the university's student-run venture organization, connecting founders, investors, and industry leaders.",
    bullets: [
      'Cultivated relationships with technical founders, venture capital investors, and industry leaders to accelerate the commercialization of emerging engineering and deep-tech innovations.',
      'Analyzed emerging deep-tech industries and startup ecosystems to identify founders and technologies driving innovation across advanced manufacturing, robotics, aerospace, and energy.',
      'Evaluated the technical feasibility and commercialization potential of emerging technologies by examining product development strategies, engineering challenges, and pathways from innovation to market adoption.'
    ],
    tags: ['Leadership', 'Events', 'Deep Tech'],
    links: {}
  },
  {
    id: 'psv-principal-analyst',
    title: 'Principal Investment Analyst',
    org: 'Princeton Student Ventures',
    category: 'leadership',
    featured: false,
    dates: 'Jan 2026 – Apr 2026',
    location: '',
    icon: 'chart',
    image: null,
    summary: "Evaluated startup investment opportunities as part of Princeton Student Ventures' analyst team.",
    bullets: [],
    tags: ['Investment Analysis'],
    links: {}
  },
  {
    id: 'psv-investment-analyst',
    title: 'Investment Analyst',
    org: 'Princeton Student Ventures',
    category: 'leadership',
    featured: false,
    dates: 'Sep 2025 – Jan 2026',
    location: '',
    icon: 'chart',
    image: null,
    summary: "Evaluated startup investment opportunities as part of Princeton Student Ventures' analyst team.",
    bullets: [],
    tags: ['Investment Analysis'],
    links: {}
  },
  {
    id: 'model-congress-director',
    title: 'Director of Special Programs',
    org: 'Princeton Model Congress',
    category: 'leadership',
    featured: false,
    dates: 'Mar 2026 – Present',
    location: '',
    icon: 'users',
    image: null,
    summary: 'Directs special programming for Princeton Model Congress, a student-run mock-legislature conference.',
    bullets: [],
    tags: ['Leadership', 'Events'],
    links: {}
  },
  {
    id: 'daily-princetonian-copy-editor',
    title: 'Copy Editor',
    org: 'The Daily Princetonian',
    category: 'leadership',
    featured: false,
    dates: 'Sep 2025 – Present',
    location: '',
    icon: 'code',
    image: null,
    summary: "Copy edits articles for The Daily Princetonian, Princeton's independent daily student newspaper.",
    bullets: [],
    tags: ['Editing', 'Writing'],
    links: {}
  },
  {
    id: 'jl-tutoring',
    title: 'Private Tutor',
    org: 'JL Tutoring (Self-employed)',
    category: 'leadership',
    featured: false,
    dates: 'Aug 2022 – Present',
    location: '',
    icon: 'users',
    image: null,
    summary: 'One-on-one academic tutoring, tailoring lesson plans to individual learning styles and goals.',
    bullets: [
      'Supports students in mastering complex concepts, improving grades, and developing study skills through personalized instruction.',
      'Adapts teaching methods for diverse age groups and skill levels.'
    ],
    tags: ['Teaching', 'Communication'],
    links: {}
  },

  /* -----------------------------------------------------------------------
     ADD YOUR OWN PROJECTS BELOW THIS LINE
     Copy this template, fill it in, and it'll show up on the Projects page.
  -----------------------------------------------------------------------

  {
    id: 'unique-id-no-spaces',
    title: 'Project or Role Title',
    org: 'Organization / Team Name',
    category: 'engineering', // engineering | research | leadership
    featured: false,
    dates: 'Mon YYYY – Mon YYYY',
    location: '',
    icon: 'gear', // rocket | gear | flask | chart | heart | users | code | leaf
    image: null, // or 'assets/images/your-photo.jpg'
    summary: 'One or two sentences describing the project.',
    bullets: [
      'Specific thing you built or did.',
      'A result or metric, if you have one.'
    ],
    tags: ['Tag One', 'Tag Two'],
    links: {} // e.g. { demo: 'https://...', writeup: 'https://...' }
  },

  ----------------------------------------------------------------------- */
];
