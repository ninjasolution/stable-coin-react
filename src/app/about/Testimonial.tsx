import React from "react";
import Image from "next/image";
import testi from "../../app/assets/testi.png";

const Testimonial: React.FC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 rounded-lg p-4 py-24 sm:px-10">
        <div className="w-44 ">
          <Image
            src={testi}
            alt="Testimonial Person"
            width={400}
            height={500}
          />
          <h1 className=" text-lg  font-medium whitespace-nowrap">CZ(Changpeng Zhao)</h1>
          <p className="text-xs text-offwhite_50 whitespace-nowrap">founded & Chief Executive Officer</p>
        </div>

        <div className="ml-4">
          
          <p className="text-gray-600 px-2 sm:px-5">
          Changpeng Zhao, known as CZ, is a serial entrepreneur with an impressive track record of successful startups. He launched Binance in July 2017 and, within 180 days, grew Binance into the largest digital asset exchange in the world by trading volume. An pioneer within the blockchain industry, CZ has built Binance into the leading blockchain ecosystem, comprised of Binance Exchange, Labs, Launchpad, Academy, Research, Trust Wallet, Charity, NFT, and more. CZ spent his
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 rounded-lg p-4">
        <div className="ml-4 order-2 sm:order-none tracking-tighter">
          
          <p className="text-gray-600 px-2 sm:px-5">
          He Yi leads business, marketing, and branding strategy at Binance. Yi has led the business strategy behind Binance’s growth to become the world’s largest crypto exchange – having pivoted the company from just a crypto-to-crypto trading platform to a global blockchain ecosystem. Before co-founding Binance, Yi served as Vice President at Yixia Technology, the leading mobile video tech company behind popular mobile apps like Miaopai, Xiaokaxiu, and Yizhibo, where she led
          </p>
        </div>
        <div className="w-44  order-1 sm:order-none">
          <Image
            src={testi}
            alt="Testimonial Person"
            width={400}
            height={500}
          />
          <h1 className=" text-lg  font-medium whitespace-nowrap">He Yi</h1>
          <p className="text-xs text-offwhite_50 whitespace-nowrap tracking-tighter">Co-Founder & Chief Marketing Officer</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
