import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const PortfolioOverviewTitle: React.FC = () => {
  return (
    <section className="flex justify-between  items-center gap-8 px-2 z-10 h-full">
        <Container className="w-[47%] h-full">
        <Title>GUETIX</Title>
        <ImageWrapper src="/images.jpeg" alt="Portfolio Image" />
      </Container> 
       <Container className="h-16 w-[40%] mr-8 rounded-lg bg-slate-300/50">
        <Title className="text-right">DEVELOPER</Title>
      </Container>
    
     
    </section>
  );
};

export default PortfolioOverviewTitle;

// Title Component
type TitleProps = {
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<TitleProps> = ({ className = "", children }) => {
  return (
    <h1
      className={`text-2xl pl-12 pt-28 md:text-6xl lg:text-[6.8rem] font-serif tracking-wider text-gray-200/40 stroke-slate-800  font-bold md:leading-[5.5rem] ${className}`}
    >
      {children}
    </h1>
  );
};

// Image Wrapper Component
type ImageWrapperProps = {
  src: string;
  alt?: string;
};

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt = "" }) => {
  return (
    <div className="w-60 h-[5.5rem] rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={360}
        className="object-cover w-full h-full blur-[2px]"
      />
    </div>
  );
};