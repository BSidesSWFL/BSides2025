import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card"

export default function SchedulePage() {

  return (
    <main className="max-w-5xl mx-auto p-4 wrapper-7">
      <h1 className="text-4xl font-bold mt-20 mb-4 text-teal-700 text-center">Schedule</h1>
      <script type="text/javascript" src={`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_KEY}/view/GridSmart`}></script>
    </main>
  );
}