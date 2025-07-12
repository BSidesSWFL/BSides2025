import Image from 'next/image'
import Link from 'next/link'
import { Tickets } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative wrapper-hero py-16 md:py-4 rounded-xl">
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-purple-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-yellow-300 rounded-full opacity-20"></div>

        {/* Sparkles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-70"></div>
      </div>

      <div className="container flex flex-col md:flex-row items-center mx-auto px-4 relative overflow-hidden">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:mt-8 md:mt-4 font-bold text-orange-200">BSides SWFL 2025</h1>
          <p className="text-xl md:text-2xl text-cyan-100 lg:mt-4 mt-4">November 14th & 15th, 2025</p>
          <p className="text-md md:text-lg mt-8 lg:mt-8 text-cyan-100 share-tech-regular ">
            A major cybersecurity event is coming to Southwest Florida on November 14th and 15th at Florida SouthWestern State College. The first-ever BSides SWFL conference will focus on real-world cybersecurity challenges and solutions. Industry experts and students will connect to explore the evolving threats and innovations shaping today’s cyber landscape.
          </p>

          {/* Area to display the map */}
          <div className="mt-4 lg:mt-8 mb-8 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.2674212044669!2d-81.8864846187229!3d26.55230718082615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db3fed6a955bfb%3A0x71f6c1303d5438f8!2sBuilding%20K%20(Hendry%20Hall)!5e0!3m2!1sen!2sus!4v1751758080377!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-xl shadow-lg transition-transform duration-700"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Florida SouthWestern State College Map"
            ></iframe>
          </div>
          <div className="flex flex-col mb-2 pt-8 md:pt-0 md:mb-8 sm:flex-row gap-2 justify-center">
            <Link href="https://lu.ma/btwze03o" className='w-full sm:w-auto'>
              <button className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-teal-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200 w-full md:w-[725px] lg:w-[925px] ">
                <Image src="/kindpng_278375.png" alt="Ticket Icon" width={20} height={20} priority className="mr-2 pb-1 inline-block" />
                Get Your Tickets Now!
                <Image src="/kindpng_278375.png" alt="Ticket Icon" width={20} height={20} priority className="ml-2 pb-1 inline-block" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
