import React from 'react';
import MobileFooter from './mobileFooter';
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube} from "react-icons/ti"
const Footer: React.FC = () => {

  const faqData = [
    {
      question: "About",
      answer: ["Home","Link"],
    },
    {
      question: "Product",
      answer: ["Home","Link"],
    },
    {
      question: "Service",
      answer: ["Home","Link"],
    },
    {
      question: "Support",
      answer: ["Home","Link"],
    },
    {
      question: "Learn",
      answer: ["Home","Link"],
    },
   
    // Add more FAQ items as needed
  ];
  
  return (
    <footer className="text-center  lg:text-left px-10  text-offwhite_100">
      <MobileFooter
      faqData={faqData}
      />

      <div className="mx-6 py-10 text-center md:text-left hidden md:block">
        <div className="flex  justify-between">
          {/* Tailwind Elements section */}
          <div>
            <h6 className="mb-4 flex justify-center  uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Laravel
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center  uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Laravel
              </a>
            </p>
          </div>
          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="">
                Laravel
              </a>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 ">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 ">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-neutral-600 ">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 ">
                Laravel
              </a>
            </p>
          </div>
         
          {/* Icons section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Community
            </h6>
            
             <div className='flex gap-3'>

            <TiSocialYoutube size="30px" />
             
            
            
                  
             <TiSocialLinkedin size="30px" />
       
       
             
             <TiSocialFacebook size="30px" />
       
       
             
             <TiSocialTwitter size="30px" />
             </div>
            
          </div>
          <div className=' text-left hidden'>
            <h1 className='text-xl'>Comunity</h1>

            <div className='flex gap-3'>
             

                  <TiSocialYoutube size="30px" />
             
            
            
                  
                  <TiSocialLinkedin size="30px" />
            
            
                  
                  <TiSocialFacebook size="30px" />
            
            
                  
                  <TiSocialTwitter size="30px" />
            </div>
           </div>
        </div>
      </div>
      {/* Icons section */}
           <div className='mx-3 text-left mt-3 sm:mt-10 md:hidden'>
            <h1 className='text-xl'>Comunity</h1>

            <div className='flex gap-3'>
              
                  

                  <TiSocialYoutube size="30px" />

            
            
                  
                  <TiSocialLinkedin size="30px" />
            
            
                  
                  <TiSocialFacebook size="30px" />
            
            
                  
                  <TiSocialTwitter size="30px" />
            </div>
           </div>
      <div className="p-6 text-center text-sm">
        
        <a
          className="font-semibold"
          href="https://tailwind-elements.com/"
        >
          Binance © 2023
        </a>
      </div>
    </footer>
  );
};

export default Footer;
