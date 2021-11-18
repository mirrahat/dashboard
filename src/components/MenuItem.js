import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

const Icon = iconClassName;
console.log('icon',Icon)
  return (
   
  <li >
      <Link
        exact
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        className={`menu-item py-4 pl-4 mt-4 rounded-md  hover:bg-rrr hover:shadow-xl`}
      >
        <div className=" flex items-center items-start   flex-row  hover:text-iconcolor  "
        
        >
        
          <Icon    size={24} />
          <div  className={`text-md hidden lg:block font-bold pl-4 hover:text-iconcolor`}>{name}</div>
        </div>
     
      </Link>
      
    </li>
   
    
  );

};

export default MenuItem;
