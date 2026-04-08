import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ismail Ahmed | Portfolio",
  description: "A portfolio website with a cinematic MacBook landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
