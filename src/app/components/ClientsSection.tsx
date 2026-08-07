"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const clients = [
  { name: "Reliance", src: "/images/rel.png" },
  { name: "HCL", src: "/images/hcl.png" },
  { name: "IBM", src: "/images/ibm.png" },
  { name: "CRIF", src: "/images/crif.png" },
  { name: "ADP", src: "/images/adp.svg" },
  { name: "Bayer", src: "/images/bayer.svg" },
];

export default function ClientsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Show 3 clients per slide to ensure a smooth, centered row on all devices
  const clientsPerSlide = 3;
  const totalSlides = Math.ceil(clients.length / clientsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Auto-play every 3 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <h2 className="section-title">
        Our Proven <span>Partnerships</span>
      </h2>
      <p className="section-subtitle">
        Successful Collaborations With the <span>Industry&apos;s Best</span>
      </p>

      <div className="mt-10 overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <div
              key={slideIdx}
              className="w-full flex-shrink-0 flex items-center justify-center gap-8 sm:gap-20 px-4"
            >
              {clients
                .slice(slideIdx * clientsPerSlide, slideIdx * clientsPerSlide + clientsPerSlide)
                .map((client) => (
                  <div key={client.name} className="flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={140}
                      height={60}
                      className={`object-contain w-auto ${
                        client.name === "Bayer" ? "h-6 sm:h-10" : "h-10 sm:h-14"
                      }`}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === i
                ? "bg-[#1a73e8]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
