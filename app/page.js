import Herosection from "./Components/Herosection";
import Work from "./Components/work";
import Project from "./Components/project"

import Contactme from "./Components/Contactme";
import FireflyScene from "./Components/muosetrack";
import AuroraParticles from "./Components/background";

export default function Home() {
  return (
   <>
    <div className="relative min-h-screen bg-black">
 
     < AuroraParticles/>
    
      <div className="relative z-10">
        
        <Herosection />
        <Work/>
   <Project/>
   <Contactme/>
  
   
  
      </div>
      
    </div>
   

   </>
  );
}
