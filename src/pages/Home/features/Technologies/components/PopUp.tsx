"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "./styles.module.css";

type PopUpProps = {
  children: React.ReactNode;
  isOpen: boolean; // Add prop to control whether the popup is open
  onClose: () => void; // Function to handle closing the popup
};

const PopUp: React.FC<PopUpProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with Framer Motion */}
      <motion.div
        className="fixed inset-0 bg-black/30 opacity-50 z-40"
        onClick={onClose} // Close the popup when overlay is clicked
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {/* Popup Content with Framer Motion */}
      <motion.div
        className={`absolute right-0 top-full mt-2 w-5/6 max-h-80 bg-white border border-slate-200 shadow-xl rounded-xl p-4 flex flex-col gap-3 overflow-y-auto z-50 
          ${styles.popup_scroll}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
        {children}
      </motion.div>
    </>
  );
};

export default PopUp;
