import * as React from 'react';

export interface IAppProps {
    title:string,
    className?:string,
}

export default function App (props: IAppProps) {
  return (
    <>
      <span className={`${props.className} flex gap-1 cursor-pointer text-yallow_400 hover:underline underline-yallow_400 whitespace-nowrap`}>
                        {props.title}
                    </span> 
    </>
  );
}
