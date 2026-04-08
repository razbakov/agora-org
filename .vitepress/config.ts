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
      { text: "Docs", link: "/00_Organization_Logbook/01_Primary_Driver_and_Requirement" },
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
            link: "/00_Organization_Logbook/01_Primary_Driver_and_Requirement",
          },
          {
            text: "Organization Canvas",
            link: "/00_Organization_Logbook/02_Organization_Canvas",
          },
          {
            text: "Strategy",
            link: "/00_Organization_Logbook/03_Strategy",
          },
          {
            text: "Values",
            link: "/00_Organization_Logbook/04_Values",
          },
          {
            text: "Policies",
            collapsed: true,
            items: [
              {
                text: "AI Agent Boundaries",
                link: "/00_Organization_Logbook/Org_Wide_Policies/Policy_001_AI_Agent_Boundaries",
              },
              {
                text: "Decision Making",
                link: "/00_Organization_Logbook/Org_Wide_Policies/Policy_002_Decision_Making",
              },
              {
                text: "Open Source",
                link: "/00_Organization_Logbook/Org_Wide_Policies/Policy_003_Open_Source",
              },
            ],
          },
          {
            text: "Domain Map",
            link: "/00_Organization_Logbook/Organizational_Structure/Domain_Map",
          },
        ],
      },
      {
        text: "Domains",
        collapsed: false,
        items: [
          {
            text: "Engineering",
            link: "/01_Domains/Engineering/Domain_Description",
          },
          {
            text: "Growth",
            link: "/01_Domains/Growth/Domain_Description",
          },
          {
            text: "Product",
            link: "/01_Domains/Product/Domain_Description",
          },
          {
            text: "Research",
            link: "/01_Domains/Research/Domain_Description",
          },
          {
            text: "Three-Layer Governance Model",
            link: "/01_Domains/Research/Operations/synthesis-three-layer-governance-model",
          },
        ],
      },
      {
        text: "Roles",
        collapsed: false,
        items: [
          {
            text: "Architect",
            link: "/02_Roles/Architect/Role_Description",
          },
          {
            text: "Builder",
            link: "/02_Roles/Builder/Role_Description",
          },
          {
            text: "Coordinator",
            link: "/02_Roles/Coordinator/Role_Description",
          },
          {
            text: "Evangelist",
            link: "/02_Roles/Evangelist/Role_Description",
          },
          {
            text: "Researcher",
            link: "/02_Roles/Researcher/Role_Description",
          },
        ],
      },
      {
        text: "Coordination",
        collapsed: false,
        items: [
          {
            text: "Review Schedule",
            link: "/03_Coordination/Review_and_Retrospective_Schedule",
          },
          {
            text: "Work Board",
            link: "/03_Coordination/Work_Board",
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
