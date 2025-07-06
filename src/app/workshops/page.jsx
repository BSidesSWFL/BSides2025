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

      <div className="max-w-5xl mx-auto wrapper-pages p-4 md:mb-12 pt-4">
        <div className="hs-form-frame mt-6 mb-12" data-region="na2" data-form-id="6fc72569-d746-41a3-a5a0-3e8b930742d2" data-portal-id="242985282"></div>
      </div>

      {/* Call To Action Button - Hidden until sessions are approved */}
      {/* <div className="text-center mt-12">
        <a href='/workshops-form'>
          <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
            Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
          </button>
        </a>
      </div> */}
    </main>
  )
}
