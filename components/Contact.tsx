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
  <section id="contact" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
  <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Contact</h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2 animate-fade-in-up">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border border-black dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500/50 transition-all duration-300" />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-black dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500/50 transition-all duration-300" />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-black dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-500/50 transition-all duration-300" />
            </div>
            <button type="submit" className="inline-flex items-center rounded-full bg-blue-600 text-white px-8 py-3 text-sm font-medium shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Send Message
            </button>
            {status && <p className="text-xs text-foreground/60">{status}</p>}
          </form>
          <div className="space-y-8 lg:pl-8 animate-fade-in-up animation-delay-200">
            <div className="group">
              <h3 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300">Get in Touch</h3>
              <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                Based in Caulfield East, VIC 3145. I&apos;m always open to discussing new opportunities and exciting projects.
              </p>
            </div>
            <div className="group">
              <h3 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300">Direct Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="mailto:lewisperez12152017@gmail.com" className="text-blue-600 hover:underline hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">
                    lewisperez12152017@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:0497072972" className="text-blue-600 hover:underline hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">
                    0497 072 972
                  </a>
                </p>
              </div>
            </div>
            <div className="group">
              <h3 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300">Connect Online</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://linkedin.com/in/lewis-perez" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">LinkedIn Profile</a></li>
                <li><a href="https://github.com/lewisperez999" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block">GitHub Projects</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
