import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Corporate Learning & Training",
  description:
    "Accredian Enterprise helps organizations cultivate high-performance teams through expert learning, tailored solutions, and industry-leading credentials.",
  keywords: [
    "corporate training",
    "enterprise learning",
    "upskilling",
    "professional development",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Corporate Learning",
    description:
      "Cultivate high-performance teams through expert learning and tailored solutions.",
    type: "website",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a73e8" />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
