import { Compass, Cpu, Rocket, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    desc: "Free consultation to validate your idea, scope the build, and map success metrics.",
  },
  {
    icon: Cpu,
    title: "Architecture",
    desc: "Before we write any code, we design the system: models, data, agents, and integrations.",
  },
  {
    icon: Wrench,
    title: "Build",
    desc: "Clean, scalable, full-stack implementation with you in the loop at every milestone.",
  },
  {
    icon: Rocket,
    title: "Deploy & Optimize",
    desc: "We ship to AWS, Azure, or GCP, then monitor, fine-tune, and support it in production.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        backdrop="Process"
        label="How we work"
        title={
          <>
            Idea to production, <span className="accent-text">in four steps.</span>
          </>
        }
      >
        <p>
          A clear, low-friction path from your first message to a deployed,
          maintained AI solution.
        </p>
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12}>
            <div className="glass glass-edge group relative h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:border-slate-400/30">
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex rounded-2xl glass-bright p-3 transition-transform duration-300 group-hover:scale-110">
                  <s.icon
                    className="h-5 w-5 text-slate-300"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-(family-name:--font-display) text-3xl font-bold tabular-nums text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
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
