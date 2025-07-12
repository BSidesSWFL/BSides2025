import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import dotenv from 'dotenv';
import Link from 'next/link';
import PageHero from '../components/page-hero';

export default function Villages() {

  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Bring a Village to Life at BSides SWFL"
        subtitle="Villages are all-day interactive spaces where attendees can get hands-on, ask questions, and explore niche areas of security. Whether it's lockpicking, social engineering, or career building, villages turn curiosity into connection through real-world experience."
      />

      <div className="max-w-5xl mx-auto px-6 py-16 text-slate-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Call for Villages Now Open</h2>
        <p className="text-lg text-slate-700 mb-4">
          Have an idea for a hands-on, interactive space that brings people together around a shared area of interest in cybersecurity? BSides SWFL is accepting village proposals for Saturday, November 15th.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          Villages are open all day and give attendees the chance to explore, experiment, and engage — whether it’s lockpicking, social engineering, hardware hacking, career coaching, or something brand new.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          We’re looking for creative and inclusive experiences. Tell us your vision, how attendees will interact, and what you’ll need to make it happen.
        </p>
      </div>

      <div className="text-center -mt-10 pb-40 md:pb-45">
        <a href='https://sessionize.com/bsidesswfl2025/'>
          <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-[90%] md:w-auto"> Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
          </button>
        </a>
      </div>
    </main>
  )
}
