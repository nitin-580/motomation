"use client";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: [
      "400",
      "500",
      "600",
      "700",
      "800"
    ],
  });

import { useRef } from "react";

import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function HighlightSection() {
    const ref = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 80%", "end 40%"],
    });
  
  
    const text =
      "We design systems that replace repetitive work with intelligent automation.";
  
    const words = text.split(" ");
  
  
    return (
      <section
        ref={ref}
        className="
          min-h-screen
          bg-[#f8fafc]
  
          flex
          items-center
  
          px-8
          md:px-24
        "
      >
  
        <h2
          className={`
            ${bricolage.className}
  
            max-w-[1300px]
  
            text-5xl
            md:text-8xl
  
            font-normal
  
            tracking-[-0.06em]
  
            leading-[1]
          `}
        >
  
          {words.map((word, index) => {
  
            const start =
              index / words.length;
  
            const end =
              (index + 1) / words.length;
  
  
            const color =
              useTransform(
                scrollYProgress,
                [start, end],
                [
                  "#0f172a",
                  "#dc2626"
                ]
              );
  
  
            return (
  
              <motion.span
                key={index}
  
                style={{
                  color,
                }}
  
                className="
                  inline-block
                  mr-5
  
                  transition-colors
                "
              >
  
                {word}
  
              </motion.span>
  
            );
  
          })}
  
  
        </h2>
  
  
      </section>
    );
  }

  export default HighlightSection;