import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { TbBrain } from "react-icons/tb";


const learningItems = [
  {
    title: "MERN Stack",
    description:
      "Building full-stack applications end-to-end with MongoDB, Express.js, React, and Node.js.",
    icons: [
      { icon: SiMongodb, color: "#47A248" },
      { icon: SiExpress, color: "currentColor" },
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiNodedotjs, color: "#339933" },
    ],
    progress: 55,
  },
  {
    title: "Vercel AI SDK",
    description:
      "Integrating large language models into web apps using Vercel's AI SDK to build intelligent, AI-powered experiences.",
    icons: [
      { icon: TbBrain, color: "#a855f7" },
    ],
    progress: 30,
  },
];

export default function CurrentlyLearning() {
  return (
    <section id="currently-learning" className="flex flex-col space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Currently Learning
      </h2>

      <div className="flex flex-col gap-4">
        {learningItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#1c1c1c] px-5 py-5"
          >
            {/* Header row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  {/* Tech Icons */}
                  <div className="flex items-center gap-1.5">
                    {item.icons.map((ic, i) => (
                      <ic.icon
                        key={i}
                        size={18}
                        style={{ color: ic.color !== "currentColor" ? ic.color : undefined }}
                        className={ic.color === "currentColor" ? "text-foreground" : ""}
                      />
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>

              {/* Status badge */}
              <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-zinc-200 dark:border-white/10 rounded-full px-3 py-1">
                In Progress
              </span>
            </div>

            {/* Progress bar */}
            <div className="flex flex-col gap-1">
              <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-foreground transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <p className="text-[10px] text-muted-foreground">{item.progress}% complete</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

