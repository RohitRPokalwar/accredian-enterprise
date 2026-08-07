"use client";
import Image from "next/image";

interface HeroSectionProps {
  onEnquireClick: () => void;
}

const features = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
  "Measurable Impact",
];

export default function HeroSection({ onEnquireClick }: HeroSectionProps) {
  return (
    <div className="hero-wrap">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">
              Next-Gen <span className="text-universal">Expertise</span>
            </span>
            <span className="hero-title-line">
              For Your <span className="text-universal">Enterprise</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            <span className="hero-subtitle-line">Cultivate high-performance</span>
            <span className="hero-subtitle-line">teams through expert learning.</span>
          </p>

          <ul className="hero-features">
            {features.map((feat) => (
              <li key={feat} className="hero-feature">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {feat}
              </li>
            ))}
          </ul>

          <div className="hero-cta">
            <button
              id="hero-enquire-btn"
              onClick={onEnquireClick}
              className="hero-btn"
            >
              Enquire Now
            </button>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/corporate-big-hero-v4.webp"
            alt="Enterprise professionals"
            width={650}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}
