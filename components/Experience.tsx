type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  achievements: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Freelance Full Stack Developer",
    company: "Melbourne, VIC",
    period: "Mar 2025 - Present",
    achievements: [
      "Delivered a Shopify e-commerce site, implementing payment/shipping logic, theme customisation, and responsive UI using Liquid, HTML, CSS. (gintuanatbp.com)",
      "Integrated secure third-party APIs and configured back-end workflows.",
      "Engaged directly with the client to gather requirements and deliver training documentation.",
      "Provide on-going IT support.",
    ],
  },
  {
    role: "Food Service Assistant",
    company: "Regis Aged Care Pty Ltd.",
    period: "Mar 2023 – Present",
    achievements: [
      "Applied compliance-driven processes in aged care operations, mirroring secure engineering discipline.",
      "Demonstrated precision, collaboration, and adaptability in high-stakes environments.",
    ],
  },
  {
    role: "Java Engineer",
    company: "ING Business Shared Services, Philippines",
    period: "Nov 2021 – Oct 2022",
    achievements: [
      "Engineered and optimised Spring Boot APIs, improving customer onboarding throughput by 30%.",
      "Designed secure, reusable API layers implementing validation, exception handling, and encryption.",
      "Collaborated in Agile sprints, led backlog grooming, and mentored junior engineers.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Amdocs Philippines Inc.",
    period: "Jan 2019 – Oct 2021",
    achievements: [
      "Delivered Java-based backend services for high-volume telecom platforms.",
      "Designed relational data models, optimised large-scale MySQL transactions, and built integration APIs.",
      "Reduced release cycles via Jenkins-based CI/CD pipelines and automated deployment scripts.",
    ],
  },
  {
    role: "Advanced Programming Specialist",
    company: "IBM Solutions Delivery Inc.",
    period: "Mar 2014 – Dec 2018",
    achievements: [
      "Developed Java ingestion and transformation tools supporting enterprise platforms.",
      "Built multithreaded migration utility for 16M+ records to ElasticSearch, improving search performance by 40%.",
      "Provided production support and collaborated with global teams to deliver compliant upgrades.",
    ],
  },
];

export default function Experience() {
  return (
  <section id="experience" className="scroll-mt-24 py-[75px] lg:py-[107px] relative">
    {/* Section Border Lines */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-accent to-transparent"></div>
    
    <div className="mx-auto max-w-6xl px-4 hud-border rounded-none py-12 corner-brackets animate-hud-pulse">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="hud-heading text-3xl sm:text-4xl">Professional Experience</h2>
          <div className="flex items-center gap-2 text-green-accent text-sm font-mono">
            <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></span>
            <span>CAREER ACTIVE</span>
          </div>
        </div>
        
        {/* HUD Header Info */}
        <div className="mb-8 p-4 hud-panel">
          <div className="flex justify-between items-center text-sm font-mono">
            <span className="blue-accent">EMPLOYMENT STATUS: ACTIVE</span>
            <span className="orange-accent">POSITIONS HELD: {experience.length}</span>
            <span className="green-accent">PERFORMANCE: EXCELLENT</span>
          </div>
        </div>      <div className="space-y-8">
        {experience.map((job: ExperienceItem, idx: number) => (
          <div key={job.role + job.company} className="group relative hud-panel p-6 transition-all duration-500 animate-fade-in-up hover:scale-105" style={{animationDelay: `${idx * 150}ms`}}>
            {/* Mission ID Corner */}
            <div className="absolute top-2 right-2 text-xs font-mono orange-accent">
              ROLE_{(idx + 1).toString().padStart(3, '0')}
            </div>
            
            {/* Status Indicator */}
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-mono green-accent">VERIFIED</span>
            </div>
            
            {/* Timeline number and line */}
            <div className="flex gap-6 mt-6">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-accent text-black text-sm font-bold font-mono group-hover:bg-blue-secondary group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {idx + 1}
                </div>
                {idx < experience.length - 1 && (
                  <div className="w-px h-16 bg-blue-accent/30 mt-2 group-hover:bg-blue-accent transition-colors duration-500"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-lg orange-accent group-hover:text-orange-secondary transition-colors duration-300 font-mono uppercase tracking-wider">
                  {job.role}
                </h3>
                <p className="text-blue-accent font-mono text-sm mb-1">{job.company}</p>
                <p className="text-xs uppercase tracking-wide text-gray-400 mt-1 mb-3 group-hover:text-blue-accent/80 transition-colors duration-300 font-mono">{job.period}</p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300 group-hover:text-foreground transition-colors duration-300">
                  {job.achievements.map((achievement: string, i: number) => (
                    <li key={i} className="hover:text-blue-accent transition-colors duration-200">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Data Stream Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-accent to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer Status */}
      <div className="mt-12 p-4 hud-panel">
        <div className="flex justify-center items-center gap-4 text-xs font-mono">
          <span className="blue-accent">◦ PROFESSIONAL NETWORK ACTIVE ◦</span>
          <span className="orange-accent">◦ COLLABORATION READY ◦</span>
          <span className="green-accent">◦ SEEKING NEW OPPORTUNITIES ◦</span>
        </div>
      </div>
    </div>
  </section>
  );
}
