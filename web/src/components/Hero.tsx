"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import AIDemo from "./AIDemo";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backdropY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* aurora ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* main pool of light behind the demo card */}
        <div
          className="aurora aurora-1"
          style={{
            width: "40vw",
            height: "40vw",
            top: "18%",
            left: "56%",
            background:
              "radial-gradient(circle, rgba(203, 213, 225,0.40), transparent 66%)",
          }}
        />
        <div
          className="aurora aurora-2"
          style={{
            width: "30vw",
            height: "30vw",
            top: "0%",
            left: "70%",
            background:
              "radial-gradient(circle, rgba(148, 163, 184,0.30), transparent 68%)",
          }}
        />
        <div
          className="aurora aurora-3"
          style={{
            width: "34vw",
            height: "34vw",
            top: "26%",
            left: "-8%",
            background:
              "radial-gradient(circle, rgba(226, 232, 240,0.18), transparent 70%)",
          }}
        />
      </div>

      {/* giant ghosted brand word — subtle watermark behind the headline */}
      <motion.span
        aria-hidden
        style={{ y: backdropY }}
        className="backdrop-word pointer-events-none absolute top-[20vh] left-1/2 -translate-x-1/2 text-[clamp(4.5rem,14vw,13rem)] opacity-40"
      >
        nexacode
      </motion.span>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* left: copy */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass glass-edge px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-zinc-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300 shadow-[0_0_8px_2px_rgba(203, 213, 225,0.7)]" />
            GPT · LLMs · Agentic AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mx-auto max-w-xl font-(family-name:--font-display) text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-6xl lg:mx-0"
          >
            We build AI that <span className="accent-text">ships.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mx-auto mt-6 max-w-lg text-base text-zinc-400 sm:text-lg lg:mx-0"
          >
            Custom AI chatbots, RAG systems, agentic workflows, LLM apps, and
            WhatsApp automation — full-stack and deployment-ready, from idea
            validation to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-7 py-3.5 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.04]"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="glass glass-edge inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-5 text-xs text-zinc-500"
          >
            Free consultation before you commit — just tell us your idea.
          </motion.p>
        </div>

        {/* right: live agent demo */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.55 }}
          className="flex justify-center lg:justify-end"
        >
          <AIDemo />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500"
      >
        Scroll to explore
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
