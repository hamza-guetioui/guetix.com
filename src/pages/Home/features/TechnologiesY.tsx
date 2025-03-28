import React from "react";

const Technologies = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="w-10 h-10 rounded-full border-2 border-slate-200 bg-blue-300 -mr-6"></span>
      <span className="w-10 h-10 rounded-full border-2 border-slate-200 bg-red-300 -mr-6"></span>
      <span className="w-10 h-10 border-2 rounded-full border-slate-200 bg-cyan-300  -mr-6"></span>
      <span
        className="w-10 h-10 rounded-full border-2 border-slate-200 bg-slate-200 
        flex justify-center items-center text-sm font-bold"
      >
        +33
      </span>
    </div>
  );
};

export default Technologies;
