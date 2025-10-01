import Herosection from "./Components/Herosection";
import Work from "./Components/work";
import Project from "./Components/project"
import Achivement from "./Components/Achivements";
import Skill from "./Components/Skill";
import FireflyScene from "./Components/muosetrack";
import Opensource from "./Components/Opensource";
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
     <Skill/>
   <Achivement/>
 <Footer/>
  
      </div>
      
    </div>
   

   </>
  );
}
