import { z } from "zod";

export const experienceItemSchema = z.object({
  id: z.string(),
  role: z.string(),
  organization: z.string(),
  period: z.string(),
  highlights: z.array(z.string()).min(1).max(4),
});

export const experienceTimelineSchema = z.object({
  title: z.string().default("Experience"),
  entries: z.array(experienceItemSchema).default([]),
  sourceIds: z.array(z.string()).default([]),
  loading: z.boolean().optional(),
});

export type ExperienceTimelineProps = z.infer<typeof experienceTimelineSchema>;

export function ExperienceTimeline(props: ExperienceTimelineProps) {
  const entries = Array.isArray(props.entries) ? props.entries : [];
  const sourceIds = props.sourceIds ?? [];

  if (props.loading) {
    return (
      <div className="py-6">
        <div className="h-3 w-20 animate-pulse rounded-lg bg-foreground/8" />
        <div className="mt-6 space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-4 w-40 animate-pulse rounded-lg bg-foreground/8" />
              <div className="mt-2 h-3 w-24 animate-pulse rounded-lg bg-foreground/5" />
              <div className="mt-4 space-y-2">
                <div className="h-3 w-full animate-pulse rounded-lg bg-foreground/5" />
                <div className="h-3 w-4/5 animate-pulse rounded-lg bg-foreground/5" />
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

      <div className="mt-6 relative">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-coral/20 rounded-full" />

        <div className="space-y-0">
          {entries.map((entry, index) => (
            <div key={entry.id} className="flex gap-5 group">
              {/* Timeline dot */}
              <div className="flex flex-col items-center pt-1.5 z-10">
                <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-coral border-2 border-coral-light shadow-sm" />
              </div>

              {/* Content card */}
              <div className={`flex-1 ${index < entries.length - 1 ? "pb-6" : "pb-2"}`}>
                <div className="rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:shadow-md hover:border-coral/20">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h4 className="text-sm font-semibold text-foreground">{entry.role}</h4>
                    <span className="rounded-full bg-coral/10 px-2.5 py-0.5 text-[10px] font-medium text-coral">{entry.period}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-teal">{entry.organization}</p>

                  {(entry.highlights ?? []).length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {(entry.highlights ?? []).map((point) => (
                        <li key={point} className="flex gap-2.5 text-xs leading-5 text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral/40" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sourceIds.length > 0 && (
        <p className="mt-4 text-[10px] text-muted-foreground/50">src: {sourceIds.join(", ")}</p>
      )}
    </div>
  );
}
