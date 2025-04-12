import React from "react";
import Container from "@/components/ui/container";
import HeroContent from "./HeroContent";
import HeroShowcase from "./HeroShowcase";

/**
 * HeroSection component - Main landing section for the homepage.
 * Displays personal introduction, technologies, projects, and call-to-action elements.
 *
 * @returns {JSX.Element} The HeroSection component with intro, projects, and CTA sections.
 */
const HeroSection = () => {
  return (
    <section className="relative">
      <Container className="grid  grid-cols-1 md:grid-cols-7 max-sm:grid-rows-12 p-4 gap-8 mb-8  md:px-8 max-w-[1224px] mx-auto ">
        {/* Left section: Introduction and Projects */}
        <HeroContent />

        {/* Right section: Youtube videos and Blog articles */}
          <HeroShowcase />
      </Container>
    </section>
  );
};

export default HeroSection;
