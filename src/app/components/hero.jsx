import Image from 'next/image'

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
          <p className="text-xl md:text-2xl text-cyan-100 lg:mt-8 mt-4">November 14th & 15th, 2025</p>
          <p className="text-md md:text-lg mt-8 lg:mt-16 text-cyan-100 share-tech-regular ">A major cybersecurity event is coming to Southwest Florida on November 14th and 15th at Florida SouthWestern State College. The first-ever BSides SWFL conference will focus on real-world cybersecurity failures and solutions. Industry experts and students will connect to explore the evolving threats and innovations shaping today’s cyber landscape.</p>

          {/* Area to display the map */}
          <div className="mt-4 lg:mt-8 mb-8 flex justify-center">
            <Image
              src={"/map.png"}
              alt="Map of the event location"
              width={700}
              height={300}
              className="w-full h-auto lg:h-[30vh] shadow-lg hover:scale-105 mb-16 transition-transform duration-875"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
