const skillsData = {
  "Frontend": [
    { id: "1", name: "JavaScript", category: "Frontend", icon: "⚡", level: 9 },
    { id: "2", name: "TypeScript", category: "Frontend", icon: "📘", level: 8 },
    { id: "3", name: "React", category: "Frontend", icon: "⚛️", level: 9 },
    { id: "4", name: "Next.js", category: "Frontend", icon: "🔺", level: 8 },
    { id: "5", name: "HTML/CSS", category: "Frontend", icon: "🎨", level: 9 },
    { id: "6", name: "Tailwind CSS", category: "Frontend", icon: "💨", level: 8 }
  ],
  "Backend": [
    { id: "7", name: "Java 8+", category: "Backend", icon: "☕", level: 9 },
    { id: "8", name: "Spring Boot", category: "Backend", icon: "🍃", level: 8 },
    { id: "9", name: "Node.js", category: "Backend", icon: "🟢", level: 7 },
    { id: "10", name: "Python", category: "Backend", icon: "🐍", level: 8 },
    { id: "11", name: "REST APIs", category: "Backend", icon: "🔌", level: 9 },
    { id: "20", name: "Hibernate", category: "Backend", icon: "🔧", level: 7 },
    { id: "21", name: "Microservices", category: "Backend", icon: "🏗️", level: 8 }
  ],
  "Database": [
    { id: "12", name: "PostgreSQL", category: "Database", icon: "🐘", level: 9 },
    { id: "13", name: "MySQL", category: "Database", icon: "🐬", level: 8 },
    { id: "14", name: "Oracle DB", category: "Database", icon: "�️", level: 7 },
    { id: "15", name: "ElasticSearch", category: "Database", icon: "🔍", level: 7 }
  ],
  "Cloud & DevOps": [
    { id: "16", name: "AWS", category: "Cloud & DevOps", icon: "☁️", level: 8 },
    { id: "17", name: "Docker", category: "Cloud & DevOps", icon: "🐳", level: 7 },
    { id: "18", name: "Jenkins", category: "Cloud & DevOps", icon: "🏗️", level: 8 },
    { id: "19", name: "Git", category: "Cloud & DevOps", icon: "📚", level: 9 },
    { id: "22", name: "Kubernetes", category: "Cloud & DevOps", icon: "⚙️", level: 6 },
    { id: "23", name: "CI/CD", category: "Cloud & DevOps", icon: "🔄", level: 8 }
  ],
  "Security & Testing": [
    { id: "24", name: "OAuth2/JWT", category: "Security & Testing", icon: "🔐", level: 8 },
    { id: "25", name: "JUnit", category: "Security & Testing", icon: "🧪", level: 8 },
    { id: "26", name: "TDD", category: "Security & Testing", icon: "✅", level: 7 },
    { id: "27", name: "Cyber Security", category: "Security & Testing", icon: "🛡️", level: 7 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={category} className="group p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur hover:border-blue-500/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <h3 className="font-semibold mb-4 tracking-wide text-sm uppercase text-blue-600 group-hover:text-blue-500 transition-colors duration-300">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill.id} className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 text-xs font-medium hover:bg-blue-600/20 hover:scale-105 transition-all duration-200 cursor-default">
                    {skill.icon && (
                      <span className="mr-1">{skill.icon}</span>
                    )}
                    {skill.name}
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
