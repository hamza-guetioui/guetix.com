import React from "react";
import TextHighlight from "./TextHeighlight";  

type BiographyProps = {
  content: {
    text: string;
    highlight: string;
  };
  className?: string;
};

const Biography: React.FC<BiographyProps> = ({ className, content }: BiographyProps) => {
  const { text, highlight } = content;
  const [before, after] = text.split(highlight);

  return (
    <p
      className={`font-semibold font-serif leading-relaxed mb-4 text-sm text-slate-800 dark:text-slate-100 ${className}`}
    >
      {before} <TextHighlight>{highlight}</TextHighlight>
      {after}
    </p>
  );
};

export default Biography;