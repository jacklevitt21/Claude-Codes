/* =========================================================================
   PROJECT DATA
   ---------------------------------------------------------------------
   The Projects page (index.html) is split into two sections, controlled
   by each item's "section" field:
     - 'rocketry'  → shown under "Rocketry"
     - 'personal'  → shown under "Personal Projects"

   Each project also gets its own detail page in projects/<id>.html with
   a photo/design-file gallery.

   HOW TO ADD A NEW PROJECT
   1. Copy one of the objects below.
   2. Give it a unique "id" (no spaces) — this must match a file you
      create at projects/<id>.html (copy projects/_template.html).
   3. Set "section" to 'rocketry' or 'personal'.
   4. Fill in the fields, save, refresh.

   HOW TO ADD PHOTOS / DESIGN FILES TO A PROJECT
   Put image files in assets/images/<id>/ and list them in that
   project's "gallery" array, e.g.:
     gallery: [
       { src: 'assets/images/recovery-systems-lead/bulkhead.png', caption: 'Optimized bulkhead design' }
     ]
   Leave it as [] and the detail page will just show empty placeholder
   tiles reminding you to add images.

   FIELD GUIDE
   - oneLiner: short caption shown on the grid card (not the full bullets).
   - summary: shown at the top of the detail page — write this as context/
     why-it-matters framing, not a repeat of the bullets below it.
   - image: main thumbnail, shown on the card and at the top of the
     detail page. null shows a plain placeholder box instead.
   - gallery: array of { src, caption } — shown on the detail page only.
   ========================================================================= */

const EXPERIENCES = [
  {
    id: 'recovery-systems-lead',
    title: 'Recovery Systems Lead',
    org: 'Princeton Rocketry',
    section: 'rocketry',
    dates: 'Sep 2025 – Present',
    location: 'Princeton, NJ',
    image: 'assets/images/recovery-systems-lead/openrocket-model.png',
    oneLiner: 'Parachute recovery systems and flight simulation for 30,000-ft high-powered rockets.',
    summary: 'High-powered rockets are usually lost during recovery, not ascent — a parachute that deploys wrong turns a season of work into scrap. I lead the systems that bring ours back intact: modeling flight performance before we ever leave the ground, then designing and fabricating the structural hardware that has to survive the trip.',
    bullets: [
      'Led recovery systems engineering for 30,000-ft high-powered rockets, developing parachute deployment mechanisms and conducting ground testing to validate mission-critical flight hardware.',
      'Performed CFD simulations of rocket geometries to evaluate airflow behavior, aerodynamic stability, and performance impacts across flight regimes.',
      'Designed, fabricated, and validated optimized bulkhead structures using CAD and manufacturing processes, improving structural performance while optimizing subsystem mass.'
    ],
    tags: ['CAD', 'CFD', 'OpenRocket', 'Manufacturing'],
    gallery: [
      { src: 'assets/images/recovery-systems-lead/openrocket-model.png', caption: 'Rocket model in OpenRocket' },
      { src: 'assets/images/recovery-systems-lead/flight-simulation.png', caption: 'Simulated flight performance — altitude, velocity, and acceleration vs. time' },
      { src: 'assets/images/recovery-systems-lead/bulkhead.png', caption: 'Optimized bulkhead design' }
    ]
  },
  {
    id: 'american-rocketry-challenge',
    title: 'American Rocketry Challenge',
    org: '', // TODO (Jack): your team/school name
    section: 'rocketry',
    dates: '', // TODO (Jack): what year(s)?
    location: '',
    image: null,
    oneLiner: 'TODO (Jack): one sentence — this is where your rocketry background started, in high school.',
    // TODO (Jack): replace with the real story — your role on the team,
    // what you built, how you did in the competition.
    summary: 'TODO (Jack): describe your American Rocketry Challenge experience — your role, what the team built, and how it went.',
    bullets: [
      // TODO (Jack): add 1-3 specifics — your role, design decisions,
      // competition results/placement.
    ],
    tags: [], // TODO (Jack): e.g. ['Rocketry', 'Competition']
    gallery: [
      // Photos AND videos both work here — just list the video files
      // the same way, e.g.:
      // { src: 'assets/images/american-rocketry-challenge/launch.mp4', caption: 'Launch day' }
    ]
  },
  {
    id: 'empowered-innovations',
    title: 'Founder',
    org: 'Empowered Innovations Inc.',
    section: 'personal',
    dates: 'Jan 2023 – Present',
    location: '',
    image: 'assets/images/empowered-innovations/plate.jpg',
    oneLiner: 'A nonprofit that designs and 3D-prints assistive devices on request.',
    summary: 'What started as a high school ITEEA REACH Challenge project turned into an ongoing nonprofit. Five of us design and 3D-print assistive devices for anyone who asks — every request is different, so every design starts from scratch.',
    bullets: [
      'Oversees the full design lifecycle — needs assessment, prototyping in Fusion 360, 3D printing, testing, and shipped delivery.',
      'Designed and delivered the Portion Plate, a custom adaptive plate built for a 4-year-old with an eating condition.',
      'Designed and delivered a Coin Calculator, an assistive device built for a 39-year-old man with Down syndrome.'
    ],
    tags: ['Fusion 360', '3D Printing', 'Nonprofit'],
    gallery: [
      { src: 'assets/images/empowered-innovations/plate.jpg', caption: 'The Portion Plate' },
      { src: 'assets/images/empowered-innovations/coin-calc.jpg', caption: 'The Coin Calculator' }
    ]
  },
  {
    id: 'puzzle-piece',
    title: 'Collaborative Puzzle',
    org: 'Personal Project',
    section: 'personal',
    dates: '', // TODO (Jack): what timeframe was this?
    location: '',
    image: 'assets/images/puzzle-piece/puzzle-1.png',
    oneLiner: 'Four of us designed interlocking puzzle pieces independently, without seeing each other’s files, to see if they’d fit.',
    summary: 'Real engineering teams design their piece of a system independently and trust it to fit with everyone else’s when it counts. I wanted to test that on a small scale: I designed the frame and one piece, then had three friends design the remaining pieces on their own, with no shared workflow and no checking in on each other’s files. We laser cut everything and assembled it for the first time in person — it fit.',
    bullets: [
      'Designed the frame and one interlocking piece, which set the shared boundary dimensions the other three pieces had to match.',
      'Coordinated with 3 collaborators designing independently, then laser cut every piece from the finished files.',
      'Assembled all four pieces together for the first time in person — everything fit on the first try.'
    ],
    tags: ['CAD', 'Laser Cutting', 'Collaboration'],
    gallery: [
      { src: 'assets/images/puzzle-piece/puzzle-1.png', caption: 'Puzzle piece design' },
      { src: 'assets/images/puzzle-piece/puzzle-2.png', caption: 'Puzzle piece design' }
    ]
  }

  /* -----------------------------------------------------------------------
     ADD YOUR OWN PROJECT BELOW THIS LINE — copy this template, fill it
     in, then create projects/your-id.html (copy projects/_template.html).
  -----------------------------------------------------------------------

  ,{
    id: 'unique-id-no-spaces',
    title: 'Project Title',
    org: 'Organization / Team Name',
    section: 'rocketry', // rocketry | personal
    dates: 'Mon YYYY – Mon YYYY',
    location: '',
    image: null, // or 'assets/images/unique-id-no-spaces/thumb.jpg'
    oneLiner: 'One sentence shown on the project grid card.',
    summary: 'Context/why-it-matters framing, shown on the detail page — not a repeat of the bullets.',
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
