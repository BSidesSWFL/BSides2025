import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link';
import PageHero from '../components/page-hero';

export default function Workshops() {

  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Lead a Workshop, Share What You Know"
        subtitle="Our workshops offer immersive, hands-on sessions that dig deep into practical skills across the cybersecurity spectrum. Whether you’re teaching red teaming, OSINT, or something uniquely your own, this is your space to inspire learning and lead with impact."
      />

      <div className="max-w-5xl mx-auto px-6 py-16 text-slate-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Call for Workshops Now Open</h2>
        <p className="text-lg text-slate-700 mb-4">
          Are you passionate about teaching practical cybersecurity skills? We’re looking for instructors to lead 3–4 hour hands-on workshops at BSides SWFL on Friday, November 14th.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          Whether you're into red teaming, OSINT, reverse engineering, hardware hacking, or something entirely original — we want sessions that challenge, engage, and inspire.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          Workshops are reviewed anonymously and selected based on clarity, structure, and impact. All accepted instructors receive a complimentary conference pass.
        </p>
      </div>

      <div className="text-center pb-44 md:pb-36 lg:pb-48">
        <a href='https://sessionize.com/bsidesswfl2025/'>
          <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-[90%] md:w-auto"> Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
          </button>
        </a>
      </div>
    </main>
  )
}
