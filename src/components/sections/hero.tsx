import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const nameParts = personalInfo.name.split(" ");
  return (
    <section id="hero" className="flex items-center justify-between">
      <div className="flex-1 space-y-2.5">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hi, I&apos;m {nameParts[0]}
        </h1>
        <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base">
          {personalInfo.title}
        </p>
        {personalInfo.currentRole && (
          <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base flex items-center gap-2">
            Currently a {personalInfo.currentRole} at{" "}
            <span className="font-semibold text-foreground flex items-center gap-1">
              {personalInfo.currentCompanyLogo && (
                <Image src={personalInfo.currentCompanyLogo} alt="Logo" width={16} height={16} className="rounded-sm" />
              )}
              {personalInfo.currentCompany}
            </span>
          </p>
        )}
      </div>
      <div className="flex-shrink-0 ml-4 sm:ml-8">
        <Image
          src={personalInfo.avatar || "/avatar.jpg"}
          alt={personalInfo.name}
          width={120}
          height={120}
          className="rounded-full border-4 border-background w-24 h-24 sm:w-32 sm:h-32 object-cover object-center shadow-lg"
        />
      </div>
    </section>
  );
}
