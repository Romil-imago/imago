import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Imago Growth OS — From attention to revenue", template: "%s | Imago Growth OS" },
  description: "A growth operating system for lead generation, conversion and client delivery.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    title: "Imago Growth OS",
    description: "A clearer operating system for measurable business growth.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
