# Agora — S3 Organization

Personal AI governance framework: 6 agents with coaching, OKRs, GTD, and S3 governance. Vision: personal governance layer for liquid democracy with trust circles and AI agent delegation.

## Primary driver

People delegate important life decisions to strangers — politicians, algorithms, institutions — while AI assistants operate in isolation without governance frameworks. Agora bridges this gap: a personal AI team calibrated to your values that can participate in collective decision-making through liquid democracy.

## Current strategy

Phase 1: Prove the personal governance layer works. Get 50+ users running their own Agora. Validate that users actually delegate decisions to agents and that agents stay aligned with values over time. See `00_Organization_Logbook/03_Strategy.md`.

## Structure

Preset: numbered

- Logbook: `00_Organization_Logbook/`
- Primary driver: `00_Organization_Logbook/01_Primary_Driver_and_Requirement.md`
- Organization canvas: `00_Organization_Logbook/02_Organization_Canvas.md`
- Strategy: `00_Organization_Logbook/03_Strategy.md`
- Values: `00_Organization_Logbook/04_Values.md`
- Policies: `00_Organization_Logbook/Org_Wide_Policies/`
- Requirements: `00_Organization_Logbook/Requirements_Mapping/`
- Reviews: `00_Organization_Logbook/Reviews/`
- Domain map: `00_Organization_Logbook/Organizational_Structure/Domain_Map.md`
- Domains: `01_Domains/<Domain_Name>/`
- Domain description: `01_Domains/<Domain_Name>/Domain_Description.md`
- Domain governance backlog: `01_Domains/<Domain_Name>/Governance/Backlog/`
- Domain operations backlog: `01_Domains/<Domain_Name>/Operations/Backlog/`
- Domain metrics: `01_Domains/<Domain_Name>/Metrics/`
- Roles: `02_Roles/<Role_Name>/`
- Role description: `02_Roles/<Role_Name>/Role_Description.md`
- Coordination: `03_Coordination/`
- Work board: `03_Coordination/Work_Board.md`
- Review schedule: `03_Coordination/Review_and_Retrospective_Schedule.md`
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
- Work board (`03_Coordination/Work_Board.md`) is the single source of truth for work status
- Pull system: agents pull from Ready when dispatched. WIP limit: 1 item per agent. No two agents modify the same files.
- All agent work delivered via PRs to `~/Projects/ikigai-team/`
- Requirements separate purpose (driver + requirement) from intervention (experiments)
- Agents read CLAUDE.md first to find file paths — never hardcode paths
- Review dates are quarterly (next: 2026-07-07)
