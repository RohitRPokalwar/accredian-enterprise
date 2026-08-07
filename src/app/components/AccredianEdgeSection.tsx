"use client";
import Image from "next/image";

export default function AccredianEdgeSection() {
  return (
    <>
      <h2 className="section-title">
        The <span>Accredian Edge</span>
      </h2>
      <p className="section-subtitle">
        Key Aspects of <span>Our Strategic Training</span>
      </p>

      <div className="mt-10 sm:mt-14 hidden md:block w-full">
        <Image
          src="/images/accredian-edge-usp-v3.svg"
          alt="Accredian Edge USP Diagram"
          width={1600}
          height={600}
          className="mx-auto w-full max-w-none"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className="mt-8 block md:hidden w-full">
        <Image
          src="/images/accredian-edge-usp-mobile.svg"
          alt="Accredian Edge USP Diagram Mobile"
          width={800}
          height={1000}
          className="mx-auto w-full"
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
}
