import React from "react";
import { ITechnology } from "../types";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

type TechnologyTooltipProps = {
  data: ITechnology;
  className?: string;
};

const TechnologyTooltip: React.FC<TechnologyTooltipProps> = ({
  data,
  className = "",
}) => {
  return (
    <div className="relative group">
      <button
        className={`flex flex-col  items-center cursor-help overflow-hidden ${className}`}
      >
        <TechIcon data={data} />
      </button>
      <TechDescription data={data} />
    </div>
  );
};
export default TechnologyTooltip;

const TechIcon: React.FC<{ data: ITechnology }> = ({ data }) => (
  <Image
    src={data.logo.asset.url}
    alt={data.logo.alt}
    width={48}
    height={48}
    className="w-full h-full object-contain hover:scale-105"
    placeholder="blur"
    blurDataURL={data.logo.asset.metadata.lqip}
    quality={75}
    priority
  />
);

const TechDescription: React.FC<{ data: ITechnology }> = ({ data }) => {
  return (
    <div className="absolute w-64 top-full pt-2 left-1/2 -translate-x-1/2  z-20 hidden group-hover:block ">
      <div className=" bg-white text-gray-800 text-xs rounded-lg shadow-lg p-3 z-20 border border-slate-200">
        <p className="mb-2 font-medium leading-5">{data.description}</p>
        <Link
          href={data.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-500 hover:underline text-sm"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
          Visit the Site
        </Link>
      </div>
    </div>
  );
};
