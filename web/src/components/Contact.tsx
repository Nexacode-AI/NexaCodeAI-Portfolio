"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Paperclip, X } from "lucide-react";
import { useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  "AI Website / Application",
  "AI SaaS Platform",
  "Agentic AI System",
  "Custom GPT / LLM App",
  "Fine-Tuning / RAG",
  "Cloud AI Deployment",
  "Other",
];

const inputClass =
  "w-full rounded-2xl glass px-5 py-4 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-white/30";

export default function Contact() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  function addFiles(list: FileList | null) {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO Phase 2: send via Resend (with attachments) from a Server Action
    setSubmitted(true);
  }

  function resetForm() {
    setFiles([]);
    setSubmitted(false);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-32">
      <SectionHeading
        backdrop="Contact"
        label="Start a project"
        title={
          <>
            Tell us your idea.
            <br />
            We&apos;ll make it <span className="accent-text">real.</span>
          </>
        }
      >
        <p>
          Fill in the form and our team will get back to you. Attach briefs,
          specs, or anything that helps us understand your vision.
        </p>
      </SectionHeading>

      <Reveal>
        <form
          onSubmit={handleSubmit}
          className="glass glass-edge rounded-[2rem] p-7 sm:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <p className="font-(family-name:--font-display) text-2xl font-semibold text-zinc-100">
                Request received.
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                We&apos;ll reach out at the email you provided. You can also
                mail us directly at{" "}
                <a
                  href="mailto:nexacode.ai@gmail.com"
                  className="text-zinc-200 underline underline-offset-4"
                >
                  nexacode.ai@gmail.com
                </a>
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 px-8 py-4 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.03]"
              >
                Send another request
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className={inputClass}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className={inputClass}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="company"
                  placeholder="Company (optional)"
                  className={inputClass}
                />
                <select
                  required
                  name="service"
                  defaultValue=""
                  className={`${inputClass} appearance-none [&>option]:bg-zinc-900`}
                >
                  <option value="" disabled>
                    Service you need
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Describe your project — goals, scope, timeline…"
                className={`${inputClass} resize-none`}
              />

              {/* file attachments */}
              <div>
                <input
                  ref={fileInput}
                  type="file"
                  multiple
                  hidden
                  onChange={(e) => addFiles(e.target.files)}
                />
                <button
                  type="button"
                  onClick={() => fileInput.current?.click()}
                  className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <Paperclip className="h-4 w-4" />
                  Attach files
                </button>
                {files.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {files.map((f, i) => (
                      <li
                        key={`${f.name}-${i}`}
                        className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-zinc-300"
                      >
                        {f.name}
                        <button
                          type="button"
                          aria-label={`Remove ${f.name}`}
                          onClick={() =>
                            setFiles((prev) =>
                              prev.filter((_, idx) => idx !== i),
                            )
                          }
                          className="text-zinc-500 hover:text-white"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-zinc-100 px-8 py-4 text-sm font-medium text-zinc-950 transition-transform hover:scale-[1.03]"
              >
                Send Request
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          )}
        </form>
      </Reveal>
    </section>
  );
}
