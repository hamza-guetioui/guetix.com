import React from "react";
import Title from "./components/Title";
import Bio from "./components/Bio";
import Headline from "./components/Headline";
import Container from "@/components/ui/container";
import { GET_HERO_CONTENT } from "./server/action";

const Index: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const heroContent = await GET_HERO_CONTENT();
  if (!heroContent) return ;
  return (
    <>
      <Container className="relative flex justify-between items-center ">
        <Title title={heroContent.title} />
        {children}
      </Container>

      <Container className="my-4 max-sm:w-[74%]">
        <Headline>
          {heroContent.headline}
        </Headline>
        <Bio
          paragraph={heroContent.bio.text}
          highLight={heroContent.bio.highlight}
        />
      </Container>
    </>
  );
};

export default Index;

