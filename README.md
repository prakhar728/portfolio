# Prakhar Ojha — Interactive Portfolio

A personal portfolio built as an AI-native experience. Instead of a static page, visitors explore skills, projects, and experience by asking natural-language questions. The AI composes the response as structured UI components — not a chat transcript.

**Live:** [your-domain.com](https://your-domain.com)

---

## How It Works

1. Visitor lands on a minimal home page
2. Navigates to `/portfolio` and types a question — e.g. *"What are his skills?"* or *"Show me recent projects"*
3. A retrieval pipeline finds relevant content from source-of-truth markdown files
4. The AI selects and renders typed React components (`SkillsMatrix`, `ExperienceTimeline`, `ProjectGrid`, etc.) with validated props

No hallucinated claims — every response is grounded in content from `/content`.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| AI / GenUI | [Tambo](https://tambo.co) (`@tambo-ai/react`) |
| Validation | Zod |
| Runtime | Node.js |

---

## Project Structure

```
src/
├── app/                    # Next.js routes (/, /portfolio)
├── components/
│   ├── portfolio/          # GenUI components (SkillsMatrix, ProjectGrid, etc.)
│   └── tambo/              # Chat thread + message UI
├── lib/
│   ├── tambo.ts            # Component & tool registry (central config)
│   └── portfolio/          # Content parser and retrieval logic
├── services/               # Data fetching utilities
content/
├── about.md
├── skills.md
├── experience/             # One file per role
└── projects/               # One file per project
```

---

## Local Setup

**Prerequisites:** Node.js 18+, a [Tambo API key](https://tambo.co)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp example.env.local .env.local
# Add your NEXT_PUBLIC_TAMBO_API_KEY to .env.local

# 3. Run development server
npm run dev
# → http://localhost:3000
```

---

## Adding Content

All portfolio content lives in `/content` as Markdown with frontmatter IDs. The retrieval pipeline uses these IDs to ground AI responses.

To add a project, create `content/projects/my-project.md`:

```markdown
---
id: project_my_project
type: project
title: My Project
---
Description of the project, tech used, and impact.
```

The AI will be able to surface it immediately — no code changes needed.

---

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # Lint
npm run lint:fix   # Lint + auto-fix
```
