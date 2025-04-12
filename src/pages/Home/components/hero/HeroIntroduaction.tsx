import React from "react";
import Container from "@/components/ui/container";
import Introduction from "../../features/Introduction";
import CallToAction from "./CallToAction";
import ContactMe from "./CallToAction/ContactMe";
import ReadMore from "./CallToAction/ReadMore";
import MyPicture from "../../features/Introduction/components/MyPicture";
import Socials from "../../features/Socials";

/**
 * HeroIntroduaction - Shows the hero text, picture, CTA, and social icons.
 */
const HeroIntroduaction = () => {
  return (
    <Container className="relative w-full min-h-72 bg-blue-500/80 rounded-md mt-8">
      <Introduction>
        <CallToAction>
          <ContactMe label="Contact Me!" />
          <ReadMore label="Read More?" />
        </CallToAction>
      </Introduction>

      <Container className="absolute z-10 -translate-y-full  top-full  -right-4 w-[17.4rem] delay-75 origin-bottom-right transition-transform duration-500 ease-in-out hover:scale-105">
        <MyPicture />
      </Container>
      <Container className="absolute z-10 top-1 right-2 w-[17.4rem] delay-75 origin-bottom-right transition-transform duration-500 ease-in-out hover:scale-105">
        <Socials direction="col" variant="square" />
      </Container>
    </Container>
  );
};

export default HeroIntroduaction;
