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
    <section id="projects" className="scroll-mt-24 py-[75px] lg:py-[107px] relative">
      {/* Section Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent"></div>
      
      <div className="mx-auto max-w-6xl px-4 hud-border rounded-none py-12 corner-brackets animate-hud-pulse">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="hud-heading text-3xl sm:text-4xl">Projects Archive</h2>
          <div className="flex items-center gap-2 text-green-accent text-sm font-mono">
            <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></span>
            <span>SYSTEMS ONLINE</span>
          </div>
        </div>
        
        {/* HUD Header Info */}
        <div className="mb-8 p-4 hud-panel">
          <div className="flex justify-between items-center text-sm font-mono">
            <span className="blue-accent">DEPLOYMENT STATUS: ACTIVE</span>
            <span className="orange-accent">PROJECTS LOADED: {projectsData.length}</span>
            <span className="green-accent">SYSTEM: OPERATIONAL</span>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative hud-panel p-6 transition-all duration-500 animate-fade-in-up hover:scale-105" 
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Project ID Corner */}
              <div className="absolute top-2 right-2 text-xs font-mono orange-accent">
                PROJECT_{project.id.padStart(3, '0')}
              </div>
              
              {/* Status Indicator */}
              <div className="absolute top-2 left-2 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
                <span className="text-xs font-mono green-accent">ACTIVE</span>
              </div>
              
              {/* Project Content */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3 orange-accent group-hover:text-orange-secondary transition-colors duration-300 font-mono uppercase tracking-wider">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-xs font-mono blue-accent mb-2 uppercase tracking-wider">
                    TECH_STACK:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="tech-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEPLOY
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="tech-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SOURCE
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="tech-button opacity-50 cursor-not-allowed">
                      CLASSIFIED
                    </div>
                  )}
                </div>
              </div>
              
              {/* Data Stream Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-accent to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Status */}
        <div className="mt-12 p-4 hud-panel">
          <div className="flex justify-center items-center gap-4 text-xs font-mono">
            <span className="blue-accent">◦ NEURAL LINK ESTABLISHED ◦</span>
            <span className="orange-accent">◦ DATA INTEGRITY: 100% ◦</span>
            <span className="green-accent">◦ UPTIME: 99.99% ◦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
