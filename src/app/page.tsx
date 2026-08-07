"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ClientsSection from "./components/ClientsSection";
import AccredianEdgeSection from "./components/AccredianEdgeSection";
import DomainExpertiseSection from "./components/DomainExpertiseSection";
import CourseSegmentationSection from "./components/CourseSegmentationSection";
import CATSection from "./components/CATSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FAQsSection from "./components/FAQsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import CountryPhoneSelect from "./components/CountryPhoneSelect";
import { defaultCountry, type Country } from "./data/countries";

function EnquireModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    delivery: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          countryCode: country.iso,
          dialCode: country.dial,
          countryName: country.name,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full border-b border-[#d7d7d7] text-gray-800 placeholder-[#9ca3af] focus:outline-none focus:border-[#1a73e8] transition-colors bg-transparent";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="hidden md:block relative bg-gray-100 overflow-hidden md:w-[48%]">
          <Image
            src="/images/image.png"
            alt="Enquire"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full relative overflow-y-auto md:w-[52%] p-8 sm:p-10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Close modal"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="font-bold text-gray-900 text-2xl mb-7">Enquire Now</h2>

          {submitted ? (
            <div className="flex flex-col items-center py-12 text-center h-full justify-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-blue-50">
                <svg width="32" height="32" fill="none" stroke="#1a73e8" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-500 text-sm mb-6">
                We&apos;ve received your enquiry. Our team will reach out to you within 24 hours.
              </p>
              <button onClick={onClose} className="btn-primary">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className={inputClass}
                style={{ height: "42px", fontSize: "16px" }}
              />
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className={inputClass}
                style={{ height: "42px", fontSize: "16px" }}
              />

              <CountryPhoneSelect
                phone={form.phone}
                onPhoneChange={(value) =>
                  setForm((prev) => ({ ...prev, phone: value }))
                }
                onCountryChange={setCountry}
              />

              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className={inputClass}
                style={{ height: "42px", fontSize: "16px" }}
              />

              <select
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer ${
                  !form.domain ? "text-[#9ca3af]" : "text-gray-800"
                }`}
                style={{
                  height: "42px",
                  fontSize: "16px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0px center",
                  backgroundSize: "16px",
                }}
              >
                <option value="" disabled hidden>
                  Select Domain
                </option>
                <option value="IT" className="text-gray-800">
                  IT & Technology
                </option>
                <option value="Finance" className="text-gray-800">
                  Finance
                </option>
                <option value="Healthcare" className="text-gray-800">
                  Healthcare
                </option>
                <option value="Other" className="text-gray-800">
                  Other
                </option>
              </select>

              <input
                name="candidates"
                type="text"
                value={form.candidates}
                onChange={handleChange}
                placeholder="Enter No. of candidates"
                className={inputClass}
                style={{ height: "42px", fontSize: "16px" }}
              />

              <select
                name="delivery"
                required
                value={form.delivery}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer ${
                  !form.delivery ? "text-[#9ca3af]" : "text-gray-800"
                }`}
                style={{
                  height: "42px",
                  fontSize: "16px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0px center",
                  backgroundSize: "16px",
                }}
              >
                <option value="" disabled hidden>
                  Select Mode of Delivery *
                </option>
                <option value="Online" className="text-gray-800">
                  Online
                </option>
                <option value="Offline" className="text-gray-800">
                  Offline
                </option>
                <option value="Hybrid" className="text-gray-800">
                  Hybrid
                </option>
              </select>

              <input
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                placeholder="Eg: Gurgoan, Delhi, India"
                className={inputClass}
                style={{ height: "42px", fontSize: "16px" }}
              />

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full mt-4 h-[54px] text-base disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onEnquireClick={() => setShowModal(true)} />

      <section id="home">
        <HeroSection onEnquireClick={() => setShowModal(true)} />
      </section>

      <section id="stats" className="page-section">
        <div className="section-container">
          <StatsSection />
        </div>
      </section>

      <section id="clients" className="page-section">
        <div className="section-container-wide">
          <ClientsSection />
        </div>
      </section>

      <section id="accredian-edge" className="page-section">
        <div className="section-container-wide">
          <AccredianEdgeSection />
        </div>
      </section>

      <section id="domain-expertise" className="page-section">
        <div className="section-container">
          <DomainExpertiseSection />
        </div>
      </section>

      <section id="course-segmentation" className="page-section page-section--muted">
        <div className="section-container-wide">
          <CourseSegmentationSection />
        </div>
      </section>

      <section id="cat" className="page-section second-bg-grad">
        <div className="section-container">
          <CATSection />
        </div>
      </section>

      <section id="how-it-works" className="page-section page-section--muted">
        <div className="section-container">
          <HowItWorksSection />
        </div>
      </section>

      <section id="faqs" className="page-section">
        <div className="section-container-wide">
          <FAQsSection onEnquireClick={() => setShowModal(true)} />
        </div>
      </section>

      <section id="testimonials" className="page-section">
        <div className="section-container-wide">
          <TestimonialsSection />
        </div>
      </section>

      <section id="contact" className="page-section pt-4 sm:pt-8">
        <div className="section-container-wide">
          <ContactBanner onContactClick={() => setShowModal(true)} />
        </div>
      </section>

      <Footer onEnquireClick={() => setShowModal(true)} />

      {showModal && <EnquireModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
