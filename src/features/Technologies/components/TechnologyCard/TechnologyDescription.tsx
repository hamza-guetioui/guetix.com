"use client"
import Link from "next/link";
import { motion } from "framer-motion";

type TechDescriptionProps = {
  description: string;
  website: string;
};

const TechnologyDescription: React.FC<TechDescriptionProps> = ({
  description,
  website,
}) => {
  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  return (
    <motion.div
      className="text-xs text-gray-700 bg-slate-50 rounded-md p-2 flex flex-col gap-2"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <p>{description}</p>
      <Link
        href={website}
        target="_blank"
        className="text-blue-600/80 font-semibold text-xs underline self-end"
      >
        Visit the Site
      </Link>
    </motion.div>
  );
};

export default TechnologyDescription;
