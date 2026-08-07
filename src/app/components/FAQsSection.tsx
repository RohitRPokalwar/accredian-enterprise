"use client";
import { useState } from "react";

const faqData: Record<string, { q: string; a: string }[]> = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      q: "What domain specializations are available?",
      a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],
  "About the Delivery": [
    {
      q: "Can the courses be customized for specific industries or teams?",
      a: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization's goals.",
    },
    {
      q: "Who are the instructors for these programs?",
      a: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
    },
    {
      q: "What formats are the programs delivered in?",
      a: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
    },
  ],
  Miscellaneous: [
    {
      q: "What is the ideal team size for corporate training?",
      a: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
    },
    {
      q: "How do we get started with Accredian?",
      a: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
    },
  ],
};

const categories = Object.keys(faqData);

export default function FAQsSection({
  onEnquireClick,
}: {
  onEnquireClick?: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setOpenIndex(null);
  };

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
        Frequently Asked <span className="text-universal">Questions</span>
      </h2>

      <div className="faq-container mt-8 md:mt-12">
        <div className="flex md:flex-col flex-row items-stretch gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`faq-tab${activeCategory === cat ? " is-active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex-1 space-y-1">
          {faqData[activeCategory].map((faq, i) => (
            <div key={i} className="overflow-hidden border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleQuestion(i)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="font-semibold text-gray-900 text-[15px] sm:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 text-gray-500 text-sm leading-relaxed pt-1">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 sm:mt-16 flex justify-center">
        <button onClick={onEnquireClick} className="btn-primary btn-primary--lg">
          Enquire Now
        </button>
      </div>
    </>
  );
}
