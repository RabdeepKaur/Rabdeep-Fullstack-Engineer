 import { FaGithub,FaLinkedin, FaTwitter    } from 'react-icons/fa';
import { BiSpreadsheet } from "react-icons/bi";
import Link from "next/link"

export default function Herosection(){
return(
    <div className="flex items-center justify-center h-screen  z-1">
  <div className="flex items-center justify-center h-screen relative mt-1">
  {/* First main div */}
 <div className="relative flex flex-col items-center justify-center">
  {/* Overlapping Div */}
  <div className="absolute -top-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-[300px] h-[80px] text-white border-0 backdrop-blur-lg rounded-xl shadow-lg py-1 z-10">
    <p> 🟢 Open for new Opportunities</p>
  </div>

  {/* Main Div */}
  <div className="flex flex-col items-center justify-center w-[600px] h-[250px] text-3xl backdrop-blur-lg  rounded-xl shadow-lg py-4 border-0">
    <p className="text-lg font-semibold text-white mr-2">
      I make Backend, Frontend, Websites and Digital Social Experiences
    </p>
    <p className="font-bold text-3xl text-gray-100">Rabdeep Kaur Badwal</p>
    <p className="text-lg font-semibold text-slate-100 mt-2 py-1">
      I am a Full Stack Developer
    </p>
  </div>
</div>

{/*Second div (slightly on bottom and to the right) */}
  <div className="absolute bottom-[130px] right-[-300px] flex flex-col items-center justify-center w-[400px] h-[150px]  text-xl
              bg-purple/10 backdrop-blur-lg border-0 rounded-xl shadow-lg py-2">
    <p className="text-lg font-semibold text-slate-100 p-4"> I love bringing ideas to life through code and creativity.  </p>
  </div>
  {/*third div*/}
  <div className="absolute bottom-[177px] right-[500px] flex flex-row gap-4 item-center justify-center w-[200px] h-[50px]  text-xl 
  backdrop-blur-lg border-0 rounded-xl shadow-lg py-2 ">
    <Link href="https://github.com/RabdeepKaur">    <FaGithub size={30} color="white" /> </Link>
<Link href="https://www.linkedin.com/in/rabdeep-kaur-35a26925b"> <FaLinkedin size={30} color="white" /></Link>
   <Link href="https://x.com/Rabdeep790">  <FaTwitter size={30} color="white" /> </Link>
<Link href=""> <BiSpreadsheet  size={30} color="white"/></Link>

  </div>
</div>

  </div>

)
}