// ── Portfolio project config ──────────────────────────────────────────────
// Edit here or use nätmästare.html to manage projects without touching code.
//
// Fields:
//   id         – unique slug (no spaces)
//   title      – card title
//   meta       – small label below title
//   href       – project page URL
//   visible    – true/false, hidden projects don't appear on the home page
//   featured   – true = full-width card (first position); only one at a time
//   bg         – card background color
//   bodyBg     – card footer/body background
//   textColor  – title text color (use '#F0EBE0' for light on dark, '#1A1814' for dark on light)
//   mediaSrc   – path to cover image or video
//   mediaType  – 'video' or 'image'
//   order      – lower numbers appear first (admin reorders by shifting these)

const PROJECTS = [
  {
    id: "design-tools",
    title: "Design Tools",
    meta: "Personal Projects · AI-built parametric generators",
    href: "project-design-tools.html",
    visible: true,
    featured: false,
    category: "personal",
    bg: "#050401",
    bodyBg: "#0d0b08",
    textColor: "#F0EBE0",
    mediaSrc: "Portfolio Assets/Hero Generator/hero-pixel-1781557087467.webm",
    mediaType: "video",
    order: 0
  },
  {
    id: "sleep-cycle-discovery",
    title: "Building the Research Practice",
    meta: "UX & Research Lead · Sleep Cycle",
    href: "project-sleep-discovery.html",
    visible: true,
    featured: false,
    bg: "#0d2a2e",
    bodyBg: "#0d2a2e",
    textColor: "#e7efea",
    mediaSrc: "Portfolio Assets/Sleep Cycle/ceo-discovery-session.jpg",
    mediaType: "image",
    order: 1
  },
  {
    id: "sleep-cycle-ai",
    title: "AI in Design Practice",
    meta: "Product Design · AI · Sleep Cycle",
    href: "project-sleep-ai.html",
    visible: true,
    featured: false,
    bg: "#13110d",
    bodyBg: "#13110d",
    textColor: "#F0EBE0",
    mediaSrc: "Portfolio Assets/Sleep Cycle/Sequence 01_2.mp4",
    mediaType: "video",
    order: 2
  },
  {
    id: "sleep-cycle-metrics",
    title: "Moving the Metrics",
    meta: "Product Design · Conversion · Sleep Cycle",
    href: "project-sleep-metrics.html",
    visible: true,
    featured: false,
    bg: "#0d2a2e",
    bodyBg: "#0d2a2e",
    textColor: "#e7efea",
    mediaSrc: "Portfolio Assets/design_handoff_sleep_cycle_case_study/assets/growth-models.png",
    mediaType: "image",
    order: 3
  },
  {
    id: "sleep-cycle",
    title: "Sleep Cycle & Activation",
    meta: "Product Design · App",
    href: "project-sleep.html",
    visible: false,
    featured: false,
    bg: "#0B0C10",
    bodyBg: "#0B0C10",
    textColor: "#F0EBE0",
    mediaSrc: "Portfolio Assets/Sleep Cycle/Sequence 01_2.mp4",
    mediaType: "video",
    order: 1
  },
  {
    id: "astrazeneca",
    title: "AstraZeneca, Turbu+",
    meta: "UX Design Lead · Healthcare",
    href: "project-astrazeneca.html",
    visible: true,
    featured: false,
    bg: "#0A1626",
    bodyBg: "#0A1626",
    textColor: "#E8F0F5",
    mediaSrc: "Portfolio Assets/Turbu hero.png",
    mediaType: "image",
    order: 6
  },
  {
    id: "ascom",
    title: "Ascom, Myco Handset",
    meta: "UX Lead · Medical Device",
    href: "project-ascom.html",
    visible: true,
    featured: false,
    bg: "#2C2E33",
    bodyBg: "#2C2E33",
    textColor: "#F0EBE0",
    mediaSrc: "Portfolio Assets/Ascom Myco.jpg",
    mediaType: "image",
    order: 7
  },
  {
    id: "vasttrafik",
    title: "Västtrafik, Ticket Validators",
    meta: "UX Designer · Public Transport",
    href: "project-vasttrafik.html",
    visible: true,
    featured: false,
    bg: "#1C232C",
    bodyBg: "#1C232C",
    textColor: "#E8EDF2",
    mediaSrc: "Portfolio Assets/V\u00e4sttrafik/devices-full.png",
    mediaType: "image",
    order: 8
  },
  {
    id: "carboncloud",
    title: "CarbonCloud, Head of Product",
    meta: "Product & UX Lead · Climate Tech",
    href: "project-carboncloud.html",
    visible: true,
    featured: false,
    bg: "#0F1C12",
    bodyBg: "#0F1C12",
    textColor: "#D8EBD8",
    mediaSrc: "Portfolio Assets/CarbonCloud/CarbonCloud tool.png",
    mediaType: "image",
    order: 4
  },
  {
    id: "leadership",
    title: "Leading inUse's Design Practice",
    meta: "Chief Design Officer · Head of Directors",
    href: "project-leadership.html",
    visible: true,
    featured: false,
    bg: "#15131F",
    bodyBg: "#15131F",
    textColor: "#F2EDE0",
    mediaSrc: "Portfolio Assets/Speaker/web/IMG_6709.jpg",
    mediaType: "image",
    order: 5
  },
  {
    id: "placeholder",
    title: "Project Title",
    meta: "Coming soon",
    href: "#",
    visible: false,
    featured: false,
    bg: "#EDEAE3",
    bodyBg: "#EDEAE3",
    textColor: "#1A1814",
    mediaSrc: "",
    mediaType: "image",
    order: 4
  }
];
