"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link';

export default function SponsorForm() {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "242985282",
          formId: "958ee7ab-694a-4676-90d8-a78a35424a77",
          target: "#hubspot-sponsor-form"
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 mt-12 wrapper-pages mb-32">
        <div id="hubspot-sponsor-form" ref={formRef} className="mt-6 mb-14" />
      </main>
    </>
  )
}
