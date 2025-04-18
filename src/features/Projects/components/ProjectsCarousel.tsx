"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IProject } from "../types";
import ProjectCard from "./ProjectCard";

type ProjectsCarouselProps = {
  projects: IProject[];
};

const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
        inViewThreshold: 0.7,
        skipSnaps: false,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
          jump: false,
          playOnInit: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="mx-2">
        {projects.map((project) => (
          <CarouselItem key={project._id} className="basis-2/5">
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious />
    <CarouselNext /> */}
    </Carousel>
  );
};

export default ProjectsCarousel;
