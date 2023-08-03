import * as React from 'react';

export interface INotificationAreaProps {
}

export default function NotificationArea (props: INotificationAreaProps) {
  return (
    <>
     <div className="absolute z-70 hidden group-hover:block  bg-white rounded-md mt-1 right-1 top-5 w-[400px] h-[250px] p-3 shadow-xl">
                <div className="flex p-5 justify-between items-center text-black">
                  <p>All Notifications</p>
                  <p className="text-yallow_150">clear</p>
                </div>
                <div className="h-full">
                <p className="text-center text-offwhite_100">No Notifications</p>
                </div>
              </div> 
    </>
  );
}
