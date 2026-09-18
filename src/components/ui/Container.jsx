import { cn } from "@/lib/utils";

export default function Container({ children, className, size = "default" }) {
  const sizeClasses = {
    default: "max-w-[1520px]",
    narrow: "max-w-[1240px]",
    wide: "max-w-[1720px]",
    full: "max-w-none",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
        sizeClasses[size] || sizeClasses.default,
        className
      )}
    >
      {children}
    </div>
  );
}
