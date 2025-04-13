import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TechnologyIcon: React.FC<{
  logo: { asset: { url: string }; alt: string };
}> = ({ logo }) => {
  return (
    <Avatar className="w-12 h-12 p-2 transition-transform duration-300 hover:scale-105">
      <AvatarImage
        src={logo.asset.url}
        alt={logo.alt}
        className="w-full h-full object-contain"
      />
      <AvatarFallback className="text-white bg-gray-500">T</AvatarFallback>
    </Avatar>
  );
};

export default TechnologyIcon;
