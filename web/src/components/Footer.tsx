import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Stack", href: "#stack" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "What we build",
    links: [
      { label: "AI Chatbots & Assistants", href: "#chatbots" },
      { label: "Agentic AI Systems", href: "#services" },
      { label: "AI SaaS Platforms", href: "#services" },
      { label: "WhatsApp Automation", href: "#services" },
      { label: "Fine-Tuning & RAG", href: "#services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-[0_2px_10px_-2px_rgba(0,0,0,0.5)]">
                <Image
                  src="/logo.png"
                  alt="Nexacode AI"
                  width={26}
                  height={26}
                />
              </span>
              <span className="font-(family-name:--font-display) text-lg font-bold tracking-tight text-zinc-100">
                nexacode<span className="text-zinc-500">.ai</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Production-grade AI chatbots, agentic systems, and full-stack apps
              — from idea validation to deployment.
            </p>
            <a
              href="mailto:nexacode.ai@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-indigo-300" />
              nexacode.ai@gmail.com
            </a>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
              Start a project
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              Tell us your idea — free consultation before you commit.
            </p>
            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.04]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-7 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Nexacode AI. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            GPT · LLMs · Agentic AI · Full-Stack · Cloud
          </p>
        </div>
      </div>
    </footer>
  );
}
