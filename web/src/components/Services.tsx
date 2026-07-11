import {
  Bot,
  Cloud,
  Globe,
  Layers,
  MessageSquare,
  Workflow,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const featured = {
  icon: Bot,
  title: "Agentic AI Systems",
  desc: "Autonomous agents that reason, plan, and act across your tools, built with LangGraph, CrewAI, and AutoGen.",
  bullets: [
    "Multi-agent orchestration",
    "Tool, API & database calling",
    "Human-in-the-loop handoff",
    "Production-grade guardrails",
  ],
};

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & GPT Assistants",
    desc: "Conversational, voice, and support bots trained on your data with RAG.",
  },
  {
    icon: Globe,
    title: "AI Websites & Applications",
    desc: "AI-powered web & mobile experiences built for performance and scale.",
  },
  {
    icon: Layers,
    title: "AI SaaS Platforms",
    desc: "Multi-tenant, scalable SaaS with AI at the core of the business logic.",
  },
  {
    icon: Workflow,
    title: "WhatsApp & Workflow Automation",
    desc: "Automate support, sales, and ops across WhatsApp and your systems.",
  },
  {
    icon: Cloud,
    title: "Fine-Tuning, RAG & Cloud Deploy",
    desc: "Model fine-tuning, retrieval pipelines, and deployment on AWS, Azure, GCP.",
  },
];

const cardClass =
  "glass glass-edge group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-slate-400/30 hover:shadow-[0_0_40px_-10px_rgba(203, 213, 225,0.4)]";

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        backdrop="Services"
        label="What we build"
        title={
          <>
            From prototype to <span className="accent-text">production.</span>
          </>
        }
      />

      <div className="grid gap-5 lg:grid-cols-3 lg:auto-rows-fr">
        {/* featured large card */}
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <div className={`${cardClass} relative overflow-hidden`}>
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-10 h-56 w-56 rounded-full bg-slate-500/15 blur-[80px] transition-opacity duration-300 group-hover:opacity-150"
            />
            <div className="relative flex h-full flex-col">
              <div className="mb-5 inline-flex w-fit rounded-2xl glass-bright p-3 transition-transform duration-300 group-hover:scale-110">
                <featured.icon
                  className="h-6 w-6 text-slate-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-(family-name:--font-display) text-2xl font-semibold text-zinc-100">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                {featured.desc}
              </p>
              <ul className="mt-auto grid grid-cols-1 gap-2.5 pt-8 sm:grid-cols-2">
                {featured.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5 text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 shadow-[0_0_8px_2px_rgba(203, 213, 225,0.5)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 0.1}>
            <div className={cardClass}>
              <div className="mb-5 inline-flex rounded-2xl glass-bright p-3 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-(family-name:--font-display) text-lg font-semibold text-zinc-100">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
