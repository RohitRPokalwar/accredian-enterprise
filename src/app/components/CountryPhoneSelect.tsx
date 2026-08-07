"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { countries, defaultCountry, type Country } from "../data/countries";

interface CountryPhoneSelectProps {
  phone: string;
  onPhoneChange: (value: string) => void;
  onCountryChange?: (country: Country) => void;
}

export default function CountryPhoneSelect({
  phone,
  onPhoneChange,
  onCountryChange,
}: CountryPhoneSelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<Country>(defaultCountry);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q) ||
        c.dial.includes(q)
    );
  }, [query]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => searchRef.current?.focus(), 0);
    }
  }, [open]);

  const selectCountry = (c: Country) => {
    setCountry(c);
    onCountryChange?.(c);
    setOpen(false);
    setQuery("");
  };

  return (
    <div
      ref={rootRef}
      className="relative border-b border-[#d7d7d7] flex items-center focus-within:border-[#1a73e8] transition-colors"
      style={{ height: "42px" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="shrink-0 flex items-center gap-1.5 h-full pr-2 cursor-pointer bg-transparent border-0"
        aria-label="Select country"
        aria-expanded={open}
      >
        <span className="flex items-center justify-center w-[20px] shrink-0" aria-hidden>
          <img
            src={`https://flagcdn.com/w20/${country.iso.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${country.iso.toLowerCase()}.png 2x`}
            alt={country.iso}
            className="w-[20px] h-auto rounded-[2px]"
          />
        </span>
        <span className="text-gray-800 text-sm font-medium">{country.iso}</span>
        <svg
          className={`w-3 h-3 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-gray-900 text-base ml-0.5">{country.dial}</span>
      </button>

      <input
        name="phone"
        type="tel"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        placeholder="Phone number"
        className="flex-1 h-full px-2 text-gray-800 placeholder-[#9ca3af] focus:outline-none bg-transparent text-base"
      />

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] z-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country..."
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#1a73e8]"
            />
          </div>
          <ul className="max-h-56 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-3 text-sm text-gray-400 text-center">No countries found</li>
            ) : (
              filtered.map((c) => (
                <li key={`${c.iso}-${c.dial}-${c.name}`}>
                  <button
                    type="button"
                    onClick={() => selectCountry(c)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm hover:bg-blue-50 transition-colors ${
                      c.iso === country.iso && c.dial === country.dial
                        ? "bg-blue-50 text-[#1a73e8]"
                        : "text-gray-800"
                    }`}
                  >
                    <span className="flex items-center justify-center w-7 shrink-0">
                      <img
                        src={`https://flagcdn.com/w20/${c.iso.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${c.iso.toLowerCase()}.png 2x`}
                        alt={c.iso}
                        className="w-[20px] h-auto rounded-[2px]"
                      />
                    </span>
                    <span className="flex-1 truncate">{c.name}</span>
                    <span className="text-gray-500 shrink-0">{c.dial}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
