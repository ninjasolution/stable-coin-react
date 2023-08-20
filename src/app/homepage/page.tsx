"use client";

import React, { useState, useEffect } from "react";
import CoinInfoCard from "./CoinInfoCard";
import StackingInfoCardContainer from "./StakingInfoCardContainer";
import CoinInfoCardCompleted from "./CoinInfoCardCompleted";
import StackingInfoCardContainerCompleted from "./StackingInfoCardContainerCompleted";

const page = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > 0;
      setIsNavSticky(shouldStick);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <nav
          className={`px-10 py-5 flex justify-between ${
            isNavSticky ? "sticky-nav" : ""
          }`}
        >
          <h1 className="text-2xl font-semibold">HomePage</h1>
          <button className="text-sm px-4 rounded-lg bg-gray-200">
            Binance
          </button>
        </nav>
        <div className="px-10 py-10">
          <h1 className="text-2xl font-semibold">Binance Launchpool</h1>
          <p>A secure way to farm new assets.</p>
        </div>
      </div>
      <section className="md:mx-10 overflow-auto bg-gray-100 rounded-lg">
        <div
          className="py-10 px-10 flex flex-col gap-10 
        md:flex-row md:items-center md:justify-between w-full  "
        >
          <CoinInfoCard />
          <StackingInfoCardContainer />
        </div>
      </section>

      <section className="md:mx-10 overflow-auto bg-gray-100 rounded-lg mt-12">
        <div
          className="py-10 px-10 flex flex-col gap-10 
        md:flex-row md:items-center md:justify-between w-full  "
        >
          <CoinInfoCard />
          <StackingInfoCardContainer />
        </div>
      </section>

      {/* Completed section  */}

      <section className="md:mx-10 overflow-auto bg-gray-100 rounded-lg mt-12">
        <div
          className="py-10 px-10 flex flex-col gap-10 
        md:flex-row md:items-center md:justify-between w-full  "
        >
          <CoinInfoCardCompleted />
          <StackingInfoCardContainerCompleted />
        </div>
      </section>
    </>
  );
};

export default page;
