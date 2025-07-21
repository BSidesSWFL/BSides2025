"use client";

import PageHero from "../components/page-hero";

export default function Volunteer() {
  return (
    <>
      <main className="min-h-screen wrapper-pages">
        <PageHero 
          title="Step Into the Storm — Volunteer at BSides SWFL 2025" 
          subtitle="Join our crew of passionate volunteers who help make BSides SWFL happen from the ground up. Whether you're guiding guests, setting up gear, or running a village, this is your chance to contribute, grow your network, and be part of something unforgettable." 
        />
        <div className="max-w-5xl mx-auto wrapper-pages p-4 md:mb-12 pt-4 text-center">
          <a
            href="https://40o0n6.share-na2.hsforms.com/2hbocUYCCQTS9Lw5vL3OGAw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/80 transition"
          >
            Fill Out the Volunteer Form
          </a>
        </div>
      </main>
    </>
  );
}
