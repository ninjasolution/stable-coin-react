import * as React from 'react';
import { BiSolidDownload } from 'react-icons/bi';
import HeadingTitle from '../../typography/HeadingTitle';

export interface IReserveSectionProps {
    title:string
}

export default function ReserveSection (props: IReserveSectionProps) {
  return (
    <>
       <section className="my-10 grid-cols-12 py-12 sm:px-12 px-4  ">
          <HeadingTitle title={props.title} />
          

          
          <div className="flex justify-center rounded-xl  gap-3 mt-20 bg-slate-200  md:w-4/5 overflow-x-auto">
            <div className="flex flex-col gap-10 items-center boder py-10 flex-1 ">
              <h1 className="font-bold text-xl">Total Net Assets</h1>
              <p className="">U.S. Treasury Debt</p>
              <p className=""> Repurchase Agreements</p>
              <p>Cash Deposits</p>
            </div>
            <div className="flex-1 max-w-[15rem] ">
              <div className=" bg-white shadow-2xl rounded-xl h-full p-10 gap-10 flex flex-col  items-center  ">
                <h5>May Amount (%)</h5>
                <h1 className="font-bold text-2xl">5.28B</h1>
                <p>2.37B(44.97%)</p>
                <p>3.23B(67.97%)</p>
                <p>2.55B(59.71%)</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 items-center  py-10 flex-1">
              <h5>May Amount (%)</h5>
              <h1 className="font-bold text-2xl ">5.28B</h1>
              <p>2.37B(44.97%)</p>
              <p>3.23B(67.97%)</p>
              <p>2.55B(59.71%)</p>
            </div>
          </div>
          
          <p className="py-10">
           
            <span className="cursor-pointer flex items-center justify-center">
              Download letest reserve report <BiSolidDownload />
            </span>
          </p>
        </section>
    </>
  );
}
