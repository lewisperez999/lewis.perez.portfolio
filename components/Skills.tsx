import { SkillsByCategory, Skill } from "../types/portfolio";

export default async function Skills() {
  let skillsByCategory: SkillsByCategory = {};
  
  try {
    // Fetch skills from API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/skills`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (response.ok) {
      skillsByCategory = await response.json();
    } else {
      throw new Error('Failed to fetch skills');
    }
  } catch (error) {
    console.error('Error fetching skills:', error);
    // Fallback to empty object if fetch fails
    skillsByCategory = {};
  }

  return (
    <section id="skills" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Technical Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsByCategory).map(([category, skills], index) => (
            <div key={category} className="group p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur hover:border-blue-500/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <h3 className="font-semibold mb-4 tracking-wide text-sm uppercase text-blue-600 group-hover:text-blue-500 transition-colors duration-300">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill: Skill) => (
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
