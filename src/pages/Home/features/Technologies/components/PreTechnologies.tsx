import React from "react";
import { ITechnology } from "../types";
import TechnologyTooltip from "./TechnologyTooltip";



type PreTechnologiesProps = {
  technologies: ITechnology[];
  children: React.ReactNode;
};

const PreTechnologies: React.FC<PreTechnologiesProps> = ({
  technologies,
  children,
}) => {
  return (
    <div className="flex justify-center items-center">
      {technologies.map((tech) => {

        return (
          <TechnologyTooltip
            key={tech._id}
            data={tech}
            className={`w-11 h-11 border-2 border-slate-100 rounded-full -mr-3  bg-slate-300`} // Apply dynamic color class
          />
        );
      })}

      <div className=" z-10">{children}</div>
    </div>
  );
};

export default PreTechnologies;
