import React from "react";
import Image from "next/image";
import { GET_HERO_CONTENT } from "../server/action";
import { IHero } from "../types";

interface MyPictureProps {
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

/**
 * MyPicture Component
 *
 * A flexible image component that can be positioned by its parent.
 * Fetches the hero image data and renders it with customizable props.
 */
const MyPicture: React.FC<MyPictureProps> = async ({
  className = "w-full h-auto object-cover",
  priority = true,
  quality = 75,
  sizes = "(max-width: 768px) 100vw, 240px",
}) => {
  const heroContent: IHero["hero"] | null = await GET_HERO_CONTENT();
  const picture = heroContent?.image;

  if (!picture) return null;

  return (
    <Image
      src={picture.asset.url}
      alt={picture.alt}
      width={picture.asset.metadata.dimensions.width}
      height={picture.asset.metadata.dimensions.height}
      className={className}
      placeholder="blur"
      blurDataURL={picture.asset.metadata.lqip}
      quality={quality}
      priority={priority}
      sizes={sizes}
    />
  );
};

export default MyPicture;
