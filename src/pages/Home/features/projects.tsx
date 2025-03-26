import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  return (
    <Carousel className="w-full md:w-[80%]">
      <CarouselContent className="-ml-1">
      {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-3/4 md:basis-4/6"> 
            <Card className="bg-black/30  h-40"> {/* Fixed size */}
              <CardContent className="flex aspect-square items-center justify-center h-full w-full ">
                <span className="text-2xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
