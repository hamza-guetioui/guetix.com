import { GET_SOCIALS } from "../../server/action";
import { ISocial } from "../../types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function SocialLinks() {
  const socials = await GET_SOCIALS();

  if (!socials?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {socials.map((social) => (
        <SocialCard key={social._id} social={social} />
      ))}
    </div>
  );
}

function SocialCard({ social }: Readonly<{ social: ISocial }>) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-4">
        <Link
          href={social.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4"
        >
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={social.icon.asset.url}
              alt={social.icon.alt}
              fill
              className="object-cover"
              sizes="(max-width: 48px) 100vw, 48px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold truncate">
              {social.platform}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              @{social.username}
            </p>
          </div>
          {social.isFeatured && <span className="text-yellow-500">★</span>}
        </Link>
      </CardContent>
      <div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: social.color.hex }}
      />
    </Card>
  );
}
