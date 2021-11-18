import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaUserCircle } from "react-icons/fa";
import classes from './Header.module.css';
import { MDBCol, MDBIcon } from "mdbreact";

import {IoIosNotificationsOutline  ,IoMdArrowDropdown}  from 'react-icons/io';
const Header = () => {
  const [showNav, setShowNav] = useState(false);
 
  return (
    <>
      <header className={"bg-primary shadow-md px-5   mb-3 text-green-400"}>
        <div className={classes?.headerWrapper}>
          <div
            className={
              "h-full flex items-center justify-between md:justify-start mb-5 smd:mb-0"
            }
          >
          </div>

          <div
            className={
              "flex items-center justify-between  relative"
            }
          >
              <div  className={"flex sm:-ml-44 text-base flex-start  font-semibold"}>
                <div>Starbucks</div>
                <IoMdArrowDropdown size={24} />
              </div>

             <div className="search-controller hidden sm:block   lg:-ml-80">
                <div  className="relative">
                <button className="search-btn absolute opacity-50 pt-2 pl-2">
                <i class="bi bi-search"></i>
                </button>
                </div>

            <input 
                className="placeholder-opacoity-50 border rounded py-1 px-3 pl-8  sm:w-40  md:w-60 xl:w-96 items-center 
                border-border1   bg-sidemenubgcolor focus:outline-none " 
                placeholder="search"
                />
            </div>

            <ul className={`flex justify-end smd:justify-end items-center ${classes?.menuWrapper}`}>
              <Link
                href={"#"}
              >
                <a>
                  <li
                    className={`px-4 font-mons font-semibold text-xs xs:text-sm cursor-pointer `}
                  
                  >
                <IoIosNotificationsOutline   size={24}/>
                  </li>
                </a>
              </Link>


              <Link>
              <li
                  className={
                    "font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1 ml-3 "
                  }
                >
                  <div className="w-10 h-10 relative"
                    onClick={() => setShowNav(!showNav)}>
                    
                      <div className="z-10 absolute bottom-1 -right-1">
                        <FaCheckCircle
                          className="bg-white rounded-full text-lg"
                          fill={"#07c7a2"} />
                      </div>
                    
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      
                        <FaUserCircle
                            fill={"#07c7a2"}
                            className="w-full h-full object-cover"
                          />
                      
                    </div>
                  </div>
                </li>


              </Link>
                <Link>
                  <a>
                    <li className={`px-4 font-mons font-semibold text-xs xs:text-sm cursor-pointer ${classes?.menuItem}`}>John Doe</li>
                  </a>
                </Link> 
                <Link>
                  <a>
                    <li className={`px-4 font-mons font-semibold text-xs xs:text-sm cursor-pointer `}><IoMdArrowDropdown  size={24}  /></li>
                  </a>
                </Link> 
                
                  

 
              <HeaderNavBar
                showNav={showNav}
                setShowNav={setShowNav}
               // setShowWarning={setShowWarning}
              />
 
                

            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
 
const HeaderNavBar = ({ showNav, setShowNav, setShowWarning }) => {
 
  return (
    <div
      className={` bg-red-400   absolute border   shadow-md right-1/4 sm:right-0 top-10 bg-white z-10 px-5 py-3 rounded-md font-semibold text-gray-500 ${showNav ? "block" : "hidden"
        } transition duration-300`}
    >
    
    </div>
  );
};
 
 
export default Header;
 
 