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
    <section id="skills" className="scroll-mt-24 py-[75px] lg:py-[107px] relative">
      {/* Section Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-accent to-transparent"></div>
      
      <div className="mx-auto max-w-6xl px-4 hud-border rounded-none py-12 corner-brackets animate-hud-pulse">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="hud-heading text-3xl sm:text-4xl">Technical Skills</h2>
          <div className="flex items-center gap-2 text-green-accent text-sm font-mono">
            <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></span>
            <span>SKILLS VERIFIED</span>
          </div>
        </div>
        
        {/* HUD Header Info */}
        <div className="mb-8 p-4 hud-panel">
          <div className="flex justify-between items-center text-sm font-mono">
            <span className="blue-accent">SKILL MATRIX: LOADED</span>
            <span className="orange-accent">PROFICIENCY: EXPERT</span>
            <span className="green-accent">STATUS: READY</span>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div 
              key={category} 
              className="group relative hud-panel p-6 transition-all duration-300 animate-fade-in-up hover:scale-105" 
              style={{animationDelay: `${categoryIndex * 100}ms`}}
            >
              {/* Category Header */}
              <div className="mb-4">
                <div className="text-xs font-mono blue-accent mb-1 uppercase tracking-wider">
                  CATEGORY_{categoryIndex + 1}
                </div>
                <h3 className="font-bold text-sm uppercase orange-accent font-mono tracking-wider group-hover:text-orange-secondary transition-colors duration-300">
                  {category}
                </h3>
                <div className="w-full h-px bg-gradient-to-r from-orange-accent to-transparent mt-2"></div>
              </div>
              
              {/* Skills Grid */}
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill.id} className="tech-tag text-xs">
                    {skill.icon && (
                      <span className="mr-1">{skill.icon}</span>
                    )}
                    {skill.name}
                  </li>
                ))}
              </ul>
              
              {/* Status Indicator */}
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
                <span className="text-xs font-mono green-accent">ACTIVE</span>
              </div>
              
              {/* Data Stream Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent opacity-30 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Status */}
        <div className="mt-12 p-4 hud-panel">
          <div className="flex justify-center items-center gap-4 text-xs font-mono">
            <span className="blue-accent">◦ TECHNICAL STACK: OPTIMIZED ◦</span>
            <span className="orange-accent">◦ PERFORMANCE: MAXIMUM ◦</span>
            <span className="green-accent">◦ ALL SYSTEMS: OPERATIONAL ◦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
