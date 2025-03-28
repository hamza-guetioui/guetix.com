import React from "react";

type HeadlineProps = {
  children: React.ReactNode;
  className?: string;
};

const Headline: React.FC<HeadlineProps> = ({ className, children }) => {
  return (
    <p
      className={`font-semibold font-serif leading-relaxed mb-2 text-slate-200 ${className}`}
    >
      {children}
    </p>
  );
};

export default Headline;
