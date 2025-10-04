"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";
import SpeakersSection from "../components/speakers-section";
import { useEffect } from "react";

export default function SpeakersPage() {
  useEffect(() => {
    // Load Sessionize script after component mounts
    const loadSessionizeScript = () => {
      // Remove any existing script
      const existingScript = document.querySelector('script[src*="sessionize.com/api/v2/8yksjn7s/view/Speakers"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script element
      const script = document.createElement('script');
      script.src = 'https://sessionize.com/api/v2/8yksjn7s/view/Speakers';
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      
      // Add to document head
      document.head.appendChild(script);
      
      console.log('Sessionize Speakers script added to head');
    };

    // Load script after a short delay to ensure DOM is ready
    const timer = setTimeout(loadSessionizeScript, 100);
    
    return () => {
      clearTimeout(timer);
      const script = document.querySelector('script[src*="sessionize.com/api/v2/8yksjn7s/view/Speakers"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Our Speakers"
        subtitle="Get ready to learn from a diverse lineup of experts, innovators, and passionate professionals sharing their knowledge across cybersecurity disciplines. Whether it's offensive, defensive, or everything in between, these speakers bring real-world experience and fresh perspectives to the BSides SWFL stage."
      />

      <SpeakersSection />


      {/* Embedded Speakers */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Sessionize content will be injected here */}
      </div>
    </main>
  )
}