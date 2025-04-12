import Link from "next/link";
import { Button } from "@/components/ui/button"; // Importing Button component from ShadCN UI components

/**
 * `ContactMe` component - A button that triggers a link to contact.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.label - Custom label for the button. Defaults to "Contact Me!" if not provided.
 *
 * @returns {JSX.Element} The contact button wrapped around a link.
 */
export interface ContactMeProps {
  label?: string;
}

const ContactMe: React.FC<ContactMeProps> = ({ label = "Contact Me!" }) => {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center rounded-full px-4 py-2 font-bold text-base transition-all text-black bg-white/90 hover:bg-white hover:text-blue-400 shadow-md"
      asChild
    >
      <Link href="#">{label}</Link>
    </Button>
  );
};

export default ContactMe;
