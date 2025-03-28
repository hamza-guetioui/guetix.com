"use client";
import React, { useState } from "react";
import { ITechnology } from "../types";
import Button from "./Button";
import PreTechnologies from "./PreTechnologies";
import PopUp from "./PopUp";
import TechnologyItem from "./TechnologyItem";

type PopupControllerProps = {
  technologies: ITechnology[];
};

const PopupController: React.FC<PopupControllerProps> = ({
  technologies,
}) => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };
  const close = () => {
    setToggle(false);
  };
  const featuredTechnologies = technologies
    .filter((tech) => tech.isFeatured)
    .slice(0, 3);

  return (
    <>
      <PreTechnologies technologies={featuredTechnologies}>
        <Button toggle={toggle} action={toggleState}>
          {technologies.length}
        </Button>
      </PreTechnologies>
      {toggle && (
        <PopUp onClose={close}  isOpen={toggle}>
          {technologies.map((tech) => (
            <TechnologyItem key={tech._id} data={tech} />
          ))}
        </PopUp>
      )}
    </>
  );
};

export default PopupController;
