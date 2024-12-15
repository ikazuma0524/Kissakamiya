"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { NewsSection } from "@/components/sections/news-section";
import  {ContactSection} from "@/components/sections/contact-section";
import { MapSection } from "@/components/sections/map-section";

import Calendersection from "@/components/sections/CalenderSection";
export default function Home() {
  return (
    <main className="min-h-screen relative">
    
      <HeroSection />
      <Calendersection />
      <NewsSection />
      <ContactSection />
      <MapSection />
    </main>
  );
}