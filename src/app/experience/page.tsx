import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/shared/LayoutWrapper";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { PageHero } from "@/components/layout/Shell";

export const metadata: Metadata = {
  title: "Experience | Akash Roy",
  description:
    "Work experience, roles, and technologies I've used as a Full Stack Developer.",
};

export default function ExperiencePage() {
  return (
    <LayoutWrapper>
      <PageHero 
        subtitle="04 / CAREER"
        title="Experience"
        description="A timeline of my professional journey, roles, and the teams I've worked with."
      />
      <Experience hideHeader />
      <Contact hideHeader />
    </LayoutWrapper>
  );
}
