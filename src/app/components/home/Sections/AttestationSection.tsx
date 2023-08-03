import * as React from 'react';
import HeadingTitle from '../../typography/HeadingTitle';

export interface IAppProps {
    title:string
}

export default function AttestationSection (props: IAppProps) {
  return (
    <>
       <section className="pl-5 px-10">
          <div className="px-10">
            <HeadingTitle title={props.title} />
          </div>

          <div className="overflow-x-auto">
            <div className=" text-xl">
              <div className="flex gap-3">
                <ul className="flex gap-12 ml-4 px-10 mt-3">
                  <li className="py-3 px-2 hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer ">
                    2020
                  </li>
                  <li className="py-3 px-2 hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer">
                    2021
                  </li>
                  <li className="py-3 px-2  hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer">
                    2022
                  </li>
                  <li className="py-3 px-2  bg-yallow_70 text-yallow_150 rounded cursor-pointer">
                    2023
                  </li>

                 
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto overflow-x-hidden">

            <div className=" text-sm">
              <div className="flex gap-3">
                <ul className="flex gap-12 ml-4 px-10">

                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100 hover:text-yallow_400">
                    Jan
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Feb
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Mar
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Apr
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    May
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Jun
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Jul
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Aug
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Sep
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Oct
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Nov
                  </li>
                  <li className="hover:text-yallow_150 py-1  rounded cursor-pointer text-offwhite_100  hover:text-yallow_400">
                    Dec
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
