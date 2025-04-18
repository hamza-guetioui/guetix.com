import Container from "@/components/ui/container";
import React from "react";
import { GET_PROJECTS } from "./server/action";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = async () => {
  const projects = await GET_PROJECTS();

  if (!projects || projects.length === 0) {
    return;
  }


  return (
    <Container className="w-full">
       {/* Title and See More Button */}
       <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-600">My Latest Projects</h2>
        <Button
          variant="outline"
          className="text-slate-800 hover:bg-slate-100 border-slate-200"
        >
          See More
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
      <ProjectsCarousel projects={projects} />
    </Container>
  );
};

export default Index;
