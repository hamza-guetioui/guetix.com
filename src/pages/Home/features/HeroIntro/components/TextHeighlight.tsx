"use client";
import { motion } from "framer-motion";
import React from "react";

const TextHighlight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="relative inline-block">
      {/* Animated gradient background */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0  bg-black/40  rounded-lg origin-left opacity-60"
      />
      {/* Text content */}
      <span className="relative">{children}</span>
    </span>
  );
};

export default TextHighlight;