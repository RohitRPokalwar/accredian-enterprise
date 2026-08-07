"use client";
import Image from "next/image";

interface FooterProps {
  onEnquireClick: () => void;
}

export default function Footer({ onEnquireClick }: FooterProps) {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="section-container-wide">
        {/* Top row — Logo + Social | Enquire CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image
                src="/images/logo.webp"
                alt="Accredian Logo"
                width={150}
                height={48}
                className="object-contain h-11 w-auto"
                priority
              />
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://facebook.com/accredianlearn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#333] hover:text-[#1a73e8] transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/accredianedu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#333] hover:text-[#1a73e8] transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com/accredianedu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#333] hover:text-[#1a73e8] transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/accredian_edu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#333] hover:text-[#1a73e8] transition-colors"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#333] hover:text-[#1a73e8] transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                  <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <button
              onClick={onEnquireClick}
              className="bg-[#1a73e8] text-white px-8 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#1557b0] transition-colors shadow-sm"
            >
              Enquire Now
            </button>
            <p className="text-gray-600 text-xs sm:text-sm">Speak with our Advisor</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black" />

        {/* Middle — Links + Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-8">
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-4">Accredian</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://accredian.com/About"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm hover:text-[#1a73e8] transition-colors w-fit"
              >
                About
              </a>
              <a
                href="https://blog.accredian.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm hover:text-[#1a73e8] transition-colors w-fit"
              >
                Blog
              </a>
              <a
                href="https://accredian.com/whyaccredian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm hover:text-[#1a73e8] transition-colors w-fit"
              >
                Why Accredian
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-base mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-sm text-gray-800">
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-[#1a73e8] hover:underline"
                >
                  enterprise@accredian.com
                </a>
              </p>
              <p className="text-sm text-gray-800 leading-relaxed max-w-md">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-black pt-5 pb-2">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
