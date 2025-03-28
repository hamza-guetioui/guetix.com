import React from "react";
import Projects from "../../features/projects";
import HeroIntro from "../../features/HeroIntro";
import HeroContainer from "./HeroContainer";
import SocialContent from "./SocialContent";
import styles from "./hero.module.css";
import Technologies from "../../features/Technologies";
import Signature from "@/components/Signature";
import ContactMe from "./CTA/ContactMe";
import ReadMore from "./CTA/ReadMore";
import MyPicture from "../../features/HeroIntro/components/MyPicture";
const Index = () => {
  return (
    <HeroContainer>
      <div className={styles.container_info}>
        <div className="w-full min-w-80 md:px-4 md:pr-48 mt-2 mb-8">
          <HeroIntro>
            <Technologies />
          </HeroIntro>
          {/* Signature */}
          <div className="flex justify-center items-center  mb-2 -mt-2">
            <Signature className="h-20" />
          </div>
          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pr-2 ">
            <ContactMe label="Contact Me!" />
            <ReadMore label="Read More?" />
          </div>
        </div>
        <Projects />
      </div>

      <div className={styles.container_social}>
        <SocialContent />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 w-4/5 md:w-1/5 ">
        <MyPicture />
      </div>
    </HeroContainer>
  );
};

export default Index;
