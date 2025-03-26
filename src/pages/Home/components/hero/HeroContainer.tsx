import React from "react";
import styles from "./hero.module.css";

type HeroContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const HeroContainer: React.FC<HeroContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <section className="mb-8 max-sm:mt-24 md:pt-4 md:px-8">
      <div className={`${styles.hero_container} ${className} `}>{children}</div>
    </section>
  );
};

export default HeroContainer;
