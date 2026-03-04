import { ExperienceTimeline, experienceTimelineSchema } from "@/components/portfolio/experience-timeline";
import { HeroSection, heroSectionSchema } from "@/components/portfolio/hero-section";
import { ProjectGrid, projectGridSchema } from "@/components/portfolio/project-grid";
import { SkillsMatrix, skillsMatrixSchema } from "@/components/portfolio/skills-matrix";
import { searchPortfolioContent } from "@/services/portfolio-retrieval";
import type { TamboComponent, TamboTool } from "@tambo-ai/react";
import { z } from "zod";

const retrievedChunkSchema = z.object({
  id: z.string(),
  type: z.enum(["about", "skills", "experience", "project", "unknown"]),
  title: z.string(),
  text: z.string(),
  metadata: z.record(z.string()),
  score: z.number(),
});

export const tools: TamboTool[] = [
  {
    name: "searchPortfolioContent",
    description:
      "Retrieve relevant portfolio markdown chunks by query. Must be called before rendering components. Use returned id values as sourceIds in component props.",
    tool: searchPortfolioContent,
    inputSchema: z.object({
      query: z.string().min(1),
      limit: z.number().int().min(1).max(12).optional(),
    }),
    outputSchema: z.object({
      chunks: z.array(retrievedChunkSchema),
    }),
  },
];

export const components: TamboComponent[] = [
  {
    name: "HeroSection",
    description:
      "Premium portfolio hero section. Include sourceIds from retrieved chunks and only factual claims from retrieved text.",
    component: HeroSection,
    propsSchema: heroSectionSchema,
  },
  {
    name: "SkillsMatrix",
    description:
      "Grouped skill list for recruiters. Build groups from retrieved markdown and include sourceIds.",
    component: SkillsMatrix,
    propsSchema: skillsMatrixSchema,
  },
  {
    name: "ExperienceTimeline",
    description:
      "Experience timeline cards with period and highlights. Do not invent dates or metrics; cite sourceIds.",
    component: ExperienceTimeline,
    propsSchema: experienceTimelineSchema,
  },
  {
    name: "ProjectGrid",
    description:
      "Project cards with summary and stack from retrieved markdown only.",
    component: ProjectGrid,
    propsSchema: projectGridSchema,
  },
];
