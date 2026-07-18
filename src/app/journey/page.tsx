import type { Metadata } from "next";
import JourneyView from "@/components/views/JourneyView";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Six phases, one direction — how Aman Sharma moved from curious builder to growth marketing manager and marketing technologist.",
};

export default function JourneyPage() {
  return <JourneyView />;
}
