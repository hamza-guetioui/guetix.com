import React from 'react';
import Link from "next/link";

// Menu data representing the navigation items
const menuItems = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 4,
    name: "Articles",
    link: "/#articles",
  },
  {
    id: 5,
    name: "Contact",
    link: "/#contact",
  },
];

/**
 * Navigation component renders a list of navigation items.
 * 
 * @returns {JSX.Element} Navigation component with a list of links
 */
const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center max-md:flex-col lg:w-[600px] lg:rounded-full p-2 gap-12 border-2 border-slate-500">
        {/* Iterate over the menu items and render each NavItem */}
        {menuItems.map((item) => (
          <NavItem key={item.id} name={item.name} link={item.link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

/**
 * NavItem component renders an individual navigation item.
 * 
 * @param {NavItemProps} props - Props passed to the component
 * @param {string} props.name - The name of the navigation item
 * @param {string} props.link - The link associated with the navigation item
 * @returns {JSX.Element} A list item containing a link to navigate to the specified location
 */
type NavItemProps = {
  name: string;  // The text to display for the navigation item
  link: string;  // The URL the item should link to
};

/**
 * NavItem renders a single navigation link in the list.
 * 
 * @param {NavItemProps} props - The properties for each navigation item
 * @returns {JSX.Element} A list item (<li>) that contains the link
 */
const NavItem = ({ name, link }: NavItemProps) => {
  return (
    <li className="hover:scale-105 transition-all duration-100">
      {/* The Link component wraps the navigation item text */}
      <Link href={link}>
        <span className="font-bold dark:text-white">{name}</span>
      </Link>
    </li>
  );
};
