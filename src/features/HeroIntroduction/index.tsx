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

// Server & data
import { GET_HERO_CONTENT } from "./server/action";
import { defaultHeroContent } from "@/data/defaults";

/**
 * HeroIntroduction Component
 *
 * Displays a personal introduction section with title, headline,
 * biography, contact options, and technologies.
 */
const HeroIntroduction = async () => {
  const heroContent = await GET_HERO_CONTENT();
  const content = heroContent || defaultHeroContent;

  return (
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
  );
};

export default HeroIntroduction;
