import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
