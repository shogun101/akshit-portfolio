"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import React from "react";

type Per = "word" | "char" | "line";
type Preset = "fade" | "blur" | "slide" | "scale" | "fade-in-blur";

interface TextEffectProps {
  children: string;
  per?: Per;
  as?: React.ElementType;
  preset?: Preset;
  delay?: number;
  speedReveal?: number;
  speedSegment?: number;
  trigger?: boolean;
  className?: string;
  segmentClassName?: string;
  onAnimationComplete?: () => void;
}

const presetVariants: Record<Preset, { container: Variants; item: Variants }> = {
  fade: {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    },
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  blur: {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    },
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
    },
    item: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  "fade-in-blur": {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
    },
    item: {
      hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
  },
};

export function TextEffect({
  children,
  per = "word",
  as: Component = "p",
  preset = "fade-in-blur",
  delay = 0,
  speedReveal = 0.05,
  speedSegment = 0.3,
  trigger = true,
  className,
  segmentClassName,
  onAnimationComplete,
}: TextEffectProps) {
  const variants = presetVariants[preset];

  const segments = React.useMemo(() => {
    if (per === "char") return children.split("");
    if (per === "line") return children.split("\n");
    return children.split(" ");
  }, [children, per]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speedReveal,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: variants.item.hidden,
    visible: {
      ...variants.item.visible,
      transition: {
        duration: speedSegment,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {trigger && (
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          onAnimationComplete={onAnimationComplete}
          className={className}
          style={{ display: "inline" }}
        >
          <span className="sr-only">{children}</span>
          {segments.map((segment, i) => (
            <motion.span
              key={`${segment}-${i}`}
              variants={itemVariants}
              className={segmentClassName}
              style={{ display: "inline-block", whiteSpace: "pre" }}
              aria-hidden
            >
              {segment}
              {per === "word" && i < segments.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
