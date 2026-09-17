import { LayoutWrapper } from "@/components/shared/LayoutWrapper";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";
import { GapBand } from "@/components/layout/Shell";
export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <GapBand />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Now />
      <GithubActivity />
      <Contact />
    </LayoutWrapper>
  );
}
