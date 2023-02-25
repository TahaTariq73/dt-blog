import React, { useState } from 'react';
import { Link } from "react-router-dom";

import menuIcon from "../Assets/Icons/menu-icon.svg";
import arrowIcon from "../Assets/Icons/arrow-icon.svg";
import xmarkIcon from "../Assets/Icons/xmark-icon.svg";

const Navbar = () => {
  const [slidingMenu, setSlidingMenu] = useState(false);
  const [slidingMenuHeight, setSlidingMenuHeight] = useState("0px");

  const slideMenu = () => {
    if (slidingMenu === false) {
        setSlidingMenu(true);
        setSlidingMenuHeight("245px");
    } else {
        setSlidingMenu(false)
        setSlidingMenuHeight("0px");
    }
  } 

  return (
    <div className="fixed w-full z-50">
        <div className="flex justify-between items-center w-full bg-black py-4 px-4 sm:px-12 md:px-16 lg:px-24">
            <div className="flex justify-center items-center">
                <div className="text-white font-notoSerif font-semibold tracking text-xl sm:text-2xl cursor-pointer" onClick={() => window.location = '/'}>
                    <span> DT </span> <span> BLOGS </span> 
                </div>
                <div className="ml-16 hidden md:block">
                    <ul className="flex font-proximaNovaSemiBold text-lg">
                        <li className="mx-.5"> <Link to="/" className="text-white p-4 transition-all hover:text-yellow-500"> Home </Link> </li>
                        <li className="mx-.5"> <Link to="/blog" className="text-white p-4 transition-all hover:text-yellow-500"> Blog </Link> </li>
                        <li className="mx-.5"> <a href="https://www.linkedin.com/in/taha-tariq-12022b230/" rel="nonferrer" className="text-white p-4 transition-all hover:text-yellow-500"> About </a> </li>
                        <li className="mx-.5"> <a href="#footer" className="text-white p-4 transition-all hover:text-yellow-500"> Contact </a> </li>
                    </ul>
                </div>
            </div>
            <a href="#footer" className="hidden md:block font-proximaNovaBold text-lg text-white transition-all hover:text-yellow-500"> SUBSCRIBE </a>
            <button type="button" className="block md:hidden" onClick={slideMenu}>
                {
                    slidingMenu === false ?
                    <img src={menuIcon} alt="" className="w-5 invert" /> :
                    <img src={xmarkIcon} alt="" className="w-5 h-5 invert" />
                } 
            </button>
        </div>
        <div className="bg-cyan-100 shadow-sm overflow-hidden transition-all" style={{height: slidingMenuHeight}}>
            <ul className="font-proximaNovaBold text-xl">
                <Link to="/" className="py-4 border-b border-b-gray-500 px-8 flex justify-between hover:bg-cyan-200"> 
                    <h2 className=""> Home </h2>
                    <img src={arrowIcon} alt="" className="w-4" />
                </Link>
                <Link to="/blog" className="py-4 border-b border-b-gray-500 px-8 flex justify-between hover:bg-cyan-200"> 
                    <h2 className=""> Blog </h2> 
                    <img src={arrowIcon} alt="" className="w-4" />
                </Link>
                <a href="https://www.linkedin.com/in/taha-tariq-12022b230/" target="_blank" rel="nonferrer" className="py-4 border-b border-b-gray-500 px-8 flex justify-between hover:bg-cyan-200"> 
                    <h2 className=""> About </h2> 
                    <img src={arrowIcon} alt="" className="w-4" />
                </a>
                <a href="#footer" className="py-4 border-b border-b-gray-500 px-8 flex justify-between hover:bg-cyan-200"> 
                    <h2 className=""> Contact </h2>
                    <img src={arrowIcon} alt="" className="w-4" />
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;