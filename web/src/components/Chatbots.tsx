import {
  HeartPulse,
  MessageCircle,
  Mic,
  Share2,
  SlidersHorizontal,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const bots = [
  {
    icon: MessageCircle,
    name: "AI-Powered Conversational",
    desc: "GPT & LLM assistants that understand context and reason over your data.",
  },
  {
    icon: SlidersHorizontal,
    name: "Rule-Based & Hybrid",
    desc: "Deterministic flows blended with AI for reliable, controllable behaviour.",
  },
  {
    icon: Mic,
    name: "Voice-Activated & Transactional",
    desc: "Voice interfaces and bots that complete real actions end to end.",
  },
  {
    icon: Share2,
    name: "Social Media & Support",
    desc: "WhatsApp, web, and social channel bots for sales and customer support.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Survey",
    desc: "Compliant intake, triage, and survey bots tuned for sensitive domains.",
  },
];

export default function Chatbots() {
  return (
    <section id="chatbots" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        backdrop="Bots"
        label="Chatbots we develop"
        title={
          <>
            Every kind of bot, <span className="accent-text">done right.</span>
          </>
        }
      >
        <p>
          From simple rule-based assistants to fully autonomous agents, built
          on the channels and frameworks your users already live in.
        </p>
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bots.map((b, i) => (
          <Reveal key={b.name} delay={(i % 3) * 0.1}>
            <div className="glass glass-edge group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-slate-400/30 hover:shadow-[0_0_40px_-10px_rgba(203, 213, 225,0.4)]">
              <div className="mb-5 inline-flex w-fit rounded-2xl glass-bright p-3 transition-transform duration-300 group-hover:scale-110">
                <b.icon className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-(family-name:--font-display) text-lg font-semibold text-zinc-100">
                {b.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {b.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
