"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured: boolean;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section id="projects" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 hover:text-blue-600 transition-colors duration-300">Projects</h2>
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
  <section id="projects" className="scroll-mt-24 py-[75px] lg:py-[107px] border-t border-black dark:border-white/10">
  <div className="mx-auto max-w-6xl px-4 border border-black dark:border-white/25 rounded-3xl py-12 hover:border-blue-500/50 transition-all duration-700 hover:shadow-xl">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight hover:text-blue-600 transition-colors duration-300">Projects</h2>
          <Link href="#contact" className="hidden sm:inline-flex text-sm text-blue-600 hover:underline hover:text-blue-500 transition-all duration-300 hover:translate-x-1">
            Work with me →
          </Link>
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden lg:grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((p, index) => (
            <div key={p.title} className="group relative flex flex-col rounded-2xl border border-black dark:border-white/15 bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 overflow-hidden backdrop-blur hover:border-blue-500/50 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-blue-600/10 to-fuchsia-500/10 group-hover:from-blue-600/20 group-hover:to-fuchsia-500/20 transition-all duration-500">
                {p.image && (
                  <Image 
                    src={p.image} 
                    alt={`${p.title} preview`} 
                    fill 
                    className={`object-cover group-hover:scale-110 transition-all duration-500 ${p.image.endsWith('.svg') ? 'opacity-70 group-hover:opacity-100 object-center p-16' : 'group-hover:opacity-90'}`}
                  />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">{p.title}</h3>
                <p className="text-sm text-foreground/70 flex-1 group-hover:text-foreground/90 transition-colors duration-300">{p.description}</p>
                <div className="mt-4 flex gap-3">
                  {p.liveUrl && (
                    <Link href={p.liveUrl} className="text-xs font-medium px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-md">
                      Live Demo
                    </Link>
                  )}
                  {p.githubUrl && (
                    <Link href={p.githubUrl} className="text-xs font-medium px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105 hover:border-blue-400">
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((p, index) => (
                <div key={p.title} className="w-full flex-shrink-0 px-2">
                  <div className="group relative flex flex-col rounded-2xl border border-black dark:border-white/15 bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 overflow-hidden backdrop-blur hover:border-blue-500/50 hover:shadow-xl hover:scale-105 transition-all duration-500">
                    <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-blue-600/10 to-fuchsia-500/10 group-hover:from-blue-600/20 group-hover:to-fuchsia-500/20 transition-all duration-500">
                      {p.image && (
                        <Image 
                          src={p.image} 
                          alt={`${p.title} preview`} 
                          fill 
                          className={`object-cover group-hover:scale-110 transition-all duration-500 ${p.image.endsWith('.svg') ? 'opacity-70 group-hover:opacity-100 object-center p-16' : 'group-hover:opacity-90'}`}
                        />
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">{p.title}</h3>
                      <p className="text-sm text-foreground/70 flex-1 group-hover:text-foreground/90 transition-colors duration-300">{p.description}</p>
                      <div className="mt-4 flex gap-3">
                        {p.liveUrl && (
                          <Link href={p.liveUrl} className="text-xs font-medium px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-md">
                            Live Demo
                          </Link>
                        )}
                        {p.githubUrl && (
                          <Link href={p.githubUrl} className="text-xs font-medium px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105 hover:border-blue-400">
                            GitHub
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Previous Button */}
            <button
              onClick={prevProject}
              className="group p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none hover:scale-110 ${
                    index === currentIndex 
                      ? 'bg-blue-600 shadow-lg' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextProject}
              className="group p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Next project"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
