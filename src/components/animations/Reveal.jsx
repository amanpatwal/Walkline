"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function Reveal({
  children,
  animation = "slideUp",
  delay = 0,
  duration = 0.85,
  ease = "power3.out",
  className,
  threshold = "top 85%",
  as: Component = "div",
  ...props
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !elementRef.current) return;

    const ctx = gsap.context(() => {
      let initialVars = { opacity: 0 };

      switch (animation) {
        case "slideUp":
          initialVars = { opacity: 0, y: 40 };
          break;
        case "slideDown":
          initialVars = { opacity: 0, y: -40 };
          break;
        case "slideLeft":
          initialVars = { opacity: 0, x: 40 };
          break;
        case "slideRight":
          initialVars = { opacity: 0, x: -40 };
          break;
        case "scaleUp":
          initialVars = { opacity: 0, scale: 0.95 };
          break;
        case "fadeIn":
        default:
          initialVars = { opacity: 0 };
          break;
      }

      gsap.from(elementRef.current, {
        ...initialVars,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: elementRef.current,
          start: threshold,
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [animation, delay, duration, ease, threshold]);

  return (
    <Component ref={elementRef} className={cn("will-change-transform", className)} {...props}>
      {children}
    </Component>
  );
}
