type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Food Service Assistant",
    company: "Regis Aged Care Pty Ltd.",
    period: "Mar 2023 – Present",
    points: [
      "Applied compliance-driven processes in aged care operations, mirroring secure engineering discipline.",
      "Demonstrated precision, collaboration, and adaptability in high-stakes environments.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Melbourne, VIC",
    period: "Mar 2025",
    points: [
      "Delivered a Shopify e-commerce site, implementing payment/shipping logic, theme customisation, and responsive UI using Liquid, HTML, CSS. (gintuanatbp.com)",
      "Integrated secure third-party APIs and configured back-end workflows.",
      "Engaged directly with the client to gather requirements and deliver training documentation.",
      "Provide on-going IT support.",
    ],
  },
  {
    role: "Java Engineer",
    company: "ING Business Shared Services, Philippines",
    period: "Nov 2021 – Oct 2022",
    points: [
      "Engineered and optimised Spring Boot APIs, improving customer onboarding throughput by 30%.",
      "Designed secure, reusable API layers implementing validation, exception handling, and encryption.",
      "Collaborated in Agile sprints, led backlog grooming, and mentored junior engineers.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Amdocs Philippines Inc.",
    period: "Jan 2019 – Oct 2021",
    points: [
      "Delivered Java-based backend services for high-volume telecom platforms.",
      "Designed relational data models, optimised large-scale MySQL transactions, and built integration APIs.",
      "Reduced release cycles via Jenkins-based CI/CD pipelines and automated deployment scripts.",
    ],
  },
  {
    role: "Advanced Programming Specialist",
    company: "IBM Solutions Delivery Inc.",
    period: "Mar 2014 – Dec 2018",
    points: [
      "Developed Java ingestion and transformation tools supporting enterprise platforms.",
      "Built multithreaded migration utility for 16M+ records to ElasticSearch, improving search performance by 40%.",
      "Provided production support and collaborated with global teams to deliver compliant upgrades.",
    ],
  },
];

export function Experience() {
  return (
  <section id="experience" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
  <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Experience</h2>
  <ol className="relative border-s border-black dark:border-white/10">
          {experience.map((job, idx) => (
            <li key={job.role + job.company} className="ms-6 pb-10 last:pb-0">
              <span className="absolute -start-3 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold">
                {idx + 1}
              </span>
              <h3 className="font-semibold text-lg">
                {job.role} · <span className="text-blue-600">{job.company}</span>
              </h3>
              <p className="text-xs uppercase tracking-wide text-foreground/60 mt-1 mb-3">{job.period}</p>
              <ul className="list-disc ms-5 space-y-1 text-sm text-foreground/80">
                {job.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
