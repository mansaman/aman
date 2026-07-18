import type { Metadata } from "next";
import ExperienceView from "@/components/views/ExperienceView";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Five companies, one operating system — how Aman Sharma ran growth engines across B2B SaaS in India, Southeast Asia, and the Gulf.",
};

export default function ExperiencePage() {
  return <ExperienceView />;
}
