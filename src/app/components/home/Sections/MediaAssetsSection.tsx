import * as React from 'react';
import HeadingTitle from '../../typography/HeadingTitle';
import LinkSpan from "../../typography/LinkSpan"
export interface IAppProps {
    title:string,
    description:string,
    btnText:string
}

export default function MediaAssetsSection (props: IAppProps) {
  return (
    <>
    <section className="mt-5 md:px-10 ">
     <div className="px-10 flex flex-col ">
            <HeadingTitle title={props.title} />
            
          <div className='my-10  '>
        <p className='mb-5'>{props.description}</p> 
        <p className='flex gap-1 text-yallow_400'>
            <LinkSpan
            title={props.btnText}
            />
        <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z" fill="currentColor"></path></svg>
        </p>
          </div>
          </div>
         
        </section>
      
    </>
  );
}
