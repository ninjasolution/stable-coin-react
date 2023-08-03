import * as React from 'react';
import { IconContext } from 'react-icons';
import { BiCaretDown } from 'react-icons/bi';

export interface ISideNavProps {
  isOpen:boolean
  onClose:()=>void
}

export default function SideNav (props: ISideNavProps) {
  return (
    <>
     
<nav
  id="sidenav-1"
  className={`absolute right-0 top-0 z-[1035] h-full w-[70vw] -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0  ${props.isOpen ? "block " : "hidden"}`}
  data-te-sidenav-init
  data-te-sidenav-hidden="false"
  data-te-sidenav-position="absolute">

<button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
          onClick={() => {
            props.onClose();
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Close BTN */}
        {/* List section */}
        <div className=' mt-10 text-center ml-3'>
          <ul>
          <li className="cursor-pointer hover:text-yellow-400  p-3 ">
              Login
            </li>
            <li className="px-3 py-2 bg-yellow-500 cursor-pointer hover:opacity-80 ">
              Register
            </li>
          </ul>
        </div>
  <ul className="relative m-0 list-none px-[0.2rem] mt-5" data-te-sidenav-menu-ref>
   
  <li className="relative">
      <a
        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
        data-te-sidenav-link-ref>
        <span
          className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clipRule="evenodd" />
          </svg>
        </span>
        
        <span className="cursor-pointer  flex items-center group relative group:">
             <span className="hover:text-yellow-400">Buy Crypto</span> 
              <span className="text-xs bg-yallow_500 ml-1 px-1 rounded-r-md rounded-l-3xl">Euro</span>
              
              </span>
             
        
        <span
          className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 "
          data-te-sidenav-rotate-icon-ref>
          <IconContext.Provider
                value={{ className:"transition-all translate group-hover:rotate-180 text-offwhite_100" }}
                >
              <BiCaretDown/>
              </IconContext.Provider>
             
        </span>
      </a>
      <ul
        className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
        data-te-sidenav-collapse-ref
        data-te-collapse-show>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
            data-te-sidenav-link-ref
            >Link 2</a
          >
        </li>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
            data-te-sidenav-link-ref
            >Link 3</a
          >
        </li>
      </ul>
    </li>
  <li className="relative">
      <a
        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
        data-te-sidenav-link-ref>
        <span
          className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clipRule="evenodd" />
          </svg>
        </span>
        
        <span className="cursor-pointer  flex items-center group relative group:">
             <span className="hover:text-yellow-400">Earn</span> 
              
              
              </span>
             
        
        <span
          className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 "
          data-te-sidenav-rotate-icon-ref>
          <IconContext.Provider
                value={{ className:"transition-all translate group-hover:rotate-180 text-offwhite_100" }}
                >
              <BiCaretDown/>
              </IconContext.Provider>
             
        </span>
      </a>
      <ul
        className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
        data-te-sidenav-collapse-ref
        data-te-collapse-show>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
            data-te-sidenav-link-ref
            >Link 2</a
          >
        </li>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
            data-te-sidenav-link-ref
            >Link 3</a
          >
        </li>
      </ul>
    </li>
  <li className="relative">
      <a
        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
        data-te-sidenav-link-ref>
        <span
          className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clipRule="evenodd" />
          </svg>
        </span>
        
        <span className="cursor-pointer  flex items-center group relative group:">
             <span className="hover:text-yellow-400">Trade</span> 
            
              
              </span>
             
        
        <span
          className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 "
          data-te-sidenav-rotate-icon-ref>
          <IconContext.Provider
                value={{ className:"transition-all translate group-hover:rotate-180 text-offwhite_100" }}
                >
              <BiCaretDown/>
              </IconContext.Provider>
             
        </span>
      </a>
      <ul
        className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
        data-te-sidenav-collapse-ref
        data-te-collapse-show>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
            data-te-sidenav-link-ref
            >Link 2</a
          >
        </li>
        <li className="relative">
          <a
            className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none "
            data-te-sidenav-link-ref
            >Link 3</a
          >
        </li>
      </ul>
    </li>
  
  </ul>
</nav>
{/* Sidenav  */}
    </>
  );
}
