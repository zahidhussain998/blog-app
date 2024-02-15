"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import { TfiAlignJustify } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const hiddenMobileMenu = mobileMenuOpen ? 'block' : 'hidden';

  return (
    <header className="max-w-7xl mx-auto">
      <div className="flex justify-between p-5 border border-[#0A7DFF] rounded-full mt-2">
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
          <div className="flex items-center space-x-5 md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#0A7DFF] focus:outline-none"
            >
              {/* Mobile Menu Icon (You can use an icon library here) */}
              {mobileMenuOpen ? <IoCloseSharp /> : <TfiAlignJustify />}
            </button>
          </div>
          <div className="flex-wrap hidden md:inline-flex items-center space-x-5">
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
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-44 top-16 right-0 p-5 border-b border-[#0A7DFF] ${hiddenMobileMenu} shadow-lg`}>
        {/* Add your mobile menu items here */}
        <Link href="/about" className="block mb-3">
          <h3>About </h3>
        </Link>
        <Link href="/contact" className="block mb-3">
          <h3>Contact </h3>
        </Link>
        <Link href="/sponser" className="block">
          <h3>Sponsor</h3>
        </Link>
      </div>
    </header>
  );
}
