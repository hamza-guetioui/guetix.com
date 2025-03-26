import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";

const MyPicture: React.FC = () => {
  return (
    <Container className="absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 w-4/5 md:w-1/5 ">
      <ImageWrapper src="/my-picture.png" alt="My Picture" />
    </Container>
  );
};

export default MyPicture;

// Image Wrapper Component
type ImageWrapperProps = {
  src: string;
  alt?: string;
};

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt = "" }) => {
  return (
    <figure className="w-full h-full">
      <Image
        src={src}
        alt={alt}
        width={240}
        height={600}
        className="w-full h-full object-cover"
      />
    </figure>
  );
};
