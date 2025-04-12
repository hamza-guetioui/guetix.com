import Container from "@/components/ui/container";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

/**
 * Represents a single social media item.
 */
export interface SocialItem {
  href: string;
  label: string;
  iconName: "linkedin" | "github" | "twitter" | "facebook";
}

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
  items?: SocialItem[];
}

// Default icons map based on name
const iconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  facebook: Facebook,
};

/**
 * `Socials` - A flexible social media icon list with dynamic layout and shape.
 * Can accept static or dynamic data (e.g., from Sanity).
 */
const Socials: React.FC<SocialsProps> = ({
  direction = "col",
  variant = "rounded",
  className = "",
  items = [
    { href: "https://linkedin.com", label: "LinkedIn", iconName: "linkedin" },
    { href: "https://github.com", label: "GitHub", iconName: "github" },
    { href: "https://twitter.com", label: "Twitter", iconName: "twitter" },
    { href: "https://facebook.com", label: "Facebook", iconName: "facebook" },
  ],
}) => {
  return (
    <Container
      variant={`flex-${direction}`}
      className={clsx(
        "absolute z-20 top-4 right-2 justify-center items-center gap-3",
        className
      )}
    >
      {items.map(({ href, label, iconName }) => {
        const Icon = iconMap[iconName];

        if (!Icon) return null; // Skip if icon not found

        return (
          <Link
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "text-slate-600/70 hover:text-slate-100 p-2 transition-colors duration-300 shadow-sm",
              {
                "rounded-full": variant === "rounded",
                "rounded-md": variant === "square",
                "hover:bg-slate-600/30": true,
                "bg-slate-300/70": true,
              }
            )}
          >
            <Icon size={15} />
          </Link>
        );
      })}
    </Container>
  );
};

export default Socials;
