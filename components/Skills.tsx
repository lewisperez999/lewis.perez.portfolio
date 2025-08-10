type SkillGroup = { title: string; items: string[] };

const skillGroups: SkillGroup[] = [
  { title: "Languages & Frameworks", items: ["Java 8+", "Spring Boot", "Python", "React", "Hibernate", "Liquid", "HTML", "CSS"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Oracle DB"] },
  { title: "APIs & Security", items: ["RESTful APIs", "OAuth2", "JWT", "Tokenisation", "Secure Data Handling"] },
  { title: "Cloud & DevOps", items: ["AWS Lambda", "API Gateway", "S3", "IAM", "Docker", "Kubernetes", "Git", "Jenkins", "CI/CD"] },
  { title: "Architectures", items: ["Microservices", "MVC", "Serverless", "Cloud-native Solutions"] },
  { title: "Practices", items: ["Agile (Scrum)", "TDD", "JUnit", "Integration Testing", "Code Reviews", "Clean Architecture"] },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Skills</h2>
  <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div key={group.title} className="group p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur hover:border-blue-500/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <h3 className="font-semibold mb-4 tracking-wide text-sm uppercase text-blue-600 group-hover:text-blue-500 transition-colors duration-300">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <li key={item} className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 text-xs font-medium hover:bg-blue-600/20 hover:scale-105 transition-all duration-200 cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
