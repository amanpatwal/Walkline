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
    espresso: "bg-[#321D12] text-[#FAF7F1] border border-[#24140D]/20",
    caramel: "bg-[#9A6238] text-[#FAF7F1] border border-[#9A6238]/30",
    tan: "bg-[#C69A6B] text-[#24140D] border border-[#C69A6B]/30",
    cream: "bg-[#F3E8D8] text-[#321D12] border border-[#321D12]/15",
    sand: "bg-[#E6D4BC] text-[#24140D] border border-[#24140D]/10",
    yellow: "bg-[#F3E8D8] text-[#321D12] border border-[#321D12]/15",
    pink: "bg-[#9A6238] text-[#FAF7F1]",
    blue: "bg-[#321D12] text-[#FAF7F1]",
    green: "bg-[#C69A6B] text-[#24140D]",
    dark: "bg-[#24140D] text-[#FAF7F1]",
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
            "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] uppercase text-[#24140D] text-balance",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#5A351F]">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="mt-2 text-sm sm:text-base text-[#8A6E58] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
