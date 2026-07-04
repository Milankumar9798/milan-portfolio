"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/magnetic";

const CONTACT_LINKS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "in/milan-kumar", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "Milankumar9798", href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
          // 07 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold text-ink max-w-2xl"
        >
          Let&apos;s build something worth shipping.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-ink-muted max-w-lg"
        >
          Open to Software Engineering roles — full-stack, backend, or
          Java-focused. Reach out directly or drop a note below.
        </motion.p>

        <div className="mt-14 grid md:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="space-y-4">
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="block"
              >
                <Card className="p-5 flex items-center gap-4 hover:border-brass/40 transition-colors group">
                  <div className="h-11 w-11 rounded-xl bg-brass/10 flex items-center justify-center text-brass shrink-0 group-hover:scale-105 transition-transform">
                    <link.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-dim font-mono">{link.label}</p>
                    <p className="text-ink text-sm font-medium">{link.value}</p>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Card className="p-6 md:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <CheckCircle2 className="text-signal-green mb-4" size={40} />
                  <p className="text-ink font-medium">
                    Your email client should be open now.
                  </p>
                  <p className="text-ink-muted text-sm mt-1">
                    Thanks for reaching out — talk soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-xs font-mono text-ink-dim">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 w-full bg-base-surface2 border border-base-border rounded-lg px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-brass"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-mono text-ink-dim">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 w-full bg-base-surface2 border border-base-border rounded-lg px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-brass"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs font-mono text-ink-dim">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1.5 w-full bg-base-surface2 border border-base-border rounded-lg px-4 py-2.5 text-sm text-ink outline-none focus-visible:border-brass resize-none"
                      placeholder="What are you building?"
                    />
                  </div>
                  <Magnetic>
                    <Button type="submit" className="w-full">
                      Send Message <Send size={15} />
                    </Button>
                  </Magnetic>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
