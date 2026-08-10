import { personalInfo } from "@/lib/data";
import Image from "next/image";
import { Mail } from "lucide-react";
import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from "react-icons/tb";

export default function Hero() {
  const nameParts = personalInfo.name.split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
   
      
    
      
    

      <div className="mx-auto w-full max-w-5xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center pt-24 pb-16">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left z-10">
          <h2 className="mb-2 text-2xl md:text-3xl font-medium tracking-wide">
            Hi, Im {nameParts[0]}
          </h2>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-primary">
            {personalInfo.title}
          </h1>
          
          <p className="mb-10 max-w-lg text-lg text-muted-foreground leading-relaxed">
            Expert in HTML, CSS, SCSS, JavaScript, React.js, Node.js Express.js I have done more than 250+ project worldwide.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/90 active:scale-[0.97]"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted active:scale-[0.97]"
            >
              Explore me
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-5">
            <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <TbBrandGithub size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <TbBrandLinkedin size={24} />
            </a>
            <a href="#" aria-label="X (Twitter)" className="text-muted-foreground hover:text-foreground transition-colors">
              <TbBrandX size={24} />
            </a>
            <a href="#" aria-label="Mail" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:mx-0 flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Offset border box */}
            <div className="absolute top-6 left-6 w-full h-full border-2 border-primary rounded-sm opacity-60"></div>
            
            {/* Image container */}
            <div className="absolute top-0 left-0 w-full h-full bg-muted rounded-sm overflow-hidden z-10 border border-border/20">
              <Image
                width={500}
                height={500}
                
                src={personalInfo.avatar || "/avatar.jpg"}
                alt={personalInfo.name}
                className="w-full h-full object-cover filter grayscale sepia-[0.2] hue-rotate-[140deg] saturate-[1.5]"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
