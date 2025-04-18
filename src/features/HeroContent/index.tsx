import React from "react";

// Shared UI
import Container from "@/components/ui/container";
import Technologies from "@/features/Technologies";

// Local components
import Title from "./components/Title";
import Headline from "./components/Headline";
import Biography from "./components/Biography";
import ContactMe from "./components/ContactMe";
import ReadMore from "./components/ReadMore";
import MyPicture from "./components/MyPicture";

// Server & data
import { GET_HERO_CONTENT } from "./server/action";
import { defaultHeroContent } from "@/lib/constants/defaults";
import { IHero } from "./types";

/**
 * HeroIntroduction Component
 *
 * Displays a personal introduction section with title, headline,
 * biography, contact options, and technologies.
 */
const HeroIntroduction = async () => {
  const heroContent: IHero["hero"] | null = await GET_HERO_CONTENT();
  const content = heroContent || defaultHeroContent;

  return (
    <Container className="relative w-full h-full ">
      <Container className="w-[50%] md:w-[66%] p-6 pt-8">
        <Container className="relative flex items-center justify-between mb-4">
          <Title title={content.title} />
          <Technologies />
        </Container>

        <Headline>{content.headline}</Headline>
        <Biography content={content.bio} />

        <Container className="flex items-center justify-center gap-4 mt-6">
          <ContactMe label="Contact Me!" />
          <ReadMore label="Read More?" />
        </Container>
      </Container>
      <Container className="absolute z-10 -translate-y-full  top-full -right-4 w-[17.4rem] delay-75 origin-bottom-right transition-transform duration-500 ease-in-out hover:scale-105">
        <MyPicture />
      </Container>
    </Container>
  );
};

export default HeroIntroduction;
