"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function TextReveal({
  text,
  children,
  className,
  as: Component = "h2",
  stagger = 0.04,
  delay = 0,
  threshold = "top 85%",
}) {
  const containerRef = useRef(null);
  const content = text || (typeof children === "string" ? children : "");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".word-inner");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.from(words, {
        yPercent: 110,
        opacity: 0,
        rotateX: -20,
        duration: 0.8,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: threshold,
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, delay, threshold, content]);

  if (!content) {
    return <Component className={className}>{children}</Component>;
  }

  const words = content.split(" ");

  return (
    <Component ref={containerRef} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-top mr-[0.25em]">
          <span className="word-inner inline-block will-change-transform transform-gpu">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
