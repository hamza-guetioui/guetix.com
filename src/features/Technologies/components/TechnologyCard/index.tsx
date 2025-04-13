
import { ITechnology } from "../../types";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Container from "@/components/ui/container";

import TechnologyIcon from "./TechnologyIcon";
import TechnologyTitle from "./TechnologyTitle";
import TechnologyDescription from "./TechnologyDescription";

type TechnologyItemProps = {
  technology: ITechnology;
  className?: string;
};

const TechnologyCard: React.FC<TechnologyItemProps> = ({ technology, className }) => {
  return (
    <Container className={`flex flex-col p-2 rounded-lg transition-colors ${className ?? ""}`}>
      <Collapsible>
        <CollapsibleTrigger  asChild>
          <Container className="flex justify-between items-end gap-3 pr-2">
            <Container className="flex items-center gap-3">
               <TechnologyIcon logo={technology.logo} />
            <TechnologyTitle
              name={technology.name}
              description={technology.description}
            />
            </Container>
           
            <Button
              variant="ghost"
              className="text-blue-500 text-xs ml-1 hover:underline hover:bg-transparent flex p-0"
            >
              Read more
            </Button>
          </Container>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <TechnologyDescription
            description={technology.description}
            website={technology.website}
          />
    
        </CollapsibleContent>
      </Collapsible>
    </Container>
  );
};

export default TechnologyCard;