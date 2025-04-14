"use client";

import Image from "next/image";
import { IProject } from "../types";
import { cn } from "@/lib/utils";

const CoverImage = ({ image }: { image: IProject["image"] }) => {
  const {
    asset: {
      url,
      metadata: {
        lqip,
        palette,
      },
    },
    alt,
  } = image;

  const dominantColor = palette?.dominant?.background ?? "#1f2937"; 


  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ backgroundColor: dominantColor }}
    >
      <Image
        src={url}
        alt={alt || "Project image"}
        placeholder="blur"
        blurDataURL={lqip}
        fill
        className={cn(
          "object-cover transition duration-500 ease-in-out group-hover:scale-105",
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      {/* Overlay Blur Layer */}
      <div className="absolute inset-0 bg-black/20   group-hover:bg-black/30 group-hover:backdrop-blur-sm" />
    </div>
  );
};

export default CoverImage;
