import {
  FileStack,
  ShieldCheck,
  Calculator,
  Headphones,
  CalendarClock,
  MessagesSquare,
  PhoneCall,
  Database,
  Workflow,
  Clock,
  SearchX,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      {blurb ? <p className="mt-4 text-base text-muted-foreground">{blurb}</p> : null}
    </div>
  );
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-colors hover:border-primary/40 ${className}`}
    >
      {children}
    </div>
  );
}

const painPoints = [
  {
    icon: Clock,
    title: "Admin eats the week",
    body: "Owners and managers lose 15+ hours a week to filing, chasing approvals, forwarding documents and rewriting the same updates.",
  },
  {
    icon: SearchX,
    title: "Nobody can find the document",
    body: "Policies, contracts, invoices and client files are scattered across inboxes, drives and chats — with no single source of truth.",
  },
  {
    icon: Users,
    title: "Knowledge lives in people",
    body: "When one person is away, the process stops. Onboarding, compliance and client answers depend on memory instead of systems.",
  },
];

export function ProblemSection() {
  return (
    <section id="why" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The problem"
          title="Small and mid-sized businesses run on admin no one has time for"
          blurb="Every business builds a paper trail long before it builds a system. Cosmiq OS starts there — with documentation — and turns it into the backbone of an automated back office."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {painPoints.map((p) => (
            <Panel key={p.title}>
              <p.icon className="size-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

const foundation = [
  {
    icon: FileStack,
    title: "Every document, one vault",
    body: "Employer and employee records, client files, contracts, invoices and internal policies — ingested, classified and versioned automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by role",
    body: "Access is scoped by team and role, with a full audit trail of what the agent read, wrote and shared.",
  },
  {
    icon: Database,
    title: "A living business database",
    body: "Documentation becomes structured data: people, clients, obligations, dates and numbers your agents can act on.",
  },
];

export function FoundationSection() {
  return (
    <section id="platform" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 grid-mesh opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The foundation"
          title="Documentation first — because it becomes the database"
          blurb="Cosmiq OS securely stores and manages your admin documentation, then builds a structured company database on top of it that every agent works from."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {foundation.map((f) => (
            <Panel key={f.title} className="glow-panel">
              <f.icon className="size-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

const agents = [
  {
    icon: FileStack,
    name: "Documentation agent",
    body: "Files, retrieves and drafts documents on request. Answers policy questions with the exact source attached.",
  },
  {
    icon: Calculator,
    name: "Accounting agent",
    body: "Reads invoices and receipts, reconciles them against your books and flags what needs a human decision.",
  },
  {
    icon: Headphones,
    name: "Customer support agent",
    body: "Handles client requests end to end across chat and email — and picks up the phone when a voice call moves faster.",
  },
  {
    icon: MessagesSquare,
    name: "Communications agent",
    body: "Owns the inbox: triages email, drafts replies, follows up and keeps every thread linked to the right client record.",
  },
  {
    icon: CalendarClock,
    name: "Meeting agent",
    body: "Schedules, joins and takes notes in meetings, then turns decisions into tasks, documents and reminders.",
  },
  {
    icon: Workflow,
    name: "Operations agent",
    body: "Runs internal workflows: approvals, onboarding, renewals, compliance checks and hand-offs between teams.",
  },
];

export function AgentsSection() {
  return (
    <section id="agents" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Agent fleet"
          title="One admin for the whole business, not one more tool"
          blurb="Cosmiq OS runs multiple specialised agents that share the same company database — so context never has to be re-explained."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((a) => (
            <Panel key={a.name}>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <a.icon className="size-5 text-primary" aria-hidden />
                </span>
                <h3 className="text-base font-semibold">{a.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VoiceSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-surface/60 p-8 panel-shadow sm:p-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Voice agents
            </span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Agents that actually pick up the phone
            </h2>
            <p className="mt-4 text-muted-foreground">
              Support and operations agents don't stop at a ticket. They call employers, teammates,
              suppliers and clients to confirm details, chase approvals and close the loop — then log
              the call, the outcome and the follow-up in your database.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Outbound calls to teammates for approvals and missing information",
                "Inbound client calls answered with full account context",
                "Every call transcribed, summarised and filed automatically",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <PhoneCall className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card/80 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Live call · Operations agent
            </p>
            <div className="mt-5 space-y-4 text-sm">
              <p className="rounded-xl border border-primary/25 bg-primary/10 p-4">
                "Hi Priya — the vendor renewal expires Friday. I've prepared the revised contract and
                need your approval to send it. Shall I proceed?"
              </p>
              <p className="rounded-xl border border-border bg-surface/80 p-4 text-muted-foreground">
                "Yes, send it, and copy finance."
              </p>
              <p className="rounded-xl border border-border bg-surface/80 p-4 text-muted-foreground">
                Contract sent · Finance notified · Renewal record updated · Reminder set for Monday
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const roadmap = [
  {
    step: "01",
    title: "Documentation",
    body: "Secure ingestion of all admin, HR, client and policy documents into one governed vault.",
  },
  {
    step: "02",
    title: "Company database",
    body: "Documents become structured records the agents can query, verify and update.",
  },
  {
    step: "03",
    title: "Accounting & tools",
    body: "Books, invoicing, CRM and storage tools connect so numbers and records stay in sync.",
  },
  {
    step: "04",
    title: "Support & workflows",
    body: "Customer support and internal operations run as agent-driven workflows with human escalation.",
  },
  {
    step: "05",
    title: "Communication",
    body: "Email, scheduling, meetings and meeting notes handled by agents — including voice.",
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it compounds"
          title="From filing cabinet to autonomous back office"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {roadmap.map((r) => (
            <div
              key={r.step}
              className="rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40"
            >
              <span className="font-display text-2xl font-semibold text-primary">{r.step}</span>
              <h3 className="mt-3 text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
