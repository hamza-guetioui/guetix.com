import React from "react";
import clsx from "clsx";

type HeadlineProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * `Headline` - A styled paragraph used for subheadings with accessible and responsive design.
 */
const Headline: React.FC<HeadlineProps> = ({
  children,
  className,
}) => {
  return (
    <p
      className={clsx(
        "text-base  font-serif font-semibold leading-relaxed mb-3",
        "text-slate-800 dark:text-slate-200",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Headline;
