export const profile = {
  name: "Nistha Thapa",
  title: "Product & UI/UX Designer",
  tagline:
    "Product-minded UI/UX Designer working across AI, Web3, and emerging tech.",
  location: "Kathmandu, Nepal",
  locationNote: "Open to remote work",
  email: "nistha.thapa09@gmail.com",
  linkedin: "https://www.linkedin.com/in/nistha-t-54abb724a/",
  resumeUrl: "/resume.pdf",
  bio: "Product-minded UI/UX Designer with 2 years of experience designing digital products across AI, Web3, and emerging technology. Skilled in user flows, wireframing, prototyping, high-fidelity UI, design systems, and visual branding, with experience collaborating closely with product, engineering, and marketing teams.",
};

export type ExperienceItem = {
  role: string;
  company: string;
  meta: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Product Designer + Brand Designer",
    company: "Self-employed",
    meta: "Remote",
    period: "May 2026 — Present",
    bullets: [
      "Led end-to-end development of a luxury brand identity, defining visual direction and a cohesive brand experience across all customer touchpoints",
      "Designed end-to-end UI/UX for a DAO-based platform for an NGO — transparent donor engagement, community participation, decentralized collaboration",
      "Created logos and visual identities for multiple small businesses, tailored to each brand's identity, audience, and positioning",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "Venture 23",
    meta: "Remote, based Sheridan, WY, US",
    period: "May 2024 — April 2026",
    bullets: [
      "Designed user-friendly digital interfaces for AI/Web3-focused products, focused on usability and visual clarity",
      "Created wireframes, user flows, prototypes, and high-fidelity UI to support product development",
      "Collaborated with product managers, developers, marketers, and stakeholders to translate requirements into design solutions",
      "Improved design consistency through structured layouts, reusable components, and visual design principles",
    ],
  },
  {
    role: "Technical Content Writer Intern",
    company: "iBriz AI",
    meta: "Remote, based Santa Clara, CA, US",
    period: "Feb 2024 — April 2024",
    bullets: [
      "Created technical/product-focused content explaining complex technology simply",
      "Supported product documentation, content research, and communication for digital product initiatives",
    ],
  },
];

export const education = {
  school: "Tribhuvan University",
  location: "Kathmandu, Nepal",
  degree: "BE in Computer Engineering",
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "UX Design",
    items: [
      "User Flows",
      "Wireframing",
      "Information Architecture",
      "User Research",
      "Usability Testing",
    ],
  },
  {
    category: "UI Design",
    items: [
      "High-Fidelity UI",
      "Visual Design",
      "Responsive Design",
      "Mobile-First Design",
      "Design Consistency",
    ],
  },
  {
    category: "Product Design",
    items: [
      "Prototyping",
      "Design Systems",
      "Accessibility",
      "Branding Alignment",
      "Developer Handoff",
    ],
  },
  {
    category: "Tools",
    items: ["Figma", "Procreate", "Canva", "Notion", "Google Workspace", "Adobe XD"],
  },
  {
    category: "Front-End (basic)",
    items: ["HTML", "CSS", "JavaScript"],
  },
];

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  role: string;
  tools: string[];
  liveUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  myRole: string;
  // Optional media (image or gif) shown under the My Role description.
  myRoleMedia?: { src: string; width: number; height: number };
  designDecisions: string;
  responsiveDesign: string;
  outcome: string;
  // Number of "Add screenshot" placeholders to show until real images are uploaded.
  // Ignored once `images` is set — the gallery then shows exactly those images.
  galleryCount: number;
  images?: { src: string; width: number; height: number }[];
  // Home page card image. Falls back to the ImagePlaceholder when unset.
  thumbnail?: { src: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    slug: "karrier-one-explorer",
    name: "Karrier One Explorer",
    oneLiner:
      "An interactive 3D network map that turns Karrier One's deployment data into something people can actually explore.",
    role: "UI/UX Designer",
    tools: ["Figma", "Mapbox 3D"],
    liveUrl: "https://explorer.karrier.one/",
    overview:
      "Karrier One Explorer is an interactive network map built to help people understand where Karrier One's cellular towers and hotspots are actually deployed. Rather than parsing a list, users can visually explore the network and drill into detail from a live 3D map.",
    challenge:
      "Karrier One's network information lived entirely in list form — towers and hotspots as rows in a table, with no sense of geographic spread. That made it hard for anyone to grasp the scale or shape of the network at a glance. The goal was to replace the list with something people could actually explore.",
    solution:
      "Working with the core team, I designed an interactive 3D Explorer built around a map-first experience. The map shows current deployments; supporting UI surfaces the numbers and actions people need without competing with it. The design was organized around three goals — Explore (see where the network lives), Understand (surface the stats that matter), Act (give a clear next step, like buying a hotspot or becoming a deployer). The 3D map itself ran on Mapbox, built by the engineering team alongside the design.",
    myRole:
      "I owned the UI/UX for the full Explorer experience: the overall interface, visual design and color system, UI components, the network information panel, statistics and data visualization, CTAs and interaction elements, responsive/mobile layouts, and design handoff to the development team.",
    designDecisions:
      "Map-first layout — the map stayed the primary visual element, since geographic context was the whole point of the tool. Supporting information lives in a contextual panel rather than fighting the map for space. Contextual information panel — a floating panel surfaces key stats and clear actions (view details, purchase a hotspot) without pulling users out of the map. One component system — cards, stats, charts, tables, CTAs, and controls were built as a single consistent visual system, so the interface reads as one experience rather than a set of disconnected screens.",
    responsiveDesign:
      "Rather than scaling the desktop layout down, I restructured the information hierarchy for mobile — deciding what needed to stay immediately visible versus what could move into secondary views — so the experience felt built for a phone, not shrunk to fit one.",
    outcome:
      "The Explorer turned a list-based network into a visual, interactive way to understand Karrier One's deployment. It shipped through design and into production and is live today. The project reinforced how much a complex visual experience like this depends on close design–dev alignment, and on staying involved through QA to protect spacing, hierarchy, and interaction detail once it's in engineers' hands.",
    galleryCount: 5,
    images: [
      { src: "/work/karrier-one-explorer/1.jpg", width: 1600, height: 832 },
      { src: "/work/karrier-one-explorer/2.jpg", width: 1600, height: 830 },
      { src: "/work/karrier-one-explorer/3.jpg", width: 1600, height: 833 },
      { src: "/work/karrier-one-explorer/4.jpg", width: 720, height: 1600 },
    ],
    thumbnail: { src: "/work/karrier-one-explorer/1.jpg", width: 1600, height: 832 },
  },
  {
    slug: "movie-mogul",
    name: "Movie Mogul",
    oneLiner:
      "A gamified prediction and fantasy-drafting platform for movies and entertainment — market-style voting meets fantasy sports, built for film.",
    role: "UI/UX Designer",
    tools: ["Figma"],
    liveUrl: "https://mogul.moviepass.com/",
    overview:
      "Mogul is a fantasy and prediction platform for entertainment — a category that, unlike sports or stocks, didn't really have a home yet. Users can vote on entertainment questions market-style, or step into Fantasy Studio, where they draft their own virtual movie within a budget.",
    challenge:
      "There was no existing product for fans to predict or draft entertainment outcomes the way people already do for sports and stocks. The concept itself was layered from the start — market-style voting on one side, budget-based drafting on the other — so the real design challenge was making an unfamiliar category feel immediately understandable.",
    solution:
      "I designed the landing experience, sign-up flow, and both core interaction modes: the market-style voting on entertainment questions, and Fantasy Studio, where users assemble a movie within a budget by choosing actors, directors, and a script, then put it up for a vote. The product owner wanted the entry point to feel gamified and exciting, but the mechanics themselves — voting, drafting — to stay dead simple, so a first-time user could get it without a tutorial.",
    myRole:
      "I worked directly with the product owner and the development team, owning design end-to-end — landing page, sign-up, the voting flow, and the Fantasy Studio drafting experience. I designed primarily for mobile, with development adapting the same flows into a web app.",
    designDecisions:
      "The hardest problem was compressing a lot of moving information — budgets, options, odds, timing — into something that read as simple rather than overwhelming. One specific challenge was the countdown timer: once a vote had a minute left, the interface needed to surface that urgency clearly without cluttering the screen or pulling focus from the decision itself.",
    responsiveDesign:
      "The product was designed mobile-first, since that's where most user activity happens, and the development team then adapted those flows into a web app.",
    outcome:
      "Mogul is live at mogul.moviepass.com. The project meant holding two different registers in one product — playful and gamified on the surface, simple and legible underneath — while still shipping something a first-time user could use with no instructions.",
    galleryCount: 5,
    images: [
      { src: "/work/movie-mogul/1.jpg", width: 390, height: 946 },
      { src: "/work/movie-mogul/2.jpg", width: 390, height: 1137 },
      { src: "/work/movie-mogul/3.jpg", width: 390, height: 844 },
      { src: "/work/movie-mogul/4.jpg", width: 390, height: 978 },
    ],
    thumbnail: { src: "/work/movie-mogul/5.jpg", width: 1600, height: 821 },
  },
  {
    slug: "skinhappy",
    name: "SkinHappy",
    oneLiner:
      "A full website redesign for an established U.S. dermatology clinic — bringing appointments, recommendations, and product shopping into one hassle-free experience.",
    role: "UI/UX Designer",
    tools: ["Figma", "Trello"],
    liveUrl: "https://skinhappymd.com/",
    overview:
      "SkinHappy is the website for Dr. Julie Kenner's established U.S. dermatology clinic. We redesigned the site end-to-end to bring appointment booking, personalized recommendations, and product shopping into a single, unified experience.",
    challenge:
      "The clinic already had an established brand and a clear sense of what they wanted, so this wasn't a blank-slate redesign — it was about translating an existing identity into a more functional, cohesive web experience without losing what was already working for their patients.",
    solution:
      "Working from a brief handed down by the project manager, I redesigned the site's landing pages, booking flow, and shop experience — reusing existing components where they made sense and tailoring the rest to fit the clinic's direction. Progress moved through bi-weekly check-ins with the product owner, who reviewed and gave feedback throughout.",
    myRole:
      "I owned the UI/UX design across landing, booking, recommendations, and shop, working alongside the product owner and development team to turn the brief into screens and iterate on direct client feedback.",
    designDecisions:
      "This project came with less creative latitude than most — the client had a strong, specific vision, and would occasionally work directly with developers on details after a design had already been signed off. The real skill here was less about pushing a personal aesthetic and more about protecting usability within firm brand constraints and adjusting quickly when direction shifted mid-project.",
    responsiveDesign:
      "Design work centered on the web app, with the development team adapting the experience for mobile.",
    outcome:
      "The redesigned site is live at skinhappymd.com, now handling appointments, recommendations, and shopping in one place for the clinic's patients.",
    galleryCount: 5,
    images: [
      { src: "/work/skinhappy/1.jpg", width: 1600, height: 826 },
      { src: "/work/skinhappy/2.jpg", width: 1600, height: 826 },
      { src: "/work/skinhappy/3.jpg", width: 1273, height: 1600 },
      { src: "/work/skinhappy/4.jpg", width: 1600, height: 1558 },
      { src: "/work/skinhappy/5.jpg", width: 950, height: 1600 },
    ],
    thumbnail: { src: "/work/skinhappy/1.jpg", width: 1600, height: 826 },
  },
  {
    slug: "verulink",
    name: "Verulink",
    oneLiner:
      "A rebrand of Verulink's cross-chain bridge between Ethereum and Aleo — new visual identity and a clear distinction between public and private swaps.",
    role: "UI/UX Designer (rebrand)",
    tools: ["Figma", "Rive"],
    liveUrl: "https://dev.verulink.com/",
    overview:
      "Verulink is a cross-chain bridge for swapping assets between Ethereum and Aleo, launched in 2025. I joined the product after launch to lead its rebrand, working from the existing design to give it a new visual identity.",
    challenge:
      "The product's original design worked, but Verulink needed a refreshed identity as it moved toward rebrand and prepared for eventual integration into the broader VeruFi ecosystem. The rebrand also had a functional gap to close: public and private swaps looked visually identical, giving users no immediate cue for which mode they were in.",
    solution:
      "I developed Verulink's new visual identity and design language, building on the existing swap component rather than redesigning it from the ground up. The key structural change was splitting public and private swaps into two distinct color systems, so the mode is visually obvious at a glance.",
    myRole:
      "I led the visual rebrand, collaborating closely with the teammate who designed the original product to make sure the new direction built on what was already working rather than discarding it.",
    designDecisions:
      "Reusing the existing swap component kept the rebrand grounded in a proven interaction pattern, so the visual refresh could focus on identity and clarity rather than reinventing core flows. The public/private color split was the single highest-impact decision — a small change that solved a real usability gap.",
    responsiveDesign:
      "Designed to work across desktop and mobile web, since DeFi users expect to check and execute transactions from wherever they are.",
    outcome: "The rebrand is live at dev.verulink.com.",
    galleryCount: 5,
  },
  {
    slug: "verufi",
    name: "VeruFi",
    oneLiner:
      "A privacy-first DeFi platform on Aleo, unifying cross-chain swaps, bridging, and lending under one new design system.",
    role: "UI/UX Designer",
    tools: ["Figma", "Rive"],
    liveUrl: "https://www.veru.fi/",
    overview:
      "Veru Finance (VeruFi) is a privacy-first DeFi infrastructure platform built on Aleo, enabling cross-chain asset transfers and privacy-aware financial primitives — letting users swap, bridge, and move funds privately across networks through one unified, optimized-routing interface. The umbrella includes Verulend, a money market product.",
    challenge:
      "As Verulink moved toward integration into the wider VeruFi ecosystem, the product family needed one coherent design system instead of separate visual languages across swapping, bridging, and lending.",
    solution:
      "I built VeruFi's design system from scratch, iterating through multiple full directions with the product owner — design systems, logo explorations, and brand variations — before converging on a final identity. That system extended across the product family, including Verulend, the money market within the VeruFi umbrella.",
    myRole:
      "I designed VeruFi's full visual and design system, the marketing site, core product UI, and Verulend's money market interface. I also created the rotating logo currently live on the site — my first shipped work in Rive, a motion/3D tool I picked up specifically for this project and am still building fluency in.",
    myRoleMedia: { src: "/work/verufi/role.gif", width: 640, height: 360 },
    designDecisions:
      "The direction went through heavy iteration — multiple full design systems and logo variations — before landing on the current identity. That process, while long, meant the final system was genuinely stress-tested against real feedback rather than shipped on a first instinct.",
    responsiveDesign:
      "Designed across desktop and mobile web to match how DeFi users actually access these tools.",
    outcome:
      "The design system and rotating logo are live at veru.fi. Full application of the system across every integrated product was still rolling out when the project went on hiatus — the current live site reflects the brand and logo work, with more to come as the project resumes. Verulend, the money market within the VeruFi umbrella, is live separately at amm.venture23.xyz/money-market.",
    galleryCount: 3,
    images: [
      { src: "/work/verufi/1.jpg", width: 491, height: 1600 },
      { src: "/work/verufi/2.jpg", width: 1336, height: 1600 },
      { src: "/work/verufi/3.jpg", width: 1105, height: 1600 },
    ],
    thumbnail: { src: "/work/verufi/5.jpg", width: 1600, height: 798 },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
