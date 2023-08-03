import * as React from 'react';
import HeadingTitle from '../../typography/HeadingTitle';
import LinkSpan from "../../typography/LinkSpan"
export interface IAppProps {
    title:string,
    description:string,
    btnText:string,
    email:string
}

export default function ContactUsSection (props: IAppProps) {
  return (
    <>
    <section className="mt-5 md:px-10 ">
     <div className="px-10 flex flex-col">
            <HeadingTitle title={props.title} />
            
          <div className='my-10  space-y-10'>
            <div className='space-y-2'>
                <p>For business cooperation requests, please connect us at:</p>
                 <p className='flex gap-1'>
                    <strong>BUSD Email:</strong>
                    <LinkSpan
                    title={props.email}
                    />              
                    </p>
            </div>
            <div className='space-y-2'>
                <p>Submit your queries to build with BUSD</p>
                <p className='flex gap-1'>
                    Google Form: 
                   <LinkSpan
                   title={props.btnText}
                   />
                </p>                
            </div>

        <p className='mb-5'>{props.description}</p> 
        
          </div>
          </div>
         
        </section>
      
    </>
  );
}

