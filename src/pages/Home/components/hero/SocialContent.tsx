import React from "react";
import Twittes from "../../features/twittes";
import Container from "@/components/ui/container";

const SocialContent = () => {
  return (
    <Container className="h-[26rem] w-full  pl-44 overflow-clip" style={{overflowClipMargin:"4rem"}} >
      <Twittes />
    </Container>
  );
};

export default SocialContent;
