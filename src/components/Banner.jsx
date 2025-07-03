import React from 'react';
import { BsDot } from 'react-icons/bs'; // You can change this icon

const Banner = () => {
  const items = ["UI/UX", "Tech Support", "Web Developer"];
  const repeatedItems = Array.from({ length: 3 }, () => items).flat();

  return (
    <div className='bg-secondary w-full h-16 lg:mt-38 mt-64 overflow-hidden whitespace-nowrap flex justify-center items-center'>
      <div className="text-main font-extralight text-xl flex gap-4 flex-wrap justify-center items-center">
        {repeatedItems.map((text, index) => (
          <span key={index} className="flex items-center gap-1">
            <span>&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;</span>
            <BsDot className="text-details text-xl" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
