export const landingPageData = {
  branding: {
    title: "Sketchaura",
    description:
      "Sketchaura is an AI-powered design assistant that transforms sketches into beautifully styled visuals, powered by moodboard-driven themes.",
  },
  menuItems: [
    { name: "Features", href: "#features" },
    { name: "Solution", href: "#solution" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ],
  hero: {
    badge: "Introducing Support for AI Models",
    title: "Modern Solutions for Customer Engagement",
    description:
      "Highly customizable components for building modern websites and applications that look and feel the way you mean it.",
    cta: {
      primary: "Start Building",
      secondary: "Request a demo",
    },
    images: {
      dark: "/night-background.png",
      appScreen: "/mail2.png",
      appScreenLight: "/mail2-light.png",
    },
  },
  customers: [
    {
      name: "Nvidia",
      logo: "https://html.tailus.io/blocks/customers/nvidia.svg",
      height: 20,
    },
    {
      name: "Column",
      logo: "https://html.tailus.io/blocks/customers/column.svg",
      height: 16,
    },
    {
      name: "GitHub",
      logo: "https://html.tailus.io/blocks/customers/github.svg",
      height: 16,
    },
    {
      name: "Nike",
      logo: "https://html.tailus.io/blocks/customers/nike.svg",
      height: 20,
    },
    {
      name: "Lemon Squeezy",
      logo: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
      height: 20,
    },
    {
      name: "Laravel",
      logo: "https://html.tailus.io/blocks/customers/laravel.svg",
      height: 16,
    },
    {
      name: "Lilly",
      logo: "https://html.tailus.io/blocks/customers/lilly.svg",
      height: 28,
    },
    {
      name: "OpenAI",
      logo: "https://html.tailus.io/blocks/customers/openai.svg",
      height: 24,
    },
  ],
  faqs: [
    {
      q: "What does your team do?",
      a: "We design and build digital products end‑to‑end: research, UX/UI, front‑end/back‑end, infrastructure, and release support.",
    },
    {
      q: "How is your workflow structured?",
      a: "Iteratively. Solution storyboards → quick prototypes → user testing → prioritization → production integration. Transparent at every stage.",
    },
    {
      q: "Which stack and tools do you use?",
      a: "TypeScript/React/Next.js, Node.js, Python, Postgres, Redis, Tailwind, Playwright, CI/CD on GitHub Actions. Deployment — containers and clouds.",
    },
    {
      q: "Can we see code or a demo?",
      a: "Yes. We prepare private demo environments, give repository access and supply documented examples.",
    },
    {
      q: "How do you estimate timelines and budgets?",
      a: "We evaluate MVPs by impact metrics — value/complexity. We provide T‑shirt sizing bounds, then lock sprints with checkpoints.",
    },
    {
      q: "Do you take over existing products?",
      a: "Yes. We audit, clean up architecture/CI, eliminate debts, set up monitoring and take over under SLA.",
    },
  ],
  pricing: [
    {
      name: "Basic",
      info: "For most individuals",
      price: {
        monthly: 7,
        yearly: Math.round(7 * 12 * (1 - 0.12)),
      },
      features: [
        { text: "Up to 3 Blog posts", tooltip: "100 tags" },
        { text: "Up to 3 Transcriptions" },
        { text: "Up to 3 Posts stored" },
        {
          text: "Markdown support",
          tooltip: "Export content in Markdown format",
        },
        {
          text: "Community support",
          tooltip: "Get answers your questions on discord",
        },
        {
          text: "AI powered suggestions",
          tooltip: "Get up to 100 AI powered suggestions",
        },
      ],
      btn: {
        text: "Start Your Free Trial",
        href: "#",
      },
    },
    {
      highlighted: true,
      name: "Pro",
      info: "For small businesses",
      price: {
        monthly: 17,
        yearly: Math.round(17 * 12 * (1 - 0.12)),
      },
      features: [
        { text: "Up to 500 Blog Posts", tooltip: "500 tags" },
        { text: "Up to 500 Transcriptions" },
        { text: "Up to 500 Posts stored" },
        {
          text: "Unlimited Markdown support",
          tooltip: "Export content in Markdown format",
        },
        { text: "SEO optimization tools" },
        { text: "Priority support", tooltip: "Get 24/7 chat support" },
        {
          text: "AI powered suggestions",
          tooltip: "Get up to 500 AI powered suggestions",
        },
      ],
      btn: {
        text: "Get started",
        href: "#",
      },
    },
    {
      name: "Business",
      info: "For large organizations",
      price: {
        monthly: 49,
        yearly: Math.round(49 * 12 * (1 - 0.12)),
      },
      features: [
        { text: "Unlimited Blog Posts" },
        { text: "Unlimited Transcriptions" },
        { text: "Unlimited Posts stored" },
        { text: "Unlimited Markdown support" },
        {
          text: "SEO optimization tools",
          tooltip: "Advanced SEO optimization tools",
        },
        { text: "Priority support", tooltip: "Get 24/7 chat support" },
        {
          text: "AI powered suggestions",
          tooltip: "Get up to 500 AI powered suggestions",
        },
      ],
      btn: {
        text: "Contact team",
        href: "#",
      },
    },
  ],
};
