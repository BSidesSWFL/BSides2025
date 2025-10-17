import { Card, CardTitle, CardContent } from "../ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";

const speakers = [
  {
    name: "Jim Routh",
    title: "Chief Trust Officer at Savynt",
    photo: "/Jim-Routh.png",
    bio: `Jim Routh is a former CSO/CISO (6x) in financial services and healthcare. Jim served as the Chair of the H-ISAC for five years, Board Member for the FS-ISAC for seven years, while also serving the FS-ISAC leading committees for many years. He is currently a Board Member for three organizations and advises over 20 cybersecurity and IT companies. He currently teaches cybersecurity at the NYU Tandon School of Engineering. Jim is an industry icon in cybersecurity. He is an active advisor and investor with five venture capital firms that focus on cybersecurity.`
  },
  {
    name: "Brian Zegers",
    title: "Information Security Officer at Lee Health",
    photo: "/Brian-Zegers.png",
    bio: `Brian Zegers works as a Information Security Officer at Lee Health, which is a Hospitals & Physicians Clinics company with an estimated 14 K employees; and founded in 1916. They are part of the Information Security team within the Information Technology Department and their management level is Non-Manager. Brian is currently based in Fort Myers, United States.`
  },
  {
    name: "Merritt Baer",
    title: "Chief Security Officer at Enkrypt AI",
    photo: "/Merritt-Baer.png",
    bio: `Merritt is a security executive based in Miami, FL. Merritt serves as Chief Security Officer to Enkrypt AI. She also advises a small handful of young tech companies including Andesite and AppOmni. Merritt served in the Office of the CISO at Amazon Web Services for over five years– a Deputy CISO to help to secure AWS infrastructure, at vast scale. Merritt worked in security in all three branches of US government and the private sector. Her insights on business strategy and tech have been published in Forbes, the The Wall Street Journal, VentureBeat, Tech Crunch, SC Media, The Baltimore Sun, The Daily Beast, LawFare, and Talking Points Memo. She is a graduate of Harvard Law School and Harvard College.`
  }
];

export default function SpeakersSection() {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-900">Featured Speakers</h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
        {speakers.map((speaker, idx) => (
          <Card key={idx} className="w-80 flex flex-col items-center p-6 bg-white/90 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out">
            <img
              src={speaker.photo}
              alt={speaker.name}
              width={150}
              height={150}
              loading="lazy"
              className="mb-2 w-32 h-32 object-cover"
            />
            <CardTitle className="text-lg text-orange-800 text-center mb-0.5">{speaker.name}</CardTitle>
            <div className="text-sm text-slate-700 text-center mb-1 font-semibold">{speaker.title}</div>
            <CardContent className="w-full px-0 pt-1 pb-2">
              <Accordion type="single" collapsible key={`accordion-${idx}`}>
                <AccordionItem value={`bio-${idx}`}>
                  <AccordionTrigger className="text-base font-semibold text-purple-800 py-1 hover:no-underline hover:cursor-pointer">Bio</AccordionTrigger>
                  <AccordionContent className="text-slate-700 text-sm font-normal bg-orange-50 rounded-b-xl px-3 py-1">
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