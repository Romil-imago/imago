import type { Metadata } from "next";
import "./globals.css";
import "./workflow.css";

export const metadata: Metadata = {
  title: { default: "Imago Studio — Creative & Growth", template: "%s | Imago Studio" },
  description: "Independent creative and growth partner. Brand strategy, social media, creative production and performance marketing for ambitious businesses.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    title: "Imago Studio — Creative & Growth",
    description: "Brand, creative and performance—connected to move business forward.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
