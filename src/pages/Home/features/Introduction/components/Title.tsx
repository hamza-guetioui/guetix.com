import React from "react";
import clsx from "clsx";

type TitleProps = {
  title: string;
  className?: string;
};

/**
 * `Title` component - Renders each word of a title on a separate line with styled typography.
 */
const Title: React.FC<TitleProps> = ({ title, className }) => {
  const titleWords = title.split(" ");

  return (
    <h1 className="flex flex-col">
      {titleWords.map((word) => (
        <span
          key={word}
          className={clsx(
            "relative font-lilita text-[2rem] leading-[1.4rem] mb-2",
            className
          )}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default Title;
