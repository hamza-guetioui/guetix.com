"use client";

import React, { useState } from "react";
import { ITechnology } from "../types";
import Image from "next/image";
import Link from "next/link";

type TechnologyItemProps = {
  data: ITechnology;
  className?: string;
};

const TechnologyItem: React.FC<TechnologyItemProps> = ({ data, className = "" }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  const handleToggleDescription = () => {
    setIsDescriptionOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`flex flex-col gap-2 group hover:bg-slate-100 p-2 rounded-lg transition-colors ${className}`}
    >
      <div className="flex items-center gap-3">
        <TechIcon data={data} />
        <TechTitle
          name={data.name}
          description={data.description}
          isOpen={isDescriptionOpen}
          onToggle={handleToggleDescription}
        />
      </div>

      {isDescriptionOpen && <TechDescription description={data.description} website={data.website} />}
    </div>
  );
};

export default TechnologyItem;

type TechIconProps = {
  data: ITechnology;
};

const TechIcon: React.FC<TechIconProps> = ({ data }) => {
  return (
    <div className="w-14 h-14 p-2 transition-transform duration-300 group-hover:scale-105 hover:scale-105">
      <Image
        src={data.logo.asset.url}
        alt={data.logo.alt}
        width={28}
        height={28}
        className="w-full h-full object-contain"
        placeholder="blur"
        blurDataURL={data.logo.asset.metadata.lqip}
        quality={75}
        priority
      />
    </div>
  );
};

type TechTitleProps = {
  name: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
};

const TechTitle: React.FC<TechTitleProps> = ({ name, description, isOpen, onToggle }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-800">{name}</span>
      <p className="text-xs text-gray-500">
        {description.slice(0, 30)}...
        <button
          onClick={onToggle}
          className="text-blue-500 text-xs ml-1 hover:underline"
        >
          {isOpen ? "Show less" : "Read more"}
        </button>
      </p>
    </div>
  );
};

type TechDescriptionProps = {
  description: string;
  website: string;
};

const TechDescription: React.FC<TechDescriptionProps> = ({ description, website }) => {
  return (
    <div className="text-xs text-gray-700 bg-slate-50 rounded-md p-2 flex flex-col gap-2 animate-slide-down">
      <p>{description}</p>
      <Link
        href={website}
        target="_blank"
        className="text-blue-600 font-semibold text-xs underline self-end"
      >
        Visit the Site
      </Link>
    </div>
  );
};
