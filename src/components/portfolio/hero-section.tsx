import { z } from "zod";

export const heroSectionSchema = z.object({
  name: z.string(),
  headline: z.string(),
  summary: z.string(),
  highlights: z.array(z.string()).max(4).default([]),
  sourceIds: z.array(z.string()).default([]),
  loading: z.boolean().optional(),
});

export type HeroSectionProps = z.infer<typeof heroSectionSchema>;

export function HeroSection(props: HeroSectionProps) {
  const highlights = props.highlights ?? [];
  const sourceIds = props.sourceIds ?? [];

  if (props.loading) {
    return (
      <div className="py-6">
        <div className="h-3 w-12 animate-pulse rounded-lg bg-foreground/8" />
        <div className="mt-5 h-12 w-56 animate-pulse rounded-xl bg-foreground/8" />
        <div className="mt-4 h-6 w-72 animate-pulse rounded-lg bg-foreground/6" />
        <div className="mt-5 space-y-2.5">
          <div className="h-4 w-full animate-pulse rounded-lg bg-foreground/5" />
          <div className="h-4 w-5/6 animate-pulse rounded-lg bg-foreground/5" />
          <div className="h-4 w-4/6 animate-pulse rounded-lg bg-foreground/5" />
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">About</p>

      <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground">
        {props.name}
      </h2>

      <p className="mt-3 text-lg font-medium text-coral">{props.headline}</p>

      <div className="mt-5 h-px w-full bg-border" />

      <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{props.summary}</p>

      {highlights.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-teal/20 bg-teal-light px-3 py-1 text-xs font-medium text-teal"
            >
              {item}
            </span>
          ))}
        </div>
      )}
      {sourceIds.length > 0 && (
        <p className="mt-6 text-[10px] text-muted-foreground/50">src: {sourceIds.join(", ")}</p>
      )}
    </div>
  );
}
