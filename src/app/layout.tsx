import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prakhar Ojha | Blockchain Engineer",
  description: "Blockchain & cross-chain infrastructure engineer. Winner of NEAR Innovation Track. Building optimistic oracles, agentic protocols, and gasless transaction systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
