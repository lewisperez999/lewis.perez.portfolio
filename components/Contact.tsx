"use client";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
  window.location.href = `mailto:lewisperez12152017@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      String(name)
    )}&body=${encodeURIComponent(String(message))}%0A%0AReply to: ${encodeURIComponent(
      String(email)
    )}`;
    setStatus("Opening email client...");
    form.reset();
  }
  return (
  <section id="contact" className="scroll-mt-24 py-[75px] lg:py-[107px] relative">
    {/* Section Border Lines */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent"></div>
    
    <div className="mx-auto max-w-6xl px-4 hud-border rounded-none py-12 corner-brackets animate-hud-pulse">
      <div className="flex items-end justify-between gap-6 mb-12">
        <h2 className="hud-heading text-3xl sm:text-4xl">Get In Touch</h2>
        <div className="flex items-center gap-2 text-green-accent text-sm font-mono">
          <span className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></span>
          <span>AVAILABLE FOR CONTACT</span>
        </div>
      </div>
      
      {/* HUD Header Info */}
      <div className="mb-8 p-4 hud-panel">
        <div className="flex justify-between items-center text-sm font-mono">
          <span className="blue-accent">COMMUNICATION: SECURE</span>
          <span className="orange-accent">LOCATION: CAULFIELD EAST, VIC</span>
          <span className="green-accent">STATUS: READY TO CONNECT</span>
        </div>
      </div>
      
      <div className="grid gap-12 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2 animate-fade-in-up">
          <div className="group relative hud-panel p-4">
            <label htmlFor="name" className="block text-xs font-mono blue-accent mb-2 uppercase tracking-wider">NAME:</label>
            <input 
              id="name" 
              name="name" 
              required 
              className="w-full bg-transparent border-b-2 border-blue-accent/30 focus:border-blue-accent text-gray-300 px-2 py-2 text-sm font-mono focus:outline-none transition-all duration-300" 
              placeholder="Enter your name..."
            />
          </div>
          
          <div className="group relative hud-panel p-4">
            <label htmlFor="email" className="block text-xs font-mono blue-accent mb-2 uppercase tracking-wider">EMAIL:</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full bg-transparent border-b-2 border-blue-accent/30 focus:border-blue-accent text-gray-300 px-2 py-2 text-sm font-mono focus:outline-none transition-all duration-300" 
              placeholder="Enter your email..."
            />
          </div>
          
          <div className="group relative hud-panel p-4">
            <label htmlFor="message" className="block text-xs font-mono blue-accent mb-2 uppercase tracking-wider">MESSAGE:</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="w-full bg-transparent border-b-2 border-blue-accent/30 focus:border-blue-accent text-gray-300 px-2 py-2 text-sm font-mono resize-y focus:outline-none transition-all duration-300" 
              placeholder="Enter your message..."
            />
          </div>
          
          <button type="submit" className="tech-button">
            SEND MESSAGE
          </button>
          
          {status && (
            <div className="p-3 hud-panel">
              <p className="text-xs font-mono green-accent">{status}</p>
            </div>
          )}
        </form>
        
        <div className="space-y-6 lg:pl-8 animate-fade-in-up animation-delay-200">
          <div className="group relative hud-panel p-6">
            <div className="absolute top-2 right-2 text-xs font-mono orange-accent">
              INFO_001
            </div>
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-mono green-accent">ACTIVE</span>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-3 orange-accent font-mono uppercase tracking-wider">About Me</h3>
              <p className="text-gray-300 text-sm">
                Based in Caulfield East, VIC 3145. I&apos;m always open to discussing new opportunities and exciting projects.
              </p>
            </div>
          </div>
          
          <div className="group relative hud-panel p-6">
            <div className="absolute top-2 right-2 text-xs font-mono orange-accent">
              CONTACT_002
            </div>
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-mono green-accent">ONLINE</span>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-3 orange-accent font-mono uppercase tracking-wider">Direct Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="mailto:lewisperez12152017@gmail.com" className="text-blue-accent hover:text-blue-secondary transition-all duration-300 font-mono">
                    lewisperez12152017@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:0497072972" className="text-blue-accent hover:text-blue-secondary transition-all duration-300 font-mono">
                    0497 072 972
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="group relative hud-panel p-6">
            <div className="absolute top-2 right-2 text-xs font-mono orange-accent">
              SOCIAL_003
            </div>
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
              <span className="text-xs font-mono green-accent">LINKED</span>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-3 orange-accent font-mono uppercase tracking-wider">Professional Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://linkedin.com/in/lewis-perez" target="_blank" rel="noopener noreferrer" className="text-blue-accent hover:text-blue-secondary transition-all duration-300 font-mono">
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a href="https://github.com/lewisperez999" target="_blank" rel="noopener noreferrer" className="text-blue-accent hover:text-blue-secondary transition-all duration-300 font-mono">
                    GitHub Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Status */}
      <div className="mt-12 p-4 hud-panel">
        <div className="flex justify-center items-center gap-4 text-xs font-mono">
          <span className="blue-accent">◦ COMMUNICATION CHANNELS OPEN ◦</span>
          <span className="orange-accent">◦ RESPONSE TIME: 24 HOURS ◦</span>
          <span className="green-accent">◦ READY FOR COLLABORATION ◦</span>
        </div>
      </div>
    </div>
  </section>
  );
}
