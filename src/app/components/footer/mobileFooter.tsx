"use client";
import React, { useState } from "react";
import {FaPlus,FaMinus} from "react-icons/fa6"

interface faq {
  question: string;
  answer: Array<string>;
}
interface MobileFooterProps {
 
  faqData: Array<faq>;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ faqData }) => {
  const [showList, setShowList] = useState<number[]>([]);

  const toggleAccordion = (key: number) => {
    if (showList.includes(key)) {
      setShowList((prevList) => prevList.filter((num) => num !== key));
    } else {
      setShowList((prevList) => [...prevList, key]);
    }
  };
  
  return faqData.map((Faq, key) => (
    <div className="border-b border-gray-200 py-4 md:hidden" key={key}>
      <div
        className="w-full text-left text-xl focus:outline-none flex items-center justify-between cursor-pointer group"
        onClick={() => {
          toggleAccordion(key);
        }}
      >
      <p>  {Faq.question}</p> 
      <span className="w-5  transition-all duration-200">
     { showList.includes(key) ? <FaMinus /> : <FaPlus /> }
      </span>
      </div>
      {showList.includes(key) && (
        <ul className="mt-2 text-start">
            {Faq.answer.map((item,index)=>{return <li className="curosr-pointer " key={index}>{item}</li>})}
        </ul>
      )}
    </div>
  ));
};

export default MobileFooter;
