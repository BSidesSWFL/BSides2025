"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";
import SpeakersSection from "../components/speakers-section";
import { useEffect } from "react";

export default function SpeakersPage() {
  useEffect(() => {
    // Create the Sessionize embed structure
    const container = document.getElementById('sessionize-speakers-container');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create the loader div with the proper structure
    const loaderDiv = document.createElement('div');
    loaderDiv.className = 'sessionize-loader';
    loaderDiv.setAttribute('data-sessionize-load-url', 'https://sessionize.com/api/v2/8yksjn7s/view/Speakers?under=True');
    
    // Create the spinner
    const spinner = document.createElement('div');
    spinner.className = 'sz-spinner';
    loaderDiv.appendChild(spinner);
    
    // Append to container
    container.appendChild(loaderDiv);

    // Now load the Sessionize script
    const script = document.createElement('script');
    script.src = 'https://sessionize.com/api/v2/8yksjn7s/view/Speakers';
    script.type = 'text/javascript';
    script.async = true;
    
    // Add script to document head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
      const existingScript = document.querySelector('script[src*="sessionize.com/api/v2/8yksjn7s/view/Speakers"]');
      if (existingScript) {
        existingScript.remove();
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