import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center space-y-4 text-center pb-24">
      <div className="inline-flex items-center rounded-md bg-foreground px-3 py-1 text-sm font-semibold text-background">
        Contact
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
      <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base">
        Want to chat? Just shoot me a dm with a direct question on{" "}
        <Link href={personalInfo.socials?.twitter || "#"} className="text-primary hover:underline">
          twitter
        </Link>{" "}
        and I'll respond whenever I can. I will ignore all soliciting.
      </p>
    </section>
  );
}
