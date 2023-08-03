"use client";
import React, { useState } from "react";

interface faq {
  question: string;
  answer: string;
}
interface FaqItemProps {
  question: string;
  answer: string;
  faqData: Array<faq>;
}

const FaqItem: React.FC<FaqItemProps> = ({ faqData }) => {
  const [showList, setShowList] = useState<number[]>([]);

  const toggleAccordion = (key: number) => {
    if (showList.includes(key)) {
      setShowList((prevList) => prevList.filter((num) => num !== key));
    } else {
      setShowList((prevList) => [...prevList, key]);
    }
  };
  
  return faqData.map((Faq, key) => (
    <div className="border-b border-gray-200 py-4 " key={key}>
      <div
        className="w-full text-left font-semibold text-xl focus:outline-none flex items-center justify-between cursor-pointer group"
        onClick={() => {
          toggleAccordion(key);
        }}
      >
      <p>  {Faq.question}</p> 
      <span className={`w-5 transform transition-all duration-200 group-hover:text-yallow_400 ${showList.includes(key) ? "-rotate-90" : "rotate-90" }`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z" fill="currentColor"></path></svg>
      </span>
      </div>
      {showList.includes(key) && (
        <p className="mt-2 text-gray-700">{Faq.answer}</p>
      )}
    </div>
  ));
};

export default FaqItem;
