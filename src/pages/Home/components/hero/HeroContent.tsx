import Signature from "@/components/Signature";
import Container from "@/components/ui/container";
import React from "react";
import TextHighlight from "./TextHeighlight";
import  ContactMe  from "./CTA/ContactMe";
import ReadMore from "./CTA/ReadMore";

interface HeroContentProps {
  children: React.ReactNode;
}
const HeroContent: React.FC<HeroContentProps> = ({ children }) => {
  return (
    <Container className="w-full min-w-80 md:px-4 md:pr-48 mt-2 mb-8">
      {/* Top Section: Title & extra children = [technologies] */}
      <Container className="flex justify-between items-center ">
        <IntroTitle />
        {children}
      </Container>

      {/* Intro Paragraph */}
      <Container className="my-4 max-sm:w-[74%]">
        <IntroHeadlineParagraph className="text-gray-200">
          Building High-Performance Web Experiences with Next.js & TypeScript
        </IntroHeadlineParagraph>
        <IntroHeadlineParagraph className="text-slate-100">
          As a <TextHighlight>Full Stack Developer</TextHighlight> , I
          specialize in crafting scalable, user-centric applications using
          modern technologies like Next.js, React, and Node.js. With a strong
          focus on performance and UI/UX, I bring ideas to life through clean,
          maintainable code.
        </IntroHeadlineParagraph>
      </Container>

      {/* Signature */}
      <Container className="flex justify-center items-center mb-2 -mt-2">
        <Signature className="h-20" />
      </Container>

      {/* Action Buttons */}
      <Container className="flex items-center justify-center gap-4 pr-2">
        <ContactMe label="Contact Me!" />
        <ReadMore label="Read More?" />
      </Container>
    </Container>
  );
};

export default HeroContent;

// Reusable Paragraph Component
const IntroTitle: React.FC = () => {
  return (
    <Container className="relative font-lilita text-4xl ">
      {/* <HanddrawCircle className="-z-10  h-[6rem]  absolute top-1/2 left-1/2 -translate-x-[56%] -translate-y-[56%]" /> */}
      <h1 className=" leading-[1.7rem]">HAMZA</h1>
      <h1 className="leading-[1.7rem]  ">GUETIOUI</h1>
    </Container>
  );
};
const IntroHeadlineParagraph: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <p className={`font-semibold font-serif leading-relaxed mb-2 ${className}`}>
      {children}
    </p>
  );
};
