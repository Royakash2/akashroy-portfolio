import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold tracking-tight">About</h2>
      <div className="prose prose-sm dark:prose-invert max-w-full text-muted-foreground">
        {about.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="mb-2 last:mb-0 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{__html: paragraph}} />
        ))}
      </div>
    </section>
  );
}
