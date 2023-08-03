import * as React from 'react';
import InfoCard from '../../card/InfoCard';
import Image from 'next/image';

export interface IActionCardSectionProps {
}

export default function ActionCardSection (props: IActionCardSectionProps) {
  return (
    <>
       <section className="my-5 md:px-10 py-10">
          <div className=" flex md:flex-row flex-col md:px-10 items-center">
            <InfoCard
              title="Convert Stablecoin"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/coinroundicon.png"
              action="Convert to BUSD >"
              className="flex-1 order-3 md:order-none"
            />
            
            <div
      className="relative m-5 sm:m-0 flex-1 px-5 py-3 border bg-white card-box-shadow flex flex-col gap-5 items-center max-w-[30rem]  whitespace-nowrap rounded-md  "
    >
        <p className='bg-yallow_300 absolute text-xs rounded right-7 top-10 sm:top-5 px-2 py-1 '>Hot</p>
      <Image src="/btcdollericon.png" height={150} width={150} alt="icon" />
      <h1 className="text-xl font-medium leading-5">Purchase With Fiat</h1>
      <span className="bg-yallow_60 py-2 px-3 text-yallow_400 bg-yallow_70 text-xs leading-5">
        0 Fees
      </span>
      <p className="text-sm leading-[20px] text-offwhite_100 whitespace-normal ">Purchase 1:1 with USD via wire transfer, or top up your Binance Spot Wallet with other currencies to exchange to BUSD.</p>
      
      <button className='text-sm leading-[21px] text-yallow_80 font-medium bg-yallow_300 px-3 py-2 w-full rounded m-3 hover:opacity-80 '>
        Purchase Now
        </button>
    </div>

            <InfoCard
              title="Trade On Binance"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/coinroundicon.png"
              action="Convert to BUSD >"
              className="flex-1 "
            />
          </div>
        </section> 
    </>
  );
}
