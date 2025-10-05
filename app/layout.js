
import "./globals.css";
import FireflyBackground from "./Components/muosetrack"

//import localFont from 'next/font/local'; I ma not sure about the font
/*
const cosmic = localFont({
  src: './assests/cosmic-vibrant-font/CosmicVibrant-WywzY.otf',
  display: 'swap',
  variable: '--font-cosmic',
});

*/
export const metadata = {
  title: "Rabdeep-Fullstack Engineer ",
  description: "The perfect guide to hire Rabdeep , this is a portfilio website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  
      >
     
         < FireflyBackground/>
        <div className="relative z-10"></div>
        {children}
      </body>
    </html>
  );
}
