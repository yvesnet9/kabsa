import type { Metadata } from "next";
import SportPageClient from "./SportPageClient";

export const metadata: Metadata = {
  title: "Nos disciplines sportives",
};

export default function SportPage() {
  return <SportPageClient />;
}
