import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type ContainerProps = {
  /**
   * Determines the layout of the container.
   * - `"grid"` applies a grid layout.
   * - `"flex-row"` applies a flex container with horizontal layout.
   * - `"flex-col"` applies a flex container with vertical layout.
   */
  variant?: "grid" | "flex-row" | "flex-col";
  
  /**
   * Additional custom CSS classes to apply to the container.
   */
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Helper function to determine the class names based on the `variant` prop.
 * 
 * @param variant - The layout variant for the container (grid, flex-row, flex-col).
 * @returns The corresponding class string for the container layout.
 */
const getVariantClass = (variant?: ContainerProps["variant"]) => {
  switch (variant) {
    case "grid":
      return "grid gap-4";
    case "flex-row":
      return "flex flex-row";
    case "flex-col":
      return "flex flex-col";
    default:
      return "";
  }
};

/**
 * A flexible container component that can apply different layouts.
 * It supports grid or flex layouts (row or column) and allows additional custom classes.
 * 
 * @param {ContainerProps} props - The props for the container component.
 * @param {React.Ref} ref - The ref forwarded to the container element.
 * 
 * @returns {JSX.Element} The container component.
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, children, ...rest }, ref) => {
    const variantClass = getVariantClass(variant);

    return (
      <div ref={ref} className={cn(variantClass, className)} {...rest}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
