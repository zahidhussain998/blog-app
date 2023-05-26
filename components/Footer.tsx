import React from "react";
import Link from "next/link";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-[#F7AB0A] text-black py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <Link
            href="/privacy"
            className="text-white font-bold text-xl hover:text-black mr-6"
          >
            Privacy Policy
          </Link>
          <Link
            href="/trems"
            className="text-white font-bold text-xl hover:text-black "
          >
            Terms and Conditions
          </Link>
          


        </div>

        
       <div className="flex justify-between">
        <SocialIcon url="https://github.com/zahidhussain998" className="mr-4" target="_black" fgColor="#fff" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.linkedin.com/in/zahid-husssain-685b91240/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://stackoverflow.com/users/21396445/zahid-zahid-husssain" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
       </div>

      </div>
    </footer>
  );
};

export default Footer;


//hover:text-black bg-[#F7AB0A]