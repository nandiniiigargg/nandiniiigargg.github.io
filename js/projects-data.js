const PROJECTS = {
  sevastall: {
    order: 1,
    slug: "sevastall",
    category: "Service Design",
    name: "Seva Stall",
    heading: "Service Design — Seva Stall",
    tagline: "A one-stop service center for India's street food vendors.",
    description: "India has roughly 10 million street vendors, and the Street Vendors Act of 2014 meant to protect them is weakly enforced — leaving vendors exposed to eviction, bribery and unfair fines. I designed <strong>Seva Stall</strong>, a walk-in digital licensing and support centre where vendors can get trade licences, health permits, loans and business education in one place, verified and tracked transparently. The service was shaped with input from Prof. Jai Ranjit on government and street-food-sector policy, and delivered as a full physical floor plan, digital licensing counters, a vendor ID system, and supporting verification and payment collateral.",
    role: "Service design, stakeholder research, floor plan &amp; service collateral",
    tags: ["Social Impact", "Spatial Design", "Policy Research"],
    cover: "images/seva-cover.jpg",
    accent: "#bfe3f0"
  },
  vegasvendetta: {
    order: 2,
    slug: "vegasvendetta",
    category: "Game Design · Team Project",
    name: "Vegas Vendetta",
    heading: "Game Design — Vegas Vendetta",
    tagline: "A gangster-vs-cops bluffing game, built on a workplace-stress framework.",
    description: "Built with a four-person team, starting from a blunt statistic: 36% of managers report burnout and 62% of employees feel stress from colleagues. We translated that tension into a social-deduction board game set in a mob-run Vegas, where players bet blind on who's holding the correct answer, and the highest bet wins when more than one player is right. I worked on the theme, board and card system design, and the full physical prototype — board, custom card decks, tokens, dice and guidebook — presented live to faculty.",
    role: "Concept &amp; game mechanics, physical prototyping, live presentation",
    tags: ["Game Mechanics", "Physical Prototyping", "Team Project"],
    cover: "images/vegasvendetta/vegasvendetta-025.jpg",
    accent: "#a1272d"
  },
  ikea: {
    order: 3,
    slug: "ikea",
    category: "Emerging Tech Tools",
    name: "IKEA",
    heading: "Emerging Tech Tools — IKEA",
    tagline: "The Future of Flexible Living.",
    description: "Brief: help IKEA make furniture more adaptable and sustainable as customers' needs change. I designed a system around three moves — an <strong>AR/VR preview tool</strong> so customers can see a piece in their own space before buying, a <strong>\"Swap &amp; Save\"</strong> in-app take-back flow that rewards returned furniture with points toward a curated Material Portfolio of sustainable swaps, and <strong>IoT/RFID tracking</strong> that simplifies assembly and cuts loss in shipping. The concept closed with a trust-building ad campaign built on real family scenarios, countering perceptions of low durability.",
    role: "Service design, UX flow &amp; UI design, sustainability strategy",
    tags: ["Service Design", "AR/VR", "Sustainability"],
    cover: "images/ikea-cover.jpg",
    accent: "#ffd23f",
    links: [
      { label: "Research Document (PDF)", url: "https://drive.google.com/file/d/1vUQmiYyIC_bRasCEomWQDoWvjJBsiAQ1/view" },
      { label: "Material Portfolio (Flipbook)", url: "https://online.flippingbook.com/view/507970913/" }
    ]
  },
  agoda: {
    order: 4,
    slug: "agoda",
    category: "Stall Design",
    name: "Agoda",
    heading: "Stall Design — Agoda",
    tagline: "A 360° immersive travel-expo booth.",
    description: "Designed a circular exhibition stall for Agoda built around a rotating wheel of destinations, an AR screen and hologram at its centre, and a rotating tile wall for browsing deals. A mascot, <strong>Agoji</strong>, guides visitors from the expo gates to the stall through a step-by-step in-app map, and the booth doubles as a small retail moment with branded merchandise — an inflatable neck pillow, fidget bag charms — and social-media-ready photo mockups.",
    role: "Spatial &amp; exhibition design, technical sketching, mascot-led wayfinding",
    tags: ["Exhibition Design", "Wayfinding UX", "Merchandise"],
    cover: "images/agoda-cover.jpg",
    accent: "#1f7a6c",
    video: "videos/agoda-motion-graphics.mp4"
  },
  enableindia: {
    order: 5,
    slug: "enableindia",
    category: "Strategic Planning &amp; Problem Solving",
    name: "EnAble India",
    heading: "Strategic Planning and Problem Solving — EnAble India",
    tagline: "Flipping hiring so employers pitch to talent — not the other way round.",
    description: "EnAble India is a Bangalore non-profit that has helped place persons with disabilities in jobs since 1999. The root problem I found: employers simply don't know what candidates with disabilities can do. My response was a <strong>Reverse Hiring Event</strong> service — candidates get accessible application support and a vetting panel to prepare their pitch, while employers must pass an inclusion audit before they're allowed to pitch to candidates at all. It reframes hiring from charity to a shared, accountable, dignity-first process, with mentorship built in after the hire. Full supporting materials — the assistance form, career kit &amp; application support guide, and story card — are included below.",
    role: "Strategic design, service blueprinting, stakeholder framework design",
    tags: ["Service Blueprint", "Accessibility", "Social Impact"],
    cover: "images/enableindia-cover.jpg",
    accent: "#c23a52"
  },
  asianpaints: {
    order: 6,
    slug: "asianpaints",
    category: "Campaign Design",
    name: "Asian Paints",
    heading: "Campaign Design — Asian Paints",
    tagline: "\"Yaadon Se Ranga Har Ghar\" — a home coloured by memories.",
    description: "Asian Paints wanted a campaign that connected emotionally rather than just showing off colour cards. I conceived the <strong>Maze of Memories</strong> — a walk-through mall activation where every turn recreates a different era of the Indian home, down to period-accurate walls, textures, décor and music, before inviting visitors to reimagine their own home with Asian Paints. Deliverables spanned experience architecture, a working scale prototype, competitive positioning against Berger, Nerolac and Dulux, and OOH/billboard concepts designed for placement outside malls like Phoenix Palladium.",
    role: "Campaign concept, experience design, prototype build, billboard &amp; poster design",
    tags: ["Experience Design", "OOH / Billboard", "Competitive Strategy"],
    cover: "images/asianpaints-cover.jpg",
    accent: "#d9702e"
  }
};

const PROJECT_ORDER = ["sevastall", "vegasvendetta", "ikea", "agoda", "enableindia", "asianpaints"];
