"use client";

interface ContactBannerProps {
  onContactClick: () => void;
}

export default function ContactBanner({ onContactClick }: ContactBannerProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="cta-banner">
        <div className="relative z-10 flex gap-6 md:gap-8 md:flex-row flex-col md:items-start items-center flex-1">
          <div className="w-20 h-20 flex-shrink-0 bg-slate-200/35 rounded-xl p-1">
            <div className="w-full h-full bg-white rounded-xl p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full text-[#1a73e8]"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
          </div>

          <div className="md:text-start text-center text-white">
            <h2 className="text-xl md:text-3xl font-semibold tracking-tight">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-base hidden sm:block md:text-lg mt-2 max-w-xl font-medium text-neutral-100">
              Get Expert Guidance for Your Team&apos;s Success!
            </p>
          </div>
        </div>

        <button
          onClick={onContactClick}
          className="relative z-10 w-full max-w-[200px] py-2 sm:px-4 sm:py-3 rounded-lg text-[#1a73e8] bg-white text-xl font-semibold flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors"
        >
          Contact Us
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
