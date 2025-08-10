import Link from "next/link";

// SVG Icons Components
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const GmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.941 2.412C7.74 2.412 7.538 2.495 7.386 2.647L0.294 9.739C0.106 9.927 0 10.189 0 10.462V21.176C0 21.634 0.366 22 0.824 22H6V10.462L12 14.647L18 10.462V22H23.176C23.634 22 24 21.634 24 21.176V10.462C24 10.189 23.894 9.927 23.706 9.739L16.614 2.647C16.462 2.495 16.26 2.412 16.059 2.412C15.858 2.412 15.656 2.495 15.504 2.647L12 6.151L8.496 2.647C8.344 2.495 8.142 2.412 7.941 2.412ZM7.941 0C8.672 0 9.403 0.283 9.968 0.849L12 2.881L14.032 0.849C14.597 0.283 15.328 0 16.059 0C16.79 0 17.521 0.283 18.086 0.849L23.151 5.914C23.717 6.479 24 7.21 24 7.941V21.176C24 22.724 22.724 24 21.176 24H18V12.538L12 16.723L6 12.538V24H2.824C1.276 24 0 22.724 0 21.176V7.941C0 7.21 0.283 6.479 0.849 5.914L5.914 0.849C6.479 0.283 7.21 0 7.941 0Z"/>
  </svg>
);

export function Footer() {
  return (
    // Footer locked to black theme regardless of global light/dark state
    <footer className="mt-20 bg-black text-neutral-300 py-12 border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <p className="text-neutral-500">© {new Date().getFullYear()} Lewis Perez. All rights reserved.</p>
        <ul className="flex gap-6">
          <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
          <li><Link href="#experience" className="hover:text-white transition-colors">Experience</Link></li>
          <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>
        <ul className="flex gap-4 text-neutral-500">
          <li>
            <a 
              aria-label="LinkedIn" 
              href="https://linkedin.com/in/lewis-perez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors inline-block"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a 
              aria-label="GitHub" 
              href="https://github.com/lewisperez999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors inline-block"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a 
              aria-label="Gmail" 
              href="mailto:lewisperez12152017@gmail.com" 
              className="hover:text-white transition-colors inline-block"
            >
              <GmailIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
