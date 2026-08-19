import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const nameParts = personalInfo.name.split(" ");
  return (
    <section id="hero" className="flex items-center justify-between gap-4 sm:gap-8">
      <div className="flex-1 space-y-3">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
          Hi, I&apos;m {nameParts[0]}
        </h1>
        <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg leading-relaxed">
          {personalInfo.shortBio}
        </p>
      </div>
      <div className="flex-shrink-0">
        <Image
          src={personalInfo.avatar || "/avatar.jpg"}
          alt={personalInfo.name}
          width={120}
          height={120}
          className="rounded-full w-28 h-28 sm:w-36 sm:h-36 object-cover object-center ring-4 ring-muted shadow-md"
        />
      </div>
    </section>
  );
}
