import React from "react";
import MobileFooter from "./mobileFooter";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
const Footer: React.FC = () => {
  const faqData = [
    {
      question: "About",
      answer: ["Home", "Link"],
    },
    {
      question: "Product",
      answer: ["Home", "Link"],
    },
    {
      question: "Service",
      answer: ["Home", "Link"],
    },
    {
      question: "Support",
      answer: ["Home", "Link"],
    },
    {
      question: "Learn",
      answer: ["Home", "Link"],
    },

    // Add more FAQ items as needed
  ];

  return (
    <footer className="text-center  lg:text-left px-28  text-offwhite_100 ">
      <MobileFooter faqData={faqData} />

      <div className="mx-6 py-10 text-center md:text-left hidden md:block">
        <div className="flex  justify-between">
          {/* Prducts */}
          <div>
            <h6 className="mb-2 flex justify-center text-xl font-bold  uppercase md:justify-start text-black">
              About Us
            </h6>
            <p className="mb-2">
              <a href="#!" className="">
                Press
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Careers
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Bussniess Contacts
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Community
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                legel
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Terms
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Privacy
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Risk Warning
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Terms
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Privacy
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Risk Warning
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                Announcements
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                News
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                Notices
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                Sitemap
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Cookies Preferences
              </a>
            </p>
          </div>
          {/* Products */}
          <div>
            <h6 className="mb-2 flex justify-center text-xl font-bold  uppercase md:justify-start text-black">
              Products
            </h6>
            <p className="mb-2">
              <a href="#!" className="">
                Exchange
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Academy
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Leveraged Token
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Live
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                Charity
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Labs
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Launchpad
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Research
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Pay
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Gift Card
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                BABT
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                Tax
              </a>
            </p>
          </div>

          {/* no 3 */}

          <div>
            <h6 className="mb-2 flex justify-center text-xl font-bold  uppercase md:justify-start text-black">
              Service
            </h6>
            <p className="mb-2">
              <a href="#!" className="">
                Downloads
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Desktop Application
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Buy Crypto
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Institutional & VIP Services

              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                React
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Vue
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
OTC Trading
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Referral
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Affiliate
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                BNB
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
              Listing Application
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              P2P Merchant Application
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
              P2Pro Merchant Application
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Historical Market Data
              </a>
            </p>
  
            <p className="mb-2">
              <a href="#!" className="">
              Proof of Reservessss
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-2 flex justify-center text-xl font-bold  uppercase md:justify-start text-black">
            Support 
            </h6>
            <p className="mb-2">
              <a href="#!" className="">
              Request a Feature
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Support Center
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                24/7 Chat Support 
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                APIs
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                Fess
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Trading Rules
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Binance Verify
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Law Enforcement Requests
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Binance Legal (Court Orders)
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Binance Airdrop Portal
              </a>
            </p>
          </div>

          {/* no 4 */}

          <div>
            <h6 className="mb-2 flex justify-center text-xl font-bold  uppercase md:justify-start text-black">
            Learn
            </h6>
            <p className="mb-2">
              <a href="#!" className="">
              Learn & Earn
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Browse Crypto Prices
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Bitcoin Price
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Ethereum Price
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
              Browse Crypto Price Predictions
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Bitcoin Price Prediction
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Ethereum Price Prediction
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Buy BNB
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Buy BUSD
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
                Buy Bitcoin
              </a>
            </p>
            <p className="mb-2">
              <a href="#!" className="">
              Buy Ethereum
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
              Buy Dogecoin
              </a>
            </p>

            <p className="mb-2">
              <a href="#!" className="">
                Buy Bitcoin
              </a>
            </p>
          </div>

          {/* Icons section */}
          <div>
            <h6 className="mb-2 flex text-black justify-center font-semibold uppercase md:justify-start">
              Community
            </h6>

            <div className="flex gap-3">
              <TiSocialYoutube size="30px" />

              <TiSocialLinkedin size="30px" />

              <TiSocialFacebook size="30px" />

              <TiSocialTwitter size="30px" />
            </div>
         
          </div>
          <div className=" text-left hidden">
            <h1 className="text-xl">Comunity</h1>

            <div className="flex gap-3">
              <TiSocialYoutube size="30px" />

              <TiSocialLinkedin size="30px" />

              <TiSocialFacebook size="30px" />

              <TiSocialTwitter size="30px" />
            </div>
          </div>
        </div>
      </div>
      {/* Icons section */}
      <div className="mx-3 text-left mt-3 sm:mt-10 md:hidden">
        <h1 className="text-xl">Comunity</h1>

        <div className="flex gap-3">
          <TiSocialYoutube size="30px" />

          <TiSocialLinkedin size="30px" />

          <TiSocialFacebook size="30px" />

          <TiSocialTwitter size="30px" />
        </div>
      </div>
      <div className="p-6 text-center text-sm">
        <a className="font-semibold" href="https://tailwind-elements.com/">
          Binance © 2023
        </a>
      </div>
    </footer>
  );
};

export default Footer;
