import { FluidBackground } from "@/components/fluid-background";
import { loadPortfolioDocuments } from "@/lib/portfolio/content";
import type { PortfolioDocument } from "@/lib/portfolio/types";
import Link from "next/link";

// Helper to group documents by type
function byType(docs: PortfolioDocument[]) {
    const about = docs.find((d) => d.type === "about" && d.id === "about_prakhar");
    const skills = docs.find((d) => d.type === "skills");
    const education = docs.find((d) => d.id === "education");
    const experience = docs
        .filter((d) => d.type === "experience")
        .sort((a, b) => {
            const parseDate = (d: PortfolioDocument) => {
                const str = d.metadata.start ?? "";
                return new Date(str).getTime() || 0;
            };
            return parseDate(b) - parseDate(a);
        });
    const projects = docs
        .filter((d) => d.type === "project")
        .sort((a, b) => parseInt(b.metadata.year ?? "0") - parseInt(a.metadata.year ?? "0"));
    const openSource = docs.filter((d) => d.sourcePath.startsWith("open-source/"));

    return { about, skills, education, experience, projects, openSource };
}

// Parse skills text into categories
function parseSkills(body: string): Array<{ category: string; items: string[] }> {
    const groups: Array<{ category: string; items: string[] }> = [];
    for (const line of body.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        const colonIdx = trimmed.indexOf(":");
        if (colonIdx === -1) continue;
        const category = trimmed.slice(0, colonIdx).trim();
        const items = trimmed
            .slice(colonIdx + 1)
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        if (category && items.length > 0) {
            groups.push({ category, items });
        }
    }
    return groups;
}

const CATEGORY_STYLES: Record<string, { bg: string; border: string; pill: string }> = {
    languages: { bg: "bg-coral-light", border: "border-coral/20", pill: "bg-coral/10 text-coral" },
    blockchain: { bg: "bg-teal-light", border: "border-teal/20", pill: "bg-teal/10 text-teal" },
    backend: { bg: "bg-gold-light", border: "border-gold/30", pill: "bg-gold/15 text-amber-700" },
    frontend: { bg: "bg-lavender-light", border: "border-lavender/30", pill: "bg-lavender/15 text-purple-700" },
    agentic: { bg: "bg-coral-light", border: "border-coral/20", pill: "bg-coral/10 text-coral" },
    databases: { bg: "bg-teal-light", border: "border-teal/20", pill: "bg-teal/10 text-teal" },
    tools: { bg: "bg-gold-light", border: "border-gold/30", pill: "bg-gold/15 text-amber-700" },
};

function getCatStyle(category: string) {
    const key = category.toLowerCase().split(" ")[0];
    for (const [k, v] of Object.entries(CATEGORY_STYLES)) {
        if (key.includes(k) || k.includes(key)) return v;
    }
    return { bg: "bg-secondary", border: "border-border", pill: "bg-foreground/5 text-foreground/70" };
}

export default async function PortfolioStaticPage() {
    const docs = await loadPortfolioDocuments();
    const { about, skills, education, experience, projects, openSource } = byType(docs);
    const skillGroups = skills ? parseSkills(skills.body) : [];

    return (
        <main className="relative min-h-screen overflow-hidden">
            <FluidBackground intensity="low" />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-sm">
                <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
                    P.O
                </Link>
                <div className="flex items-center gap-8">
                    <a href="#about" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
                        About
                    </a>
                    <a href="#skills" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
                        Skills
                    </a>
                    <a href="#experience" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
                        Experience
                    </a>
                    <a href="#projects" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
                        Projects
                    </a>
                    <Link href="/portfolio" className="text-sm font-medium text-coral transition-colors hover:text-coral/80">
                        Chat with AI ✨
                    </Link>
                </div>
            </nav>

            {/* ─── HERO ─── */}
            <section className="relative pt-32 pb-20 px-6">
                {/* Decorative shapes */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="animate-float absolute top-24 right-[12%] h-20 w-20 rounded-2xl bg-coral/12 rotate-12" />
                    <div className="animate-float-slow absolute top-[50%] right-[6%] h-14 w-14 rounded-full bg-teal/12" />
                    <div className="animate-float absolute bottom-20 right-[18%] h-12 w-12 rounded-xl bg-gold/15 -rotate-6" />
                    <div className="animate-float-slow absolute top-36 left-[6%] h-16 w-16 rounded-full bg-lavender/12 rotate-45" />
                </div>

                <div className="mx-auto max-w-4xl relative z-10">
                    <p className="text-sm font-medium text-muted-foreground">Hi, I&apos;m Prakhar.</p>
                    <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
                        I ENGINEER THE FUTURE OF{" "}
                        <span className="bg-gradient-to-r from-coral to-teal bg-clip-text text-transparent">
                            WEB3.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                        {about?.body.split(".").slice(0, 2).join(".") + "."}
                    </p>

                    {/* Social links */}
                    <div className="mt-8 flex items-center gap-4">
                        {about?.metadata.github && (
                            <a href={about.metadata.github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground/70 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                GitHub
                            </a>
                        )}
                        {about?.metadata.linkedin && (
                            <a href={about.metadata.linkedin} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground/70 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                                LinkedIn
                            </a>
                        )}
                        {about?.metadata.twitter && (
                            <a href={about.metadata.twitter} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground/70 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                                𝕏
                            </a>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 rounded-full bg-coral-light border border-coral/15 px-5 py-2">
                            <span className="text-base font-bold text-coral">2+</span>
                            <span className="text-sm text-muted-foreground">Years</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-teal-light border border-teal/15 px-5 py-2">
                            <span className="text-base font-bold text-teal">$20K</span>
                            <span className="text-sm text-muted-foreground">Funded</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-gold-light border border-gold/20 px-5 py-2">
                            <span className="text-base font-bold text-amber-600">🏆</span>
                            <span className="text-sm text-muted-foreground">Hackathon Winner</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ABOUT ─── */}
            <section id="about" className="py-20 px-6 bg-card/50">
                <div className="mx-auto max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">About Me</p>
                    <div className="mt-6 max-w-3xl">
                        {about?.body.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="mt-4 first:mt-0 text-base leading-8 text-foreground/80">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SKILLS ─── */}
            <section id="skills" className="py-20 px-6">
                <div className="mx-auto max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Technical Skills</p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">What I work with</h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {skillGroups.map((group, index) => {
                            const style = getCatStyle(group.category);
                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border ${style.border} ${style.bg} p-6 transition-shadow duration-200 hover:shadow-md`}
                                >
                                    <p className="text-sm font-semibold text-foreground/80">{group.category}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${style.pill}`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── EXPERIENCE ─── */}
            <section id="experience" className="py-20 px-6 bg-card/50">
                <div className="mx-auto max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Experience</p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">Where I&apos;ve worked</h2>

                    <div className="mt-8 relative">
                        {/* Timeline line */}
                        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-coral/20 rounded-full" />

                        <div className="space-y-0">
                            {experience.map((exp, index) => (
                                <div key={exp.id} className="flex gap-5">
                                    {/* Dot */}
                                    <div className="flex flex-col items-center pt-1.5 z-10">
                                        <div className="h-[10px] w-[10px] shrink-0 rounded-full bg-coral border-2 border-coral-light shadow-sm" />
                                    </div>

                                    {/* Card */}
                                    <div className={`flex-1 ${index < experience.length - 1 ? "pb-6" : "pb-2"}`}>
                                        <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-md hover:border-coral/20">
                                            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                                                <h4 className="text-base font-semibold text-foreground">{exp.metadata.title || exp.title}</h4>
                                                <span className="rounded-full bg-coral/10 px-3 py-0.5 text-xs font-medium text-coral">
                                                    {exp.metadata.start} — {exp.metadata.end}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm font-medium text-teal">{exp.metadata.company}</p>
                                            {exp.metadata.location && (
                                                <p className="text-xs text-muted-foreground">{exp.metadata.location}</p>
                                            )}

                                            <ul className="mt-3 space-y-1.5">
                                                {exp.body.split("\n\n").filter(Boolean).map((point, j) => (
                                                    <li key={j} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                                                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-coral/40" />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PROJECTS ─── */}
            <section id="projects" className="py-20 px-6">
                <div className="mx-auto max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Projects</p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">What I&apos;ve built</h2>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:border-teal/25 hover:-translate-y-1"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <h4 className="text-lg font-semibold text-foreground group-hover:text-coral transition-colors">
                                        {project.title}
                                    </h4>
                                    {project.metadata.github && (
                                        <a href={project.metadata.github} target="_blank" rel="noopener noreferrer"
                                            className="shrink-0 text-muted-foreground/40 hover:text-foreground transition-colors"
                                            aria-label={`GitHub: ${project.title}`}>
                                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    )}
                                </div>

                                {project.metadata.award && (
                                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-coral/10 px-3 py-0.5 text-xs font-semibold text-coral">
                                        🏆 {project.metadata.award}
                                    </div>
                                )}

                                <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">
                                    {project.body.split("\n\n")[0]}
                                </p>

                                {project.metadata.stack && (
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {project.metadata.stack.split(",").map((tech) => (
                                            <span
                                                key={tech.trim()}
                                                className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground/60"
                                            >
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── OPEN SOURCE ─── */}
            {openSource.length > 0 && (
                <section className="py-20 px-6 bg-card/50">
                    <div className="mx-auto max-w-4xl">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Open Source</p>
                        <h2 className="mt-3 text-3xl font-bold text-foreground">Contributions</h2>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {openSource.map((oss) => (
                                <div key={oss.id} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                                    <h4 className="text-sm font-semibold text-foreground">{oss.title}</h4>
                                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{oss.body.split("\n\n")[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── EDUCATION ─── */}
            <section className="py-20 px-6">
                <div className="mx-auto max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education</p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">Academic Background</h2>

                    <div className="mt-8 space-y-4">
                        {education?.body.split("\n\n").filter(Boolean).map((entry, i) => (
                            <div key={i} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                                <p className="text-base font-medium text-foreground">{entry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FOOTER / CTA ─── */}
            <section className="py-20 px-6 bg-gradient-to-br from-coral/5 via-teal/5 to-lavender/5">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-foreground">Let&apos;s Build Together</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Open to opportunities in blockchain infrastructure, cross-chain systems, and AI.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                        {about?.metadata.email && (
                            <a
                                href={`mailto:${about.metadata.email}`}
                                className="rounded-full bg-coral px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition-all hover:bg-coral/90 hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Get in Touch
                            </a>
                        )}
                        <Link
                            href="/portfolio"
                            className="rounded-full border-2 border-foreground/15 px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-teal hover:text-teal hover:-translate-y-0.5"
                        >
                            Or just ask the AI ✨
                        </Link>
                    </div>

                    {/* Social row */}
                    <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                        {about?.metadata.github && (
                            <a href={about.metadata.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                                GitHub
                            </a>
                        )}
                        {about?.metadata.linkedin && (
                            <a href={about.metadata.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                                LinkedIn
                            </a>
                        )}
                        {about?.metadata.twitter && (
                            <a href={about.metadata.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                                Twitter
                            </a>
                        )}
                        {about?.metadata.email && (
                            <a href={`mailto:${about.metadata.email}`} className="hover:text-foreground transition-colors">
                                {about.metadata.email}
                            </a>
                        )}
                    </div>

                    <p className="mt-8 text-xs text-muted-foreground/50">
                        © {new Date().getFullYear()} Prakhar Ojha. Built with Next.js & Tambo AI.
                    </p>
                </div>
            </section>
        </main>
    );
}
