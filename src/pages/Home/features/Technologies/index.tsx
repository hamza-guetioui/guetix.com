import React from "react";
import { GET_TECHNOLOGIES } from "./server/action";
import PopupController from "./components/PopupController";

const Index = async () => {
  const technologies = await GET_TECHNOLOGIES();
  if (!technologies) return null;
  return (
    <PopupController technologies={technologies}/>
    
  
  );
};

export default Index;
