import React from "react";
import HomePageCard from "./HomePageCard";

const Hero = () => {
  return (
    <div className="px-24">
      <div className="bg-gray-200 rounded-xl ">
        <div className="grid grid-cols-4 gap-4 p-10">
        <div className="mb-6 p-4">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          "I found solution to all my design needs from Creative Tim. I use them
          as a freelancer in my hobby projects for fun! And its really affordable,
          very humble guys !!!"
        </p>
      </div>
      <div className="">
          <HomePageCard/>
      </div>
      <div className="">
          <HomePageCard/>
      </div>

      <div className="">
          <HomePageCard/>
      </div>
      
       

        </div>
      </div>
    </div>
  );
};

export default Hero;
