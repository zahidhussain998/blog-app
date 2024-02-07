import Image from "next/image";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto flex justify-between p-5">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/n.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
        <Link href="/">
          <h1 className="text-2xl">
            <span className="">Netialap</span>{" "}
          </h1>
        </Link>

      </div>
      <div className="flex items-center space-x-5 text-[#0A7DFF]">
        <h3>
          {" "}
          <DarkModeButton />
        </h3>
        <div className=" flex-wrap hidden md:inline-flex items-center space-x-5 ">
          <Link href="/about" className="font-medium hover:text-gray-700">
            <h3>About </h3>
          </Link>

          <Link href="/contact" className="font-medium hover:text-gray-700">
            <h3>Contact </h3>
          </Link>


          <Link href="/sponser" className="font-medium hover:text-gray-700">
            <h3>Sponsor</h3>
          </Link>
          
          
          
        </div>
      
      </div>

      {/* <div className="flex items-center space-x-5 text-[#0A7DFF]">

      <DarkModeButton/>
        <Link
          href="/contact"
          className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#0A7DFF] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out hover:shadow-[#0A7DFF] hover:before:h-56 hover:before:w-56 text-white rounded-full"
          >
        <span className="relative z-10"> 
        Contact Us
          </span> 
        </Link>
      </div> */}
    </header>
  );
}


