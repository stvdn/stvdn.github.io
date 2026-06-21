export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [];

export const blogPosts2: BlogPost[] = [
  {
    slug: "building-scalable-automation-with-powershell",
    title: "Building Scalable Automation with PowerShell",
    date: "2025-12-10",
    excerpt:
      "How I refactored a legacy migration engine into a tool-agnostic framework, reducing technical debt and enabling multi-source orchestrations.",
    tags: ["PowerShell", "Automation", "Architecture"],
    content: `
      <h2>The Problem</h2>
      <p>
        Legacy migration engines are often tightly coupled to a single orchestrator. When the business needs to
        migrate from multiple sources, the result is a tangled web of scripts that nobody wants to touch. Sound
        familiar?
      </p>
      <p>
        At Redsis, we were sitting on 5,600+ business processes tied to a single platform. Every new migration
        meant copy-pasting scripts, hard-coding paths, and praying nothing broke. Technical debt was compounding
        fast, and onboarding a new developer took weeks.
      </p>
      <h2>The Approach</h2>
      <p>
        I decided to step back and ask: <em>what if the migration engine didn't care which orchestrator was on the
        other side?</em> That one question led to a complete refactoring into a tool-agnostic framework built on
        PowerShell.
      </p>
      <p>
        The core idea was simple—abstract the migration steps into composable modules, each responsible for a
        single concern: source extraction, transformation, validation, and target loading. The orchestrator
        became just another plugin.
      </p>
      <h3>Key Design Decisions</h3>
      <ul>
        <li><strong>Module isolation</strong> — Each migration step lives in its own .psm1 file with a strict
        interface contract.</li>
        <li><strong>Configuration-driven routing</strong> — A YAML manifest declares source, transforms, and
        target. No hardcoded paths.</li>
        <li><strong>Idempotent execution</strong> — Re-running a migration is safe; already-processed items are
        skipped automatically.</li>
      </ul>
      <h2>Results</h2>
      <p>
        After rolling out the framework across three migration projects, the numbers spoke for themselves:
      </p>
      <ul>
        <li>Code reusability increased by 70% — shared modules replaced duplicated scripts.</li>
        <li>Onboarding time dropped from weeks to days.</li>
        <li>Zero-downtime cutover became the default, not the dream scenario.</li>
      </ul>
      <h2>Lessons Learned</h2>
      <p>
        The biggest takeaway: <strong>abstraction is a tool, not a goal</strong>. We didn't build the framework
        because abstraction is "better." We built it because the team was spending more time maintaining scripts
        than writing new features. The tool-agnostic approach earned its complexity budget by removing complexity
        elsewhere.
      </p>
      <p>
        If you're dealing with similar legacy drag, start by identifying the one interface that keeps changing
        underneath you. Abstract that first. Everything else follows.
      </p>
    `,
  },
  {
    slug: "ai-agents-in-production-what-actually-works",
    title: "AI Agents in Production: What Actually Works",
    date: "2025-11-28",
    excerpt:
      "A practical look at integrating LLM-powered agents into SaaS workflows—what patterns hold up and what falls apart under real load.",
    tags: ["AI Agents", "LLM", "SaaS"],
    content: `
      <h2>Beyond the Demo</h2>
      <p>
        Everyone has seen the demos—an agent that books a flight, writes an email, or debugs your code. But when
        you take agents from a polished five-minute demo into a production SaaS product serving real users, the
        cracks appear fast.
      </p>
      <p>
        I've spent the last year integrating AI agents into Ventorio, a SaaS platform for inventory and sales
        management. Here's what actually held up—and what didn't.
      </p>
      <h2>What Works: Narrow, Tool-Using Agents</h2>
      <p>
        The agents that survive production are the ones that do <em>one thing well</em> and call it a day.
        Ventorio's most reliable agent doesn't try to reason about your whole business. It watches for new
        invoices, extracts structured data, and writes it to the database. That's it.
      </p>
      <p>
        Why it works:
      </p>
      <ul>
        <li><strong>Deterministic fallbacks</strong> — When the LLM isn't confident, the agent falls back to
        template matching. No hallucinations, just a best-effort result.</li>
        <li><strong>Clear scope</strong> — The agent has exactly four tools: read PDF, parse fields, validate
        against schema, write to DB. Nothing else.</li>
        <li><strong>Human-in-the-loop</strong> — Low-confidence extractions get queued for manual review instead
        of auto-inserting garbage.</li>
      </ul>
      <h2>What Doesn't: Open-Ended Reasoning</h2>
      <p>
        The agents that fail are the ones asked to "figure it out." A general-purpose business advisor agent that
        reasons about strategy, inventory, and cash flow simultaneously sounds incredible in a pitch deck. In
        practice, latency spikes, token costs explode, and the output is too vague to act on.
      </p>
      <p>
        We tried it. It wasn't pretty.
      </p>
      <h2>The Pattern That Scales</h2>
      <p>
        If you're building agents for production, here's the pattern I'd recommend:
      </p>
      <ol>
        <li><strong>Define the agent's contract first</strong> — Inputs, outputs, and failure modes before you
        write a single prompt.</li>
        <li><strong>Give it tools, not knowledge</strong> — The LLM is a router, not a database. Let it call
        well-tested functions instead of memorizing facts.</li>
        <li><strong>Measure everything</strong> — Latency p95, token usage per request, and confidence scores.
        If you can't measure it, you can't improve it.</li>
        <li><strong>Ship narrow, widen later</strong> — Start with one task. Prove it works end-to-end. Then add
        the next.</li>
      </ol>
      <h2>Final Thought</h2>
      <p>
        AI agents are not magic. They're software with a non-deterministic core. The same engineering discipline
        that keeps your APIs reliable—contracts, monitoring, graceful degradation—is what makes agents reliable
        too. Treat them like production systems, not prototypes, and they'll deliver.
      </p>
    `,
  },
];