"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10000,
    display: "10K+",
    label: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: 200,
    display: "200+",
    label: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: 5000,
    display: "5K+",
    label: "Active Learners Engaged In Dynamic Courses",
  },
];

function StatCard({
  stat,
  visible,
  isLast,
}: {
  stat: (typeof stats)[0];
  visible: boolean;
  isLast: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center px-4 sm:px-8 py-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${!isLast ? "sm:after:content-[''] sm:after:absolute sm:after:right-0 sm:after:top-[20%] sm:after:bottom-[20%] sm:after:w-px sm:after:bg-gray-200" : ""}`}
    >
      <div className="stat-pill">{stat.display}</div>
      <p className="text-[15px] text-center font-medium max-w-[220px] leading-[1.6] text-gray-900">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h2 className="section-title">
        Our <span>Track Record</span>
      </h2>
      <p className="section-subtitle">
        The Numbers Behind <span>Our Success</span>
      </p>

      <div
        ref={ref}
        className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0"
      >
        {stats.map((stat, i) => (
          <StatCard
            key={stat.display}
            stat={stat}
            visible={visible}
            isLast={i === stats.length - 1}
          />
        ))}
      </div>
    </>
  );
}
