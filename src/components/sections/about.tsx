import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            About
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A bit about me
            </h2>
            {about.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-muted-foreground leading-[1.75]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-2 lg:pt-12">
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/50 bg-white p-5 text-center shadow-xs"
                >
                  <div className="text-3xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
