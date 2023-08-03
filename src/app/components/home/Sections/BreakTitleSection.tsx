import * as React from 'react';

export interface IBreakTitleSectionProps {
    title:string
}

export default function BreakTitleSection (props: IBreakTitleSectionProps) {
  return (
    <>
      <section className="mt-5 md:px-10">
          {/* Break Title Section */}
          <div className="flex items-center text-xl leading-[32px] text-offwhite_100 w-full px-10 gap-10 ">
            <hr className="flex-1 w-full h-[2px] bg-offwhite_100 opacity-50" />{" "}
            <span className=" text-center">{props.title}</span>{" "}
            <hr className="flex-1  w-full  h-[2px] bg-offwhite_100 opacity-50" />
          </div>
        </section> 
    </>
  );
}
