import FlowLines from "./FlowLines";
import SectionHeading from "./SectionHeading";

const rows = [
  [
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "AutoGen",
    "LlamaIndex",
    "HuggingFace",
  ],
  [
    "Python",
    "FastAPI",
    "Flask",
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js",
    "Streamlit",
    "Flutter",
  ],
  [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Pinecone",
    "FAISS",
    "Chroma",
    "AWS",
    "Azure",
    "Google Cloud",
  ],
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex w-max gap-4 ${reverse ? "marquee-reverse" : "marquee"}`}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="glass glass-edge whitespace-nowrap rounded-full px-6 py-3 font-(family-name:--font-display) text-sm text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-32">
      <FlowLines />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          backdrop="Stack"
          label="Technologies"
          title={
            <>
              The tools behind{" "}
              <span className="accent-text">the intelligence.</span>
            </>
          }
        />
      </div>
      <div className="relative space-y-1">
        <MarqueeRow items={rows[0]} />
        <MarqueeRow items={rows[1]} reverse />
        <MarqueeRow items={rows[2]} />
      </div>
    </section>
  );
}
