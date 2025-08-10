import Link from "next/link";

export function Hero() {
  return (
  <section id="home" className="relative overflow-hidden pt-[91px] pb-[91px] lg:pt-[123px] lg:pb-[123px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-fuchsia-500/10 to-amber-400/10 pointer-events-none" />
  <div className="mx-auto max-w-6xl px-4 py-24 lg:py-32 relative border border-black dark:border-white/25 rounded-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">Senior Software Engineer</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
          Lewis Perez – <span className="text-blue-600">Software Engineer</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-foreground/80">
          Senior Software Engineer with 8+ years of experience in backend and full-stack development across healthcare, banking, and telecom domains. Skilled in Java, Python, PostgreSQL, and AWS, with proven success delivering secure, scalable microservices, RESTful APIs, and cloud-native solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="#projects" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-8 py-3 text-sm font-medium shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            View Projects
          </Link>
          <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-blue-600 text-blue-600 px-8 py-3 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            Get in Touch
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-foreground/60 uppercase tracking-wider">
          <div><span className="font-semibold text-foreground">8+</span> Years Exp</div>
          <div><span className="font-semibold text-foreground">Enterprise</span> APIs</div>
          <div><span className="font-semibold text-foreground">Performance</span> Focus</div>
          <div><span className="font-semibold text-foreground">Security</span> Driven</div>
        </div>
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-600/20 to-fuchsia-500/20 blur-3xl" aria-hidden />
      </div>
    </section>
  );
}
