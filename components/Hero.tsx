"use client";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-accent/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Status Banner */}
        <div className="hud-panel inline-block px-4 py-2 mb-8 animate-fade-in">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
            <span className="text-green-accent font-mono">PILOT_ID: LP_001 | STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Role */}
        <div className="mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="orange-accent font-mono text-sm uppercase tracking-wider">
            SENIOR SOFTWARE ENGINEER
          </span>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in font-mono uppercase" style={{ animationDelay: "0.4s" }}>
          <span className="blue-accent">LEWIS</span>{" "}
          <span className="orange-accent">PEREZ</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Full Stack Developer | API Specialist
        </h2>

        {/* Profile Section */}
        <div className="hud-panel p-6 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="text-left">
            <div className="text-blue-accent font-mono text-sm mb-3">ENGINEER_PROFILE.LOG:</div>
            <p className="text-gray-300 leading-relaxed">
              Experienced Software Engineer with 8+ years of expertise in enterprise applications across healthcare, banking, and telecommunications sectors. 
              Specialized in Java enterprise development, cloud infrastructure, microservices architecture, and scalable API design. 
              Proven track record of delivering high-performance solutions and leading technical initiatives.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <button 
            onClick={() => scrollToSection("projects")}
            className="tech-button group"
          >
            <span className="mr-2">👁️</span>
            ACCESS PROJECT ARCHIVE
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="tech-button group"
          >
            <span className="mr-2">⚡</span>
            ESTABLISH COMM LINK
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <div className="hud-panel p-4 text-center">
            <div className="text-2xl font-bold orange-accent font-mono">8+</div>
            <div className="text-xs blue-accent font-mono uppercase">Years Experience</div>
          </div>
          <div className="hud-panel p-4 text-center">
            <div className="text-2xl font-bold orange-accent font-mono">100%</div>
            <div className="text-xs blue-accent font-mono uppercase">Success Rate</div>
          </div>
          <div className="hud-panel p-4 text-center">
            <div className="text-2xl font-bold green-accent font-mono">EXPERT</div>
            <div className="text-xs blue-accent font-mono uppercase">Skill Level</div>
          </div>
        </div>

        {/* Status Line */}
        <div className="text-center green-accent font-mono text-sm animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
          ◦ SYSTEM STATUS: OPERATIONAL ◦◦ READY FOR COLLABORATION ◦◦ AVAILABLE FOR HIRE ◦
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="h-6 w-6 text-gray-400">↓</div>
        </div>
      </div>
    </section>
  );
}
