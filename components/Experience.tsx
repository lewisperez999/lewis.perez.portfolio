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
  <section id="experience" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
  <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Experience</h2>
  <div className="space-y-8">
          {experience.map((job: ExperienceItem, idx: number) => (
            <div key={job.role + job.company} className="group flex gap-6 animate-fade-in-up hover:translate-x-2 transition-all duration-300" style={{animationDelay: `${idx * 150}ms`}}>
              {/* Timeline number and line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {idx + 1}
                </div>
                {idx < experience.length - 1 && (
                  <div className="w-px h-16 bg-black dark:bg-white/10 mt-2 group-hover:bg-blue-500/50 transition-colors duration-500"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
                  {job.role} · <span className="text-blue-600 group-hover:text-blue-500">{job.company}</span>
                </h3>
                <p className="text-xs uppercase tracking-wide text-foreground/60 mt-1 mb-3 group-hover:text-blue-600/80 transition-colors duration-300">{job.period}</p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {job.achievements.map((achievement: string, i: number) => (
                    <li key={i} className="hover:text-blue-600 transition-colors duration-200">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
