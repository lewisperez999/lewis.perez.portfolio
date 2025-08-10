type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "A proactive engineer who consistently elevates team standards and delivers ahead of schedule.",
    name: "Jane Smith",
    role: "Engineering Manager",
    company: "TechCorp",
  },
  {
    quote: "Transformed our legacy frontend into a modern, maintainable platform.",
    name: "Carlos R.",
    role: "CTO",
    company: "StartupX",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 flex items-center gap-3">
          <span>Testimonials</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-600 text-white">Optional</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map(t => (
            <figure key={t.name} className="relative p-6 rounded-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 border border-black dark:border-white/15 backdrop-blur">
              <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-wide text-foreground/60">
                {t.name} · {t.role} @ {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
