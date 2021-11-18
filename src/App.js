import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import UserList from "./components/UserList";
import { RiHome2Line,RiAncientPavilionFill } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOnlinePrediction } from "react-icons/md";
function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App bg-bggraycolor">
      <Router>
      <Header />
      
      <div className="">  
        <div className="hidden md:block fixed">
        <SideMenu />
        </div>

      <div className="md:ml-32 lg:ml-72 ml-4 -mt-2 overflow-hidden border-l-2   border-borderclr">
        <div className="p-4">
          <h1 className="font-bold" >INVENTORY</h1>
        </div>
        <div className="border-b-2 border-borderclr"> </div>
        <div className="mt-4 ml-4 bg-primary mr-4 shadow-lg">
        <div className="p-4  search-controller  ">
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
            <UserList />
        </div>
        <div className="flex flex-row  items-center h-16 w-auto bg-primary block sm:hidden  space-y space-x-24 pl-4 mt-16" >
      <RiHome2Line  size={24} />
      <MdOutlineInventory2   size={24} />
      <IoDocumentsOutline   size={24} />
      <IoSettingsOutline   size={24} />
      </div>

      </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
