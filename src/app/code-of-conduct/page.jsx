import PageHero from "../components/page-hero";

export default function CodeOfConduct() {
  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Code of Conduct"
        subtitle="BSides SWFL is committed to providing a safe, inclusive, and welcoming environment for all participants. Please review our Code of Conduct to understand our expectations and commitment to creating a positive experience for everyone."
      />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-16 pb-40 md:pb-30 lg:pb-48">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/document/d/1qfgNkda7KCcZJ855i9EihX2nT1XwlcPtHZkDqYA-FBg/preview"
            className="w-full h-[800px] md:h-[900px] lg:h-[1000px] border-0"
            title="BSides SWFL Code of Conduct"
            allow="fullscreen"
          />
        </div>
      </div>
    </main>
  );
}

