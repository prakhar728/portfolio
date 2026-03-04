import { FluidBackground } from "@/components/fluid-background";
import { PortfolioChatShell } from "@/components/portfolio/portfolio-chat-shell";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen px-6 py-10 md:px-8">
      <FluidBackground intensity="low" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-sm">
        <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
          P.O
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/portfolio-static" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Portfolio
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-coral transition-colors hover:text-coral/80">
            Chat with AI
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl pt-16">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Prakhar Ojha
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            Ask me anything
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            I&apos;m an AI that knows everything about Prakhar. Ask about skills, projects, or experience.
          </p>
        </header>

        <div className="h-px w-full bg-border" />

        <PortfolioChatShell />
      </div>
    </main>
  );
}
