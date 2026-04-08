# Engineering — Domain Description (Delegation Canvas)

**Date/Version:** 2026-04-07
**Delegator:** Alex Razbakov
**Review date:** 2026-07-07

## Purpose
**Primary Driver:** The Agora framework needs reliable, well-tested code that users can install and run. The landing site, CLI setup flow, agent definitions, and video demos must work across environments.
**Main Requirement:** Build and maintain the technical infrastructure so that users can install and run their Agora reliably.

## Key Responsibilities
- Implement features from product specs (setup flow, agent system, delegation protocol)
- Maintain the landing site (Nuxt app at `~/Projects/ikigai-team/landing/`)
- Build and maintain the CLI / setup skill
- Write tests, ensure CI passes
- Create technical documentation and architecture decisions
- Manage dependencies and deployments

## Customers and Deliverables
| Customer | Deliverable |
|----------|-------------|
| Users | Working CLI, setup skill, landing site |
| Product domain | Technical feasibility assessments, prototypes |
| Growth domain | Demo-ready features, video-worthy builds |

## Dependencies
| Provider | What they deliver |
|----------|-------------------|
| Product | User stories with acceptance criteria |
| Research | Protocol specifications for delegation |

## External Constraints
- Code must be open-source (MIT license)
- Must work with Claude Code / Claude Desktop
- Landing site deployed on Vercel
- No vendor lock-in on agent infrastructure

## Key Challenges
- Supporting multiple AI providers (not just Claude)
- Making the setup flow work across different OS environments
- Building the delegation protocol incrementally (personal -> interpersonal -> network)

## Key Resources
- Code repo: `~/Projects/ikigai-team/`
- Vercel hosting
- GitHub Actions CI

## Delegator Responsibilities
- Code review and PR approval
- Deployment authorization
- Architecture decisions on major changes

## Competencies, Qualities, and Skills
- TypeScript / Nuxt.js (landing site)
- Claude Code skills and agent definitions
- CLI tooling
- Testing (unit, integration, BDD)

## Key Metrics and Monitoring

| Metric | How Measured | Frequency | Measured By |
|--------|-------------|-----------|-------------|
| Build success rate | CI dashboard | Per PR | Builder |
| Open bugs | GitHub Issues | Weekly | Builder |
| Test coverage | CI reports | Per PR | Builder |
| Deploy frequency | Vercel dashboard | Weekly | Builder |

## Evaluation Schedule
Quarterly review of technical health and velocity (next: 2026-07-07).
