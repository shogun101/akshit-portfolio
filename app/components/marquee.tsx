"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MarqueeProps {
  images: { src: string; alt: string; border?: boolean }[];
  speed?: number;
  gap?: number;
}

export function Marquee({ images, speed = 40, gap = 48 }: MarqueeProps) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth / 2;
      setWidth(scrollWidth);
    }
  }, [images]);

  useEffect(() => {
    if (width === 0) return;

    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: [-0, -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: width / speed,
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, width, speed, controls]);

  const allImages = [...images, ...images];

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex"
        animate={controls}
        style={{ gap }}
      >
        {allImages.map((img, i) => (
          <div
            key={i}
            className={`relative shrink-0 rounded-[4px] overflow-hidden ${
              img.border ? "border border-[#f2f2f2]" : ""
            }`}
            style={{ width: 747, height: 420 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="747px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
