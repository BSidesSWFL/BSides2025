"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";

export default function SchedulePage() {
  return (
    <main className="min-h-screen wrapper-pages">

      {/* Hero Section */}
      <PageHero
        title="Theme: Hack the Hurricane, Defend the Coast"
        subtitle="This year’s theme—Hack the Hurricane, Defend the Coast—challenges us to stress-test our systems and build resilience in the face of chaos. From red team tactics to blue team defense, this is your call to act, adapt, and secure what matters most."
      />

      {/* Schedule Overview */}
      <div className="max-w-5xl mx-auto mt-12 px-6 py-16 md:py-12 lg:pb-48 text-slate-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Two Days of Community and Cybersecurity</h2>
        <p className="text-lg mb-8">
          BSides SWFL 2025 spans two full days of learning, sharing, and hands-on exploration.
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
      <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-4">
        <iframe
          src="https://sessionize.com/api/v2/8yksjn7s/view/GridSmart"
          width="100%"
          height="1000"
          frameBorder="0"
          title="BSides SWFL 2025 Schedule"
          style={{ border: 'none', minHeight: '1000px' }}
        />
      </div>
    </main>
  );
}