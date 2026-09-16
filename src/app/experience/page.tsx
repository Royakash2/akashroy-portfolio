import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/shared/LayoutWrapper";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Experience | Akash Roy",
  description:
    "Work experience, roles, and technologies I've used as a Full Stack Developer.",
};

export default function ExperiencePage() {
  return (
    <LayoutWrapper>
      <Experience />
      <Contact />
    </LayoutWrapper>
  );
}
