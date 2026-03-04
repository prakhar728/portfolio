import { z } from "zod";

export const skillItemSchema = z.object({
  category: z.string(),
  items: z.array(z.string()).min(1),
});

export const skillsMatrixSchema = z.object({
  title: z.string().default("Skills"),
  groups: z.array(skillItemSchema).default([]),
  sourceIds: z.array(z.string()).default([]),
  loading: z.boolean().optional(),
});

export type SkillsMatrixProps = z.infer<typeof skillsMatrixSchema>;

const CATEGORY_COLORS: Record<string, { bg: string; border: string; pill: string; pillText: string }> = {
  languages: { bg: "bg-coral-light", border: "border-coral/20", pill: "bg-coral/10 text-coral", pillText: "text-coral" },
  blockchain: { bg: "bg-teal-light", border: "border-teal/20", pill: "bg-teal/10 text-teal", pillText: "text-teal" },
  backend: { bg: "bg-gold-light", border: "border-gold/30", pill: "bg-gold/15 text-amber-700", pillText: "text-amber-700" },
  frontend: { bg: "bg-lavender-light", border: "border-lavender/30", pill: "bg-lavender/15 text-purple-700", pillText: "text-purple-700" },
  ai: { bg: "bg-coral-light", border: "border-coral/20", pill: "bg-coral/10 text-coral", pillText: "text-coral" },
  databases: { bg: "bg-teal-light", border: "border-teal/20", pill: "bg-teal/10 text-teal", pillText: "text-teal" },
  tools: { bg: "bg-gold-light", border: "border-gold/30", pill: "bg-gold/15 text-amber-700", pillText: "text-amber-700" },
};

function getCategoryStyle(category: string) {
  const key = category.toLowerCase().split(" ")[0];
  for (const [k, v] of Object.entries(CATEGORY_COLORS)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  // Default fallback
  return { bg: "bg-secondary", border: "border-border", pill: "bg-foreground/5 text-foreground/70", pillText: "text-foreground/70" };
}

export function SkillsMatrix(props: SkillsMatrixProps) {
  const groups = Array.isArray(props.groups) ? props.groups : [];
  const sourceIds = props.sourceIds ?? [];

  if (props.loading) {
    return (
      <div className="py-6">
        <div className="h-3 w-10 animate-pulse rounded-lg bg-foreground/8" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5">
              <div className="h-3 w-20 animate-pulse rounded-lg bg-foreground/8" />
              <div className="mt-4 flex flex-wrap gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-7 w-18 animate-pulse rounded-full bg-foreground/5" />
                ))}
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
        {groups.map((group, index) => {
          const style = getCategoryStyle(group.category);
          return (
            <div
              key={`${index}-${group.category}`}
              className={`rounded-2xl border ${style.border} ${style.bg} p-5 transition-shadow duration-200 hover:shadow-md`}
            >
              <p className="text-sm font-semibold text-foreground/80">
                {group.category}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(group.items ?? []).map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${style.pill} transition-opacity duration-150 hover:opacity-80`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {sourceIds.length > 0 && (
        <p className="mt-6 text-[10px] text-muted-foreground/50">src: {sourceIds.join(", ")}</p>
      )}
    </div>
  );
}
