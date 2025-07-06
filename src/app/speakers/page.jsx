import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"
import PageHero from "../components/page-hero";

export default function SpeakersPage() {
  // Sample speakers data

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 wrapper-7">
        <PageHero title="Speakers" subtitle="Meet our distinguished speakers for BSides SWFL 2025." />
        <script type="text/javascript" src={`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_KEY}/view/SpeakerWall`}></script>
      </main>
    </>
  )
}