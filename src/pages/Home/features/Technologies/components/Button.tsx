"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  toggle: boolean;
  action: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, toggle, action }) => {
  return (
    <button
      onClick={action}
      className={`w-11 h-11 rounded-full border-2 font-mono text-lg  border-white flex justify-center items-center  font-semibold transition-transform duration-300 ${
        toggle ? "bg-slate-200 text-slate-800 " : "bg-gray-300 text-slate-600 "
      } hover:scale-105`}
    >
      <span className="font-extrabold">+</span> {children}
    </button>
  );
};

export default Button;