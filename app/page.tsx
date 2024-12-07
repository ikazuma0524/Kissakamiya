"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { NewsSection } from "@/components/sections/news-section";
import { FacultySection } from "@/components/sections/faculty-section";
import { CoursesSection } from "@/components/sections/courses-section";
import { ResultsSection } from "@/components/sections/results-section";
import  {ContactSection} from "@/components/sections/contact-section";
import { MapSection } from "@/components/sections/map-section";
import { FloatingNav } from "@/components/floating-nav";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingNav />
      <HeroSection />
      <NewsSection />
      <FacultySection />
      <CoursesSection />
      <ResultsSection />
      <ContactSection />
      <MapSection />
    </main>
  );
}