import {
  Bot,
  Braces,
  Cloud,
  Globe,
  Layers,
  Workflow,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Globe,
    title: "AI Websites & Applications",
    desc: "AI-powered web experiences built for performance, intelligence, and scale.",
  },
  {
    icon: Layers,
    title: "AI SaaS Platforms",
    desc: "Multi-tenant, scalable SaaS products with AI at the core of the business logic.",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    desc: "Autonomous AI agents that reason, plan, and act — built with LangGraph and CrewAI.",
  },
  {
    icon: Braces,
    title: "Custom GPT & LLM Apps",
    desc: "Bespoke applications on top of GPT and open LLMs, tuned to your domain.",
  },
  {
    icon: Workflow,
    title: "Fine-Tuning & RAG",
    desc: "AI integrations, model fine-tuning, and retrieval-augmented generation pipelines.",
  },
  {
    icon: Cloud,
    title: "Cloud-Deployed AI",
    desc: "Production deployments on AWS, Azure, and GCP — monitored and optimized.",
  },
];

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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.12}>
            <div className="glass glass-edge group h-full rounded-3xl p-7 transition-all duration-300 hover:bg-white/[0.07] hover:shadow-[0_0_36px_-8px_rgba(52,211,153,0.3)]">
              <div className="mb-5 inline-flex rounded-2xl glass-bright p-3">
                <s.icon
                  className="h-5 w-5 text-emerald-300"
                  strokeWidth={1.5}
                />
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
