export type CaseStudy = {
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  screenshots: string[]; // paths in /public/assets/
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  image: string;         // hero image path in /public/assets/
  tagline: string;
  result: string;        // single headline metric for the card
  tags: string[];
  year: number;
  liveUrl: string;       // link to the actual client site
  caseStudyUrl: string;  // internal: /work/[slug]
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "fjord-anglers",
    category: "Booking Marketplace",
    title: "Fjord Anglers",
    image: "/vanern.jpg",
    tagline:
      "Guided fishing trip marketplace connecting Central European anglers with verified local guides across Norway, Sweden, Iceland, and Finland.",
    result: "20+ verified guides across 4 countries at launch.",
    tags: ["Next.js", "Supabase", "Marketplace"],
    year: 2026,
    liveUrl: "https://www.fjordanglers.com",
    caseStudyUrl: "/work/fjord-anglers",
    caseStudy: {
      challenge:
        "Independent Nordic fishing guides had no reliable way to reach international clients, while Central European anglers had no trusted source for authentic, curated guided trips — only generic travel agencies with limited local knowledge and no booking transparency.",
      solution:
        "A marketplace built with Next.js and Supabase that handles guide discovery, trip listings, booking requests, and human-assisted confirmation — no upfront payment until the guide confirms within 48 hours.",
      features: [
        "Guide profiles with verified credentials and species specialisations",
        "Browse by fish species and destination country (Norway, Sweden, Iceland, Finland)",
        "Three-step booking flow — browse, request, confirm — with 48-hour guide response SLA",
        "Payment handled via Stripe, but only after guide confirmation to ensure trust and reduce friction",
        "Multilingual support: Polish, English, German",
        "Mobile-first design optimised for anglers browsing on the go",
      ],
      results: [
        "20+ verified guides onboarded across 4 countries at launch",
        "15+ active fishing experiences live at go-live",
        "24-hour customer response SLA maintained since launch",
      ],
      screenshots: ["/screenshots/fjord-1.png", "/screenshots/fjord-2.png", "/screenshots/fjord-3.png", "/screenshots/fjord-4.png", "/screenshots/fjord-5.png"],
    },
  },
  {
    slug: "sea-clouds",
    category: "Corporate Presence",
    title: "Sea Clouds",
    image: "/oil-rig.jpg",
    tagline:
      "Offshore engineering & technical advisory firm serving Oil & Gas and Wind Farm projects — built to convert 25+ years of expertise into qualified leads.",
    result: "50+ large-scale projects and 550+ offshore days/year now fully showcased.",
    tags: ["Next.js", "Sanity CMS", "Offshore"],
    year: 2025,
    liveUrl: "https://www.seaclouds.eu",
    caseStudyUrl: "/work/sea-clouds",
    caseStudy: {
      challenge:
        "A highly experienced offshore engineering firm with 25+ years of track record was invisible online — no digital presence to match the scale of their work across the Baltic and North Sea.",
      solution:
        "A professional corporate presence built with Next.js and Sanity CMS, structured around their core service lines and designed to build trust with procurement teams at O&G and wind farm operators.",
      features: [
        "Service pages for Marine Operations, ROV Operations, Offshore Construction, and Survey",
        "Project showcase with the Baltica 2 Offshore Wind Farm as flagship case",
        "Sanity CMS for the client to manage projects and content independently",
        "Frame agreement and ad-hoc contact flows",
        "Responsive design optimised for desktop-first B2B audience",
      ],
      results: [
        "25+ years of expertise and 50+ large-scale projects now fully documented online",
        "550+ offshore days/year and 1000+ engineering hours/year communicated clearly",
        "CMS empowers the client to publish new projects without developer involvement",
      ],
      screenshots: ["/screenshots/sea-1.png", "/screenshots/sea-2.png", "/screenshots/sea-3.png", "/screenshots/sea-4.png"],
    },
  },
];
4