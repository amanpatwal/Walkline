import { cn } from "@/lib/utils";

export default function SectionHeading({
  overline,
  title,
  subtitle,
  description,
  alignment = "left",
  tagVariant = "espresso",
  className,
  titleClassName,
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const tagStyles = {
    espresso: "bg-[#27409A] text-white border border-[#27409A]",
    caramel: "bg-[#27409A] text-white border border-[#27409A]",
    tan: "bg-[#27409A]/10 text-[#27409A] border border-[#27409A]/20",
    cream: "bg-neutral-50 text-[#000000] border border-neutral-200",
    sand: "bg-neutral-100 text-[#000000] border border-neutral-200",
    yellow: "bg-[#27409A]/10 text-[#27409A] border border-[#27409A]/20",
    pink: "bg-[#27409A] text-white",
    blue: "bg-[#27409A] text-white",
    green: "bg-[#27409A] text-white",
    dark: "bg-[#000000] text-white",
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
              "text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full shadow-sm",
              tagStyles[tagVariant] || tagStyles.espresso
            )}
          >
            {overline}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={cn(
            "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] uppercase text-[#000000] text-balance",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#27409A]">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
