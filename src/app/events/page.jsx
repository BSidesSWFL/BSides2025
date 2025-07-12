import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import dotenv from 'dotenv';

export default function Events() {

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 wrapper-7">
        <h1 className="text-4xl font-bold mt-20 mb-8 text-center text-teal-700">Events</h1>
        <script type="text/javascript" src={`https://sessionize.com/api/v2/${process.env.NEXT_PUBLIC_SESSIONIZE_KEY}/view/Sessions`}></script>
      </main>
    </>
  )
}
