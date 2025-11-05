/**
 * Page: Home
 * Author: AR
 * Created: 2025-10-08
 * Modified: 2025-11-05 by AR - Integrate owner-based filtering for Phase 2
 * Description: Enhanced home page showcasing team achievements and major projects.
 *              Now supports filtering by owner for personal portfolios.
 */

'use client';

import { getFilteredProjects } from '../lib/utils/owner-filter';
import { ProjectCard } from '../components/shared/ProjectCard';
import { SafetyBanner } from '../components/shared/SafetyBanner';
import { AuthGuard } from '../components/shared/AuthGuard';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  // Phase 2: Use two-layer filtering (sensitivity + ownership)
  // Automatically shows all projects for team sites, filtered projects for personal sites
  const data = getFilteredProjects();

  // Calculate team achievements
  const totalProjects = data.length;
  const projectsWithMetrics = data.filter(p => p.metrics && p.metrics.length > 0);
  const totalAttachments = data.reduce((sum, p) => sum + (p.attachments?.length || 0), 0);

  // Featured projects (with hero images)
  const featuredProjects = data.filter(p => p.heroImage);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    if (featuredProjects.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [featuredProjects.length, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <AuthGuard>
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <SafetyBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              QA Innovation Hub
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-8 font-light">
              Transforming Quality Assurance Through Automation & Intelligence
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Our team has pioneered cutting-edge QA solutions over the past several years,
              delivering transformative automation frameworks, intelligent testing tools, and
              observability platforms that have revolutionized quality assurance across
              multiple platforms and brands.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              {totalProjects}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Major Projects</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border-2 border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Years Innovation</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border-2 border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              12+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Platforms Covered</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border-2 border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              {totalAttachments}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Resources Shared</div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      {featuredProjects.length > 0 && (
        <section className="container mx-auto px-6 py-16 bg-white/50 dark:bg-gray-800/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Featured Innovations
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Flagship projects showcasing our most impactful achievements in test automation,
              observability, and quality engineering
            </p>

            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Container */}
              <div className="relative h-[500px] overflow-hidden rounded-2xl">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <Link href={`/projects/${project.slug}`} className="block h-full group">
                      <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-500">
                        {/* Content */}
                        <div className="p-8 flex flex-col justify-center h-full">
                          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed line-clamp-4">
                            {project.summary}
                          </p>
                          <div className="mt-6 flex items-center gap-3 text-blue-600 dark:text-blue-400 font-semibold text-lg group-hover:gap-5 transition-all duration-300">
                            <span>Explore This Project</span>
                            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {featuredProjects.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 group z-10"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 group z-10"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Slide Indicators */}
              {featuredProjects.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? 'w-12 h-3 bg-blue-600 dark:bg-blue-400'
                          : 'w-3 h-3 bg-gray-400 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Pause Indicator */}
              {isPaused && featuredProjects.length > 1 && (
                <div className="absolute top-4 right-4 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg z-10">
                  Paused
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            All Projects & Achievements
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Browse our complete portfolio of QA innovations, automation frameworks, and transformative tools
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                aria-label={`Open ${p.title}`}
                className="group"
              >
                <div className="h-full">
                  <ProjectCard project={p} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Implementing These Solutions?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Want to learn more about any of our QA innovations or discuss implementation for your organization?
            Reach out to our team for detailed insights and collaboration opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
    </AuthGuard>
  );
}


