/**
 * Portfolio content — single source of truth (edit here, UI follows).
 * Placeholders are intentional ("leave space") — fill previews/projects later.
 */

export const identity = {
  name: "Devanshu Raturi",
  role: "Web & Automation Developer",
  company: "Founder · Neev",
  // one-liner aimed at GLOBAL clients
  tagline: "I build premium websites, online stores & AI automations that turn visitors into customers.",
  location: "India · working with clients worldwide",
  email: "devanshu112raturi@gmail.com",
  calendly: "#", // TODO: paste Calendly link
  github: "https://github.com/devu23",
  linkedin: "https://www.linkedin.com/in/devanshu-raturi-98a254233/",
  photo: "/img/devanshuprofile2.JPG",
};

/** ABOUT — trust builder (real face + honest bio), per freelance plan §8. */
export const about = {
  paras: [
    "I'm Devanshu — a full-stack developer and the founder of Neev. I build premium websites, online stores, and AI automation for businesses that want to look world-class and win more customers.",
    "I work with clients worldwide, on the right stack for the job — Next.js, Shopify, or WordPress — and I care about shipping things that actually work, not just look good. Clear scope, honest timelines, and a real person on the other end.",
  ],
  points: [
    "Reply within a day",
    "Right stack per project",
    "Honest scope & timelines",
  ],
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/** SERVICES — chosen for maximum global demand (per freelance plan).
 *  Add more here anytime; the grid + a "more" slot leave room to expand. */
export type Service = {
  icon: string; // emoji marker (swap for SVG later)
  title: string;
  desc: string;
  points: string[];
  from: string;
  to: string;
};

export const services: Service[] = [
  {
    icon: "◆",
    title: "Websites & Landing Pages",
    desc: "Fast, premium, conversion-focused sites that make small brands look world-class.",
    points: ["Next.js / WordPress", "Responsive + SEO-ready", "Live in ~1 week"],
    from: "#6D5EF6",
    to: "#4B3ED1",
  },
  {
    icon: "▲",
    title: "E-commerce Stores",
    desc: "Online stores that sell — catalog, cart, payments, and an admin you can manage.",
    points: ["Next.js or Shopify", "Cart · checkout · sale system", "Admin-ready content"],
    from: "#22D3EE",
    to: "#0EA5C4",
  },
  {
    icon: "⬢",
    title: "AI & WhatsApp Automation",
    desc: "AI lead systems that reply instantly, qualify buyers, and never miss an enquiry — 24×7.",
    points: ["Official WhatsApp API", "AI receptionist + lead capture", "Follow-ups on autopilot"],
    from: "#9C8CFF",
    to: "#22D3EE",
  },
  {
    icon: "⬡",
    title: "Custom Software / SaaS",
    desc: "Full-stack MERN builds — dashboards, portals, and products from idea to launch.",
    points: ["React · Node · TypeScript", "Payments + auth", "Scalable architecture"],
    from: "#E9B44C",
    to: "#6D5EF6",
  },
];

export type Project = {
  name: string;
  tag: string;
  blurb: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
  preview?: string; // TODO: add screenshot/preview later
  from: string;
  to: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "ProposalForYou",
    tag: "Live SaaS",
    blurb: "A live SaaS with Razorpay payments, free + paid plans, and 149 passing tests. Real, paid product.",
    stack: ["Next.js", "Razorpay", "Tested"],
    href: "https://proposalforyou.com",
    hrefLabel: "Visit live site",
    preview: "/img/proposalforyou.png",
    from: "#6D5EF6",
    to: "#4B3ED1",
  },
  {
    name: "RIVAAYAT",
    tag: "E-commerce",
    blurb: "A premium ethnic-wear storefront — product pages, cart, live sale system, 3D hero. Built in ~2 days.",
    stack: ["Next.js", "Three.js", "Framer Motion"],
    href: "#", // password-gated demo — add link when ready
    hrefLabel: "Private demo (on request)",
    note: "Prototype",
    from: "#7A2438",
    to: "#22D3EE",
  },
  // 🔲 SPACE LEFT — add real client projects here as they ship
  {
    name: "Your project here",
    tag: "Available",
    blurb: "The next spot is for your project. Websites, stores, dashboards — let's build it.",
    stack: ["Next.js", "Shopify", "WordPress"],
    from: "#14141C",
    to: "#23232E",
    note: "Open slot",
  },
];

export const process = [
  { n: "01", title: "Discovery", desc: "We talk through your goal, audience, and what success looks like." },
  { n: "02", title: "Design & Build", desc: "I design and build on the right stack — you see progress, not silence." },
  { n: "03", title: "Launch", desc: "Tested end-to-end, deployed, and handed over — live and working." },
  { n: "04", title: "Care", desc: "Optional monthly care — I keep it running, updated, and improving." },
];

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "100%", label: "Ships that shipped" },
  { value: "24×7", label: "Automations that don't sleep" },
  { value: "∞", label: "Revisions until it's right*" },
];

export const techMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind",
  "Three.js", "Framer Motion", "Shopify", "WordPress", "n8n", "WhatsApp API",
];
