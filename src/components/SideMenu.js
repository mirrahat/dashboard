import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";
import { RiHome2Line } from "react-icons/ri";
import MenuItem from "./MenuItem";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoSettingsOutline,IoDocumentsOutline } from "react-icons/io5";
/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: RiHome2Line,
  },
  {
    name: "Inventory",
    exact: true,
    to: `/content`,
    iconClassName: MdOutlineInventory2,
  
  },
  { name: "Documents", to: `/design`, iconClassName: IoDocumentsOutline },
  {
    name: "Settings ",
    exact: true,
    to: `/content-2`,
    iconClassName: IoSettingsOutline,
  
  }
];

const SideMenu = (props) => {






  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */


  return (
    <div className={`side-menu w-32 lg:w-72`}>
     

      <div className="main-menu ">
        <ul className="">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
             
            />
          ))}

          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li>
          <MenuItem
            name={"Content"}
            subMenus={[{ name: "Courses" }, { name: "Videos" }]}
          />
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class=RiHome2Line></i>
              </div>
              <span>Design</span>
            </a>
          </li> */}
        </ul>
      </div>

    
    </div>
  );
};

export default SideMenu;
