import HeadingTitle from "../typography/HeadingTitle";
import FaqItem from "./FaqItem";

const FaqSectionProps = [
  
];

const FaqSection: React.FC = () => {
    const faqData = [
        {
          question: "What is Tailwind CSS?",
          answer: "Tailwind CSS is a utility-first CSS framework...",
        },
        {
          question: "How do I install Tailwind CSS?",
          answer: "You can install Tailwind CSS using npm or yarn...",
        },
        // Add more FAQ items as needed
      ];
      
  return (
    <>
       <section className="pl-5 px-10 mt-10">
          <div className="px-10">
            <HeadingTitle title="FAQ" />
          </div>
          <div className="mx-10">
            <FaqItem
              question={faqData[0].question}
              answer={faqData[0].answer}
              faqData={faqData}
            />
          </div>
        </section>
    </>
 
  );
};

export default FaqSection;
