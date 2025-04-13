import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import TechnologyIcon from "./TechnologyIcon";
import TechnologyDescription from "./TechnologyDescription";

import { ITechnology } from "../../types";
type TechnologyHoverCardProps = {
  technology: ITechnology; // Renamed prop to 'technology' for better clarity
};

const TechnologyHoverCard = ({ technology }: TechnologyHoverCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          className="w-10 h-10 rounded-full border-2 overflow-hidden -mr-3 z-10 border-white flex justify-center items-center  transition-transform duration-300 hover:scale-105"
        >
          <TechnologyIcon logo={technology.logo} />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="absolute w-64 top-full pt-2 left-1/2 -translate-x-1/2 z-20">
        <TechnologyDescription
          description={technology.description}
          website={technology.website}
        />
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechnologyHoverCard;
