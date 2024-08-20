import React from 'react';
import Marquee from 'react-fast-marquee';

const InfiniteText = () => {
  return (
    <div className="w-full h-[1.7rem] bg-[#1A1C4E] overflow-hidden flex items-center">
      <Marquee gradient={false} speed={50}>
        <p className="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sit veniam delectus ea! Enim asperiores odio cumque porro incidunt cupiditate?
        </p>
      </Marquee>
    </div>
  );
};

export default InfiniteText;
