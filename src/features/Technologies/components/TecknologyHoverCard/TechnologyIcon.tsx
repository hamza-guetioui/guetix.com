import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TechnologyIcon = ({
  logo: { asset: { url }, alt },
}: {
  logo: { asset: { url: string }; alt: string };
}) => (
  <Avatar>
    <AvatarImage src={url} alt={alt} />
    <AvatarFallback className="text-white bg-gray-500">T</AvatarFallback>
  </Avatar>
);

export default TechnologyIcon;