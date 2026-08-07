"use client";

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 56,
  height: 56,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const domains = [
  {
    id: "product-innovation",
    label: "Product & Innovation Hub",
    icon: (
      // lightbulb
      <svg {...iconProps}>
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    id: "gen-ai",
    label: "Gen-AI Mastery",
    icon: (
      // brain
      <svg {...iconProps}>
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
  },
  {
    id: "leadership",
    label: "Leadership Elevation",
    icon: (
      // crown
      <svg {...iconProps}>
        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    id: "tech-data",
    label: "Tech & Data Insights",
    icon: (
      // chart bars
      <svg {...iconProps}>
        <path d="M13 17V9" />
        <path d="M18 17V5" />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    id: "operations",
    label: "Operations Excellence",
    icon: (
      // settings / gear
      <svg {...iconProps}>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "digital-enterprise",
    label: "Digital Enterprise",
    icon: (
      // globe
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: "fintech",
    label: "Fintech Innovation Lab",
    icon: (
      // banknote
      <svg {...iconProps}>
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
];

export default function DomainExpertiseSection() {
  return (
    <>
      <h2 className="section-title">
        Our Domain <span>Expertise</span>
      </h2>
      <p className="section-subtitle">
        <span>Specialized Programs</span> Designed to Fuel Innovation
      </p>

      <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 w-full">
        {domains.map((domain) => (
          <div
            key={domain.id}
            id={`domain-${domain.id}`}
            className="domain-card"
          >
            <div className="text-[#1a73e8] w-6 h-6 sm:w-14 sm:h-14 mr-2 sm:mr-0 sm:mb-2 flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full">
              {domain.icon}
            </div>
            <p className="text-center font-semibold text-gray-900 text-[10px] sm:text-lg leading-snug">
              {domain.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
