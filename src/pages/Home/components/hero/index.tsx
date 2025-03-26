import Container from "@/components/ui/container";
import React from "react";
import Projects from "../../features/projects";
import HeroContainer from "./HeroContainer";
import HeroContent from "./HeroContent";
// import MyPicture from "./MyPicture";
import SocialContent from "./SocialContent";
import styles from "./hero.module.css";
// import Image from "next/image";
import Technologies from "../../features/Technologies";
const Index = () => {
  return (
    <HeroContainer>
      <Container className={styles.container_info}>
         <HeroContent>
          <Technologies />
        </HeroContent>
        <Projects />
        h
      </Container>

      <Container className={styles.container_social}>
        <SocialContent />
      </Container>
      {/* <MyPicture /> */}
      {/* <Image
        src="/z1.jpg"
        alt=""
        width={600}
        height={400}
        className="w-full h-full  object-cover -z-10  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      /> */}
    </HeroContainer>
  );
};

export default Index;
