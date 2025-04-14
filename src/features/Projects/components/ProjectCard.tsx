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
    <Card className="relative overflow-hidden rounded-2xl group h-48 p-4">
      {/* Background image */}
      <CoverImage image={project.image} />

      {/* Overlayed content */}
      <CardContent className="relative z-10 w-full h-full p-0 flex flex-col justify-between">
        <CardHeader className="flex flex-row items-start justify-between gap-4 p-0">
          <div  className="w-3/4">
            <h3 className="text-white text-lg font-bold tracking-tight">
              {project.title}
            </h3>

            <p className="text-white/90 text-xs mt-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 line-clamp-3">
              {project.description}
            </p>
          </div>
          <Share2 size={18} className="text-white/80" />
        </CardHeader>

        <CardFooter className="flex justify-between items-end p-0">
          {project.externalLinks?.liveUrl && (
            <LiveLinkButton url={project.externalLinks.liveUrl} />
          )}
          <TechBadges technologies={project.technologies} />
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

const LiveLinkButton = ({ url }: { url: string }) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="See project details"
    className="group flex items-center gap-2 z-10"
  >
    <Button
      size="icon"
      className="w-9 h-9 rounded-full text-black bg-white border border-slate-200 transition hover:bg-slate-100"
    >
      <ArrowUpRight size={16} />
    </Button>
    <span className="text-white text-sm font-medium opacity-0 -translate-x-8 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
      See Details
    </span>
  </Link>
);

const TechBadges = ({
  technologies,
}: {
  technologies: IProject["technologies"];
}) => (
  <div className="flex gap-1 justify-end z-10">
    {technologies.map((tech) => (
      <span
        key={tech._id}
        className="bg-white/80 text-slate-800 font-semibold text-[.65rem] rounded-full px-2 py-0.5"
      >
        {tech.name}
      </span>
    ))}
  </div>
);
