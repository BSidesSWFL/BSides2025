import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";
import FeaturedSpeakers from "../components/featured-speakers";

export default function SpeakersPage() {
  // Sample speakers data

  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Our Speakers"
        subtitle="Get ready to learn from a diverse lineup of experts, innovators, and passionate professionals sharing their knowledge across cybersecurity disciplines. Whether it's offensive, defensive, or everything in between, these speakers bring real-world experience and fresh perspectives to the BSides SWFL stage."
      />

      <FeaturedSpeakers />

      {/* Call For Action Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-slate-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Call for Speakers Now Open</h2>
        <p className="text-lg text-slate-700 mb-4">
          Have a talk, workshop, or idea that belongs on the BSides SWFL stage? We’re now accepting proposals from speakers of all backgrounds and experience levels.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          Whether you're sharing technical skills, research, lessons learned, or unique stories from the field — we want to hear from you.
        </p>
      </div>

      <div className="text-center -mt-10 pb-24 md:pb-30">
        <a href='https://sessionize.com/bsidesswfl2025/'>
          <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-[90%] md:w-auto">
            Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
          </button>
        </a>
      </div>

      {/* Embedded SpeakerWall */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <script
          type="text/javascript"
          src={`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_KEY}/view/SpeakerWall`}>
        </script>
      </div>
    </main>
  )
}