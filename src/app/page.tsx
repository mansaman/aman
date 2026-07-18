import type { Metadata } from "next";
import HomeView from "@/components/views/HomeView";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Growth marketing manager and marketing technologist. SEO, paid acquisition, GTM, CRM, automation, and AI — wired into one revenue engine.",
};

export default function Home() {
  return <HomeView />;
}
