import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Gonzalo Gómez Pizarro — AI Engineer | Full Stack & Cloud";
const DESCRIPTION =
  "Interactive 3D portfolio of Gonzalo Gómez Pizarro, AI Engineer: multi-agent LLM backends, Next.js frontends and GCP infrastructure.";

export const metadata = {
  metadataBase: new URL("https://cv.gonzagomezp.com.ar"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://cv.gonzagomezp.com.ar",
    siteName: "gonzagomezp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  }
};

export const viewport = {
  themeColor: "#030504",
};

// Structured data for Google: same Person (@id) as the landing at gonzagomezp.com.ar.
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://cv.gonzagomezp.com.ar",
  name: TITLE,
  mainEntity: {
    "@type": "Person",
    "@id": "https://gonzagomezp.com.ar/#gonza",
    name: "Gonzalo Gómez Pizarro",
    alternateName: ["Gonza Gómez Pizarro", "gonzagomezp"],
    url: "https://gonzagomezp.com.ar/",
    image: "https://cv.gonzagomezp.com.ar/profile.jpg",
    jobTitle: "AI Engineer",
    description: DESCRIPTION,
    address: { "@type": "PostalAddress", addressLocality: "Córdoba", addressCountry: "AR" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Universidad Católica de Córdoba" },
    sameAs: [
      "https://gonzagomezp.com.ar/",
      "https://www.linkedin.com/in/gonzagomezp/",
      "https://github.com/gonzagomezp",
      "https://instagram.com/gonzagomezp_software",
      "https://www.youtube.com/@gonzagomezp",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
