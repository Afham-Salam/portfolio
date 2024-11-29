import React, { useState } from "react";
import MenuItems from "../data";

type MenuItem = {
  id: number;
  name: string;
  path: string;
};

type MobileMenuProps = {
  menuItems: MenuItem[];
  isOpen: boolean;
  closeMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, isOpen, closeMenu }) => (
  <div className="relative">
    {/* Sliding Menu */}
    <div
      className={`fixed top-0 left-0 w-full max-w-xs h-full bg-black bg-opacity-90 shadow-md z-50 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Icon */}
      <div className="flex justify-end p-4">
        <svg
          onClick={closeMenu}
          className="text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12l6.3 6.3-6.3 6.3 1.42 1.41 6.3-6.3 6.29 6.3 1.42-1.41-6.3-6.3 6.3-6.3z"
          />
        </svg>
      </div>

      {/* Menu Items */}
      {menuItems.map((item) => (
        <a
          href={item.path}
          key={item.id}
          className="block text-left text-white font-semibold py-4 px-6 hover:bg-gray-800 transition-colors duration-300"
          onClick={closeMenu}
        >
          {item.name}
        </a>
      ))}
    </div>

    {/* Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeMenu}
      ></div>
    )}
  </div>
);

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed flex items-center justify-between w-full h-[70px] bg-black z-50 shadow-md px-4 md:px-6 lg:px-10">
      {/* Logo and Menu Toggle */}
      <div className="flex items-center w-full gap-3 lg:w-auto">
        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            {!menuOpen ? (
              <path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
            ) : (
             ""
            )}
          </svg>
          <MobileMenu
            menuItems={MenuItems}
            isOpen={menuOpen}
            closeMenu={closeMenu}
          />
        </div>

        {/* Logo */}
        <div className="flex-grow lg:flex-grow-0">
          <p className="text-[22px] md:text-[25px] text-white font-semibold tracking-widest first-letter:text-[#fec544]">
            Portfolio
          </p>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex gap-8 items-center">
        {MenuItems.map((item) => (
          <a
            href={item.path}
            key={item.id}
            className="text-white font-semibold hover:text-gray-400 transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
