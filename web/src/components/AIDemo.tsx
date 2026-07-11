"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Convo = { q: string; lead: string; points: string[]; close: string };

const convos: Convo[] = [
  {
    q: "How do I add AI to my online store?",
    lead: "We'd build a GPT assistant trained on your catalog:",
    points: [
      "Answers product questions in real time",
      "Plugs into WhatsApp and your website",
      "Deployed and monitored on AWS",
    ],
    close: "Typical build: ~2 weeks.",
  },
  {
    q: "Can you turn our internal docs into a chatbot?",
    lead: "Yes, a RAG system built over your documents:",
    points: [
      "Ingests and embeds all your docs",
      "Answers accurately, with citations",
      "Stays in sync as content changes",
    ],
    close: "Live in days, not months.",
  },
  {
    q: "We need to automate WhatsApp support.",
    lead: "We'll set up an agentic WhatsApp flow:",
    points: [
      "GPT handles the common questions",
      "Connected to orders and FAQs",
      "Hands off to a human when needed",
    ],
    close: "24/7 support, fully managed.",
  },
];

type Phase = "ask" | "thinking" | "lead" | "points" | "done";

function UserBubble({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-end"
    >
      <p className="max-w-[85%] rounded-2xl rounded-br-md bg-white/[0.08] px-4 py-2.5 text-sm leading-relaxed text-zinc-100 ring-1 ring-white/10">
        {text}
      </p>
    </motion.div>
  );
}

function Assistant({
  lead,
  points,
  close,
}: {
  lead: string;
  points: string[];
  close?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-2.5"
    >
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-500/20 ring-1 ring-slate-400/30">
        <Sparkles className="h-3.5 w-3.5 text-slate-300" />
      </span>
      <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md bg-white/[0.04] px-4 py-3 ring-1 ring-white/10">
        <p className="text-sm leading-relaxed text-zinc-200">{lead}</p>
        <ul className="mt-3 space-y-2">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 text-[13px] leading-relaxed text-zinc-300"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-300"
                strokeWidth={2.5}
              />
              {p}
            </li>
          ))}
        </ul>
        {close && (
          <p className="mt-3 font-(family-name:--font-display) text-sm font-medium text-slate-300">
            {close}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function AIDemo() {
  const [ci, setCi] = useState(0);
  const [prev, setPrev] = useState<Convo | null>(null);
  const [phase, setPhase] = useState<Phase>("ask");
  const [typedLead, setTypedLead] = useState("");
  const [pts, setPts] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const c = convos[ci];

  // keep the view pinned to the newest message
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  });

  // new conversation → reset + show question
  useEffect(() => {
    setPhase("ask");
    setTypedLead("");
    setPts(0);
    const t = setTimeout(() => setPhase("thinking"), 700);
    return () => clearTimeout(t);
  }, [ci]);

  useEffect(() => {
    if (phase !== "thinking") return;
    const t = setTimeout(() => setPhase("lead"), 800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "lead") return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTypedLead(c.lead.slice(0, i));
      if (i >= c.lead.length) {
        clearInterval(id);
        setPhase("points");
      }
    }, 26);
    return () => clearInterval(id);
  }, [phase, c.lead]);

  useEffect(() => {
    if (phase !== "points") return;
    if (pts < c.points.length) {
      const t = setTimeout(() => setPts((p) => p + 1), 450);
      return () => clearTimeout(t);
    }
    setPhase("done");
  }, [phase, pts, c.points.length]);

  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      setPrev(c); // keep this exchange as scrollback above the next
      setCi((i) => (i + 1) % convos.length);
    }, 3000);
    return () => clearTimeout(t);
  }, [phase, c]);

  return (
    <div className="glass glass-edge w-full max-w-md rounded-2xl p-1.5 shadow-[0_20px_70px_-25px_rgba(203, 213, 225,0.6)]">
      {/* window title bar */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      {/* assistant header */}
      <div className="flex items-center gap-2.5 px-4 py-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-500/20 ring-1 ring-slate-400/30">
          <Sparkles className="h-3.5 w-3.5 text-slate-300" />
        </span>
        <div className="leading-tight">
          <p className="font-(family-name:--font-display) text-sm font-semibold text-zinc-100">
            Nexacode Assistant
          </p>
          <p className="flex items-center gap-1.5 text-[11px] text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Online
          </p>
        </div>
      </div>

      {/* fixed-height, bottom-anchored message window */}
      <div
        ref={scrollRef}
        className="flex h-[19rem] flex-col justify-end gap-4 overflow-hidden rounded-[0.9rem] bg-black/40 p-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%)]"
      >
        {/* previous exchange (scrollback) */}
        {prev && (
          <>
            <UserBubble text={prev.q} />
            <Assistant lead={prev.lead} points={prev.points} close={prev.close} />
          </>
        )}

        {/* current exchange */}
        <UserBubble text={c.q} />

        {phase === "thinking" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2.5"
          >
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-500/20 ring-1 ring-slate-400/30">
              <Sparkles className="h-3.5 w-3.5 text-slate-300" />
            </span>
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-md bg-white/[0.04] px-4 py-3.5 ring-1 ring-white/10">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-slate-300"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.18 }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {(phase === "lead" || phase === "points" || phase === "done") && (
          <Assistant
            lead={typedLead + (phase === "lead" ? "▍" : "")}
            points={c.points.slice(0, pts)}
            close={phase === "done" ? c.close : undefined}
          />
        )}
      </div>
    </div>
  );
}
