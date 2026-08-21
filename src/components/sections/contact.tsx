import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="relative w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-background px-6 py-16 sm:py-24 text-center">
        
        {/* Soft top gradient replacing the dots */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-zinc-100 to-transparent dark:from-white/5" />
        </div>

        {/* Contact Badge overlapping the top border */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center rounded-full bg-zinc-900 dark:bg-zinc-100 px-5 py-1.5 text-sm font-medium text-white dark:text-zinc-900 shadow-md">
            Contact
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-zinc-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
            Want to chat? Just shoot me a dm{" "}
            <Link 
              href={personalInfo.socials?.twitter || "#"} 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
            >
              with a direct question on twitter
            </Link>{" "}
            and I&apos;ll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </div>
    </section>
  );
}
