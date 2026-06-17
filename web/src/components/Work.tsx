import {
  ArrowUpRight,
  GraduationCap,
  HeartPulse,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const upcoming = [
  {
    icon: ShoppingBag,
    area: "E-commerce & Shopping",
    note: "Case study coming soon",
  },
  {
    icon: HeartPulse,
    area: "Healthcare & Fitness",
    note: "Case study coming soon",
  },
  {
    icon: MessageSquare,
    area: "Conversational AI",
    note: "Case study coming soon",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        backdrop="Work"
        label="Our work"
        title={
          <>
            Shipped. <span className="accent-text">Live.</span> In production.
          </>
        }
      >
        <p>
          Real platforms serving real users across the industries we work in.
        </p>
      </SectionHeading>

      {/* featured project */}
      <Reveal>
        <a
          href="https://www.pusattuisyensericakra.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="glass glass-edge relative overflow-hidden rounded-[2rem] p-8 transition-all duration-300 group-hover:bg-white/[0.07] sm:p-12">
            {/* faint fog inside the card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-[90px]"
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-zinc-400">
                  <GraduationCap className="h-3.5 w-3.5 text-slate-300" />
                  Education · Web Platform
                </p>
                <h3 className="font-(family-name:--font-display) text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                  Pusat Tuisyen Seri Cakra
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
                  A complete digital platform for Seremban&apos;s trusted
                  tuition centre — an integrated portal where students,
                  parents, and teachers manage academic progress, attendance,
                  fees, and communication.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "500+ students",
                    "2 locations",
                    "Student portal",
                    "Parent portal",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* browser frame with a live screenshot preview */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <div className="mb-3 flex items-center gap-2 px-1">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 flex-1 truncate rounded-full bg-white/5 px-4 py-1 text-[11px] text-zinc-500">
                    pusattuisyensericakra.com
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/work/pusat-tuisyen.jpg"
                    alt="Pusat Tuisyen Seri Cakra website preview"
                    width={1200}
                    height={769}
                    className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-zinc-950/40 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950">
                      Visit live site
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Reveal>

      {/* upcoming case studies */}
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {upcoming.map((u, i) => (
          <Reveal key={u.area} delay={i * 0.12}>
            <div className="glass glass-edge flex h-full items-center gap-4 rounded-3xl px-6 py-6 transition-colors duration-300 hover:bg-white/[0.07]">
              <div className="rounded-2xl glass-bright p-3">
                <u.icon
                  className="h-5 w-5 text-slate-300"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="font-(family-name:--font-display) text-sm font-semibold text-zinc-100">
                  {u.area}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">{u.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
