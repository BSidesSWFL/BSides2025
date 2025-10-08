"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";
import SpeakersSection from "../components/speakers-section";
import { useEffect, useState } from "react";

export default function SpeakersPage() {
  const [sessionizeContent, setSessionizeContent] = useState('');

  useEffect(() => {
    // Fetch the Sessionize content directly
    fetch('https://sessionize.com/api/v2/8yksjn7s/view/Speakers?under=True')
      .then(response => response.text())
      .then(html => {
        setSessionizeContent(html);
      })
      .catch(error => {
        console.error('Error loading Sessionize content:', error);
      });
  }, []);

  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Our Speakers"
        subtitle="Get ready to learn from a diverse lineup of experts, innovators, and passionate professionals sharing their knowledge across cybersecurity disciplines. Whether it's offensive, defensive, or everything in between, these speakers bring real-world experience and fresh perspectives to the BSides SWFL stage."
      />

      <SpeakersSection />


      {/* Embedded Speakers */}
      <div className="max-w-6xl mx-auto px-6 pb-44 lg:pb-40">
        {sessionizeContent && (
          <>
            <style jsx>{`
              .sessionize-container {
                contain: layout style;
                isolation: isolate;
              }
              .sessionize-container * {
                max-width: 100% !important;
                box-sizing: border-box !important;
              }
            `}</style>
            <div 
              dangerouslySetInnerHTML={{ __html: sessionizeContent }}
              style={{ 
                minHeight: '600px',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                contain: 'layout style',
                isolation: 'isolate'
              }}
              className="sessionize-container"
            />
          </>
        )}
        {!sessionizeContent && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading speakers...</p>
          </div>
        )}
      </div>
    </main>
  )
}