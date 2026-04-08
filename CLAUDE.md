# Agora — S3 Organization

Personal AI governance framework: 6 agents with coaching, OKRs, GTD, and S3 governance. Vision: personal governance layer for liquid democracy with trust circles and AI agent delegation.

## Primary driver

People delegate important life decisions to strangers — politicians, algorithms, institutions — while AI assistants operate in isolation without governance frameworks. Agora bridges this gap: a personal AI team calibrated to your values that can participate in collective decision-making through liquid democracy.

## Current strategy

Phase 1: Prove the personal governance layer works. Get 50+ users running their own Agora. Validate that users actually delegate decisions to agents and that agents stay aligned with values over time. See `organization/strategy.md`.

## Structure

Preset: kebab

- Organization: `organization/`
- Primary driver: `organization/driver.md`
- Organization canvas: `organization/canvas.md`
- Strategy: `organization/strategy.md`
- Values: `organization/values.md`
- Policies: `organization/policies/`
- Domain map: `organization/domain-map.md`
- Domains: `domains/<domain-name>/`
- Domain description: `domains/<domain-name>/index.md`
- Roles: `roles/<role-name>/`
- Role description: `roles/<role-name>/index.md`
- Coordination: `coordination/`
- Work board: `coordination/work-board.md`
- Review schedule: `coordination/review-schedule.md`
- Agents: `.claude/agents/`
- Code repo: `~/Projects/ikigai-team/`
- Website: ikigai.razbakov.com

## Agents

| Agent | Reports to | Focus |
|-------|-----------|-------|
| Coordinator | Alex | Cross-agent status, blockers, dispatch recommendations |
| Architect | Alex | Framework design, protocol spec, integration architecture |
| Builder | Alex | Code, features, CLI, setup flow, landing site |
| Evangelist | Alex | Content, adoption, community, conference talks |
| Researcher | Alex | Liquid democracy, governance models, academic connections |

## Policies

- **Policy 001** — AI agent boundaries: agents draft, humans send. No external comms, deploys, or spending without approval.
- **Policy 002** — Decision-making: operational (agent), tactical (Alex), strategic (Alex by consent with community input).
- **Policy 003** — Open source: all framework code and governance docs are public. Research shared openly.

## Conventions

- Logbook is the source of truth for governance
- Work board (`coordination/work-board.md`) is the single source of truth for work status
- Pull system: agents pull from Ready when dispatched. WIP limit: 1 item per agent. No two agents modify the same files.
- All agent work delivered via PRs to `~/Projects/ikigai-team/`
- Requirements separate purpose (driver + requirement) from intervention (experiments)
- Agents read CLAUDE.md first to find file paths — never hardcode paths
- Review dates are quarterly (next: 2026-07-07)
