import * as React from 'react';

export interface IAdvisoryItemProps {
}

export default function AdvisoryItem (props: IAdvisoryItemProps) {
  return (
    <div className='grid md:grid-cols-12 grid-cols-1 '>

    <div className='w-full grid grid-cols-12 gap-3 my-3 col-span-6 hover:bg-slate-100 p-1'>
        <div className='space-y-3 col-span-4 sm:col-span-2'>
            <h1>Max Brakus</h1>
     
            <h3 className=" text-offwhite_100 text-sm">USA</h3>
        </div>
        <p className='col-span-8  text-offwhite_100 text-sm'>
        Former U.S. Ambassador to the People’s Republic of China; Former U.S. Senator Montana; Former Chairman of Senate Committee on Finance
        </p>
    </div>
    <div className='w-full grid grid-cols-12 gap-3 my-5 col-span-6   hover:bg-slate-100 p-3'>
        <div className='space-y-3 col-span-4 sm:col-span-2'>
            <h1>Max Brakus</h1>
            <h3 className=" text-offwhite_100 text-sm">USA</h3>
        </div>
        <p className='col-span-8  text-offwhite_100 text-sm'>
        Former U.S. Ambassador to the People’s Republic of China; Former U.S. Senator Montana; Former Chairman of Senate Committee on Finance
        </p>
    </div>
  </div>
  );
}
