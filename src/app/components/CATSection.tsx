"use client";
import Image from "next/image";

export default function CATSection() {
  return (
    <>
      <h2 className="section-title">
        The <span>CAT Framework</span>
      </h2>
      <p className="section-subtitle">
        Our Proven Approach to <span>Learning Excellence</span>
      </p>

      <div className="mt-10 sm:mt-14 flex justify-center w-full">
        <Image
          src="/images/catV2.svg"
          alt="CAT Framework - Concept, Application, Tools"
          width={900}
          height={520}
          className="w-[80%] max-w-4xl h-auto"
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
}
