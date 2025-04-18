import { GET_SOCIALS } from "../../server/action";
import { ISocial } from "../../types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function SocialIcons() {
  const socials = await GET_SOCIALS();

  if (!socials?.length) return null;

  return (
    <div className="flex items-center gap-2">
      {socials.map((social) => (
        <SocialIcon key={social._id} social={social} />
      ))}
    </div>
  );
}

function SocialIcon({ social }: Readonly<{ social: ISocial }>) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="relative h-8 w-8 rounded-full transition-colors hover:bg-muted"
      style={{ color: social.color.hex }}
    >
      <Link
        href={social.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`${social.platform} - @${social.username}`}
      >
        <div className="relative h-5 w-5">
          <Image
            src={social.icon.asset.url}
            alt={social.icon.alt}
            fill
            className="object-contain"
            sizes="(max-width: 20px) 100vw, 20px"
          />
        </div>
        {social.isFeatured && (
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-yellow-500" />
        )}
      </Link>
    </Button>
  );
}
