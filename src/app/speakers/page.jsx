"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";
import SpeakersSection from "../components/speakers-section";
import Script from "next/script";

export default function SpeakersPage() {
  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Our Speakers"
        subtitle="Get ready to learn from a diverse lineup of experts, innovators, and passionate professionals sharing their knowledge across cybersecurity disciplines. Whether it's offensive, defensive, or everything in between, these speakers bring real-world experience and fresh perspectives to the BSides SWFL stage."
      />

      <SpeakersSection />


      {/* Embedded Speakers */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div 
          dangerouslySetInnerHTML={{
            __html: `
              <div class="sessionize-loader" data-sessionize-load-url="https://sessionize.com/api/v2/8yksjn7s/view/Speakers?under=True">
                <div class="sz-spinner"></div>
              </div>
              <script type="text/javascript" src="https://sessionize.com/api/v2/8yksjn7s/view/Speakers"></script>
            `
          }}
        />
      </div>
    </main>
  )
}