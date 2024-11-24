import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import MenuItems from "../data";



type MenuItems = {
  id: number;
  name: string;
  path: string;
};

type Props = {};


const MobileMenu: React.FC<{ menuItems: MenuItems[],isOpen:boolean }> = ({ menuItems,isOpen }) => (
<div className="relative">
<div
  className={`absolute top-5   w-[200px] h-screen bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md z-50 transition-transform duration-500 ease-in-out ${
    isOpen ? "translate-x-0 -left-5" : "-translate-x-full left-0"
  }`}
> 
     {menuItems.map((it) => (
      <NavLink
        to={it.path}
        key={it.id}
        className="block px-4 py-2 text-white font-semibold"
      >
        {it.name}
      </NavLink>
    ))}
  </div>
</div>
);

export default function Navbar({}: Props) {
 
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="fixed flex  items-center bg-black justify-between w-full h-[70px]  z-[100] shadow-md px-4 md:px-6 lg:px-10">
      
      <div className="flex items-center w-full gap-3 lg:w-auto">
        
        <div className="lg:hidden">
          <svg
            onClick={() => setMenu(!menu)}
            className="text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            {!menu ? (
              <path
                fill="white"
                d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
              />
            ) : (
              <path
                fill="white"
                d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12l6.3 6.3-6.3 6.3 1.42 1.41 6.3-6.3 6.29 6.3 1.42-1.41-6.3-6.3 6.3-6.3z"
              />
            )}
          </svg>
          {menu && <MobileMenu menuItems={MenuItems} isOpen={menu} />}
        </div>

        {/* Logo */}
        <div className="flex-grow lg:flex-grow-0 ">
          <p className="text-[22px] md:text-[25px] text-white font-semibold tracking-widest first-letter:text-[#fec544]">
           Portfolio
          </p>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex gap-10 items-center">
        {MenuItems.map((it:MenuItems) => (
          <NavLink
            to={it.path}
            key={it.id}
            className="text-white font-semibold "
          >
            {it.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
