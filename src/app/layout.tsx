import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FaviconAnimator from "@/components/FaviconAnimator";

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
      className="h-full antialiased dark"
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-ink text-bone selection:bg-red selection:text-bone overflow-x-hidden">
        <SmoothScroll>
          {/* Print-grain overlay */}
          <div className="noise-overlay" />

          <Preloader />
          <CustomCursor />
          <FaviconAnimator />
          <Nav />

          {children}

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
