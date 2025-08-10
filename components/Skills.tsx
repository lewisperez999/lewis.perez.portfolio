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
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Skills</h2>
  <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3">
          {skillGroups.map(group => (
            <div key={group.title} className="p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur">
              <h3 className="font-semibold mb-4 tracking-wide text-sm uppercase text-blue-600">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <li key={item} className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 text-xs font-medium">
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
