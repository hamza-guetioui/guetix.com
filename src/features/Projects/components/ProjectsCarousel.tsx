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
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnMouseEnter: false,
        }),
      ]}
    >
      <CarouselContent className="mx-2">
        {projects.map((project) => (
          <CarouselItem
            key={project._id}
            className="basis-2/5"
          >
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
