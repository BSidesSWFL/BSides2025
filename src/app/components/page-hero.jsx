import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <div className="wrapper-hero relative overflow-hidden min-h-[400px] lg:min-h-[480px]">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center absolute top-[10%] md:top-[25%] left-1/2 transform -translate-x-1/2 z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-orange-100">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-cyan-100 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-8 fill-amber-100">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,58.7C672,64,768,96,864,96C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHero;