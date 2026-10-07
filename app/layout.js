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
  metadataBase: new URL("https://gonzagomezp.com"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://gonzagomezp.com",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
