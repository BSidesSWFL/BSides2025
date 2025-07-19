import { Button } from "@/app/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/ui/card"
import Link from "next/link"

export default function InfoCards() {
  return (
    <div className="container mx-auto px-4 py-12 wrapper-5 w-auto mb-12 lg:mb-20 items-center justify-center text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sponsors Card */}
        <Card className="mb-8 opacity-77">
          <CardHeader>
            <CardTitle className="text-2xl"><span className="text-purple-800">📲</span> <span className="text-gray-700">Call For Sponsors</span></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-center">
              BSides SWFL is organized by volunteers and relies on funding from industry sponsors and
              donations.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/BSides-SWFL-Sponsorship-Packet-2025.pdf" target="_blank" rel="noopener noreferrer" className="bg-purple-800 rounded-md hover:bg-purple-500 text-white">
              <Button className="bg-purple-800 rounded-md hover:bg-purple-500 text-white">2025 Sponsor Kit</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Tickets Card */}
        {/* <Card className="mb-8 opacity-77">
          <CardHeader>
            <CardTitle className="text-2xl"><span className="text-purple-800">🎟️</span> <span className="text">Tickets On Sale</span></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-center">
              Early bird pricing is available until September 15th. Secure your spot today!
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/tickets" className="bg-purple-800 rounded-md hover:bg-purple-500 text-white">
              <Button className="bg-purple-800 hover:bg-purple-500 text-white">Buy Now!</Button>
            </Link>
          </CardFooter>
        </Card> */}

        {/* Volunteer Card */}
        <Card className="mb-8 opacity-77">
          <CardHeader>
            <CardTitle className="text-2xl"><span className="text-purple-800">🙌</span> <span className="text">We Need Your Help!</span></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-center">Come join the fun and help us make 2025 the best BSides SWFL convention ever. Sign up to be a volunteer today!</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/volunteer" className="bg-purple-800 rounded-md hover:bg-purple-500 text-white">
              <Button className="bg-purple-800 rounded-md hover:bg-purple-500 text-white">Volunteer Information</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}