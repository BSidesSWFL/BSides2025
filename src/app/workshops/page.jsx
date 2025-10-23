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

      <div className="max-w-5xl mx-auto px-6 py-16 pb-60 lg:pb-72 text-slate-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Workshops</h2>
        <p className="text-lg text-slate-700 mb-4">
          Expect keyboards clicking, packets flying, and whiteboards filling up. Our Friday, Nov 14, workshops are built to be immersive, lab-driven, and immediately useful. Seats will be limited and registration will open soon. Bring a laptop, your curiosity, and a friend.
        </p>
        
        <h3 className="text-xl md:text-2xl font-bold mb-8 mt-8">Workshop Registration</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4 text-center">Interactive Networking Fingerprinting Walkthrough</h4>
            <iframe
              src="https://luma.com/embed/event/evt-4q1dQwn9hZwCPA3/simple"
              width="600"
              height="450"
              frameBorder="0"
              style={{border: "1px solid #bfcbda88", borderRadius: "4px"}}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4 text-center">Stop Reacting, Start Predicting: Threat Modeling</h4>
            <iframe
              src="https://luma.com/embed/event/evt-nk3HkWEY86xBGRV/simple"
              width="600"
              height="450"
              frameBorder="0"
              style={{border: "1px solid #bfcbda88", borderRadius: "4px"}}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4 text-center">AI in Action: Building Smarter Data Protection, Privacy, and Compliance Programs</h4>
            <iframe
              src="https://luma.com/embed/event/evt-9x9hYPSj6KvYxLU/simple"
              width="600"
              height="450"
              frameBorder="0"
              style={{border: "1px solid #bfcbda88", borderRadius: "4px"}}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-4 text-center">Beyond the Checkbox: Can You Prove Your Controls?</h4>
            <iframe
              src="https://luma.com/embed/event/evt-D7XBtrWrT2gCCpC/simple"
              width="600"
              height="450"
              frameBorder="0"
              style={{border: "1px solid #bfcbda88", borderRadius: "4px"}}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
