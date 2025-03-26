import React from 'react'

// import { mainMenu as Menu } from "@/data/menus";
import Link from "next/link";

const Menu = [
  {
    id:1,
    name:"Home",
    link:"/#home"
  },
  {
    id:2,
    name:"About",
    link:"/#home"
  },
  {
    id:3,
    name:"Projects",
    link:"/#home"
  },
  {
    id:4,
    name:"Articles",
    link:"/#home"
  },
  {
    id:5,
    name:"Contact",
    link:"/#home"
  },
]



const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center max-md:flex-col lg:w-[600px] lg:rounded-full lg:bg-white p-2 gap-8">
        {Menu.map((item) => (
          <li
            key={item.id}
            className="hover:scale-105 transition-all duration-100 "
          >
            <Link
              href={item.link}
              className=""
            >
              <span className="font-bold">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation