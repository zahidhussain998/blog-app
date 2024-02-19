import React from 'react';
import "../../styles/globals.css";
import { Metadata } from 'next';



const AboutPage = () => {
  return (
   
    <div className="max-w-2xl mx-auto p-8 h-full">
    <h1 className="text-5xl font-bold mb-10">About Us</h1>
    <p className='mt-10 mb-20'>
    Welcome to Netialp.com your guide through a digital space of knowledge and inspiration.
      Our platform believes in the transformative power of information, offering a curated
      collection of articles and resources for professionals, entrepreneurs, and those
      seeking inspiration.
    </p>
 
    <p className="mt-10  mb-20">
      At Netialp.com , our vision is to reach and empower thousands, creating a community
      of informed individuals. We go beyond a typical blog, aiming to be your reliable source
      for diverse topics and practical insights.
    </p>

    <p className="mt-10 mb-20">
      Explore articles spanning  reflecting our
      commitment to quality and authenticity. Connect with us on for
      updates and engaging discussions.
    </p>

    <p className="mt-10 mb-20">
      For questions or topic suggestions, reach out at netilap@netilap.com. Thank you for
      being a part of the Netialp.com community. Let-s learn, grow, and thrive together!
    </p>
  </div>
  );
};

export default AboutPage;
