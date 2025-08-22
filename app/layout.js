import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FireflyBackground from "./Components/muosetrack"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hire me",
  description: "The perfect guide to hire Rabdeep , this is a portfilio website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Firefly background - fixed position, behind everything */}
        <FireflyBackground />
        
        {/* Your app content with higher z-index */}
        <div className="relative z-10"></div>
        {children}
      </body>
    </html>
  );
}
