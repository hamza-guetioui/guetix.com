"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Videos from "@/features/Videos";
// import Articles from "@/features/Articles";
import Container from "@/components/ui/container";

const Index = () => {
  const [content, setContent] = useState<string | null>(null);

  const switcher = (value: string) => {
    setContent((prev) => (prev === value ? null : value));
  };

  return (
    <Container className="max-sm:row-start-1 max-sm:row-end-2 md:col-start-6 md:col-end-8 bg-red-300 rounded-md overflow-hidden">
      <div className="flex justify-end gap-4 w-full mb-2 p-2">
        {" "}
        <SwitchButton
          value="Videos"
          onClick={() => switcher("Videos")}
          isActive={content === "Videos"}
        />
        <SwitchButton
          value="Articles"
          onClick={() => switcher("Articles")}
          isActive={content === "Articles"}
        />
      </div>
      <div className="w-full flex justify-end   overflow-hidden">
        <AnimatePresence mode="wait">
          {content === "Videos" && (
            <Slider key="videos">
              <Videos />
            </Slider>
          )}
          {content === "Articles" && (
            <Slider key="articles">
              Ho
            </Slider>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Index;

const Slider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

type SwitchButtonProps = {
  children?: React.ReactNode;
  value: string;
  onClick: () => void;
  isActive?: boolean;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({
  children,
  value,
  onClick: action,
  isActive = false,
}) => {
  return (
    <motion.button
      onClick={() => action()}
      className={`px-6 py-1 font-semibold rounded-full border border-gray-300 
        transition-all duration-300 ease-in-out 
        ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
      whileTap={{ scale: 0.95 }}
    >
      {children ?? value}
    </motion.button>
  );
};
