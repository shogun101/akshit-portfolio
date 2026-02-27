"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TextEffect } from "@/app/components/text-effect";
import { Marquee } from "@/app/components/marquee";
import { LiveClock } from "@/app/components/live-clock";

const experiments = [
  {
    date: "FEB '26",
    name: "BrandSprint",
    description: "Brand Workshops powered by AI",
    href: "#",
    year: 2026,
  },
  {
    date: "JAN '26",
    name: "Prompt Archive",
    description: "Brand Components",
    href: "#",
    year: 2026,
  },
  {
    date: "IN 2025",
    name: "Gloww",
    description: null,
    logos: [
      { src: "/images/coinbase.png", alt: "Coinbase" },
      { src: "/images/degen.png", alt: "Degen" },
      { src: "/images/instadapp.png", alt: "Instadapp" },
    ],
    href: "#",
    year: 2025,
  },
  {
    date: "2024",
    name: "Velar",
    description: "Lead Designer",
    href: "#",
    year: 2024,
  },
];

const marqueeImages = [
  { src: "/images/project-1.png", alt: "Trading interface", border: false },
  { src: "/images/project-2.png", alt: "Velar DEX", border: true },
  { src: "/images/project-3.png", alt: "Colorful design", border: false },
];

const stagger = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  },
};

function HighlightLink({
  href,
  children,
  underline,
}: {
  href: string;
  children: React.ReactNode;
  underline: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block"
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-[1px] left-0 right-0 h-[10px] flex items-center justify-center"
        style={{ mixBlendMode: "difference" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
        whileHover={{ scaleY: 1.3 }}
      >
        <img
          src={underline}
          alt=""
          className="w-full h-full object-fill"
          draggable={false}
        />
      </motion.span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main content area */}
      <main className="mx-auto max-w-[550px] px-6 pt-20 pb-10">
        {/* Header */}
        <motion.div
          className="mb-12"
          variants={stagger.container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={stagger.item}>
            <p className="text-[14px] font-medium leading-[20px] tracking-[-0.09px] text-[#111]">
              Akshit Verma
            </p>
          </motion.div>
          <motion.div variants={stagger.item}>
            <p className="text-[13.9px] font-medium leading-[20px] tracking-[-0.09px] text-black/40">
              <LiveClock />
            </p>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <div className="flex flex-col gap-5 mb-12">
          <div className="text-[14px] font-medium leading-[20px] tracking-[-0.09px] text-[#111]">
            <TextEffect per="word" preset="fade-in-blur" delay={0.3} speedReveal={0.03} speedSegment={0.4}>
              I design interfaces with care and document them on my
            </TextEffect>{" "}
            <HighlightLink href="https://twitter.com" underline="/images/underline-twitter.svg">
              <TextEffect per="word" preset="fade-in-blur" delay={0.6} speedReveal={0.03} speedSegment={0.4}>
                Twitter
              </TextEffect>
            </HighlightLink>
            <TextEffect per="word" preset="fade-in-blur" delay={0.65} speedReveal={0.03} speedSegment={0.4}>
              .
            </TextEffect>
          </div>

          <div className="text-[14px] font-medium leading-[20px] tracking-[-0.09px] text-[#111]">
            <TextEffect per="word" preset="fade-in-blur" delay={0.5} speedReveal={0.02} speedSegment={0.4}>
              Last year I ran
            </TextEffect>{" "}
            <HighlightLink href="https://gloww.design" underline="/images/underline-gloww.svg">
              <TextEffect per="word" preset="fade-in-blur" delay={0.6} speedReveal={0.02} speedSegment={0.4}>
                Gloww
              </TextEffect>
            </HighlightLink>
            <TextEffect per="word" preset="fade-in-blur" delay={0.65} speedReveal={0.02} speedSegment={0.4}>
              , helping teams building on Base and Solana, crafting interfaces for video gen workflows, perp DEXs, trading extensions, and almost everything in between.
            </TextEffect>
          </div>

          <div className="text-[14px] font-medium leading-[20px] tracking-[-0.09px] text-[#111]">
            <TextEffect per="word" preset="fade-in-blur" delay={0.7} speedReveal={0.02} speedSegment={0.4}>
              I consider myself a designer at heart and enjoy building highly polished products.
            </TextEffect>
          </div>

          <div className="text-[14px] font-medium leading-[20px] tracking-[-0.09px] text-[#111]">
            <TextEffect per="word" preset="fade-in-blur" delay={0.85} speedReveal={0.02} speedSegment={0.4}>
              I&apos;m probably tinkering with my agent right now. If you want to get in touch, DM me on
            </TextEffect>{" "}
            <HighlightLink href="https://t.me" underline="/images/underline-telegram.svg">
              <TextEffect per="word" preset="fade-in-blur" delay={1.1} speedReveal={0.02} speedSegment={0.4}>
                Telegram
              </TextEffect>
            </HighlightLink>
            <TextEffect per="word" preset="fade-in-blur" delay={1.15} speedReveal={0.02} speedSegment={0.4}>
              , or if you&apos;re an SSO connoisseur,
            </TextEffect>{" "}
            <HighlightLink href="mailto:akshit@gloww.design" underline="/images/underline-email.svg">
              <TextEffect per="word" preset="fade-in-blur" delay={1.3} speedReveal={0.02} speedSegment={0.4}>
                akshit@gloww.design
              </TextEffect>
            </HighlightLink>
            <TextEffect per="word" preset="fade-in-blur" delay={1.35} speedReveal={0.02} speedSegment={0.4}>
              .
            </TextEffect>
          </div>
        </div>

        {/* Experiments */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {/* Section heading */}
          <div className="flex flex-col gap-[13px] mb-0">
            <p className="text-[13.9px] font-medium tracking-[-0.09px] text-black/40">
              Experiments
            </p>
            <div className="h-px bg-[#f2f2f2]" />
          </div>

          {/* Experiment rows */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 1.4 }}
          >
            {experiments.map((exp, i) => (
              <motion.a
                key={exp.name}
                href={exp.href}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: 1.4 + i * 0.08,
                      ease: [0.25, 0.1, 0.25, 1] as const,
                    },
                  },
                }}
                className="group relative flex items-start md:items-center min-h-[52px] md:h-[40.5px] py-2 md:py-0 cursor-pointer"
              >
                {/* Hover background */}
                <div className="absolute inset-x-[-12px] inset-y-0 rounded-[6px] bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                {/* Date */}
                <span className="relative z-10 w-[108px] shrink-0 text-[13.9px] font-medium tracking-[-0.09px] text-black/40 self-start md:self-auto pt-[2px] md:pt-0">
                  {exp.date}
                </span>

                {/* Name + description wrapper */}
                <span className="relative z-10 flex flex-col md:flex-row md:items-center md:flex-1">
                <span className="text-[14px] font-medium tracking-[-0.09px] text-[#111]">
                  {exp.name}
                </span>

                {/* Description or logos */}
                <span className="md:ml-auto flex items-center gap-2 mt-0.5 md:mt-0">
                  {exp.logos ? (
                    <>
                      <span className="text-[13.8px] font-medium tracking-[-0.09px] text-black/40">
                        designed for
                      </span>
                      <span className="flex items-center">
                        {exp.logos.map((logo) => (
                          <span
                            key={logo.alt}
                            className="relative w-[17px] h-[17px] rounded-[3px] border border-white overflow-hidden"
                          >
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              fill
                              className="object-contain"
                              sizes="17px"
                            />
                          </span>
                        ))}
                      </span>
                      <span className="text-[13.8px] font-medium tracking-[-0.09px] text-black/40">
                        + more
                      </span>
                    </>
                  ) : (
                    <span className="text-[13.8px] font-medium tracking-[-0.09px] text-black/40">
                      {exp.description}
                    </span>
                  )}
                </span>
                </span>

                {/* Bottom border — full width on year change, indented within same year */}
                {i < experiments.length - 1 && (() => {
                  const nextYear = experiments[i + 1].year;
                  const sameYear = exp.year === nextYear;
                  return (
                    <span className={`absolute bottom-0 right-0 h-px bg-[#f2f2f2] ${sameYear ? "left-[108px]" : "left-0"}`} />
                  );
                })()}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </main>

      {/* Marquee — full bleed */}
      <motion.div
        className="mt-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Marquee images={marqueeImages} speed={40} gap={48} />
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mx-auto max-w-[550px] px-6 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <div className="flex flex-col gap-12">
          <div className="h-px w-[50px] bg-[#ededed]" />
          <p className="text-[13.9px] font-medium leading-[20px] tracking-[-0.09px] text-black/40">
            Last Updated {process.env.NEXT_PUBLIC_LAST_UPDATED}
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
