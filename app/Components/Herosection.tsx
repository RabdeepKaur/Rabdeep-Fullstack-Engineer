 import { FaGithub,FaLinkedin, FaTwitter    } from 'react-icons/fa';
import { BiSpreadsheet } from "react-icons/bi";
import Link from "next/link"
import { FaCircle } from "react-icons/fa";
import { FlipWords } from './flipword';

export default function Herosection(){
return(
     <>
      {/* Mobile Layout (hidden on desktop) */}
      <div className="flex items-center justify-center min-h-screen p-4 lg:hidden">
        <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
          {/* Status Badge */}
          <div className="flex flex-col items-center justify-center w-full h-[70px] text-white bg-black/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700">
            <div className="flex flex-row items-center space-x-2">
              <FaCircle className="text-green-500 text-sm" />
              <span className="text-sm font-medium">Open for Opportunities</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center w-full min-h-[200px] text-center bg-black/80 backdrop-blur-lg rounded-xl shadow-lg py-6 px-4 border border-gray-700 space-y-4">
            <p className="text-lg font-semibold text-white">
              I make <FlipWords words={["Backends", "Frontends", "Websites", "Digital marketing"]} />
            </p>
            <p className="font-bold text-2xl text-gray-100">Rabdeep Kaur Badwal</p>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center w-full min-h-[120px] bg-purple-500/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-4 border border-purple-500/20">
            <p className="text-sm font-medium text-slate-100 text-center leading-relaxed">
              I am a Full-Stack Developer who loves building cool websites that make life easier. Alongside Coding, I also work on social media marketing and enjoy technical writing.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-row gap-6 items-center justify-center w-full h-[60px] bg-black/60 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700">
            <Link href="https://github.com/RabdeepKaur">
              <FaGithub size={24} color="white" />
            </Link>
            <Link href="https://www.linkedin.com/in/rabdeep-kaur-35a26925b">
              <FaLinkedin size={24} color="white" />
            </Link>
            <Link href="https://x.com/Rabdeep790">
              <FaTwitter size={24} color="white" />
            </Link>
            <Link href="https://drive.google.com/file/d/13ukFWvqedAB_Fuqw7u9SHLcL42qoQOFc/view?usp=sharing">
              <BiSpreadsheet size={24} color="white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Original Desktop Layout (hidden on mobile) */}
      <div className="hidden lg:flex items-center justify-center h-screen z-1">   
        <div className="flex items-center justify-center h-screen relative mt-1">     
          {/* First main div */}  
          <div className="relative flex flex-col items-center justify-center">   
            {/* Overlapping Div */}   
            <div className="absolute -top-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-[300px] h-[80px] text-white bg-black/80 border-0 backdrop-blur-lg rounded-xl shadow-lg py-1 z-10">  
              <div className="flex flex-row items-center space-x-3">         
                <FaCircle className="text-green-500 text-xl" />         
                <span className="text-lg">Open for new Opportunities</span>       
              </div>   
            </div>    

            {/* Main Div */}   
            <div className="flex flex-col items-center justify-center w-[600px] h-[250px] text-3xl backdrop-blur-lg bg-black/80 rounded-xl shadow-lg py-4 border-0 space-y-2">     
              <p className="text-2xl font-semibold text-white mr-3">    
                I make <FlipWords words={["Backends", "Frontends", "Websites", "Digital marketing"]} />     
              </p>     
              <p className="font-bold text-3xl text-gray-100">Rabdeep Kaur Badwal</p>   
            </div> 
          </div>  

          {/* Second div (slightly on bottom and to the right) */}   
          <div className="absolute bottom-[130px] right-[-300px] flex flex-col items-center justify-center w-[400px] h-[150px] text-xl bg-purple/10 backdrop-blur-lg border-0 rounded-xl shadow-lg py-2">     
            <p className="text-lg font-semibold text-slate-100 p-4"> 
              I am a Full-Stack Developer who loves building cool websites that make life easier. Alongside Coding, I also work on social media marketing and enjoy technical writing. 
            </p>   
          </div>   

          {/* Third div */}   
          <div className="absolute bottom-[177px] right-[500px] flex flex-row gap-4 item-center justify-center w-[200px] h-[50px] text-xl backdrop-blur-lg border-0 rounded-xl shadow-lg py-2">     
            <Link href="https://github.com/RabdeepKaur">    
              <FaGithub size={30} color="white" /> 
            </Link> 
            <Link href="https://www.linkedin.com/in/rabdeep-kaur-35a26925b"> 
              <FaLinkedin size={30} color="white" />
            </Link>    
            <Link href="https://x.com/Rabdeep790">  
              <FaTwitter size={30} color="white" /> 
            </Link> 
            <Link href="https://drive.google.com/file/d/13ukFWvqedAB_Fuqw7u9SHLcL42qoQOFc/view?usp=sharing"> 
              <BiSpreadsheet size={30} color="white"/>
            </Link>    
          </div> 
        </div>    
      </div>
    </>
  );
}