import Image from 'next/image';
import * as React from 'react';

export interface IHoverListProps {
}

export default function HoverList (props: IHoverListProps) {
  return (
    <>
      <ul className="absolute hidden group-hover:block  bg-white rounded-md mt-1 top-5 w-[400px] p-3 shadow-xl transition-all duration-300">
                  <li className="px-3 py-1 hover:bg-yallow_70 flex gap-3 ">
                    <Image src="/bank_icon.png" alt="icon" height={40} width={50} />

                    <div className="space-y-3">
                      <h1 className="text-black">Market OverView</h1>
                      <p className="text-sm text-offwhite_100 space-y-2">Overview of the crypto market with realtive analatics</p>
                    </div>

                  </li>
                  <li className="px-3 py-1 hover:bg-yallow_70 flex gap-3 ">
                    <Image src="/bank_icon.png" alt="icon" height={40} width={50} />

                    <div className="space-y-3">
                      <h1 className="text-black">Market OverView</h1>
                      <p className="text-sm text-offwhite_100 space-y-2">Overview of the crypto market with realtive analatics</p>
                    </div>

                  </li>
                  <li className="px-3 py-1 hover:bg-yallow_70 flex gap-3 ">
                    <Image src="/bank_icon.png" alt="icon" height={40} width={50} />

                    <div className="space-y-3">
                      <h1 className="text-black">Market OverView</h1>
                      <p className="text-sm text-offwhite_100 space-y-2">Overview of the crypto market with realtive analatics</p>
                    </div>

                  </li>
                  
                </ul> 
    </>
  );
}
