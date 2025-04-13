"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ReactNode } from "react";

/**
 * Props for the DownloadCv component
 */
interface DownloadCvProps {
  url?: string;
  fileName?: string;
  onClick?: () => void;
}

/**
 * Renders a button that downloads a CV file.
 */
function DownloadCv({
  url,
  fileName = "download",
  onClick,
}: Readonly<DownloadCvProps>) {
  const handleDownload = () => {
    onClick?.();

    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="relative overflow-hidden flex items-center gap-2 group bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-slate-200 transition-all duration-300 px-6 py-2 rounded-md"
      aria-label="Download CV"
    >
      <span className="max-sm:hidden">Download CV</span>
      <Icon>
        <Download className="text-white dark:text-black" size={20} />
      </Icon>
    </Button>
  );
}
export default DownloadCv;

/**
 * Reusable Icon wrapper with transition and hover animation
 */
const Icon = ({ children }: { children: ReactNode }) => (
  <span className="w-4 h-4 transition-transform duration-300 -translate-y-[0.10rem] group-hover:translate-y-0">
    {children}
  </span>
);
