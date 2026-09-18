import { cn } from "@/lib/utils";

export default function SectionHeading({
  overline,
  title,
  subtitle,
  description,
  alignment = "left",
  tagVariant = "yellow",
  className,
  titleClassName,
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const tagStyles = {
    yellow: "bg-[#F4F000] text-black border border-black",
    pink: "bg-[#FF4F7B] text-white border border-black",
    blue: "bg-[#3155FF] text-white border border-black",
    green: "bg-[#A8E63D] text-black border border-black",
    dark: "bg-black text-white border border-black",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl",
        alignmentClasses[alignment] || alignmentClasses.left,
        className
      )}
    >
      {overline && (
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <span
            className={cn(
              "text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#000]",
              tagStyles[tagVariant] || tagStyles.yellow
            )}
          >
            {overline}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={cn(
            "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] uppercase text-[#111111] text-balance",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#555555]">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#666666] max-w-2xl font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
