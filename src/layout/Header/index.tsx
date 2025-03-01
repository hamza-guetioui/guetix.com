import React from "react";
import Logo from "./logo";

import Navbar from "./navbar";
import Navigation from "./navigation";
import ModeBtn from "./mode_button";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBookmark,
// } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <header className="relative">
      <div className="grid grid-cols-[15%_70%_15%] absolute top-4 left-0 w-full px-8 ">
        <Logo />
        <Navbar>
          <Navigation />
        </Navbar>
        <ModeBtn/>
      </div>
    </header>
  );
};

export default Index;


  