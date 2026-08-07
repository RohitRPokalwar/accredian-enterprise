"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    logo: "/images/adp.svg",
    logoAlt: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    logo: "/images/bayer.svg",
    logoAlt: "Bayer",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    logo: "/images/crif.png",
    logoAlt: "CRIF",
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
  },
  {
    logo: "/images/hcl.png",
    logoAlt: "HCL",
    quote:
      "Accredian has been instrumental in upskilling our workforce. Their structured approach to learning, combined with industry-relevant content, has significantly improved our team's capabilities and performance.",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <h2 className="section-title">
        Testimonials from <span>Our Partners</span>
      </h2>
      <p className="section-subtitle">
        What <span>Our Clients</span> Are Saying
      </p>

      <div className="mt-10 sm:mt-12 overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <div
              key={slideIdx}
              className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 px-0"
            >
              {testimonials
                .slice(slideIdx * itemsPerSlide, slideIdx * itemsPerSlide + itemsPerSlide)
                .map((t) => (
                  <div
                    key={t.logoAlt}
                    className="bg-white border-[0.5px] border-gray-200 rounded-xl pt-8 pr-8 pb-8 pl-5 sm:pt-10 sm:pr-10 sm:pb-10 sm:pl-6 flex flex-col justify-start min-h-[240px] sm:min-h-[280px]"
                  >
                    {/* Small logo — top left only */}
                    <div className="mb-5 flex items-center h-8">
                      <Image
                        src={t.logo}
                        alt={t.logoAlt}
                        width={72}
                        height={32}
                        style={{
                          height: "32px",
                          width: "auto",
                          maxHeight: "32px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <p className="text-left text-gray-600 font-medium text-[15px] sm:text-base leading-[1.75]">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
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
