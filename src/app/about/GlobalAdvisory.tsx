import * as React from 'react';
import HeadingTitle from '../components/typography/HeadingTitle';
import AdvisoryItem from '../components/About/AdvisoryItem';

export interface IGlobalAdvisoryProps {
}

export default function GlobalAdvisory (props: IGlobalAdvisoryProps) {
  return (
    <div className="text-sm sm:px-10">
      <div className="flex items-center gap-3 p-10  ">
        <div className=" font-semibold pb-10">
          {/* <h1 className=" text-[56px] leading-[72px]  max-w-[40rem]">
           
          </h1> */}
          <HeadingTitle
          title=' Global Advisory'
          noLink={true}
          />

            <AdvisoryItem/>
            <AdvisoryItem/>
            <AdvisoryItem/>
            <AdvisoryItem/>
            <AdvisoryItem/>
          
          
        


          </div>
          </div>
          </div>
  );
}
