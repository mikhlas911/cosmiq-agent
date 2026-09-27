import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Orbit } from "lucide-react";
import explainerVideo from "@/assets/cosmiq-explainer.mp4.asset.json";
import explainerPoster from "@/assets/cosmiq-explainer-poster.jpg.asset.json";
import { ContactForm } from "@/components/cosmiq/ContactForm";
import {
  AgentsSection,
  FoundationSection,
  ProblemSection,
  RoadmapSection,
  SectionHeading,
  VoiceSection,
} from "@/components/cosmiq/Sections";
import { Button } from "@/components/ui/button";

const title = "Cosmiq OS — The AI admin for your entire business";
const description =
  "Cosmiq OS securely stores and manages all your business documentation, then runs agents for accounting, customer support, operations, email and meetings — including voice agents that call your team.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#why", label: "Why Cosmiq" },
  { href: "#platform", label: "Platform" },
  { href: "#agents", label: "Agents" },
  { href: "#roadmap", label: "Roadmap" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Orbit className="size-6 text-primary" aria-hidden />
            <span className="font-display text-lg font-semibold tracking-tight">Cosmiq OS</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm">
            <a href="#contact">Talk to us</a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 hero-aurora" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Admin task automation
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Your entire back office,</span> run by agents
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Cosmiq OS is an AI admin for businesses and SMEs. It securely stores and manages every
              document — employer, employee, client and internal policy — builds your company
              database from it, and then runs accounting, support, operations, email and meetings on
              top.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="#contact">
                  Book a walkthrough
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#agents">See the agent fleet</a>
              </Button>
            </div>

            <div className="mt-16 overflow-hidden rounded-3xl border border-border panel-shadow glow-panel">
              <video
                src={explainerVideo.url}
                poster={explainerPoster.url}
                controls
                autoPlay
                muted
                loop
                playsInline
                aria-label="Cosmiq OS animated explainer video"
                className="aspect-square h-auto w-full bg-background object-cover"
              />
            </div>

            <dl className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
              {[
                { value: "15+ hrs", label: "admin time returned each week" },
                { value: "1 vault", label: "for every document and policy" },
                { value: "6 agents", label: "sharing one company database" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border bg-card/60 p-5">
                  <dt className="font-display text-2xl font-semibold text-primary">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ProblemSection />
        <FoundationSection />
        <AgentsSection />
        <VoiceSection />
        <RoadmapSection />

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <SectionHeading
              eyebrow="Contact us"
              title="Tell us which admin work should disappear first"
              blurb="Share a few details and we'll map Cosmiq OS to your business — starting with the area that costs you the most time."
            />
            <div className="mt-12 rounded-3xl border border-border bg-card/70 p-6 panel-shadow sm:p-9">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Orbit className="size-5 text-primary" aria-hidden />
            <span className="font-display text-sm font-semibold">Cosmiq OS</span>
          </div>
          <p className="text-xs text-muted-foreground">
            The AI admin for documentation, operations, support and communication.
          </p>
        </div>
      </footer>
    </div>
  );
}
