// ── Portfolio project config ──────────────────────────────────────────────
// Edit here or use admin.html to manage projects without touching code.
//
// Fields:
//   id         – unique slug (no spaces)
//   title      – card title
//   meta       – small label below title
//   href       – project page URL
//   visible    – true/false — hidden projects don't appear on the home page
//   featured   – true = full-width card (first position); only one at a time
//   bg         – card background color
//   bodyBg     – card footer/body background
//   textColor  – title text color (use '#F0EBE0' for light on dark, '#1A1814' for dark on light)
//   mediaSrc   – path to cover image or video
//   mediaType  – 'video' or 'image'
//   order      – lower numbers appear first (admin reorders by shifting these)

const PROJECTS = [
  {
    id: "bubble-studio",
    title: "Bubble Studio Asset Generator",
    meta: "Product Design · Tool",
    href: "project-bubble-studio.html",
    visible: true,
    featured: true,
    bg: "#000000",
    bodyBg: "#080808",
    textColor: "#F0EBE0",
    mediaSrc: "Portfolio Assets/Bubble Studio/bubble_1024_30fps_1780781789029.webm",
    mediaType: "video",
    order: 0
  },
  {
    id: "sleep-cycle",
    title: "Sleep Cycle & Activation",
    meta: "Product Design · App",
    href: "project-sleep.html",
    visible: true,
    featured: false,
    bg: "#0B0C10",
    bodyBg: "#0B0C10",
    textColor: "#F0EBE0",
    mediaSrc: "Portfolio Assets/Sleep Cycle/Sequence 01_2.mp4",
    mediaType: "video",
    order: 1
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
    order: 2
  }
];
