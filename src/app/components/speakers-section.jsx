import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";

const speakers = [
  {
    name: "Jim Routh",
    photo: "/Jim-Routh.png",
    bio: `Jim Routh is a former CSO/CISO (6x) in financial services and healthcare. Jim served as the Chair of the H-ISAC for five years, Board Member for the FS-ISAC for seven years, while also serving the FS-ISAC leading committees for many years. He is currently a Board Member for three organizations and advises over 20 cybersecurity and IT companies. He currently teaches cybersecurity at the NYU Tandon School of Engineering. Jim is an industry icon in cybersecurity. He is an active advisor and investor with five venture capital firms that focus on cybersecurity.`
  },
  {
    name: "Bryson Bort",
    photo: "/Bryson-Bort.png",
    bio: `Bryson Bort is the Founder of SCYTHE, a start-up building a next-generation threat emulation platform, and GRIMM, a cybersecurity consultancy, and Co-Founder of the ICS Village, a non-profit advancing awareness of industrial control system security. He is a Senior Fellow at the National Security Institute and Adjunct Senior Technical Advisor for the Institute of Security and Technology. As a US Army Officer, he served as a Battle Captain and Brigade Engineering Officer in support of Operation Iraqi Freedom before leaving the Army as a Captain. He is recognized as a 'Top 50 in Cyber' by Business Insider, 'Security Executive Finalist of the Year' by SC Media, was awarded 'Tech Titan' twice, and is the 2023 SANS Difference Maker Award Winner for Innovator of the Year.`
  },
  {
    name: "Brian Zegers",
    photo: "/Brian-Zegers.png",
    bio: `Brian Zegers works as a Information Security Officer at Lee Health, which is a Hospitals & Physicians Clinics company with an estimated 14 K employees; and founded in 1916. They are part of the Information Security team within the Information Technology Department and their management level is Non-Manager. Brian is currently based in Fort Myers, United States.`
  },
  {
    name: "Larry Whiteside Jr.",
    photo: "/Larry-Whiteside-Jr.png",
    bio: `A former US Air Force Officer with 30+ years in cybersecurity, Larry Whiteside Jr. is a veteran CISO, CSO, and CTO with leadership roles across DoD, federal, financial services, healthcare, and critical infrastructure. He also serves as a Board Director, guiding organizations in security strategy and risk management. As Co-Founder & President of CONFIDE, a boutique cybersecurity reseller, Larry helps CISOs worldwide navigate evolving challenges with tailored solutions. A trusted advisor to Fortune 2000 security executives, Larry has helped CEOs and boards drive sales, marketing, and retention. A thought leader, he speaks at major conferences like RSAC, Gartner, and ISC2 and Co-Founded Cyversity, a nonprofit increasing minority and women representation in cybersecurity.`
  }
];

export default function SpeakersSection() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-900">Featured Speakers</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {speakers.map((speaker, idx) => (
          <Card key={idx} className="w-80 flex flex-col items-center p-4 bg-white/90 shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <img
                src={speaker.photo}
                alt={speaker.name}
                width={140}
                height={140}
                className="rounded-full object-cover border-4 border-orange-200 shadow-md mb-4"
                loading="lazy"
              />
              <CardTitle className="text-lg text-orange-800 text-center mb-2">{speaker.name}</CardTitle>
            </CardHeader>
            <CardContent className="w-full px-0">
              <Accordion type="single" collapsible>
                <AccordionItem value="bio">
                  <AccordionTrigger className="text-base font-semibold text-purple-800">Bio</AccordionTrigger>
                  <AccordionContent className="text-slate-700 text-sm font-normal bg-orange-50 rounded-b-xl px-4 py-2">
                    {speaker.bio}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 