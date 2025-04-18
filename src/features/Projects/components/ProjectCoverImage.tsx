"use client";

import Image from "next/image";
import { IProject } from "../types";
import { cn } from "@/lib/utils/cn";

const CoverImage = ({ image }: { image: IProject["image"] }) => {
  const {
    asset: {
      url,
      metadata: { lqip, palette },
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
          "object-cover transition-all duration-500",
          "group-hover:scale-105 group-hover:brightness-110 group-hover:rotate-[0.5deg]"
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

 

      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 bg-black/60 to-transparent transition-all duration-500 group-hover:via-black/50" />
    </div>
  );
};

export default CoverImage;