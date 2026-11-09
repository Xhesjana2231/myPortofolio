/** Edit this file to change the portfolio copy, projects, and contact email. */

export const profile = {
  name: "Xhesjana Rezi",
  role: "Full-Stack Developer & AI Engineer",
  initials: "XR",
  location: "München, Germany",
  email: "jessdevelopment22@gmail.com",
  headline: "Hi, I'm Xhesjana — Full-Stack Developer & AI Engineer",
  lede:
    "I build websites, online shops, and desktop applications with Vue.js, Nuxt 3, React, PHP, Laravel, and Golang, and I bring AI into the way software is designed, written, and shipped.",
  about: [
    "I'm a Full-Stack Developer with over five years of experience building websites, online shops, and desktop applications. On the frontend I work with Vue.js, Nuxt 3, React, and TypeScript; on the backend with PHP, Laravel, and Golang, connected through REST APIs and GraphQL.",
    "Alongside that, I work as an AI Engineer. I use large language models like Claude every day for prompt engineering, code generation, debugging, and refactoring, and I'm focused on building AI-powered features directly into web products.",
    "To me, AI is not a shortcut around engineering. It is part of it. A good prompt needs the same care as a good API: clear inputs, predictable outputs, and a way to check that the result is actually right.",
    "I have a strong interest in modern web technologies, AI, and software development, and an analytical, solution-oriented approach to solving problems.",
  ],
}

export const aiFocus = [
  {
    title: "Prompt Engineering",
    icon: "bot",
    items: ["Structured, reusable prompts", "Clear instructions and output formats", "Testing and refining results"],
  },
  {
    title: "AI-Assisted Development",
    icon: "projects",
    items: ["Code generation with Claude", "Debugging and root-cause analysis", "Refactoring legacy code"],
  },
  {
    title: "AI in Web Products",
    icon: "layout",
    items: ["LLM APIs inside Vue.js / Nuxt apps", "Backend integration with Laravel & Golang", "Chat, search, and content features"],
  },
  {
    title: "Responsible Use",
    icon: "skills",
    items: ["Reviewing every AI output", "Protecting user and company data", "Keeping humans in control"],
  },
]

export const principles = [
  {
    n: "001",
    title: "Back-End Developer",
    text: "APIs, data, and the jobs that run after the screen goes quiet. The product should still be standing when traffic, files, and edge cases show up.",
  },
  {
    n: "002",
    title: "Problem Solver",
    text: "I start from the constraint. What has to be true for this to work, what can wait, and what would make the next change expensive.",
  },
  {
    n: "003",
    title: "Performance Focused",
    text: "Fast pages, small payloads, and interfaces that stay responsive. Speed is part of the design, not a pass at the end.",
  },
  {
    n: "004",
    title: "AI Engineer",
    text: "Prompt engineering, AI-assisted development, and LLM-powered features. I use AI to build faster without lowering the bar for quality.",
  },
]

export const process = [
  {
    n: "01",
    title: "Discover",
    text: "The goal, the people, and the limits. I write down what done actually means.",
  },
  {
    n: "02",
    title: "Shape",
    text: "Flows, data, and the screens. Structure first, so the build has somewhere to go.",
  },
  {
    n: "03",
    title: "Build",
    text: "Small, reviewable steps. Interface, API, and the path to production together.",
  },
  {
    n: "04",
    title: "Refine",
    text: "Polish, measure, and hand off something the next person can change.",
  },
]

export const skills = [
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "HTML, CSS, JavaScript, TypeScript",
      "Vue.js, Pinia, Nuxt 3, React",
      "Tailwind CSS, Bootstrap",
      "Vite, Storybook",
      "Ajax, jQuery",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["PHP, Laravel", "Golang", "Strapi CMS"],
  },
  {
    title: "APIs",
    icon: "projects",
    items: ["REST APIs", "GraphQL"],
  },
  {
    title: "Desktop Apps",
    icon: "layout",
    items: ["Vue.js + Golang desktop applications"],
  },
  {
    title: "Tools & Systems",
    icon: "cloud",
    items: ["Git", "Docker", "Linux, macOS"],
  },
  {
    title: "AI",
    icon: "bot",
    items: ["AI Engineering", "Claude", "Prompt engineering", "Code generation, Debugging, Refactoring"],
  },
]

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Wisch4Web",
    place: "Tirana Branch, Albania",
    type: "Full-Time",
    dates: "07/2021 — Present",
    summary:
      "Development of websites and online shops, plus backend work in PHP and Laravel. Building desktop applications with Vue.js and Golang, working with REST APIs and GraphQL, and using Claude for prompt engineering, code generation, debugging, and refactoring.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Pinia",
      "Vite",
      "Nuxt 3",
      "React",
      "Storybook",
      "PHP",
      "Laravel",
      "Golang",
      "REST",
      "GraphQL",
      "Git",
      "Docker",
      "Linux",
      "macOS",
      "Claude",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Marketing Services Limited",
    place: "Albania",
    type: "Contract",
    dates: "02/2025 — 06/2025",
    summary:
      "Development of websites for trading projects, built with Vue.js and Nuxt 3. Building responsive, component-based interfaces for trading platforms and brokers, presenting markets, instruments, and account information clearly, and integrating Strapi CMS so the content team can manage pages without code changes.",
    tags: ["Nuxt 3", "Vue.js", "Tailwind CSS", "Bootstrap", "Strapi CMS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Altos Web Solutions",
    place: "Tirana Branch, Albania",
    type: "Full-Time",
    dates: "05/2021 — 08/2021",
    summary: "Development of small web projects, covering frontend and basic backend tasks.",
    tags: ["Frontend", "Backend"],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    place: "Albania",
    type: "Freelance",
    dates: "10/2020 — 06/2021",
    summary: "Web development using HTML, CSS, and JavaScript, working with Ajax and jQuery.",
    tags: ["HTML", "CSS", "JavaScript", "Ajax", "jQuery"],
  },
]

export const education = [
  {
    school: "University of Tirana",
    program: "Bachelor's Degree in Information Technology",
    place: "Tirana, Albania",
    dates: "10/2016 — 10/2019",
    summary: "Faculty of Natural Sciences.",
  },
]

export const projects = [
  {
    slug: "speed-dating-platform",
    name: "Speed Dating Platform",
    duration: "In development",
    summary: "An event platform for speed dating: sign-up, event booking, PayPal payments, vouchers, and messaging between participants.",
    roles: ["Software Engineer", "Architecture", "Full Stack"],
    client: "Professional project",
    timeline: "2026 · In development",
    stack: ["Vue.js", "PHP", "PayPal"],
    // Add a screenshot at public/projects/speed-dating.png and uncomment:
    // image: "/projects/speed-dating.png",
    overview:
      "Organisers needed one place to publish speed dating events and let people book and pay for them. Participants needed an account, a way to buy tickets or vouchers, and a way to stay in touch after an event.",
    detail:
      "I designed the application architecture and worked across the whole stack: a Vue.js frontend talking to a PHP backend. The platform covers user registration and login, an event catalogue with booking, payments through PayPal, vouchers that can be bought and redeemed, and messaging between users. Because money moves through it, booking and payment had to stay consistent: a seat is only confirmed once the payment is.",
    reflection:
      "Defining the architecture before writing features made the payment and voucher flows much easier to add. They plug into the same booking model instead of each having their own logic.",
    steps: [
      ["Architecture", "Structure of the Vue.js frontend, the PHP backend, and the API between them."],
      ["Accounts", "Sign-up, sign-in, and user profiles."],
      ["Booking & payments", "Event booking, PayPal checkout, and voucher purchase and redemption."],
      ["Messaging", "Conversations between participants inside the platform."],
    ],
  },
  {
    slug: "3d-furniture-configurator",
    name: "3D Furniture Configurator",
    duration: "Professional project",
    summary: "Three.js configurators for bedroom furniture, restaurant kitchens, and bathroom furniture, with a live 3D preview.",
    roles: ["Frontend", "3D / Three.js"],
    client: "Professional project",
    stack: ["Three.js", "JavaScript", "WebGL"],
    overview:
      "Customers wanted to see furniture before ordering it. The configurators let them put a product together in the browser and see the result in 3D straight away.",
    detail:
      "I built configurators for three product areas: bedroom furniture, professional kitchens for restaurants, and bathroom furniture. Each one renders the product with Three.js and updates the model live when the user changes an option, so what they see is what they order. The three configurators share the same approach to loading models, applying options, and controlling the camera.",
    reflection:
      "Building three configurators showed which parts were the same every time. Sharing scene setup and option handling meant each new product range was mostly new models and options, not new code.",
    steps: [
      ["Scene", "Camera, lighting, and controls so the product can be viewed from every side."],
      ["Models", "Loading furniture models and keeping them fast in the browser."],
      ["Options", "Changing parts, materials, and colors with a live update in 3D."],
      ["Product ranges", "The same base reused for bedroom, restaurant kitchen, and bathroom furniture."],
    ],
  },
  {
    slug: "working-hours-management",
    name: "Working Hours Management System",
    duration: "Professional project",
    summary: "A PHP management system that calculates working hours from data provided by a GraphQL API.",
    roles: ["Backend", "PHP"],
    client: "Professional project",
    stack: ["PHP", "GraphQL"],
    overview:
      "Hours were recorded in another system and had to be added up by hand. This tool fetches that data and does the calculation automatically.",
    detail:
      "The system is written fully in PHP. It queries a GraphQL API for the recorded time entries, processes them, and calculates the working hours, so the totals come from the source data instead of manual counting.",
    reflection:
      "Keeping the API client separate from the calculation logic made the rules for counting hours easy to test and change without touching how the data is fetched.",
    steps: [
      ["API", "Querying the GraphQL API for time entries."],
      ["Processing", "Cleaning and grouping the data in PHP."],
      ["Calculation", "Calculating the working hours from the entries."],
      ["Output", "Showing the totals in the management system."],
    ],
  },
  {
    slug: "trading-websites",
    name: "Trading Websites",
    duration: "Professional project",
    summary: "Websites for trading projects built with Vue.js and Nuxt 3, with content managed through Strapi CMS.",
    roles: ["Frontend", "Vue.js / Nuxt 3"],
    client: "Marketing Services Limited",
    timeline: "02/2025 — 06/2025",
    stack: ["Vue.js", "Nuxt 3", "Tailwind CSS", "Bootstrap", "Strapi CMS"],
    overview:
      "Trading brands needed fast, trustworthy websites that explain their platforms, markets, and account types, and that the marketing team could update without waiting on developers.",
    detail:
      "I built the frontends in Vue.js and Nuxt 3 as reusable components: page sections, pricing and account-type tables, instrument and market listings, and sign-up calls to action. Nuxt's server-side rendering keeps the pages fast and indexable, which matters for sites that depend on search traffic. The content comes from Strapi CMS, so landing pages, texts, and listings can be edited and published by the content team.",
    reflection:
      "Treating each page as a set of CMS-driven Vue components meant new trading pages and campaigns were mostly content work, not new code.",
    steps: [
      ["Components", "Reusable Vue.js components for page sections, tables, and calls to action."],
      ["Nuxt 3", "Server-side rendering and routing for fast, SEO-friendly pages."],
      ["Strapi CMS", "Connecting pages and listings to Strapi so content is managed without code changes."],
      ["Styling", "Responsive layouts with Tailwind CSS and Bootstrap across devices."],
    ],
  },
]
