"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* shooting meteors, like the planet section in the reference */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <span className="meteor" style={{ top: "12%", right: "5%" }} />
        <span
          className="meteor"
          style={{ top: "8%", right: "32%", animationDelay: "2.6s" }}
        />
        <span
          className="meteor"
          style={{ top: "26%", right: "14%", animationDelay: "4.8s", width: "110px" }}
        />
      </div>

      {/* pulsing glow ring behind the headline */}
      <div
        aria-hidden
        className="glow-ring absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 opacity-60"
      />

      {/* giant ghosted brand word, parallaxing behind the content */}
      <motion.span
        aria-hidden
        style={{ y: backdropY }}
        className="backdrop-word absolute top-[18vh] left-1/2 -translate-x-1/2 text-[clamp(6rem,19vw,19rem)]"
      >
        nexacode
      </motion.span>

      <motion.div style={{ opacity: fade }} className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass glass-edge px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-zinc-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
          GPT · LLMs · Agentic AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto max-w-4xl font-(family-name:--font-display) text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-7xl"
        >
          We build AI that <span className="accent-text">ships</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:text-lg"
        >
          From idea validation to deployment — intelligent, scalable,
          production-ready AI applications, SaaS platforms, and autonomous
          agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500"
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
