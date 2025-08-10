import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image?: string; // path in public/
  demo?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "gintuanatbp.com",
    description: "Delivered a complete Shopify e-commerce site with payment/shipping logic, theme customisation, and responsive UI using Liquid, HTML, CSS. Integrated secure third-party APIs and configured back-end workflows.",
    image: "/globe.svg",
    demo: "https://gintuanatbp.com"
  },
  {
    title: "Enterprise API Orchestration (ING)",
    description: "Built modular Java orchestration engine integrating multi-API workflows; improved throughput by 30%. Applied secure coding, validation, and logging standards.",
    image: "/window.svg",
    demo: "#",
    repo: "#",
  },
  {
    title: "ElasticSearch Migration Tool (IBM)",
    description: "Developed multithreaded Java migration tool for 16M+ documents. Enhanced traceability and performance with custom validation and logging.",
    image: "/file.svg",
    demo: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
  <section id="projects" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
  <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight hover:text-blue-600 transition-colors duration-300">Projects</h2>
          <Link href="#contact" className="hidden sm:inline-flex text-sm text-blue-600 hover:underline hover:text-blue-500 transition-all duration-300 hover:translate-x-1">
            Work with me →
          </Link>
        </div>
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((p, index) => (
            <div key={p.title} className="group relative flex flex-col rounded-2xl border border-black dark:border-white/15 bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 overflow-hidden backdrop-blur hover:border-blue-500/50 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
              <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-fuchsia-500/10 group-hover:from-blue-600/20 group-hover:to-fuchsia-500/20 transition-all duration-500">
                {p.image && (
                  <Image src={p.image} alt="Project icon" width={64} height={64} className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-foreground/70 flex-1 group-hover:text-foreground/90 transition-colors duration-300">{p.description}</p>
                <div className="mt-4 flex gap-3">
                  {p.demo && (
                    <Link href={p.demo} className="text-xs font-medium px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-md">
                      Live Demo
                    </Link>
                  )}
                  {p.repo && (
                    <Link href={p.repo} className="text-xs font-medium px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105 hover:border-blue-400">
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
