import React from 'react'

const Hero = () => {
  return (
    <nav className="bg-white  text-sm ">
      <div className="flex items-center gap-3 p-10 about_landing h-[15rem] sm:h-[70vh] ">
        <div className="hidden md:block md:basis-1/2 font-semibold pb-10 sm:px-10">
          <h1 className=" md:text-[42px] lg:text-[48] text-xl leading-[56px]  md:max-w-[40rem]">
            Welcome to Binance
          </h1>
          <p className="leading-[24px] text-offwhite_100 text-xl mt-2 font-normal">
            At Binance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.
          </p>
        </div>

      </div>
        <div className="md:hidden font-semibold px-10">
          <h1 className=" md:text-[56px] text-xl leading-[72px]  md:max-w-[40rem]">
            Welcome to Binance
          </h1>
          <p className="leading-[24px] text-offwhite_50 text-xl mt-2">
            At Binance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.
          </p>
        </div>
    </nav>
  )
}

export default Hero