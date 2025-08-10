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
  <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">Contact</h2>
        <div className="grid gap-12 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border border-black dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-black dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-black dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button type="submit" className="inline-flex items-center rounded-full bg-blue-600 text-white px-8 py-3 text-sm font-medium shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              Send Message
            </button>
            {status && <p className="text-xs text-foreground/60">{status}</p>}
          </form>
          <div className="space-y-8 lg:pl-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
              <p className="text-sm text-foreground/80">
                Based in Caulfield East, VIC 3145. I'm always open to discussing new opportunities and exciting projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Direct Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="mailto:lewisperez12152017@gmail.com" className="text-blue-600 hover:underline">
                    lewisperez12152017@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:0497072972" className="text-blue-600 hover:underline">
                    0497 072 972
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Connect Online</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://linkedin.com/in/lewis-perez" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a></li>
                <li><a href="https://github.com/lewisperez999" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Projects</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
