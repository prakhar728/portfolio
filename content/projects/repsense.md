---
id: proj_repsense
type: project
title: Repsense – AI Fitness Companion
stack: FastAPI, Next.js, LLM Agents, SQLite, Opik
year: 2026
github: https://github.com/prakhar728/repsense
---
Built an AI-powered workout programming system that converts workout history into adaptive routines with feedback-driven iteration.

Implemented a multi-stage agentic LLM pipeline: intent classification → query parameter extraction → RAG-style fact retrieval from generated user profile → personalized routine generation or coaching advice (GPT-4o-mini).

Designed an episodic memory layer that links feedback to prior routines and enriches future generations with contextual outcomes.

FastAPI backend with routes for profile upload, chat sessions, and routine retrieval. Storage on SQLite via Turso/libSQL. Magic Link authentication for secured routine access.

Integrated Opik LLM observability to monitor and evaluate model calls, memory usage, and feedback resolution during generation.
