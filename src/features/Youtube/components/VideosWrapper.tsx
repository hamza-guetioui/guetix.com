"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const videos = [
  { id: 1, title: "Video 1", thumbnail: "/p1.jpeg" },
  { id: 2, title: "Video 2", thumbnail: "/z2.jpg" },
  { id: 3, title: "Video 3", thumbnail: "/grid1.jpeg" },
  { id: 4, title: "Video 4", thumbnail: "/p4.jpeg" },
  { id: 1, title: "Video 1", thumbnail: "/p1.jpeg" },
  { id: 2, title: "Video 2", thumbnail: "/z2.jpg" },
  { id: 3, title: "Video 3", thumbnail: "/grid1.jpeg" },
  { id: 4, title: "Video 4", thumbnail: "/p4.jpeg" },
];

const VideosWrapper = () => {
  const [visibleVideos, setVisibleVideos] = useState(videos);

  const removeVideo = (id: number) => {
    setVisibleVideos((prev) => prev.filter((video) => video.id !== id));
  };

  return (
    <div className=" h-full overflow-hidden  relative">

      <div className="overflow-y-auto h-full w-full max-h-[36rem]  flex flex-col items-center gap-4">
        <AnimatePresence>
          {visibleVideos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg w-[22rem] min-h-44 flex flex-col justify-end items-start p-4"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <h3 className="text-white font-semibold relative z-10">{video.title}</h3>
              <button
                onClick={() => removeVideo(video.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded"
              >
                Remove
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideosWrapper;

