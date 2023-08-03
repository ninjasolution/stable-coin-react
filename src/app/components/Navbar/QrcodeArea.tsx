import Image from 'next/image';
import * as React from 'react';

export interface IQrCodeAreaProps {
}

export default function QrCodeArea (props: IQrCodeAreaProps) {
  return (
    <>
     <div className="z-10 absolute hidden group-hover:block  bg-white rounded-md mt-1 right-1 top-5 w-[200px] h-[250px] p-3 shadow-xl">
                <div className="flex p-1 justify-between items-center text-black w-full flex-col">
                  
                
                <Image src="/qr-code.png" alt="qrcode" height={200} width={200}/>
                <p className="text-xs text-offwhite_100 text-center">Scan for download the App on IOS and Android</p>
                <hr />
                <button className="w-full whitespace-nowrap bg-yallow_300 rounded text-md p-1 hover:opacity-80 cursor-pointer">More Download Options</button>
                
                </div>
              </div> 
    </>
  );
}
