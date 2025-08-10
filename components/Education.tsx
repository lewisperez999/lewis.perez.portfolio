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
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Education</h2>
        <ul className="space-y-8">
          {education.map(e => (
            <li key={e.qualification} className="p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur">
              <h3 className="font-semibold text-lg mb-2">{e.qualification}</h3>
              <p className="text-sm text-foreground/70">{e.institution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
