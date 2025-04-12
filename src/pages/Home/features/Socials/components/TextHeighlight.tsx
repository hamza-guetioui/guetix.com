"use client";

import { motion } from "framer-motion";
import React from "react";
import clsx from "clsx";

type TextHighlightProps = {
  children: React.ReactNode;
  highlightColor?: string;
  rounded?: string;
  duration?: number;
};

/**
 * `TextHighlight` - Highlights text with a smooth animated background effect.
 */
const TextHighlight: React.FC<TextHighlightProps> = ({
  children,
  highlightColor = "bg-gradient-to-r from-slate-500/80 to-slate-400/60",
  rounded = "rounded-full",
  duration = 0.5,
}) => {
  return (
    <span className="relative inline-block">
      {/* Animated background */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.05 }}
        transition={{ duration, ease: "easeOut" }}
        className={clsx(
          "absolute inset-0 origin-left opacity-50 pointer-events-none",
          highlightColor,
          rounded
        )}
      />
      {/* Foreground content */}
      <span className="relative z-10 font-semibold text-slate-900 dark:text-white">
        {children}
      </span>
    </span>
  );
};

export default TextHighlight;
