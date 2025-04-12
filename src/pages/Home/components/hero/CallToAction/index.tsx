import Container from "@/components/ui/container";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;  // Allows passing additional className for customization
};

const CTAWrapper: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <Container className={`flex items-center justify-center gap-4 ${className}`}>
      {children}
    </Container>
  );
};

export default CTAWrapper;

