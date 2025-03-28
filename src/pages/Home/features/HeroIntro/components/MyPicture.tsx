import Image from "next/image";
import React from "react";
import { GET_HERO_CONTENT } from "../server/action";

const MyPicture: React.FC = async () => {
  const HeroContent = await GET_HERO_CONTENT();
  const picture = HeroContent?.picture;
  if (!picture) return null;

  return (
      <Image
        src={picture.asset.url}
        alt={picture.alt}
        width={picture.asset.metadata.dimensions.width}
        height={picture.asset.metadata.dimensions.height}
        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        placeholder="blur"
        blurDataURL={picture.asset.metadata.lqip}
        quality={75}
        priority 
        sizes="(max-width: 768px) 100vw, 240px"
      />
  );
};

export default MyPicture;
