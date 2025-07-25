import React from 'react';
import { Shield, Users, Zap, Award, Heart } from 'lucide-react';
import Link from 'next/link';
import PageHero from "../components/page-hero";

const SponsorsPage = () => {
  const platinumSponsors = [
    { name: "Become A Sponsor", logo: "🛡️", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Name Here", logo: "🔐", website: "https://www.bsidesswfl.org/sponsor-form" }
  ];

  const goldSponsors = [
    { name: "Become A Sponsor", logo: "🎯", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Name Here", logo: "📊", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Logo Could Be Famous", logo: "☁️", website: "https://www.bsidesswfl.org/sponsor-form" }
  ];

  const silverSponsors = [
    { name: "Become A Sponsor", logo: "⚡", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Name Here", logo: "🚨", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Logo Could Be Famous", logo: "🔍", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Swag Bag Royalty", logo: "🔬", website: "https://www.bsidesswfl.org/sponsor-form" },
  ];

  const bronzeSponsors = [
    { name: "Become A Sponsor", logo: "🏢", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Name Here", logo: "🎓", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Logo Could Be Famous", logo: "🔧", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Let's Make This Official", logo: "🦠", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Buy Us Coffee", logo: "🔑", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Sticker Worthy?", logo: "📋", website: "https://www.bsidesswfl.org/sponsor-form" }
  ];

  const communitySponsors = [
    { name: "Become A Community Sponsor", logo: "🏛️", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Name Here", logo: "🎓", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Your Logo Could Be Famous", logo: "🌐", website: "https://www.bsidesswfl.org/sponsor-form" },
    { name: "Let's Make This Official", logo: "👥", website: "https://www.bsidesswfl.org/sponsor-form" }
  ];

  // SponsorCard component
  const sizeClasses = {
    large: "w-full sm:w-80 h-56 p-8",
    medium: "w-full sm:w-64 h-48 p-6",
    small: "w-full sm:w-48 h-40 p-4",
    tiny: "w-full sm:w-40 h-32 p-2"
  };

  const SponsorCard = ({ sponsor, size }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl mx-auto transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 flex flex-col items-center justify-center text-center group ${sizeClasses[size]}`}>
      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
        {sponsor.logo}
      </div>
      <h3 className={`font-bold text-teal-800 ${size === 'large' ? 'text-xl' : size === 'medium' ? 'text-lg' : size === 'small' ? 'text-base' : 'text-sm'}`}>
        {sponsor.name}
      </h3>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={sponsor.website}
          className="text-orange-600 hover:text-orange-800 text-sm font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fill Sponsor Form →
        </a>
      </div>
    </div>
  );

  // SponsorTier component
  const SponsorTier = ({ title, sponsors, tierColor, icon: Icon, cardSize, description }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${tierColor} mb-4`}>
          <Icon size={24} className="text-white" />
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-teal-700 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className={`grid gap-6 ${cardSize === 'large' ? 'grid-cols-1 md:grid-cols-2' :
        cardSize === 'medium' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
          cardSize === 'small' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
            'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
        }`}>
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} size={cardSize} />
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Our Amazing Sponsors"
        subtitle="Southwest Florida's greatest cybersecurity conference is made possible by our incredible sponsors. Join us in thanking these organizations that support our cybersecurity community."
      />

      {/* Content Wrapper */}
      <div className="min-h-screen wrapper-pages">

        {/* Unique Stats Section */}
        <div className="container mx-auto px-6 text-center relative z-10 -mt-20">
          <div className="flex justify-center items-center gap-8 text-sm text-orange-200">
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>300+ Participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={20} />
              <span>25+ Speakers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} />
              <span>5+ Tracks</span>
            </div>
          </div>
        </div>


        {/* Photo Collage */}
        <div className="bg-transparent outline-0 py-12 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="col-span-1 row-span-2">
                <img
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Team meeting discussion"
                  className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-xl"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Cybersecurity coding"
                  className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-xl"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Conference presentation"
                  className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-xl"
                />
              </div>
              <div className="col-span-1 row-span-2 hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Technology workspace"
                  className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-xl"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Network security monitoring"
                  className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-xl"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-5xl mx-auto px-6 py-16 text-slate-800 text-center -mt-20 -mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Sponsoring?</h2>
          <p className="text-lg text-slate-700 mb-4">
            Join our community of security leaders and help support Southwest Florida's premier cybersecurity conference.
          </p>

          {/* Sponsor Buttons */}
          <div className="flex flex-col mb-16 sm:flex-row gap-4 justify-center">
            <Link href="/BSides-SWFL-Sponsorship-Packet-2025.pdf" target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto'>
              <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200 w-full md:w-auto">
                Download Sponsorship Package
              </button>
            </Link>

            <Link href="/sponsor-form" className='w-full sm:w-auto'>
              <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200 w-full md:w-auto">
                Sponsor Us Today!
              </button>
            </Link>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="container mx-auto items-center justify-center text-center px-6 py-16 pb-30">
          <SponsorTier
            title="Platinum Sponsors"
            sponsors={platinumSponsors}
            tierColor="bg-gradient-to-r from-slate-500 to-gray-600"
            icon={Award}
            cardSize="large"
            description="Our premier partners who provide exceptional support for the BSides SWFL community"
          />

          <SponsorTier
            title="Gold Sponsors"
            sponsors={goldSponsors}
            tierColor="bg-gradient-to-r from-amber-500 to-orange-600"
            icon={Award}
            cardSize="medium"
            description="Strategic partners committed to advancing cybersecurity education in Southwest Florida"
          />

          <SponsorTier
            title="Silver Sponsors"
            sponsors={silverSponsors}
            tierColor="bg-gradient-to-r from-cyan-500 to-teal-600"
            icon={Shield}
            cardSize="small"
            description="Valued supporters helping us deliver world-class security content and Gulf Coast networking"
          />

          <SponsorTier
            title="Bronze Sponsors"
            sponsors={bronzeSponsors}
            tierColor="bg-gradient-to-r from-orange-600 to-red-700"
            icon={Zap}
            cardSize="tiny"
            description="Essential contributors to our mission of building a stronger SWFL security community"
          />

          <SponsorTier
            title="Community Sponsors"
            sponsors={communitySponsors}
            tierColor="bg-gradient-to-r from-emerald-600 to-teal-700"
            icon={Heart}
            cardSize="small"
            description="Local organizations and groups that champion cybersecurity education in Southwest Florida"
          />
        </div>
      </div>
    </main>
  );
};

export default SponsorsPage;
