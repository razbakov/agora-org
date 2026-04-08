import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Agora",
  description:
    "Enable individuals to build a personal AI governance team that represents their values in collective decision-making through liquid democracy and trust circles.",

  appearance: "dark",

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/organization/driver" },
      {
        text: "Blog Post",
        link: "https://razbakov.com/blog/2026-04-07-democracy-is-broken",
      },
      {
        text: "GitHub",
        link: "https://github.com/razbakov/agora-org",
      },
    ],

    sidebar: [
      {
        text: "Organization Logbook",
        collapsed: false,
        items: [
          {
            text: "Primary Driver & Requirement",
            link: "/organization/driver",
          },
          {
            text: "Organization Canvas",
            link: "/organization/canvas",
          },
          {
            text: "Strategy",
            link: "/organization/strategy",
          },
          {
            text: "Values",
            link: "/organization/values",
          },
          {
            text: "Policies",
            collapsed: true,
            items: [
              {
                text: "AI Agent Boundaries",
                link: "/organization/policies/ai-agent-boundaries",
              },
              {
                text: "Decision Making",
                link: "/organization/policies/decision-making",
              },
              {
                text: "Open Source",
                link: "/organization/policies/open-source",
              },
            ],
          },
          {
            text: "Domain Map",
            link: "/organization/domain-map",
          },
        ],
      },
      {
        text: "Domains",
        collapsed: false,
        items: [
          {
            text: "Engineering",
            link: "/domains/engineering/",
          },
          {
            text: "Growth",
            link: "/domains/growth/",
          },
          {
            text: "Product",
            link: "/domains/product/",
          },
          {
            text: "Research",
            link: "/domains/research/",
          },
          {
            text: "Three-Layer Governance Model",
            link: "/domains/research/three-layer-model",
          },
        ],
      },
      {
        text: "Roles",
        collapsed: false,
        items: [
          {
            text: "Architect",
            link: "/roles/architect/",
          },
          {
            text: "Builder",
            link: "/roles/builder/",
          },
          {
            text: "Coordinator",
            link: "/roles/coordinator/",
          },
          {
            text: "Evangelist",
            link: "/roles/evangelist/",
          },
          {
            text: "Researcher",
            link: "/roles/researcher/",
          },
        ],
      },
      {
        text: "Coordination",
        collapsed: false,
        items: [
          {
            text: "Review Schedule",
            link: "/coordination/review-schedule",
          },
          {
            text: "Work Board",
            link: "/coordination/work-board",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/razbakov/agora-org" },
    ],

    footer: {
      message: "Code: MIT License | Research & Docs: CC BY 4.0",
      copyright:
        'An open-source research project by <a href="https://razbakov.com">Alex Razbakov</a>',
    },
  },

  srcExclude: ["CLAUDE.md", ".claude/**", "README.md"],
});
