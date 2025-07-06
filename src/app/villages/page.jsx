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

      <div className="max-w-5xl mx-auto wrapper-pages p-4 md:mb-12 pt-4">
        <div className="hs-form-frame mt-6 mb-12" data-region="na2" data-form-id="fb4869ea-c35c-4d70-9ddb-7508f9d6cf1f" data-portal-id="242985282"></div>
      </div>

      {/* Call To Action Button - Hidden until sessions are approved */}
      {/* <div className="text-center mt-12">
        <Link href='/villages-form'>
          <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
            Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
          </button>
        </Link>
      </div> */}
    </main>
  )
}
