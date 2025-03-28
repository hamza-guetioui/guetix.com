import React from "react";
import TextHighlight from "./TextHeighlight";

type BioProps = {
  paragraph: string;
  highLight: string;
  className?: string;
};

const Bio: React.FC<BioProps> = ({
  className,
  paragraph,
  highLight,
}: BioProps) => {
  const [before, after] = paragraph.split(highLight);

  return (
    <p className={`font-semibold font-serif leading-relaxed mb-2 text-slate-100 ${className}`}>
      {before} <TextHighlight>{highLight}</TextHighlight>
      {after}
    </p>
  );
};

export default Bio;
