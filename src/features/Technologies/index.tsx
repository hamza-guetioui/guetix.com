import React from "react";

// Server & data
import { GET_TECHNOLOGIES } from "./server/action";

// UI components
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Local components
import FeaturedTechnologies from "./components/FeaturedTechnologies";
import TechnologiesContent from "./components/TechnologiesContainer";
import TechnologyCard from "./components/TechnologyCard";

/**
 * TechnologiesPopover Component
 *
 * Displays a button showing the count of technologies.
 * On click, shows a popover with a list of technologies.
 */
const TechnologiesPopover = async () => {
  const technologies = await GET_TECHNOLOGIES();

  if (!technologies?.length) return null;

  return (
    <Popover>
      <FeaturedTechnologies technologies={technologies}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 rounded-full bg-black text-white border-2 border-white flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <span className="font-mono font-bold text-lg">
              +{technologies.length}
            </span>
          </Button>
        </PopoverTrigger>
      </FeaturedTechnologies>

      <PopoverContent side="bottom" align="end" className="md:w-96">
        <TechnologiesContent>
          {technologies.map((tech) => (
            <TechnologyCard key={tech._id} technology={tech} />
          ))}
        </TechnologiesContent>
      </PopoverContent>
    </Popover>
  );
};

export default TechnologiesPopover;
