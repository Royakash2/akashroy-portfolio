"use client";

import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/layout/Shell";
import { site } from "@/config/site";

export function About() {
  return (
    <div id="about">
      <SectionHeader title="About" />
      <Shell className="px-6 py-7 sm:px-8 space-y-4">
        {site.about.map((para, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-2 text-[14.5px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}>•</span>
            <p>{para}</p>
          </motion.div>
        ))}

        {/* Developer Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-4 rounded-sm p-5 space-y-4"
          style={{ border: "1px solid var(--line)" }}
        >
          <p
            className="text-[10px] uppercase tracking-widest font-semibold"
            style={{ fontFamily: "var(--font-mono)", color: "var(--soft)" }}
          >
            Always On
          </p>
          <div className="flex flex-wrap gap-2">
            {site.tldr.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-[12px] font-normal transition-colors duration-200"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--chip)",
                  color: "var(--muted)",
                }}
              >
                <span className="size-1.5 rounded-full flex-none"  />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </Shell>
    </div>
  );
}
