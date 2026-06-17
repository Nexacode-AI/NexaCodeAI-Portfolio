import Counter from "./Counter";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [
  { to: 500, suffix: "+", label: "End users served" },
  { to: 8, suffix: "+", label: "Industries covered" },
  { to: 9, suffix: "+", label: "AI frameworks mastered" },
  { to: 3, suffix: "", label: "Cloud platforms deployed" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        backdrop="About"
        label="Who we are"
        title={
          <>
            Intelligent systems,
            <br />
            <span className="accent-text">real-world impact.</span>
          </>
        }
      >
        <p>
          At Nexacode AI, we specialize in GPT, Large Language Models, and
          Agentic AI systems to build intelligent, scalable, and
          production-ready AI websites, applications, SaaS platforms, and
          chatbots.
        </p>
        <p className="mt-4">
          We&apos;re a full-stack AI team — from idea validation and system
          architecture to deployment and optimization. Alongside AI, we build
          full-stack apps and WhatsApp automation, delivering clean, scalable,
          deployment-ready solutions with real-world impact.
        </p>
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12}>
            <div className="glass glass-edge rounded-3xl p-7 transition-shadow duration-300 hover:shadow-[0_0_36px_-8px_rgba(203, 213, 225,0.35)]">
              <p className="accent-text font-(family-name:--font-display) text-4xl font-bold">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
