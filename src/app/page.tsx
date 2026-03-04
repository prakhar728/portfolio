import { FluidBackground } from "@/components/fluid-background";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center px-6 py-16 overflow-hidden">
      <FluidBackground intensity="low" />

      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute top-20 right-[15%] h-16 w-16 rounded-2xl bg-coral/15 rotate-12" />
        <div className="animate-float-slow absolute top-[40%] right-[8%] h-12 w-12 rounded-full bg-teal/15" />
        <div className="animate-float absolute bottom-32 right-[20%] h-10 w-10 rounded-xl bg-gold/20 -rotate-6" />
        <div className="animate-float-slow absolute top-32 left-[8%] h-14 w-14 rounded-full bg-lavender/15 rotate-45" />
        <div className="animate-float absolute bottom-[25%] left-[12%] h-8 w-8 rounded-lg bg-coral/10 rotate-12" />
        <div className="animate-float-slow absolute top-[60%] left-[5%] h-20 w-20 rounded-3xl bg-teal/8 -rotate-12" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
          P.O
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/portfolio-static" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Portfolio
          </Link>
          <Link href="/portfolio" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
            Chat with AI
          </Link>
          <a
            href="https://github.com/prakhar728"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-2xl relative z-10">
        <p className="text-sm font-medium text-muted-foreground">
          Hi, I&apos;m Prakhar.
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl">
          I BUILD ON THE{" "}
          <span className="bg-gradient-to-r from-coral to-teal bg-clip-text text-transparent">
            BLOCKCHAIN.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
          Blockchain & cross-chain infrastructure engineer. Winner of the{" "}
          <span className="font-semibold text-coral">NEAR Innovation Track</span>. Building optimistic oracles,
          agentic protocols, and gasless transaction systems.
        </p>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-full bg-coral-light border border-coral/15 px-4 py-1.5">
            <span className="text-sm font-semibold text-coral">2+ Years</span>
            <span className="text-xs text-muted-foreground">Experience</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-teal-light border border-teal/15 px-4 py-1.5">
            <span className="text-sm font-semibold text-teal">$20K</span>
            <span className="text-xs text-muted-foreground">NEAR Funding</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/portfolio-static"
            className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition-all duration-200 hover:bg-coral/90 hover:shadow-xl hover:shadow-coral/30 hover:-translate-y-0.5"
          >
            Browse Portfolio
          </Link>
          <Link
            href="/portfolio"
            className="rounded-full border-2 border-foreground/15 px-7 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-teal hover:text-teal hover:-translate-y-0.5"
          >
            Ask the AI →
          </Link>
        </div>

        {/* Available badge */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">Available for opportunities</span>
        </div>
      </div>
    </main>
  );
}
