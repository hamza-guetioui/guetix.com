import React from "react";
import { ITechnology } from "../types";
import TechnologyHoverCard from "./TecknologyHoverCard";

type FeaturedTechnologiesProps = {
  technologies: ITechnology[];
  children: React.ReactNode;
};

const FeaturedTechnologies: React.FC<FeaturedTechnologiesProps> = ({
  technologies,
  children,
}) => {
  const featured = technologies
    .filter((tech) => tech.isFeatured)
    .slice(0, 3);

  return (
    <div className="flex items-center justify-center">
      {featured.map((tech) => (
        <TechnologyHoverCard key={tech._id} technology={tech} />
      ))}
      <div className="z-10">{children}</div>
    </div>
  );
};

export default FeaturedTechnologies;