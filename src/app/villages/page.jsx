import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import dotenv from 'dotenv';
import Link from 'next/link';
import PageHero from '../components/page-hero';

export default function Villages() {

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 wrapper-7 mb-32">
        <PageHero title="Bring a Village to Life at BSides SWFL" subtitle="Got an idea for an interactive space where people can get hands-on, ask questions, and dive deep into something cool? We’re looking for village proposals for BSides SWFL 2025—spaces that run all day Saturday and spark curiosity through experience. Whether it’s lockpicking, RFID, career support, social engineering, or engaging kids and seniors, villages are where our attendees explore, experiment, and connect. If you’ve got the vision, we’ll help you make it happen." />

        <div className="text-center mt-12">
          <Link href='/villages-form'>
            <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
              Reach Out Today! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}
