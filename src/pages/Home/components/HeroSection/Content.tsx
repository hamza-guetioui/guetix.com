import React from "react";
import Container from "@/components/ui/container";

import HeroIntroduction from "@/features/HeroContent";
import Projects from "@/features/Projects";
import Socials from "@/features/Socials";
/**
 * HeroContent - Renders the main section with introduction and projects.
 */

const Content = () => {
  return (
    <Container
      variant="grid"
      className="max-sm:row-start-2 max-sm:row-end-13 md:col-start-1 md:col-end-6"
    >
      <HeroIntroductionWrapper />
        <Projects />
    </Container>
  );
};

export default Content;

/**
 * HeroIntroductionWrapper - Shows the hero text, picture, CTA, and social icons.
 */
const HeroIntroductionWrapper = () => {
  return (
    <Container className="relative w-full min-h-72 bg-blue-500/80 rounded-md ">
      <HeroIntroduction />
      <Container className="absolute z-10 top-1 right-2 w-[17.4rem] delay-75 origin-bottom-right transition-transform duration-500 ease-in-out hover:scale-105">
        <Socials direction="col" variant="square" />
      </Container>
    </Container>
  );
};
