import React from "react";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }: TitleProps) => {
  const titleArr: string[] = title.split(" ");

  return (
    <div>
      {titleArr.map((word) => (
        <h1 key={word} className="relative font-lilita text-4xl leading-[1.7rem]">
          {word}
        </h1>
      ))}
    </div>
  );
};

export default Title;

