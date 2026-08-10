"use client";

import { useState, useRef } from "react";
import { personalInfo } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Globe,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Contact
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mb-12 max-w-lg text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-xl border border-border/50 bg-white p-5 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-white p-5 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-white p-5 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/50 bg-white p-5 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08]">
                  <Globe size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Social</p>
                  <div className="flex gap-4 mt-1">
                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GitBranch size={13} />
                      GitHub
                    </a>
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={13} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border/50 bg-white p-6 shadow-xs">
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Send a Message
              </h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Send size={20} className="text-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">
                    Message sent!
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.97] shadow-xs"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
