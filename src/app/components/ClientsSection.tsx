"use client";
import Image from "next/image";

const clients = [
  { name: "Reliance", src: "/images/rel.png" },
  { name: "HCL", src: "/images/hcl.png" },
  { name: "IBM", src: "/images/ibm.png" },
  { name: "CRIF", src: "/images/crif.png" },
  { name: "ADP", src: "/images/adp.svg" },
  { name: "Bayer", src: "/images/bayer.svg" },
];

export default function ClientsSection() {
  return (
    <>
      <h2 className="section-title">
        Our Proven <span>Partnerships</span>
      </h2>
      <p className="section-subtitle">
        Successful Collaborations With the <span>Industry&apos;s Best</span>
      </p>

      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.name} className="client-logo">
            <Image
              src={client.src}
              alt={client.name}
              width={120}
              height={60}
              className="object-contain h-10 sm:h-12 w-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
}
