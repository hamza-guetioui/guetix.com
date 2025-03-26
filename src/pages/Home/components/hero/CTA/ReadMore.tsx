import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export interface ContactMe {
  label?: string;
}

const ReadMore: React.FC<ContactMe> = ({ label }) => {
  const text = label ? label : "Read More?";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center justify-center w-full h-fit rounded-full  px-4 py-2 font-semibold shadow-md transition-all  bg-slate-800 hover:bg-blue-600 text-white`}>
        <Link href={"#"}>{text}</Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>Know more about me.</DropdownMenuItem>
        <DropdownMenuItem>Let see my work.</DropdownMenuItem>
        <DropdownMenuItem>Chat with me in whatsapp.</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ReadMore;
