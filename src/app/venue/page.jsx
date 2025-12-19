"use client";

import PageHero from "../components/page-hero";

export default function Venue() {
  return (
    <>
      <main className="min-h-screen wrapper-pages">
        <PageHero
          title="Step Into the Storm — Our Venue at BSides SWFL 2025"
          subtitle="Picture Building U at Florida SouthWestern State College: a brick and glass two-story building, a pavilion framed by palms, reflecting the courtyard. Sunlit atriums host BSides SWFL collaboration, while tech-ready rooms invite workshops, and villages."
        />

        <div className="max-w-5xl mx-auto wrapper-pages p-4 md:mb-12 pt-4 -mt-12">
          <div className="space-y-12 mt-12 mb-36 text-slate-800">
            <section className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-[url('/parking.jpg')] bg-cover bg-center" aria-hidden="true" />
              <div
                className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/90 via-[30%] to-white"
                aria-hidden="true"
              />
              <div className="relative p-8">
                <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                  Parking at Florida SouthWestern State College
                </h2>
                <p className="mb-4 font font-semibold text-slate-900">
                  Convenient parking is available adjacent to Building U in lots 10, 11, and 12. Follow campus signage once you
                  arrive to reach the event entrance quickly.
                </p>
                <a
                  href="https://static.fsw.edu/cms/LeeCampusMap.PNG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-700 hover:text-cyan-800 font-medium underline decoration-2 decoration-cyan-500/60"
                >
                  View Campus Map
                </a>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-[url('/hotels.jpg')] bg-cover bg-center" aria-hidden="true" />
              <div
                className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/90 via-[40%] to-white"
                aria-hidden="true"
              />
              <div className="relative p-8">
                <h2 className="text-2xl font-semibold mb-6 text-slate-900">Local Hotels</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>
                    <span className="font-medium text-black">Hilton Garden Inn</span>, 12600 University Drive, Fort Myers,
                    FL 33907 (0.7 mi)
                  </li>
                  <li>
                    <span className="font-medium text-black">DoubleTree by Hilton</span>, 13051 Bell Tower Drive, Fort Myers,
                    FL 33907 (1.8 mi)
                  </li>
                  <li>
                    <span className="font-medium text-black">Homewood Suites by Hilton</span>, 5255 Big Pine Way, Fort Myers, FL
                    33907 (1.8 mi)
                  </li>
                  <li>
                    <span className="font-medium text-black">Fairfield by Marriott</span>, 7090 Cypress Terrace, Fort Myers, FL
                    33907 (1.6 mi)
                  </li>
                </ul>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-[url('/amenities.jpg')] bg-cover bg-center" aria-hidden="true" />
              <div
                className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/90 via-[40%] to-white"
                aria-hidden="true"
              />
              <div className="relative p-8">
                <h2 className="text-2xl font-semibold mb-6 text-black">Local Amenities</h2>
                <div className="space-y-6 text-slate-700">
                  <div>
                    <p className="font-medium text-black">University Crossing</p>
                    <p>13401 Summerlin Rd, Fort Myers, FL 33919 (0.6 mi)</p>
                    <p className="mt-1 text-sm text-slate-900">Includes: Publix Super Market, Subway, Pizza Hut</p>
                  </div>
                  <div>
                    <p className="font-medium text-black">Bell Tower</p>
                    <p>13499 S Cleveland Ave, Fort Myers, FL 33907 (1.6 mi)</p>
                    <p className="mt-1 text-sm text-slate-900">
                      Includes: Burntwood Tavern, McGregor&apos;s Public House, Dave &amp; Buster&apos;s, The Fresh Market,
                      plus more
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
