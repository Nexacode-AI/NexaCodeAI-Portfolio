import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const industries = [
  "Chat & Conversational Systems",
  "E-commerce & Shopping",
  "Booking, Delivery & Restaurants",
  "Healthcare, Medical & Fitness",
  "Education & Learning",
  "Finance, Trading & Productivity",
  "Travel & Real Estate",
  "IoT & Custom AI Solutions",
];

export default function Industries() {
  return (
    <section id="industries" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        backdrop="Industries"
        label="Where we work"
        title={
          <>
            One stack, <span className="accent-text">every domain.</span>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {industries.map((name, i) => (
          <Reveal key={name} delay={(i % 2) * 0.1} y={24}>
            <div className="glass glass-edge group flex items-center gap-5 rounded-2xl px-6 py-5 transition-colors duration-300 hover:bg-white/[0.07]">
              <span className="font-(family-name:--font-display) text-sm tabular-nums text-zinc-600 transition-colors group-hover:text-indigo-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-8 w-px bg-white/10" />
              <span className="text-[15px] text-zinc-300">{name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
