import React from "react";
import { Ticket, Calendar, MapPin, Clock, Users, Shield } from "lucide-react";
import PageHero from "../components/page-hero";

export default function Tickets() {
  return (
    <main className="min-h-screen wrapper-pages">
      <PageHero
        title="Get Your Tickets"
        subtitle="Join us for BSides SWFL 2025 - Southwest Florida's premier cybersecurity conference. Secure your spot for an incredible day of learning, networking, and community building."
      />

      {/* Content Wrapper */}
      <div className="min-h-screen wrapper-pages">
        {/* Luma Ticket Embed */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl">
            <iframe
              src="https://luma.com/embed/event/evt-4lD9lAUIqZcP5en/simple"
              width="600"
              height="450"
              frameBorder="0"
              style={{
                border: "1px solid #bfcbda88",
                borderRadius: "8px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              aria-hidden="false"
              allowFullScreen="false"
              tabIndex="0"
              title="BSides SWFL 2025 Ticket Purchase"
            ></iframe>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Shield className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">
                  Expert Presentations
                </h4>
                <p className="text-slate-600 text-sm">
                  Learn from industry leaders and cybersecurity experts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">
                  Networking Opportunities
                </h4>
                <p className="text-slate-600 text-sm">
                  Connect with 300+ cybersecurity professionals
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Ticket className="text-cyan-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">
                  Full Conference Access
                </h4>
                <p className="text-slate-600 text-sm">
                  Access to all sessions, workshops, and activities
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar
                className="text-cyan-600 mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">
                  Lunch & Refreshments
                </h4>
                <p className="text-slate-600 text-sm">
                  Complimentary meals and networking breaks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center text-slate-700">
          <p className="mb-4">
            <strong>Questions about tickets?</strong> Contact us at{" "}
            <a
              href="mailto:info@bsidesswfl.org"
              className="text-cyan-600 hover:text-cyan-700 underline"
            >
              info@bsidesswfl.org
            </a>
          </p>
          <p className="text-sm">
            All ticket sales are final. Refunds available up to 30 days before
            the event.
          </p>
        </div>
      </div>
    </main>
  );
}
