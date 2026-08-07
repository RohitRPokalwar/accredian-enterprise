"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

interface NavbarProps {
  onEnquireClick: () => void;
}

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (isClickingRef.current) return;

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id); // Instantly update active state

    const el = document.getElementById(id);
    if (el) {
      isClickingRef.current = true;
      const navbarHeight = 80; // Offset for sticky navbar
      const targetPosition = el.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

      // Re-enable scroll listener after animation finishes
      setTimeout(() => {
        isClickingRef.current = false;
      }, 1000);
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " is-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-inner">
            <a href="#home" className="flex-shrink-0" onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}>
              <Image
                src="/images/logo.webp"
                alt="Accredian Logo"
                width={110}
                height={32}
                className="object-contain h-7 w-auto"
                priority
              />
            </a>

            <div className="navbar-links">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`navbar-link${isActive ? " is-active" : ""}`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {mobileOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-[80px] bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Mobile Side Drawer */}
        <div 
          className={`lg:hidden fixed top-[80px] right-0 bottom-0 w-[280px] bg-white shadow-2xl border-l border-gray-100 transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-5 py-6 space-y-2 h-full overflow-y-auto">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "text-[#1a73e8] font-semibold bg-blue-50"
                      : "text-gray-700 hover:text-[#1a73e8] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

          </div>
        </div>
      </nav>
      <div className="navbar-spacer" />
    </>
  );
}
