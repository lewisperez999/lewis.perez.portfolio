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
    <section id="education" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Education</h2>
        <ul className="space-y-8">
          {education.map((e, index) => (
            <li key={e.qualification} className="group p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur hover:border-blue-500/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">{e.qualification}</h3>
              <p className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-300">{e.institution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
