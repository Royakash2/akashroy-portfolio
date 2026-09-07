import { LayoutWrapper } from "@/components/shared/LayoutWrapper";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Writing } from "@/components/sections/Writing";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";
import { GapBand } from "@/components/layout/Shell";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LayoutWrapper>
      <Hero />
      <GapBand />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Writing limit={3} />
      <GithubActivity />
      <Contact />
      <Footer />
    </LayoutWrapper>
  );
}
