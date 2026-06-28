# AI_COLLABORATION_MODEL.md

## Purpose

This document defines how AI tools will be used to build the Nikhil Sharma Executive Knowledge System.

The goal is to prevent strategic drift, duplicated thinking, inconsistent execution, and fragmented decision-making.

`MASTER_PLAYBOOK.md` is the canonical strategy document. It defines the thesis, positioning, narrative system, content pillars, quality gates, and long-term ambition. `FOUNDATION/03_POSITIONING.md` is the canonical positioning document and the source for all positioning language (homepage, resume, LinkedIn, bios, recruiter narrative). `FOUNDATION/04_BRAND_THESIS.md` is the canonical brand thesis document and the source for what the system stands for (belief, promise, enemy, voice, narrative, moat). `FOUNDATION/05_AUDIENCE.md` is the canonical audience strategy document and the source for who the system is for, what each audience must believe, the proof they need, and conversion paths. Every brief, prompt, and review here must stay consistent with all four.

---

## Core Rule

ChatGPT owns the thinking.

Claude Code owns the implementation.

Nikhil owns the final decision.

---

## Roles

### Nikhil Sharma

Founder, subject-matter owner, final decision maker.

Responsibilities:

- Approves positioning.
- Provides raw career context.
- Provides screenshots, drafts, work samples, metrics, and personal judgment.
- Makes final decisions on taste, truth, and ambition.
- Builds or supervises implementation in Claude Code.

---

### ChatGPT

Creative Director, VP Design, Editor-in-Chief, Strategy Partner, Prompt Architect.

Responsibilities:

- Owns overall vision.
- Maintains narrative consistency.
- Protects brand thesis.
- Writes and edits strategic documents.
- Creates page briefs.
- Creates Claude Code implementation prompts.
- Reviews output screenshots and implementation quality.
- Challenges weak ideas.
- Prevents scope drift.
- Maintains executive positioning.
- Ensures every page answers a hiring question.
- Ensures nothing becomes a generic UX portfolio.

ChatGPT should be used for:

- Positioning
- Information architecture
- Content strategy
- Writing
- Storytelling
- Transformation story design
- Operating Manual design
- Resume alignment
- Visual critique
- Prompt creation for Claude Code
- QA review after Claude Code implementation

ChatGPT should not be used as the primary coding agent.

---

### Claude Code

Implementation engineer.

Responsibilities:

- Implements the website.
- Creates components.
- Writes Next.js / React / Tailwind code.
- Refactors code.
- Connects CMS/content files.
- Improves accessibility.
- Optimizes performance.
- Fixes bugs.
- Implements animations.
- Executes tickets written by ChatGPT.

Claude Code should receive precise implementation prompts.

Claude Code should not independently redefine:

- Brand strategy
- Navigation strategy
- Page hierarchy
- Content model
- Visual direction
- Writing tone
- Case study structure

If Claude Code proposes a strategic change, it must be reviewed by ChatGPT before implementation.

---

### Claude Chat

Optional technical second opinion only.

Claude Chat may be used for:

- Debugging isolated implementation problems.
- Explaining unfamiliar code.
- Reviewing a technical architecture.
- Comparing library choices.

Claude Chat should not be used for:

- Brand positioning
- Homepage copy
- Portfolio strategy
- Executive narrative
- Visual identity decisions
- Long-term roadmap decisions

Reason:

Using Claude Chat as a second creative director will create a fragmented product vision.

---

## Workflow

1. Select work item from `PROGRAM_INDEX.md`.
2. Ask ChatGPT for creative brief and Claude Code prompt.
3. Paste prompt into Claude Code.
4. Claude Code implements.
5. Bring screenshot, URL, or diff back to ChatGPT.
6. ChatGPT reviews against quality gates.
7. Nikhil approves.
8. Update `DECISION_LOG.md`.
9. Move to next item.

---

## Decision Rule

When ChatGPT and Claude Code disagree:

- ChatGPT wins on strategy, narrative, brand, copy, IA, and creative direction.
- Claude Code wins on implementation feasibility, code quality, performance, and maintainability.
- Nikhil makes the final decision.

---

## Anti-Pattern

Do not ask multiple AI tools the same broad strategic question.

Wrong:

“How should I build my portfolio?”

Correct:

“ChatGPT, create a Claude Code implementation prompt for the homepage hero based on the approved strategy.”

---

## Claude Code Prompt Template

```md
# Implementation Brief

## Project Context

You are working on the Nikhil Sharma Executive Knowledge System.

This is not a traditional UX portfolio. It is an executive knowledge system and operating manual for an AI-native product executive.

Follow these principles:

- Editorial, not flashy.
- Typography first.
- Calm confidence.
- Evidence over adjectives.
- No generic portfolio patterns.
- Every section must answer a hiring question.
- Motion should clarify, not decorate.
- Design should feel premium, restrained, and timeless.

## Current Task

[Describe the exact task.]

## Files to Read First

- DESIGN.md
- PROGRAM_INDEX.md
- MASTER_PLAYBOOK.md
- AI_COLLABORATION_MODEL.md
- FOUNDATION/03_POSITIONING.md
- WEBSITE/INFORMATION_ARCHITECTURE.md
- PAGES/[PAGE_NAME].md

## Scope

You may modify:

- [List files]

You must not modify:

- [List files]

## Content

Use this copy:

[Paste approved copy]

## Layout Direction

[Describe layout]

## Visual Direction

[Describe visual treatment]

## Interaction Direction

[Describe motion or states]

## Acceptance Criteria

- [ ] Works on desktop
- [ ] Works on mobile
- [ ] No horizontal overflow
- [ ] Accessible semantic HTML
- [ ] No unnecessary dependencies
- [ ] Matches design system
- [ ] Reinforces executive positioning
- [ ] Does not look like a generic portfolio
- [ ] Does not alter unrelated sections

## Output Expected

Implement the change and summarize:

1. Files changed
2. What was implemented
3. Any assumptions made
4. Any follow-up questions
```

## ChatGPT Prompt Template

```md
We are building the Nikhil Sharma Executive Knowledge System.

Act as Creative Director, VP Design, Editor-in-Chief, and Prompt Architect.

Use the established project direction:

- Not a portfolio.
- Executive knowledge system.
- Operating Manual of Nikhil Sharma.
- AI-native product executive.
- Capabilities over projects.
- Transformation stories over case studies.
- Teach before impressing.
- Evidence over adjectives.
- Every page answers one executive hiring question.

Create a Claude Code-ready implementation brief for:

[Insert exact section/page/component]

Include:

1. Strategic goal
2. Hiring question answered
3. Copy direction
4. Layout direction
5. Visual direction
6. Motion direction
7. Acceptance criteria
8. Files likely involved
9. Claude Code prompt
10. QA checklist
```
