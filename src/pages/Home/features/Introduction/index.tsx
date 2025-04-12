import React from "react";

import Container from "@/components/ui/container";
import Title from "./components/Title";
import Headline from "./components/Headline";
import Biography from "./components/Biography";
import Technologies from "../Technologies";

import { GET_HERO_CONTENT } from "./server/action";
import { defaultHeroContent } from "@/data/defaults";

/**
 * `HeroIntroduction` Component - Displays hero section with dynamic title, headline, bio, and technologies.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} children - Additional elements to render inside the component.
 * @returns {JSX.Element} - The hero section with title, technologies, and bio.
 */
type HeroIntroductionProps = {
  children: React.ReactNode;
};

const HeroIntroduction: React.FC<HeroIntroductionProps> = async ({
  children,
}) => {
  const heroContent = await GET_HERO_CONTENT();

  const content = heroContent || defaultHeroContent;

  return (
    <Container className="p-6 pt-8 w-[50%] md:w-[66%]">
      <Container className="relative flex justify-between items-center ">
        <Title title={content.title} />
        <Technologies />
      </Container>

      <Headline>{content.headline}</Headline>
      <Biography content={content.bio}/>
      {children}
    </Container>
  );
};

export default HeroIntroduction;
