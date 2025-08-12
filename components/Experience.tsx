import { Experience as ExperienceType } from "../types/portfolio";

export default async function Experience() {
  let experiences: ExperienceType[] = [];
  
  try {
    // Fetch experience from API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/experience`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (response.ok) {
      experiences = await response.json();
    } else {
      throw new Error('Failed to fetch experience');
    }
  } catch (error) {
    console.error('Error fetching experience:', error);
    // Fallback to empty array if fetch fails
    experiences = [];
  }
  return (
  <section id="experience" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
  <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Experience</h2>
  <div className="space-y-8">
          {experiences.map((job: ExperienceType, idx: number) => (
            <div key={job.role + job.company} className="group flex gap-6 animate-fade-in-up hover:translate-x-2 transition-all duration-300" style={{animationDelay: `${idx * 150}ms`}}>
              {/* Timeline number and line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {idx + 1}
                </div>
                {idx < experiences.length - 1 && (
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
