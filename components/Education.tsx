type EducationItem = {
  qualification: string;
  institution: string;
  location?: string;
};

const education: EducationItem[] = [
  {
    qualification: "Advanced Diploma of Information Technology (Telecommunications Network Engineering)",
    institution: "Brighton College, Melbourne",
  },
  {
    qualification: "Diploma in Information Technology (Cyber Security)",
    institution: "Brighton College, Melbourne",
  },
  {
    qualification: "Bachelor of Science in Electronics Engineering",
    institution: "De La Salle University, Manila, Philippines",
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-[75px] lg:py-[107px] relative">
      {/* Section Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-accent to-transparent"></div>
      
      <div className="mx-auto max-w-6xl px-4 hud-border rounded-none py-12 corner-brackets animate-hud-pulse">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="hud-heading text-3xl sm:text-4xl">Educational Background</h2>
          <div className="flex items-center gap-2 text-green-accent text-sm font-mono">
            <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></span>
            <span>QUALIFICATIONS VERIFIED</span>
          </div>
        </div>
        
        {/* HUD Header Info */}
        <div className="mb-8 p-4 hud-panel">
          <div className="flex justify-between items-center text-sm font-mono">
            <span className="blue-accent">EDUCATION STATUS: COMPLETE</span>
            <span className="orange-accent">QUALIFICATIONS: {education.length}</span>
            <span className="green-accent">VALIDATION: CONFIRMED</span>
          </div>
        </div>
        
        <ul className="space-y-6">
          {education.map((e, index) => (
            <li 
              key={e.qualification} 
              className="group relative hud-panel p-6 transition-all duration-500 animate-fade-in-up hover:scale-105" 
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Education ID Corner */}
              <div className="absolute top-2 right-2 text-xs font-mono orange-accent">
                EDU_{(index + 1).toString().padStart(3, '0')}
              </div>
              
              {/* Status Indicator */}
              <div className="absolute top-2 left-2 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
                <span className="text-xs font-mono green-accent">CERTIFIED</span>
              </div>
              
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2 orange-accent group-hover:text-orange-secondary transition-colors duration-300 font-mono uppercase tracking-wider">
                  {e.qualification}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-foreground transition-colors duration-300">
                  {e.institution}
                </p>
              </div>
              
              {/* Data Stream Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent opacity-30 animate-pulse"></div>
              </div>
            </li>
          ))}
        </ul>
        
        {/* Footer Status */}
        <div className="mt-12 p-4 hud-panel">
          <div className="flex justify-center items-center gap-4 text-xs font-mono">
            <span className="blue-accent">◦ CONTINUOUS LEARNING ACTIVE ◦</span>
            <span className="orange-accent">◦ KNOWLEDGE BASE: CURRENT ◦</span>
            <span className="green-accent">◦ SKILLS: CONSTANTLY EVOLVING ◦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
