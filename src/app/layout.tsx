import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "A Storybook : As unique as you",
  description: "Create a personalized storybook for your child.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {/* Navbar stays at the top on every page for easy navigation. */}
        <Navbar />

        {/* Main content area with responsive spacing for mobile-first design. */}
        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
