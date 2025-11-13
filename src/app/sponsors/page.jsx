import React from 'react';
import { Shield, Users, Zap, Award, Heart } from 'lucide-react';
import Link from 'next/link';
import PageHero from "../components/page-hero";

const SponsorsPage = () => {
  const goldSponsors = [
    { name: "", logo: <Link href="http://www.cyberguardpro.com/"><img src="/cGuardPro.png" alt="Cyber Guard Pro" className="h-28 w-auto max-w-full object-contain" /></Link>, website: "" }
  ];

  const silverSponsors = [
    { name: "", logo: <Link href="https://simspace.com/"><img src="/SimSpace.png" alt="SimSpace" className="h-20 w-auto max-w-full object-contain" /></Link>, website: "" }
  ];

  const bronzeSponsors = [
    { name: "", logo: <Link href="https://www.lucidservicesgroup.com"><img src="/LucidServicesGroup.png" alt="Lucid Services Group" className="h-20 w-auto max-w-full object-contain" /></Link>, website: "" },
    { name: "", logo: <Link href="https://material.security/"><img src="/MaterialSecurity.png" alt="Material Security" className="h-20 w-auto max-w-full object-contain" /></Link>, website: "" },
    { name: "", logo: <Link href="https://www.zscaler.com/"><img src="/zscaler.png" alt="zscaler" className="h-20 w-auto max-w-full object-contain" /></Link>, website: "" }
  ];

  const communitySponsors = [
    { name: "", logo: <Link href="https://www.leehealth.org/"><img src="/leeHealth.png" alt="Lucid Services Group" className="h-20 w-auto max-w-full object-contain" /></Link>, website: "" },
  ];

  const inKindSponsors = [
    { name: "", logo: <Link href="https://www.blackhillsinfosec.com/"><img src="/BlackHillsInfoSec.png" alt="Black Hills Information Security" className="h-28 w-auto max-w-full object-contain" /></Link>, website: "" },
    { name: "", logo: <Link href="https://www.techallianceswfl.org/"><img src="/TechAllianceLogo2.png" alt="Tech Alliance" className="h-64 w-auto max-w-full object-contain" /></Link>, website: "" },
    { name: "", logo: <Link href="https://www.fsw.edu/academics/programs/ascybersecurityops"><img src="/ristCyber2025.png" alt="Rist Cyber Institute at FSW" className="h-28 w-auto max-w-full object-contain" /></Link>, website: "" }
  ];

  // SponsorCard component
  const sizeClasses = {
    large: "w-full sm:w-96 h-64 p-8",
    medium: "w-full sm:w-80 h-56 p-6",
    small: "w-full sm:w-72 h-48 p-6",
    tiny: "w-full sm:w-64 h-40 p-4"
  };

  const SponsorCard = ({ sponsor, size }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl mx-auto transition-all duration-300 transform hover:-translate-y-1 border border-orange-100 flex flex-col items-center justify-center text-center group ${sizeClasses[size]}`}>
      <div className="group-hover:scale-110 transition-transform duration-300">
        {sponsor.logo}
      </div>
    </div>
  );

  // SponsorTier component
  const SponsorTier = ({ title, sponsors, tierColor, icon: Icon, cardSize, description }) => (
    <div className="mb-12">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${tierColor} mb-4`}>
          <Icon size={24} className="text-white" />
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-teal-700 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className={`flex flex-wrap gap-8 justify-center ${cardSize === 'large' ? '' :
        cardSize === 'medium' ? '' :
          cardSize === 'small' ? '' :
            ''
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
            <div className="flex justify-center">
              <img
                src="/tech-team-silhouette.png"
                alt="Professional tech team silhouettes with network connections and tropical backdrop"
                className="w-full max-w-4xl h-auto object-contain rounded-lg hover:shadow-lg transition-shadow duration-300 shadow-xl"
              />
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
        <div className="container mx-auto items-center justify-center text-center px-6 py-16 pb-60 lg:pb-72">
        {goldSponsors.length > 0 && (
            <SponsorTier
              title="Gold Sponsors"
              sponsors={goldSponsors}
              tierColor="bg-gradient-to-r from-[#fde68a]  to-[#f59e0b]"
              icon={Award}
              cardSize="small"
              description="Strategic partners committed to advancing cybersecurity education in Southwest Florida"
            />
          )}
          
          {silverSponsors.length > 0 && (
            <SponsorTier
              title="Silver Sponsors"
              sponsors={silverSponsors}
              tierColor="bg-gradient-to-r from-cyan-500 to-teal-600"
              icon={Shield}
              cardSize="small"
              description="Valued supporters helping us deliver world-class security content and Gulf Coast networking"
            />
          )}

          {bronzeSponsors.length > 0 && (
            <SponsorTier
              title="Bronze Sponsors"
              sponsors={bronzeSponsors}
              tierColor="bg-gradient-to-r from-orange-600 to-red-700"
              icon={Zap}
              cardSize="tiny"
              description="Essential contributors to our mission of building a stronger SWFL security community"
            />
          )}

          {communitySponsors.length > 0 && (
            <SponsorTier
              title="Non-Profit Sponsors"
              sponsors={communitySponsors}
              tierColor="bg-gradient-to-r from-emerald-600 to-teal-700"
              icon={Heart}
              cardSize="small"
              description="Local organizations and groups that champion cybersecurity education in Southwest Florida"
            />
          )}

          {inKindSponsors.length > 0 && (
            <SponsorTier
              title="In-Kind Sponsors"
              sponsors={inKindSponsors}
              tierColor="bg-gradient-to-r from-purple-600 to-indigo-700"
              icon={Users}
              cardSize="small"
              description="Supporters providing in-kind services and resources that elevate the attendee experience"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default SponsorsPage;