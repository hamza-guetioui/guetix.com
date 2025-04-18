import Container from "@/components/ui/container";
import clsx from "clsx";
import { GET_SOCIALS } from "./server/action";
import { ISocial } from "./types";
import Image from "next/image";

/**
 * Props for the Socials component.
 *
 * @param direction - Flex direction for icon layout ("row" | "col").
 * @param variant - Shape of the icons ("rounded" | "square").
 * @param className - Additional classes for styling.
 * @param items - Optional array of social links (can be fetched from CMS).
 */
export interface SocialsProps {
  direction?: "row" | "col";
  variant?: "rounded" | "square";
  className?: string;
}

/**
 * `Socials` - A flexible social media icon list with dynamic layout and shape.
 * Can accept static or dynamic data (e.g., from Sanity).
 */
const Socials: React.FC<SocialsProps> = async ({
  direction = "col",
  variant = "rounded",
  className = "",
}) => {
  const socials: ISocial[] | null = await GET_SOCIALS();
  if (!socials || socials.length === 0) {
    return null;
  }

  return (
    <Container
      variant={`flex-${direction}`}
      className={clsx(
        "absolute z-20 top-4 right-2 justify-center items-center gap-3",
        className
      )}
    >
      {socials.map((social) => {
        return (
          <Container
            key={social._id}
            className={clsx(
              "w-8 h-8",
              variant === "rounded" && "rounded-full",
              variant === "square" && "rounded-md",
              "hover:bg-slate-600/30",
              "bg-slate-300/70"
            )}
          >
            <Image
              src={social.icon.asset.url}
              alt={social.icon.alt}
              width={15}
              height={15}
              rel="noopener noreferrer"
              className="w-full h-full object-cover"
            />
          </Container>
        );
      })}
    </Container>
  );
};

export default Socials;
