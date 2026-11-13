import type { Metadata } from "next";
import "./globals.css";
import "./workflow.css";

export const metadata: Metadata = {
  title: { default: "Imago — Digital Art Direction & Growth", template: "%s | Imago Studio" },
  description: "A digital art direction and growth studio connecting brand, social content, creative production and performance marketing.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    title: "Imago Studio — Creative & Growth",
    description: "Distinctive brand worlds, platform-native content and performance creative built to move people and business.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
