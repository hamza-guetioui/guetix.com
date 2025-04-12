"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";

/**
 * Props interface for the Navbar component.
 * 
 * @property {React.ReactNode} children - The children elements that will be passed into the Navbar.
 */
type Props = {
  children: React.ReactNode;
};

/**
 * Navbar component that displays a responsive navigation menu.
 * 
 * @param {Props} props - The component props, including children to render inside the Navbar.
 * @returns {JSX.Element} The Navbar component with a hamburger menu for mobile.
 */
const Navbar = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);  // State to manage the menu visibility

  return (
    <div className="flex lg:justify-center py-4">
      {/* Hamburger Button */}
      <HamburgerButton setIsOpen={setIsOpen} />

      {/* Modal Overlay */}
      <div
        className={`max-md:flex max-md:w-full max-md:h-screen max-md:bg-black/20 max-md:fixed max-md:top-0 max-md:left-0 max-md:z-50
        ${isOpen ? "max-md:block" : "max-md:hidden"}`}
      >
        {/* Modal content area */}
        <div
          className={`relative max-md:min-w-[80%] max-md:border-r-2 max-md:border-slate-100/50 max-md:bg-slate-200 max-md:rounded-tr-[.1rem] max-md:rounded-br-[.1rem]  
          max-md:pt-10 max-md:px-0 max-md:overflow-y-scroll max-md:h-screen max-md:max-h-screen max-md:overflow-x-hidden 
          transform transition-transform duration-700 ease-in-out 
          ${isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"}`}
        >
          {/* Render children inside the modal */}
          {children}
        </div>

        {/* Overlay area to close the modal when clicked */}
        <div
          className="lg:hidden max-lg:min-w-[20%] h-screen"
          onClick={() => setIsOpen(false)}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;

/**
 * HamburgerButton component renders a button for toggling the modal state.
 * 
 * @param {Object} props - The component props.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setIsOpen - Function to update the menu visibility state.
 * @returns {JSX.Element} The HamburgerButton that toggles the menu visibility.
 */
const HamburgerButton = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}  // Toggle the menu visibility
      className="lg:hidden"
    >
      <Menu size={36} />
    </button>
  );
};
