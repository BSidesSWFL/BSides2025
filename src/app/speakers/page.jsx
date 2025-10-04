"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";
import SpeakersSection from "../components/speakers-section";
import { useEffect } from "react";

export default function SpeakersPage() {
  useEffect(() => {
    // Create a script element and append it to the container
    const container = document.getElementById('sessionize-speakers-container');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create and load the Sessionize script
    const script = document.createElement('script');
    script.src = 'https://sessionize.com/api/v2/8yksjn7s/view/Speakers';
    script.type = 'text/javascript';
    script.async = true;
    
    // Append to container so it executes in the right context
    container.appendChild(script);

    // Cleanup function
    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
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
        <div id="sessionize-speakers-container"></div>
      </div>
    </main>
  )
}