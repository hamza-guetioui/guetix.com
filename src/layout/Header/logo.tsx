import Image from "next/image";



const Logo = () => {
    return (
      <div className="">
        <Image
          className="dark:invert "
          src="/next.svg"
          alt="Next.js logo"
          width={148}
          height={38}
          priority
        />
      </div>
    );
  };

export default Logo