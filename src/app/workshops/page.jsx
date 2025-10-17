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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Workshops</h2>
        <p className="text-lg text-slate-700 mb-4">
          Expect keyboards clicking, packets flying, and whiteboards filling up. Our Friday, Nov 14, workshops are built to be immersive, lab-driven, and immediately useful. Seats will be limited and registration will open soon. Bring a laptop, your curiosity, and a friend.
        </p>
        
        <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8">A peek at what's confirmed</h3>
        
        <div className="text-left max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 mb-4">
            <strong>Shift from reactive to proactive</strong> with real-world threat modeling techniques using frameworks like STRIDE and data-flow diagrams, plus attack-path mapping and risk-based decision making.
          </p>
          
          <p className="text-lg text-slate-700 mb-4">
            <strong>Go hands-on with network fingerprinting:</strong> see how TLS handshakes and client behavior reveal who is on the other end, then practice JA3 and JA4 capture, p0f and MuonFP analysis, and BPF-based blocking.
          </p>
          
          <p className="text-lg text-slate-700 mb-4">
            <strong>Test your program's readiness</strong> in a cyber-insurance attestation tabletop where you document and defend controls like MFA, EDR, backups, and incident response against realistic scenarios.
          </p>
        </div>
      </div>
    </main>
  )
}
