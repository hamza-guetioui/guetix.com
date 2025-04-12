import React from "react";
import Projects from "../../features/projectsU";
import Container from "@/components/ui/container";
import Introduction from "./HeroIntroduaction";

/**
 * HeroContent - Renders the main section with introduction and projects.
 */

const HeroContent = () => {
  return (
    <Container
      variant="grid"
      className="max-sm:row-start-2 max-sm:row-end-13 md:col-start-1 md:col-end-6"
    >
      <Introduction />
      <Projects />
    </Container>
  );
};

export default HeroContent;
