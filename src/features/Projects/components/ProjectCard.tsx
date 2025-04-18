import React from "react";
import Link from "next/link";
import { ArrowUpRight, Share2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IProject } from "../types";
import CoverImage from "./ProjectCoverImage";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Card className="relative overflow-hidden rounded-2xl group h-48 px-3 py-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      {/* Background image with overlay */}
      <CoverImage image={project.image} />

      {/* Overlayed content */}
      <CardContent className="relative z-10 w-full h-full p-0 flex flex-col justify-between">
        <CardHeader className="flex flex-row items-start justify-between gap-4 p-0">
          <div className="w-3/4 space-y-2">
            <h3 className="text-white text-lg font-bold tracking-tight group-hover:text-white/90 transition-colors duration-300 drop-shadow-lg">
              {project.title}
            </h3>

            <p className="text-white/90 text-sm mt-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 line-clamp-3 drop-shadow-md">
              {project.description}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
          >
            <Share2 size={18} />
          </Button>
        </CardHeader>

        <CardFooter className="flex justify-between items-end p-0 mt-auto">
          {project.links?.demoUrl && (
            <LiveLinkButton url={project.links.demoUrl} />
          )}
          <TechBadges technologies={project.technologies} />
        </CardFooter>
      </CardContent>
    </Card>
  );
};

const memoizedProjectCard = React.memo(ProjectCard);

export default memoizedProjectCard;

const LiveLinkButton = ({ url }: { url: string }) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="See project details"
    className="group relative flex items-center gap-2"
  >
    <Button
      size="icon"
      className="w-9 h-9 rounded-full text-black bg-white/90 border border-white/20 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-md"
    >
      <ArrowUpRight size={16} />
    </Button>
    <span className="absolute left-full ml-2 text-white text-sm font-medium opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap drop-shadow-md">
      See Details
    </span>
  </Link>
);

const TechBadges = ({
  technologies,
}: {
  technologies: IProject["technologies"];
}) => (
  <div className="flex gap-1 justify-end">
    {technologies.map((tech) => (
      <span
        key={tech._id}
        className="bg-white/90 text-slate-800 font-semibold text-[.65rem] rounded-full px-2 py-0.5 transition-all duration-300 hover:bg-white hover:scale-105"
      >
        {tech.name}
      </span>
    ))}
  </div>
);
