"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What kinds of AI projects do you take on?",
    a: "AI chatbots and GPT assistants, RAG and document systems, agentic AI workflows, LLM-powered apps, AI websites and SaaS platforms, and WhatsApp/workflow automation — end to end, from idea to deployment.",
  },
  {
    q: "Which technologies do you build with?",
    a: "Backend: Python, FastAPI, Flask, Node.js, Express. Frontend & mobile: React, Next.js, Streamlit, Flutter. AI frameworks: LangChain, LangGraph, CrewAI, AutoGen, LlamaIndex, Hugging Face, PyTorch, TensorFlow. Databases & vector stores: MongoDB, PostgreSQL, MySQL, Pinecone, FAISS, Chroma.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. Message us with your idea before committing to anything — we'll discuss scope, approach, and feasibility at no cost.",
  },
  {
    q: "Can you deploy and host the solution for us?",
    a: "Absolutely. We deliver deployment-ready solutions and ship to AWS, Azure, or Google Cloud, with monitoring and optimization after launch.",
  },
  {
    q: "Will the code and solution be ours?",
    a: "Yes — you get clean, scalable, well-structured code and full ownership of the solution we build for you.",
  },
  {
    q: "Do you provide support after launch?",
    a: "We offer ongoing support, fine-tuning, and improvements so your AI keeps performing as your needs and data evolve.",
  },
];

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass glass-edge overflow-hidden rounded-2xl">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-(family-name:--font-display) text-base font-medium text-zinc-100">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-slate-300"
        >
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.65, 0.32, 0.99] }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-32">
      <SectionHeading
        backdrop="FAQ"
        label="Questions"
        title={
          <>
            Things people <span className="accent-text">ask us.</span>
          </>
        }
      />
      <Reveal>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
