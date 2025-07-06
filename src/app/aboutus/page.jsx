import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import PageHero from "../components/page-hero";


export default function AboutUs() {
  const AboutUsData = [
    {
      id: 1,
      title: "About BSides SWFL",
      content: (
        <>
          <strong>BSides Southwest Florida (Bsides SWFL)</strong> is a community-driven cybersecurity conference designed to create space for open conversation, hands-on learning, and professional growth. As part of the global <a href="#">Security BSides</a> movement, our event brings together a diverse mix of security professionals, students, researchers, and curious minds to explore and advance the field of information security.
        </>
      ),
    },
    {
      id: 2,
      title: "Our Mission",
      content: (
        <>
          Our mission is to provide a welcoming, inclusive environment where people of all skill levels can connect, share knowledge, and collaborate on solutions to today's cybersecurity challenges. We believe in lowering barriers to entry, uplifting new voices, and creating opportunities to grow and give back to the community.
        </>
      ),
    },
    {
      id: 3,
      title: "What to Expect",
      content: (
        <>
          BSides SWFL offers <strong>Engaging Talks, Interactive Villages, Workshops, Opportunities to connect</strong>. Whether you're just beginning your journey or you've been in the industry for years, BSides SWFL is a place where you can share, learn, and be part of something meaningful.
        </>
      ),
    },
    {
      id: 4,
      title: "Why It Matters",
      content: (
        <>
          Traditional conferences often come with barriers: cost, exclusivity, or limited speaker slots. BSides flips the script by offering a platform where more voices can be heard, and more people can participate. We're here to celebrate curiosity, encourage growth, and help build a stronger, more resilient security community in Southwest Florida.
        </>
      ),
    },
  ]

  return (
    <main className="min-h-screen wrapper-4">
      <PageHero 
        title="About Us"
        subtitle="Built by the community, for the community—BSides SWFL is where curiosity meets collaboration, and cybersecurity feels personal."
      />

      {/* Main content */}
      <div className="items-center justify-center h-[100vh]">
        <ul className="list-none">
          <Accordion type="single" className="w-full mt-16 md:mt-[30%] lg:mt-36 xl:mt-36" collapsible>
            {AboutUsData.map((item, index) => (
              <AccordionItem key={item.id} value={`item-${index + 1}`} className={`gap-4`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ul>
      </div>
    </main>
  );
}
