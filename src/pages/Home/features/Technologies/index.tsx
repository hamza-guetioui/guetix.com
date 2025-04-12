import React from "react";
import { GET_TECHNOLOGIES } from "./server/action";

import FeaturedTechnologies from "./components/FeaturedTechnologies";
import TechnologiesContent from "./components/TechnologiesContainer";
import TechnologyCard from "./components/TechnologyCard";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Index = async () => {
  const technologies = await GET_TECHNOLOGIES();

  if (!technologies || technologies.length === 0) {
    return null;
  }

  const totalCount = technologies.length;

  return (
    <Popover>
      <FeaturedTechnologies technologies={technologies}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-full bg-black text-white border-2 border-white flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <span className="font-mono font-bold text-lg">
              +{totalCount}
            </span>
          </Button>
        </PopoverTrigger>
      </FeaturedTechnologies>

      <PopoverContent side="bottom" align="end" className="md:w-96 ">
        <TechnologiesContent>
          {technologies.map((tech) => (
            <TechnologyCard key={tech._id} technology={tech} />
          ))}
        </TechnologiesContent>
      </PopoverContent>
    </Popover>
  );
};

export default Index;
