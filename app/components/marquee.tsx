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

  // Responsive image size — mobile gets smaller, desktop unchanged
  const [imgSize, setImgSize] = useState({ w: 747, h: 420 });
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setImgSize({ w: 300, h: 169 });
      } else {
        setImgSize({ w: 747, h: 420 });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const mobileGap = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : gap;

  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth / 2;
      setWidth(scrollWidth);
    }
  }, [images, imgSize]);

  useEffect(() => {
    if (width === 0) return;
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: [0, -width],
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
  const gapValue = imgSize.w === 747 ? gap : 20;

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
        style={{ gap: gapValue }}
      >
        {allImages.map((img, i) => (
          <div
            key={i}
            className={`relative shrink-0 rounded-[4px] overflow-hidden ${
              img.border ? "border border-[#f2f2f2]" : ""
            }`}
            style={{ width: imgSize.w, height: imgSize.h }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes={`${imgSize.w}px`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
