// components/AdSense.js

import React, { useEffect } from 'react';

const AdSense = ({ adClient, adSlot }) => {
  useEffect(() => {
    if (window) {
      // Load AdSense script dynamically on the client-side
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8731247500470013`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSense;



