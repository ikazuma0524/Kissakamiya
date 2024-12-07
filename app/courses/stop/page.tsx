"use client";

import { FloatingNav } from "@/components/floating-nav";
import { HeroSection } from "@/components/stop-course/hero-section";
import { EducationGapSection } from "@/components/stop-course/education-gap-section";
import { ResultsSection } from "@/components/stop-course/results-section";
import { HirosakiSuccessSection } from "@/components/stop-course/hirosaki-success-section";
import { CourseStructureSection } from "@/components/stop-course/course-structure-section";
import { FaqSection } from "@/components/stop-course/faq-section";
import { ContactSection } from "@/components/stop-course/contact-section";

export default function StopCoursePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <FloatingNav />
      <HeroSection />
      <EducationGapSection />
      
         
          <ResultsSection />
          <HirosakiSuccessSection />
          <CourseStructureSection />
          <FaqSection />
        git
       
    </main>
  );
}