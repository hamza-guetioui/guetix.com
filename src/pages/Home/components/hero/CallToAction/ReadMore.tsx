"use client";

import React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react"; // Optional icon

export interface ContactMeProps {
  label?: string;
}

const menuItems = [
  { label: "Discover more about me ?", href: "#aboutMe" },
  { label: "Explore my portfolio !", href: "#portfolio" },
  { label: "Get in touch via WhatsApp ...", href: "#contact" },
];

const ReadMore: React.FC<ContactMeProps> = ({ label = "Read More?" }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className="flex items-center justify-center w-full h-fit rounded-full px-4 py-2 font-semibold shadow-md transition-all bg-black hover:text-blue-400 text-white"
        >
          {label}
          <ChevronDown size={16} className="transition-transform  -rotate-90 group-hover:-rotate-180" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="center"
        sideOffset={8}
        className="bg-black w-[250px] rounded-md shadow-xl p-2"
      >
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block text-sm font-medium text-gray-200 hover:bg-gray-900 rounded-md px-3 py-2 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default ReadMore;
