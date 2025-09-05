import Herosection from "./Components/Herosection";
import Work from "./Components/work";
import Project from "./Components/project"
import Skills from "./Components/Skill";
import Contactme from "./Components/Contactme";
import FireflyScene from "./Components/muosetrack";
import AuroraParticles from "./Components/background";

export default function Home() {
  return (
   <>
    <div className="relative min-h-screen bg-black">
      {/* Background Layer - Fixed positioning, lowest z-index */}
     < AuroraParticles/>
      {/* Content Layer - Positioned above background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Herosection />
        <Work/>
   <Project/>
   <Skills/>
   <Contactme/>
      </div>
    </div>
   

   </>
  );
}
