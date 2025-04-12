import Link from "next/link";
import { ExternalLink } from "lucide-react"; // Import Calendar icon from lucide-react

const TechnologyDescription = ({
  description,
  website,
}: {
  description: string;
  website: string;
}) => {
  return (
    <>
      <p className="mb-2 text-xs font-medium leading-5">{description}</p>
      <Link
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-end gap-2 text-blue-500/80 hover:underline text-xs"
      >
        Visit the Site
        <ExternalLink className="w-3 h-3" />
      </Link>
    </>
  );
};

export default TechnologyDescription;
