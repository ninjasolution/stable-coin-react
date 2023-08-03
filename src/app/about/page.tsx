import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import OurEcoSystem from "./OurEcosystem";
import ContentCard from "../components/card/ContentCard";
import Testimonial from "./Testimonial";
import TitleCard from "./TitileCard";
import HeadingTitle from '../components/typography/HeadingTitle';
import ContentCardSection from "./ContentCardSection";
import GlobalAdvisory from "./GlobalAdvisory";
import WorkingAtSection from "./WorkingAtSection";



const About = () => {
  return (
    <div className="">
     <nav className=" w-full pt-5 sticky top-0 text-offwhite_50 bg-white z-10">
      <ul className="flex gap-3 px-10 ">
        <li className="hover:text-black cursor-pointer font-bold border-yallow_400  border-b-2 ">
          About
          
          </li>
        <li className="hover:text-black cursor-pointer hover:border-b border-yallow_400">Careers</li>
        <li className="hover:text-black cursor-pointer hover:border-b border-yallow_400">Press</li>
        <li className="hover:text-black cursor-pointer hover:border-b border-yallow_400">Comunity</li>
      </ul>
     </nav>
      <Hero />
      <TitleCard/>
      <OurMission />
      <OurEcoSystem />
      <ContentCardSection/>
      <Testimonial/>
      <GlobalAdvisory/>
      <WorkingAtSection/>
    </div>
  );
};
export default About;
