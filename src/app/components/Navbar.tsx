"use client";
import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import {FaSearch} from "react-icons/fa"
import {BsFillHandThumbsDownFill, BsMoonFill, BsQrCodeScan, BsSunFill} from "react-icons/bs"
import { BiCaretDown } from "react-icons/bi";
import { TbBellFilled,TbWorld } from "react-icons/tb";
import {IconContext} from "react-icons"
import HoverList from "./Navbar/HoverList";
import NotificationArea from "./Navbar/NotificationArea";
import QrCodeArea from "./Navbar/QrcodeArea";
import LanguageModal from "./Navbar/LanguageModal";
import SideNav from "./Navbar/SideNav";
const Navbar: React.FC = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDarkMode,setIsDarkMode] = useState(false)
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleCloseSideNav = () => {
    setIsActive(false);
  };
  return (
    <div>
      {/* download smallnav */}
     <div className={`${isHidden && "hidden"}  md:hidden h-[60px] w-full bg-dark bg-[#292D32]`}>
        <ul className="flex py-1 sm:p-1 justify-between items-center">
          <div className="flex gap-3">

          <li>
            <Image src="/logo/binance_icon.svg"
             alt="bnb_icon"
              height={50} width={50}
              className="bg-yallow_400"
              ></Image>
          </li>
          <li className="space-y-1 text-white">
            <h3>Binance App</h3>
            <h4>Secure,first and eligent</h4>
          </li>
              </div>
          <div className="flex gap-3 cursor-pointer">
          <li className="rounded-full bg-yallow_500 p-2">
          <svg className="w-5  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  ><path d="M19 20H5v2h14v-2zM13 14.5l4.6-4.7 1.5 1.4-7.1 7.1-7.1-7.1 1.4-1.4 4.7 4.7V2h2v12.5z" fill="currentColor"></path></svg>
          </li>

          <li className="flex items-center text-white" onClick={()=>setIsHidden(true)}>
          <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  ><path d="M13.4 12l6.6 6.6-1.4 1.4-6.6-6.6L5.4 20 4 18.6l6.6-6.6L4 5.4 5.4 4l6.6 6.6L18.6 4 20 5.4 13.4 12z" fill="currentColor"></path></svg>
          </li>
          </div>
          
        </ul>
     </div>
      {/*   Mobile Nav */}
      <nav className="bg-white text-sm  md:hidden">
        <ul className="flex flex-row sm:gap-4 items-center justify-between p-3">
          <div className="flex gap-4 items-center ">
            <li className="w-[10rem] cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 5120 1024"
                className="fill-yallow_400 "
              >
                <path
                  d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                  p-id="2935"
                ></path>
              </svg>
             
            </li>
          </div>
          <div className="items-center flex sm:gap-3">
            <li className="px-3 py-2  cursor-pointer hover:text-yellow-500 md:hidden">
              <FaSearch/>
            </li>
            <li className="px-3 py-2 bg-yallow_300 cursor-pointer hover:opacity-80 rounded">
              Register
            </li>
            <li
              className="cursor-pointer hover:text-yellow-400 p-3"
              onClick={() => setIsActive(!isActive)}
            >
              <GiHamburgerMenu />
            </li>
          </div>
        </ul>
       {/*  {isActive && (
          <ul className="">
            <li className="cursor-pointer hover:text-yellow-400 p-3 border ">
              Buy Crypto

              
              
            </li>
            <li className="cursor-pointer hover:text-yellow-400  p-3 border">
              Earn
            </li>
            <li className="cursor-pointer hover:text-yellow-400  p-3 border">
              Trade
            </li>
            <li className="cursor-pointer hover:text-yellow-400  p-3 border">
              Login
            </li>
            <li className="px-3 py-2 bg-yellow-500 cursor-pointer hover:opacity-80 ">
              Register
            </li>
          </ul>
        )} */}
      </nav>
      {/*   Desktop Nav  */}
      <nav className="bg-white text-sm md:block hidden">
        <ul className="flex flex-col md:flex-row gap-4 items-center justify-between p-3">
          <div className="flex gap-4 items-center ">
            <li className="w-[10rem] cursor-pointer ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 5120 1024"
                className="fill-yallow_400 "
              >
                <path
                  d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z"
                  p-id="2935"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer  flex items-center group relative">
             <span className="hover:text-yellow-400">Buy Crypto</span> 
              <span className="text-xs bg-yallow_500 ml-1 px-1 rounded-r-md rounded-l-3xl">Euro</span>
              <IconContext.Provider
                value={{ className:"transition-all translate group-hover:rotate-180 text-offwhite_100" }}
                >
              <BiCaretDown/>
              </IconContext.Provider>
             <HoverList/>
              </li>
            <li className="cursor-pointer hover:text-yellow-400 flex items-center group relative">
              Earn
              <IconContext.Provider
                value={{ className:"transition-all translate group-hover:rotate-180 text-offwhite_100" }}
                >
              <BiCaretDown/>
              </IconContext.Provider>

              <HoverList/>
            </li>
            <li className="cursor-pointer hover:text-yellow-400 flex items-center group relative">
              Trade
              <IconContext.Provider
                value={{ className:"transition-all translate group-hover:rotate-180 text-offwhite_100" }}
                >
              <BiCaretDown/>
              </IconContext.Provider>

              <HoverList/>
              </li>
          </div>
          <div className="items-center flex gap-4">
            <li className="cursor-pointer hover:text-yellow-400">Login</li>
            <li className="px-3 py-2 bg-yallow_300 cursor-pointer hover:opacity-80 rounded">
              Register
            </li>
            <li className="cursor-pointer hover:text-yellow-400 group relative">
              {/* notification */}
            <IconContext.Provider
                value={{ className:"transition-all w-5" }}
                >
              <TbBellFilled/>
              </IconContext.Provider>

              {/* hover area */}

              <NotificationArea/>
              </li>
              {/* qrcode */}
            <li className="cursor-pointer hover:text-yellow-400 group relative">
            <IconContext.Provider
                value={{ className:"transition-all w-5" }}
                >
              <BsQrCodeScan/>
              </IconContext.Provider>


              {/* hover area */}
              <QrCodeArea/>
            </li>
            {/* language icon */}
            <li className="cursor-pointer hover:text-yellow-400" onClick={()=>setIsOpen(true)}>
            <IconContext.Provider
                value={{ className:"transition-all w-5" }}
                >
              <TbWorld/>
              </IconContext.Provider>
            </li>
            <li className="cursor-pointer hover:text-yellow-400" 
            onClick={()=>setIsDarkMode(!isDarkMode)}
            >
            <IconContext.Provider
                value={{ className:"transition-all w-5" }}
                >
            {!isDarkMode ? <BsMoonFill/> : <BsSunFill/>} 

            
            </IconContext.Provider>
            </li>
          </div>
        </ul>
      </nav>
      <LanguageModal
      isOpen={isOpen}
      onClose={handleCloseModal}
      />

      <SideNav
      isOpen={isActive}
      onClose={handleCloseSideNav}
      />
    </div>
  );
};

export default Navbar;
