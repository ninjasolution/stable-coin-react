import * as React from 'react';

export interface ILandingSectionProps {
}

export default function LandingSection (props: ILandingSectionProps) {
  return (
    <>
       <div className="flex gap-3 lg:p-10 mobile_landing landing md:h-[50vh] lg:h-[420px] md:px-10 h-[320px] sm:h-[423px] mt-0 md:mt-[rem]  lg:mt-0">
          <div className="hidden sm:block lg:basis-[65%] sm:basis-[76%] font-semibold pb-10 md:px-10 mt-16 lg:mt-20">
            <h1 className=" lg:text-[56px] md:text-3xl text-2xl md:leading-[72px]  md:max-w-[40rem] ">
              BUSD (Binance USD)
            </h1>
            <h3 className="lg:text-[32px] md:text-xl leading-[32px] text-yallow_400  md:mt-4 lg:mt-8 font-medium lg:leading-[3.5rem]">
              Buy U.S Dollers(BUSD) through Binance Today!
            </h3>
            <p className="leading-[24px]  text-offwhite_100 font-normal xl:mt-4">
              BUSD is 1:1 USD-backed stablecoin aproved by the New York State <br className="hidden lg:block"></br>
              Department of Financial Services(NYDFS) and issued in
              partnershiped with paxos
            </p>
          </div>
        </div>
        <div className="block sm:hidden p-8 ">
        {/* small screan */}
          <div className="  font-semibold pb-10 md:px-10 xl:mt-[5rem] lg:mt-[3rem]">
            <h1 className=" lg:text-[56px] md:text-3xl text-2xl sm:leading-[72px]  md:max-w-[40rem] ">
              BUSD (Binance USD)
            </h1>
            <h3 className="lg:text-[32px] md:text-xl leading-[32px] text-yallow_400  lg:my-8 md:my-6 font-medium">
              Buy U.S Dollers(BUSD) through Binance Today!
            </h3>
            <p className="leading-[24px]  text-offwhite_100 font-normal sm:mt-4">
              BUSD is 1:1 USD-backed stablecoin aproved by the New York State <br className="hidden lg:block"></br>
              Department of Financial Services(NYDFS) and issued in
              partnershiped with paxos
            </p>
          </div>
        </div>
    </>
  );
}
