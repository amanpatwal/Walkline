"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function Parallax({
  children,
  speed = 0.2, // speed factor: positive moves faster, negative moves opposite
  className,
  as: Component = "div",
}) {
  const targetRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !targetRef.current) return;

    const yMovement = speed * 150;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targetRef.current,
        { y: -yMovement },
        {
          y: yMovement,
          ease: "none",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    }, targetRef);

    return () => ctx.revert();
  }, [speed]);

  return (
    <Component ref={targetRef} className={cn("will-change-transform", className)}>
      {children}
    </Component>
  );
}
