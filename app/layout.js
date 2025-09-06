
import "./globals.css";
//import FireflyBackground from "./Components/muosetrack"
import   AuroraParticles from "./Components/background";
import localFont from 'next/font/local';

const cosmic = localFont({
  src: './assests/cosmic-vibrant-font/CosmicVibrant-WywzY.otf',
  display: 'swap',
  variable: '--font-cosmic',
});


export const metadata = {
  title: "Hire me",
  description: "The perfect guide to hire Rabdeep , this is a portfilio website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
    className={`${cosmic.className}`}
      >
        {/* Firefly background - fixed position, behind everything */}
     
         < AuroraParticles/>
        {/* Your app content with higher z-index */}
        <div className="relative z-10"></div>
        {children}
      </body>
    </html>
  );
}
