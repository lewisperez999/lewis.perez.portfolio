"use client";
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  }, []);
  function toggle() {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      window.localStorage.setItem('theme', next);
      return next;
    });
  }
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Activate light theme' : 'Activate dark theme'}
  className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur text-sm transition-colors hover:bg-white dark:hover:bg-white/20 ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      <svg
        className={`h-5 w-5 text-amber-500 transition-opacity ${isDark ? 'opacity-0' : 'opacity-100'}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <svg
        className={`absolute h-5 w-5 text-blue-400 transition-opacity ${isDark ? 'opacity-100' : 'opacity-0'}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
      </svg>
    </button>
  );
}
