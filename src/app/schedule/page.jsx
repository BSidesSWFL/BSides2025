"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";
import { useSessionize } from "../context/SessionizeProvider";

export default function SchedulePage() {
  const { schedule: sessionizeContent, loading } = useSessionize();

  return (
    <main className="min-h-screen wrapper-pages">

      {/* Hero Section */}
      <PageHero
        title="Theme: Hack the Hurricane, Defend the Coast"
        subtitle="This year’s theme—Hack the Hurricane, Defend the Coast—challenges us to stress-test our systems and build resilience in the face of chaos. From red team tactics to blue team defense, this is your call to act, adapt, and secure what matters most."
      />

      {/* Schedule Overview */}
      <div className="max-w-5xl mx-auto mt-12 px-6 py-16 md:py-12 text-slate-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Two Days of Community and Cybersecurity</h2>
        <p className="text-lg mb-8">
          BSides SWFL spans two full days of learning, sharing, and hands-on exploration.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Friday is Workshop Day</h3>
            <p>
              Dive deep with 3–4 hour training sessions led by experts and educators.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">Saturday is Conference Day</h3>
            <p>
              Hear from speakers, explore villages, connect with sponsors, and be part of a community-driven event built for all skill levels.
            </p>
          </div>

          <p className="mt-6 mb-10 text-base text-slate-700 font-medium">
            Come ready to learn, share, and build something stronger—together.
          </p>
        </div>
      </div>

      {/* Schedule Embed */}
      <div className="max-w-6xl mx-auto px-6 pb-60 lg:pb-72">
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
                minHeight: '800px',
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
        {(loading || !sessionizeContent) && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading schedule...</p>
          </div>
        )}
      </div>
    </main>
  );
}