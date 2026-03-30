import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leve AI Studios — AI Consulting & Product Development",
  description:
    "Leve AI Studios helps businesses harness the power of artificial intelligence through expert consulting and custom product development.",
  keywords: ["AI consulting", "AI development", "artificial intelligence", "product development", "Leve AI Studios"],
  openGraph: {
    title: "Leve AI Studios — AI Consulting & Product Development",
    description:
      "Expert AI consulting and custom product development to transform your business.",
    url: "https://levestudios.com",
    siteName: "Leve AI Studios",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[#1d1d1f] antialiased">{children}</body>
    </html>
  );
}
