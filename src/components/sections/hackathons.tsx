import { hackathons } from "@/lib/data";
import Image from "next/image";

export default function Hackathons() {
  if (!hackathons || hackathons.length === 0) return null;

  return (
    <section id="hackathons" className="flex flex-col space-y-4 pt-12">
      <div className="flex flex-col items-center justify-center space-y-2 text-center mb-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
        <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base">
          During my time in university, I attended 21+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
        </p>
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <div className="w-full relative border-l border-border/50 ml-4 pl-6 md:pl-8 space-y-8">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="relative flex flex-col justify-start">
              <div className="absolute -left-10 md:-left-[41px] top-1 w-8 h-8 rounded-full border border-border bg-background overflow-hidden flex items-center justify-center z-10">
                {hackathon.logo ? (
                  <Image src={hackathon.logo} alt={hackathon.title} width={32} height={32} className="object-cover w-full h-full" />
                ) : (
                  <div className="w-full h-full bg-muted"></div>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{hackathon.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{hackathon.dates}</span>
                </div>
                <div className="text-sm text-muted-foreground">{hackathon.location}</div>
                {hackathon.description && (
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {hackathon.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
