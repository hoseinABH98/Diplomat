import React from 'react';
import gif1 from '../assets/images/g1.gif';
import gif2 from '../assets/images/g2.gif';
const AdsGif = () => {
  return (
    <div className="flex flex-col h-full">
      <img
        className="rounded-lg pt-2 md:pt-0 h-40  sm:h-auto "
        src={gif2}
        alt="ads gif"
      />
      <img
        className="rounded-lg  mt-2 hidden md:block"
        src={gif1}
        alt="ads gif"
      />
    </div>
  );
};

export default AdsGif;
