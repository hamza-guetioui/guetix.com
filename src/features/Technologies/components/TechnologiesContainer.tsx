"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type TechnologiesContentProps = {
  children: React.ReactNode;
};

/**
 * TechnologiesContent - A wrapper component that handles the animation for
 * its children content with a fade-in effect for the header and slide-in effect
 * for the main content.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the wrapper.
 * @returns {JSX.Element} - A JSX element that contains the animated header and content.
 */
const TechnologiesContent: React.FC<TechnologiesContentProps> = ({
  children,
}: TechnologiesContentProps) => {
  return (
    <AnimatePresence>
      {/* Header with fade-in animation */}
      <AnimatedHeader />
      {/* Main content area with slide-in effect */}
      <AnimatedContent>{children}</AnimatedContent>
    </AnimatePresence>
  );
};

export default TechnologiesContent;

const AnimatedHeader: React.FC = () => (
  <motion.h4
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="text-sm font-semibold text-gray-700 mb-2"
  >
    Technologies
  </motion.h4>
);

const AnimatedContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.div
    className="max-h-80 flex flex-col overflow-y-auto"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);
