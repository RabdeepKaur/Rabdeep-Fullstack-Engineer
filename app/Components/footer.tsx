import { BiSpreadsheet } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
   
   export default function Footer() {
     return (
       <>
   <footer className="bg-white text-black w-full">
        <p className="text-center font-bold  flex flex-row justify-center items-center gap gap-6   ">
                   <Link href="https://github.com/RabdeepKaur">
              <FaGithub size={24} color="black" />
            </Link>
            <Link href="https://www.linkedin.com/in/rabdeep-kaur-35a26925b">
              <FaLinkedin size={24} color="black" />
            </Link>
            <Link href="https://x.com/Rabdeep790">
              <FaTwitter size={24} color="black" />
            </Link>
            <Link href="https://drive.google.com/file/d/13ukFWvqedAB_Fuqw7u9SHLcL42qoQOFc/view?usp=sharing">
              <BiSpreadsheet size={24} color="black" />
            </Link>
        </p>
      </footer>
      </>
        )
    }