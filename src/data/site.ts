/**
 * Portfolio content — single source of truth (edit here, UI follows).
 * Copy rule: plain words a business owner would say. No buzzwords.
 */

export const identity = {
  name: "Devanshu Raturi",
  first: "Devanshu",
  last: "Raturi",
  role: "Web & AI Automation Developer",
  company: "Founder, Neev Automation",
  tagline: "I build websites, online stores and WhatsApp AI systems that turn visitors into customers.",
  location: "Delhi NCR · working worldwide",
  email: "devanshu007raturi@gmail.com",
  github: "https://github.com/devu23",
  linkedin: "https://www.linkedin.com/in/devanshu-raturi-98a254233/",
  // HERO PORTRAITS (Gemini, 19 Oct). Phone = 4:5, desktop = 3:2 with empty dark space on the left.
  // To swap: save under a NEW file name and update the path (next/image caches by URL).
  heroPhoto: "/img/hero-portrait-v3.jpg",
  heroPhotoWide: "/img/hero-portrait-wide-v2.jpg",
};

/** Pre-filled email = a booking request in one click (swap for Cal.com later). */
export const bookingHref =
  "mailto:" +
  identity.email +
  "?subject=" +
  encodeURIComponent("Project call request") +
  "&body=" +
  encodeURIComponent(
    "Hi Devanshu,\n\nI'd like a short call about a project.\n\nWhat I need: \nMy business / website: \nGood times for me: \n\nThanks!"
  );

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** The scroll-lit statement under the hero. Words in `gold` get the accent. */
export const statement = {
  text: "Most business websites look fine and do nothing. I build ones that answer every enquiry, bring in customers, and keep working while you sleep.",
  gold: ["answer", "every", "enquiry,", "bring", "in", "customers,"],
};

export const industries = [
  "Real estate builders", "Boutiques & fashion", "D2C brands", "Clinics", "Coaches & creators", "Startups", "Local services",
];

export type Project = {
  n: string;
  name: string;
  tag: string;
  blurb: string;
  stack: string[];
  href: string;
  hrefLabel: string;
  preview: string;
  note?: string;
  live?: boolean; // shows the WhatsApp live-system replay under the row
};

// Screenshots: when a live site changes, save the new capture under a NEW file name (e.g. neev-2026-11.png).
// next/image caches by URL, so overwriting the old file keeps showing the old picture.
export const projects: Project[] = [
  {
    n: "01",
    name: "Neev Automation",
    tag: "My studio · WhatsApp AI for real-estate builders",
    blurb:
      "Never lose a property buyer to slow response. A builder's lead arrives on WhatsApp, the AI replies in seconds, locks the lead in a protected register, triggers a 60-second voice call-back and alerts the owner.",
    stack: ["Official WhatsApp Cloud API", "AI agent", "AI voice call-back", "Next.js · GSAP · Three.js"],
    href: "https://www.neevautomation.com",
    hrefLabel: "neevautomation.com",
    preview: "/img/neev-2026-10.png",
    live: true,
  },
  {
    n: "02",
    name: "ProposalForYou",
    tag: "Live product · SaaS",
    blurb:
      "People make a personal, animated proposal page in minutes and share it with one link. Free and paid plans, Razorpay payments, fully tested.",
    stack: ["Next.js", "Razorpay", "Automated tests"],
    href: "https://proposalforyou.com",
    hrefLabel: "proposalforyou.com",
    preview: "/img/proposalforyou-2026-10.png",
  },
  {
    n: "03",
    name: "Rivaayat",
    tag: "Online store · ethnic wear",
    blurb:
      "A premium storefront: collections, product pages, cart and a sale system. Built in about two days to show what a boutique can launch with.",
    stack: ["Next.js", "Framer Motion", "Cart + sale system"],
    href: "https://nextjs-ethnic-ecommerce-demo.vercel.app",
    hrefLabel: "Live demo",
    preview: "/img/rivaayat.png",
    note: "Concept demo",
  },
];

export type Service = { title: string; desc: string; points: string[] };

export const services: Service[] = [
  {
    title: "Websites & landing pages",
    desc: "Fast, clear sites that make a small business look established and turn visits into enquiries.",
    points: ["Next.js or WordPress", "Mobile-first, SEO-ready", "Live in about a week"],
  },
  {
    title: "Online stores",
    desc: "Stores that are easy to shop and easy to run: catalogue, cart, payments and an admin you can manage yourself.",
    points: ["Next.js or Shopify", "Razorpay / Stripe", "Sale + offer system"],
  },
  {
    title: "WhatsApp AI automation",
    desc: "An AI front desk on the official WhatsApp API. It replies instantly, qualifies the lead, books the visit and tells you who to call.",
    points: ["Official WhatsApp Cloud API", "AI reply + AI call-back", "Daily lead report"],
  },
  {
    title: "Custom software & SaaS",
    desc: "Dashboards, portals and products, from first idea to paying users.",
    points: ["React · Node · TypeScript", "Auth + payments", "Built to grow"],
  },
];

export const about = {
  paras: [
    "I'm Devanshu, a full-stack developer with 3+ years of shipping production software, and the founder of Neev Automation.",
    "I care about one thing: does it work for your business? Clear scope, honest timelines, and you talk to the person who builds it.",
  ],
  proof: [
    { value: "3+", label: "years shipping production software" },
    { value: "3", label: "live products you can open today" },
    { value: "24h", label: "reply to every enquiry" },
  ],
};

/** How a project runs — shown in About (replaced the second photo; the hero already shows him). */
export const steps = [
  { n: "01", title: "A short call", desc: "Your goal, your customers, what success looks like." },
  { n: "02", title: "Scope in 24 h", desc: "A clear plan and price in writing. No surprises." },
  { n: "03", title: "Build & launch", desc: "You see progress every few days, then it goes live." },
];
