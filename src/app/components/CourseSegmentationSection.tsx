"use client";
import Image from "next/image";

const categories = [
  {
    id: "program-specific",
    label: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    src: "/images/data-science-v2.webp",
  },
  {
    id: "industry-specific",
    label: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    src: "/images/digital-transformation-v2.webp",
  },
  {
    id: "topic-specific",
    label: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    src: "/images/project-management-v2.webp",
  },
  {
    id: "level-specific",
    label: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    src: "/images/senior-management-v2.webp",
  },
];

const whoShouldJoin = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tools, drive innovation.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic direction.",
  },
];

export default function CourseSegmentationSection() {
  return (
    <>
      <h2 className="section-title">
        Tailored <span>Course Segmentation</span>
      </h2>
      <p className="section-subtitle">
        Explore <span>Custom-fit Courses</span> Designed to Address Every Professional Focus
      </p>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            id={`course-${cat.id}`}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative h-40 overflow-hidden bg-gray-100">
              <Image
                src={cat.src}
                alt={cat.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="px-5 py-6 flex flex-col items-center text-center">
              <h3 className="font-semibold text-xl sm:text-2xl text-[#1a73e8] mb-2">
                {cat.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Skill Enhancement — live site layout */}
      <div className="mt-12 sm:mt-20 xl:px-6 px-0 lg:mx-0 sm:mx-0 bg-[#1a73e8] sm:rounded-lg flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/2 pt-10 sm:pt-12 px-6 md:pl-6 text-white flex flex-col justify-between">
          <div>
            <p className="text-lg sm:text-xl font-medium text-blue-100">
              Who Should Join?
            </p>
            <h2 className="text-2xl md:text-[40px] leading-[1.15] capitalize mt-2 font-semibold">
              Strategic Skill Enhancement
            </h2>
          </div>
          <Image
            src="/images/imagehuman.png"
            alt="Strategic Skill Enhancement"
            width={300}
            height={360}
            className="w-[300px] justify-center hidden md:block mt-8 object-contain"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 py-10 sm:py-12 px-6 text-white gap-10 md:w-1/2">
          {whoShouldJoin.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 sm:gap-2 flex-row sm:flex-col"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 mb-0 sm:mb-2 shrink-0 [&>svg]:w-full [&>svg]:h-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[16px] sm:text-[22px] font-semibold m-0">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-200 mt-1 m-0 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
