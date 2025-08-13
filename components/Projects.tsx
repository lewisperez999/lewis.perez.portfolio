"use client";

const projectsData = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Delivered a Shopify e-commerce site with payment/shipping logic, theme customisation, and responsive UI using Liquid, HTML, CSS.",
    image: "/gintuan-homepage.jpg",
    liveUrl: "https://gintuanatbp.com",
    technologies: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "Dynamic portfolio website built with Next.js, showcasing skills and projects with responsive design and modern UI/UX.",
    image: "/project2.jpg",
    liveUrl: "https://lewis-perez-portfolio.vercel.app",
    githubUrl: "https://github.com/lewisperez999/lewis.perez.portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "3",
    title: "Enterprise API Orchestration",
    description: "Built modular Java orchestration engine at ING integrating multi-API workflows, improving customer onboarding throughput by 30%.",
    image: "/project3.jpg",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Jenkins"],
    featured: true,
  },
  {
    id: "4",
    title: "ElasticSearch Migration Tool",
    description: "Developed multithreaded Java migration utility at IBM for 16M+ documents, enhancing search performance by 40% with custom validation and logging.",
    image: "/project4.jpg",
    technologies: ["Java", "ElasticSearch", "Multithreading", "Performance Optimization"],
    featured: true,
  }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight hover:text-blue-600 transition-colors duration-300">Projects</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div key={project.id} className="group p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur hover:border-blue-500/50 hover:shadow-lg hover:scale-105 transition-all duration-500 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-foreground/70 mb-4 group-hover:text-foreground/90 transition-colors duration-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 text-xs font-medium hover:bg-blue-600/20 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    className="text-xs font-medium px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    className="text-xs font-medium px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105 hover:border-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
