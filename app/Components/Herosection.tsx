 import { FaGithub,FaLinkedin, FaTwitter    } from 'react-icons/fa';
import { BiSpreadsheet } from "react-icons/bi";


export default function Herosection(){
return(
    <div className="flex items-center justify-center h-screen  z-1">
  <div className="flex items-center justify-center h-screen relative mt-1">
  {/* First main div */}
  <div className="flex flex-col items-center justify-center w-[600px] h-[250px] text-3xl bg-gradient-to-br from-[#f7f7f7] to-[#94bbe9] backdrop-blur-lg border rounded-xl shadow-lg py-1">
    <p className="text-lg text-slate-800 mr-2">Hi my name is</p>
  <p className='text-3xl text-gray-800'> Rabdeep Kaur Badwal</p> 
    <p className="text-lg text-slate-800 mt-2 py-1">I am a Full stack Developer</p>
  </div>

{/*Second div (slightly on bottom and to the right) */}
  <div className="absolute bottom-[130px] right-[-300px] flex flex-col items-center justify-center w-[400px] h-[150px]  text-xl
              bg-purple/10 backdrop-blur-lg border rounded-xl shadow-lg py-2 bg-gradient-to-br from-[#94bbe9] to-[#f7f7f7]">
    <p className="text-sm text-slate-800">My Projects</p>
  </div>
  {/*third div*/}
  <div className="absolute bottom-[177px] right-[500px] flex flex-row gap-4 item-center justify-center w-[200px] h-[50px]  text-xl 
  backdrop-blur-lg border rounded-xl shadow-lg py-2 bg-gradient-to-br from-[#94bbe9] to-[#f7f7f7]">
   <FaGithub size={30} color="white" /> 
    <FaLinkedin size={30} color="white" />
 <FaTwitter size={30} color="white" /> 
<BiSpreadsheet  size={30} color="white"/>
  </div>
</div>

  </div>

)
}