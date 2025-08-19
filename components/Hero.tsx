export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[91px] pb-[91px] lg:pt-[123px] lg:pb-[123px]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-accent opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-accent opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 py-24 lg:py-32 relative hud-border rounded-none corner-brackets animate-hud-pulse">
        {/* HUD Header */}
        <div className="absolute top-4 right-4 text-xs font-mono green-accent">
          PILOT_ID: LP_001 | STATUS: ACTIVE
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Rank/Title */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <div className="w-8 h-0.5 bg-orange-accent"></div>
            <p className="text-sm font-mono uppercase tracking-widest orange-accent">
              SENIOR MECHA ENGINEER
            </p>
            <div className="w-8 h-0.5 bg-orange-accent"></div>
          </div>
          
          {/* Pilot Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl animate-fade-in-up font-mono uppercase" style={{animationDelay: '200ms'}}>
            <span className="blue-accent">Lewis</span>{' '}
            <span className="orange-accent">Perez</span>
            <div className="text-xl mt-2 text-gray-300 normal-case font-normal">
              Neural Interface Engineer
            </div>
          </h1>
          
          {/* Description */}
          <div className="mt-8 hud-panel p-6 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <div className="text-xs font-mono blue-accent mb-2 uppercase tracking-wider">
              PILOT_PROFILE.LOG:
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              Senior Software Engineer with 8+ years combat experience across healthcare, banking, and telecom battlefields. 
              Specialized in Java weaponry, Python targeting systems, PostgreSQL data matrices, and AWS deployment platforms. 
              Proven success deploying secure, scalable microservices and RESTful API arsenal.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '600ms'}}>
            <a href="#projects" className="tech-button text-center">
              ACCESS MISSION ARCHIVE
            </a>
            <a href="#contact" className="tech-button text-center">
              ESTABLISH COMM LINK
            </a>
          </div>
          
          {/* Stats Display */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '800ms'}}>
            <div className="hud-panel p-4 text-center">
              <div className="text-lg font-mono orange-accent">8+</div>
              <div className="text-xs font-mono blue-accent uppercase">Combat Years</div>
            </div>
            <div className="hud-panel p-4 text-center">
              <div className="text-lg font-mono orange-accent">∞</div>
              <div className="text-xs font-mono blue-accent uppercase">APIs Deployed</div>
            </div>
            <div className="hud-panel p-4 text-center">
              <div className="text-lg font-mono orange-accent">MAX</div>
              <div className="text-xs font-mono blue-accent uppercase">Performance</div>
            </div>
            <div className="hud-panel p-4 text-center">
              <div className="text-lg font-mono orange-accent">ELITE</div>
              <div className="text-xs font-mono blue-accent uppercase">Security Lvl</div>
            </div>
          </div>
        </div>
        
        {/* System Status Footer */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="hud-panel p-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="green-accent">◦ NEURAL LINK: STABLE ◦</span>
              <span className="blue-accent">◦ SYSTEMS: ALL GREEN ◦</span>
              <span className="orange-accent">◦ READY FOR DEPLOYMENT ◦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
