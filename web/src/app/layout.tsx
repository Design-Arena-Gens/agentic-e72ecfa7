import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Whimsical Sneaker Caf? with Kittens ? Ultra?HD Photoreal Fairytale Scene",
  description:
    "Ultra-realistic close-up of a white sneaker cut open revealing a magical miniature caf? with fluffy kittens, glowing mushroom lamps, moss, and warm cinematic light.",
  metadataBase: new URL("https://agentic-e72ecfa7.vercel.app"),
  openGraph: {
    title:
      "Whimsical Sneaker Caf? with Kittens ? Ultra?HD Photoreal Fairytale Scene",
    description:
      "A cozy dreamlike micro-world: kittens sipping tea inside a white sneaker caf? under glowing mushroom lamps.",
    type: "website",
    url: "https://agentic-e72ecfa7.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Whimsical Sneaker Caf? with Kittens ? Ultra?HD Photoreal Fairytale Scene",
    description:
      "A cozy dreamlike micro-world: kittens sipping tea inside a white sneaker caf? under glowing mushroom lamps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
