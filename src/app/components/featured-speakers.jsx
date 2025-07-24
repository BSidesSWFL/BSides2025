import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

// Sample featured speakers data
const featuredSpeakers = [
  {
    name: "Alex Johnson",
    title: "Red Team Lead, CyberCorp",
    photo: "/image.png", // Placeholder image
  },
  {
    name: "Priya Patel",
    title: "Director of Security, InfoSafe",
    photo: "/image.png",
  },
  {
    name: "Chris Lee",
    title: "CTO, SecureNet",
    photo: "/image.png",
  },
];

const FeaturedSpeakers = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-900">Featured Speakers</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {featuredSpeakers.map((speaker, idx) => (
          <Card key={idx} className="w-72 flex flex-col items-center p-4 bg-white/90">
            <CardHeader className="flex flex-col items-center">
              <Image
                src={speaker.photo}
                alt={speaker.name}
                width={120}
                height={120}
                className="rounded-full object-cover border-4 border-orange-200 shadow-md mb-4"
              />
              <CardTitle className="text-lg text-orange-800 text-center">{speaker.name}</CardTitle>
              <CardDescription className="text-center text-slate-700">{speaker.title}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSpeakers; 