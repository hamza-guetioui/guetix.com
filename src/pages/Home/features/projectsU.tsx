"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project 1",
    techs: ["React", "Node.js", "MongoDB"],
    thumbnail: "/img/p1.jpeg",
  },
  {
    id: 2,
    title: "Project 2",
    techs: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    thumbnail: "/img/p2.jpeg",
  },
  {
    id: 3,
    title: "Project 3",
    techs: ["Vue.js", "Firebase", "Express"],
    thumbnail: "/img/p3.jpeg",
  },
  {
    id: 4,
    title: "Project 4",
    techs: ["Angular", "GraphQL", "MySQL"],
    thumbnail: "/img/p4.jpeg",
  },
];

export default function Projects() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-slate-200 font-bold">Projects</h1>
        <span className="w-[50%] h-1 bg-slate-50 rounded-full"></span>
        <h1 className="text-slate-200">See more</h1>
      </div>

      <Carousel className="w-full md:w-[80%]">
        <CarouselContent className="-ml-1">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="basis-3/4 md:basis-4/6">
              <motion.div
                className="relative bg-black/30 h-40 rounded-lg overflow-hidden shadow-lg group"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />

                {/* Card Content */}
                <Card className="relative bg-transparent">
                  <CardContent className="flex flex-col items-center justify-center h-full w-full">
                    <span className="text-2xl font-semibold text-white">
                      {project.title}
                    </span>

                    {/* Techs will appear on hover */}
                    {/* <div className="absolute inset-0 flex justify-center items-center">
                      <motion.div
                        className="flex gap-4 justify-center absolute w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          y: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        {project.techs.map((tech, index) => (
                          <motion.div
                            key={index}
                            className="bg-white text-gray-800 px-3 py-2 rounded-full text-xs"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              transform: `rotate(${(index + 1) * 60}deg) translateX(80px)`,
                              position: "absolute",
                            }}
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
