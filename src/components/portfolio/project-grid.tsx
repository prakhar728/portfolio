import { z } from "zod";

export const projectItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  stack: z.array(z.string()).default([]),
  award: z.string().optional(),
  github: z.string().optional(),
});

export const projectGridSchema = z.object({
  title: z.string().default("Projects"),
  projects: z.array(projectItemSchema).default([]),
  sourceIds: z.array(z.string()).default([]),
  loading: z.boolean().optional(),
});

export type ProjectGridProps = z.infer<typeof projectGridSchema>;

export function ProjectGrid(props: ProjectGridProps) {
  const projects = Array.isArray(props.projects) ? props.projects : [];
  const sourceIds = props.sourceIds ?? [];

  if (props.loading) {
    return (
      <div className="py-6">
        <div className="h-3 w-14 animate-pulse rounded-lg bg-foreground/8" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-5 w-36 animate-pulse rounded-lg bg-foreground/8" />
              <div className="mt-3 space-y-2">
                <div className="h-3 w-full animate-pulse rounded-lg bg-foreground/5" />
                <div className="h-3 w-4/5 animate-pulse rounded-lg bg-foreground/5" />
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-6 w-16 animate-pulse rounded-full bg-foreground/5" />
                <div className="h-6 w-16 animate-pulse rounded-full bg-foreground/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{props.title}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:border-teal/25 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-base font-semibold text-foreground transition-colors duration-150 group-hover:text-coral">
                {project.title}
              </h4>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground/40 transition-colors hover:text-foreground"
                  aria-label={`GitHub: ${project.title}`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>

            {project.award && (
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-coral/10 px-2.5 py-0.5 text-[11px] font-medium text-coral">
                🏆 {project.award}
              </div>
            )}

            <p className="mt-2.5 text-xs leading-5 text-muted-foreground line-clamp-3">{project.summary}</p>

            {(project.stack ?? []).length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {(project.stack ?? []).map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-medium text-foreground/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {sourceIds.length > 0 && (
        <p className="mt-4 text-[10px] text-muted-foreground/50">src: {sourceIds.join(", ")}</p>
      )}
    </div>
  );
}
