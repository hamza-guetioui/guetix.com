import React from "react";
import Logo from "@/components/logo/HeaderLogo";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import ModeToggle from "./ModeToggle";
import Container from "@/components/ui/container";
import DownloadCv from "./DownloadCv";

const Index = () => {
  return (
    <header className="w-full bg-white dark:bg-black">
      <Container variant="grid" className="grid grid-cols-5 w-full px-2 py-2 lg:px-16">
        {/* Logo Section */}
        <Container variant="flex-row" className="col-span-3 lg:col-span-1 flex justify-center items-center order-2 lg:order-1">
          <Logo />
        </Container>

        {/* Navigation Section */}
        <Container variant="flex-row" className="col-span-1 lg:col-span-3 flex justify-center items-center  order-1 lg:order-2">
          <Navbar>
            <Navigation />
          </Navbar>
        </Container>

        {/* Mode Toggle / Download CV Section */}
        <Container variant="flex-row" className="col-span-1 flex justify-center items-center gap-4 order-3 lg:order-3">
          <DownloadCv />
          <ModeToggle />
        </Container>
      </Container>
    </header>
  );
};

export default Index;