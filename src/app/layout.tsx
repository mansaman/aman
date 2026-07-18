import type { Metadata } from "next";
import { Inter, Anton, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aman Sharma — Growth Marketing",
    template: "%s — Aman Sharma",
  },
  description:
    "Growth marketing manager and marketing technologist. SEO, paid acquisition, GTM, CRM, automation, and AI — wired into one revenue engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${instrumentSerif.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-ink text-bone selection:bg-red selection:text-bone overflow-x-hidden">
        <SmoothScroll>
          {/* Print-grain overlay */}
          <div className="noise-overlay" />

          <Preloader />
          <CustomCursor />
          <Nav />

          {children}

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
