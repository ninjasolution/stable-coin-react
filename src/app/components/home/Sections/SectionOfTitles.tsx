import * as React from 'react';
import HeadingTitleMd from '../../typography/HeadingTitleMd';
import TitlesSection from '../../typography/TitlesSection';

export interface ISectionOfTitlesProps {
}

export default function SectionOfTitles (props: ISectionOfTitlesProps) {
  return (
    <>
     <section className="md:mt-5 py-10 px-10">
          <div className="flex md:flex-row text-center flex-col gap-10  justify-around items-center ">
            <TitlesSection title="$38B" subtitle="Market Cap Today" />
            <TitlesSection title="6.7M" subtitle="# of Holders" />

            <HeadingTitleMd
              title="Deposit your Binance USD and earn interest"
              className="md:max-w-[23rem] "
            />
          </div>
        </section> 
    </>
  );
}
