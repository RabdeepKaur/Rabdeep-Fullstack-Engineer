import Herosection from "../app/Home/page";
import Work from "../app/Experiences/page";
import Project from "../app/Projects/page";
import Achivement from "../app/Achievement/page";
import Skills from "../app/skills/page";
import FireflyScene from "./Components/muosetrack";
import Opensource from "../app/opensorce/page";
import Footer from "./Components/footer";

export default function Home() {
  return (
   <>
    <div className="relative min-h-screen bg-black">
 
   
    <FireflyScene/>
  
      <div className="relative z-10">
        <Herosection />
        <Work/>
        <Opensource/>
   <Project/>
   <Skills/>
   <Achivement/>
 <Footer/>
  
      </div>
      
    </div>
   

   </>
  );
}
