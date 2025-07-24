import Hero from "./components/hero";
import InfoCards from "./components/info-cards";
import FeaturedSpeakers from "./components/featured-speakers";


export default function Home() {

  return (
    <>
      <main className="max-w-5xl bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 mx-auto my-6 p-4 rounded-t-2xl">
        <Hero />
        <FeaturedSpeakers />
        <InfoCards />
      </main>
    </>
  );
}
