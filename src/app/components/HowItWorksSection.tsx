"use client";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-4-4-5 5" />
        <path d="M18 9h-4" />
        <path d="M18 9v4" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M12 16v4" />
        <path d="M8 20h8" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <polygon points="10 8 15 11 10 14 10 8" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <>
      <h2 className="section-title">
        How We <span>Deliver Results</span> That Matter?
      </h2>
      <p className="section-subtitle">
        A Structured Three-Step Approach to <span>Skill Development</span>
      </p>

      <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-8 px-4">
        {steps.map((step) => (
          <div key={step.title} className="how-card">
            <div className="how-card-bar how-card-bar--left" />
            <div className="how-card-bar how-card-bar--right" />

            <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 border-2 border-blue-300 bg-white rounded-full flex justify-center items-center text-[12px] font-bold text-[#1a73e8]">
              {step.number}
            </div>

            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1a73e8] text-white rounded-full shadow-md mt-4 mb-4">
              {step.icon}
            </div>

            <h3 className="text-md sm:text-lg font-semibold text-gray-900 mt-2">
              {step.title}
            </h3>
            <p className="text-gray-600 hidden sm:block text-sm mt-2 max-w-[18rem]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
