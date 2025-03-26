import Link from "next/link";

export interface ContactMe {
  label: string;
}

const ContactMe: React.FC<ContactMe> = ({ label }) => {
  const text = label ? label : "Contact Me!";
  return (
    <button className={`flex items-center justify-center w-full h-fit rounded-full  px-4 py-2 font-semibold shadow-md transition-all bg-white/90 hover:bg-white text-gray-900`}>
      <Link href={"#"}>{text}</Link>
    </button>
  );
};
export default ContactMe