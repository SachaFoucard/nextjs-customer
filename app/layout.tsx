import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "./lib/utils";
import NavBar from "./_landing/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebWizardry",
  description: "Your Vision Nourished by my Expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
        <link rel="icon" href="/logo.png" sizes="any" />
      <body className={cn(inter.className, "h-full")}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
