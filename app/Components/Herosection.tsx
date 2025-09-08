 import { FaGithub,FaLinkedin, FaTwitter    } from 'react-icons/fa';
import { BiSpreadsheet } from "react-icons/bi";
import Link from "next/link"
import { FaCircle } from "react-icons/fa";
import { FlipWords } from './flipword';

export default function Herosection(){
return(
    <div className="flex items-center justify-center h-screen  z-1">
  <div className="flex items-center justify-center h-screen relative mt-1">
    {/*navbar
    <nav className='fixed top-0 left-0 w-50 bg-purple/10 backdrop-blur-lg  shadow-lg z-50'>
    <div className='max-w-7xl mx-auto py-1 flex items-center justify-between bg-black '>
<ul className="flex space-x-8 ml-160 text-white text-xl font-medium">
          <li className="hover:text-yellow-200 cursor-pointer transition-colors">
            <a href="#experience">Experiences</a>
          </li>
          <li className="hover:text-yellow-200 cursor-pointer transition-colors">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-yellow-200 cursor-pointer transition-colors">
            <a href="#skills">Skills</a>
          </li>
        </ul>
        </div>
</nav>
*/}

  {/* First main div */}
 <div className="relative flex flex-col items-center justify-center">
  {/* Overlapping Div */}
  <div className="absolute -top-15 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-[300px] h-[80px] text-white bg-black border-0 backdrop-blur-lg rounded-xl shadow-lg py-1 z-10">
 <div className="flex flex-row items-center space-x-3">
        <FaCircle className="text-green-500 text-xl" />
        <span className="text-lg">Open for new Opportunities</span>
      </div>
  </div>

  {/* Main Div */}
  <div className="flex flex-col items-center justify-center w-[600px] h-[250px] text-3xl backdrop-blur-lg  bg-black rounded-xl shadow-lg py-4 border-0 space-y-2">
    <p className="text-2xl font-semibold text-white mr-3 ">
   I make  <FlipWords words={["Backends", "Frontends", "Websites", "Digital marketing"]} />
    </p>
    <p className="font-bold text-3xl text-gray-100">Rabdeep Kaur Badwal</p>
  </div>
</div>

{/*Second div (slightly on bottom and to the right) */}
  <div className="absolute bottom-[130px] right-[-300px] flex flex-col items-center justify-center w-[400px] h-[150px]  text-xl
              bg-purple/10 backdrop-blur-lg border-0 rounded-xl shadow-lg py-2">
    <p className="text-lg font-semibold text-slate-100 p-4"> I’m a Full-Stack Developer who loves building cool websites that make life easier. Alongside Coding, I also work on social media marketing and enjoy technical writing. </p>
  </div>
  {/*third div*/}
  <div className="absolute bottom-[177px] right-[500px] flex flex-row gap-4 item-center justify-center w-[200px] h-[50px]  text-xl 
  backdrop-blur-lg border-0 rounded-xl shadow-lg py-2 ">
    <Link href="https://github.com/RabdeepKaur">    <FaGithub size={30} color="white" /> </Link>
<Link href="https://www.linkedin.com/in/rabdeep-kaur-35a26925b"> <FaLinkedin size={30} color="white" /></Link>
   <Link href="https://x.com/Rabdeep790">  <FaTwitter size={30} color="white" /> </Link>
<Link href="https://drive.google.com/file/d/13ukFWvqedAB_Fuqw7u9SHLcL42qoQOFc/view?usp=sharing"> <BiSpreadsheet  size={30} color="white"/></Link>

  </div>
</div>

  </div>

)
}