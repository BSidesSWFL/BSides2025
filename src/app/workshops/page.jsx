import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link';
import PageHero from '../components/page-hero';

export default function Workshops() {

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 wrapper-7 mb-32">
        <PageHero title="Lead a Workshop, Share What You Know" subtitle="Want to lead a workshop at BSides SWFL 2025? We’re looking for hands-on, 3-4 hour sessions to run on Friday that dive deep into real skills and practical takeaways. Whether you’re into red teaming, blue teaming, OSINT, reverse engineering, or something totally offbeat, we want sessions that challenge and inspire. You don’t need to be a seasoned presenter, just bring your knowledge, your passion, and a plan to get people learning." />

        <div className="text-center mt-12">
          <a href='/workshops-form'>
            <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
              Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
            </button>
          </a>
        </div>
      </main>
    </>
  )
}
