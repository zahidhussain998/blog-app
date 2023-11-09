import Image from "next/image";
import Link from "next/link";

export default function Header() {
 
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/Footer.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </Link>
        <Link href="/">
  <h1 className="text-2xl">
    <span className="text-white">Radiant</span>{" "}
    <span className="text-[#0A7DFF]">Pulse</span>
  </h1>
</Link>
      </div>

      <div>
        <Link
          href="/contact"
          className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#0A7DFF] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out hover:shadow-[#0A7DFF] hover:before:h-56 hover:before:w-56 text-white rounded-full"
        >
        <span className="relative z-10"> 
        Contact Us
          </span> 
        </Link>
      </div>

</header>
  );
}

        

