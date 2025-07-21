"use client";

import Script from "next/script";
import PageHero from "../components/page-hero";

export default function Volunteer() {
  return (
    <>
      <Script
        src="https://js.hsforms.net/forms/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: "na2",
              portalId: "242985282",
              formId: "85ba1c51-8082-4134-bd2f-0e6f2f738603",
              target: "#hubspot-volunteer-form"
            });
          }
        }}
      />
      <main className="min-h-screen wrapper-pages">
        <PageHero 
          title="Step Into the Storm — Volunteer at BSides SWFL 2025" 
          subtitle="Join our crew of passionate volunteers who help make BSides SWFL happen from the ground up. Whether you're guiding guests, setting up gear, or running a village, this is your chance to contribute, grow your network, and be part of something unforgettable." 
        />
        <div className="max-w-5xl mx-auto wrapper-pages p-4 md:mb-12 pt-4">
          <div id="hubspot-volunteer-form" className="mt-6 mb-14" />
        </div>
      </main>
    </>
  );
}
