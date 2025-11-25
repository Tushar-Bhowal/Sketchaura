"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

type TextEffectProps = {
  children: string;
  className?: string;
  as?: React.ElementType;
  preset?: "fade-in-blur" | "fade-in" | "slide-up";
  per?: "word" | "char" | "line";
  delay?: number;
  speedSegment?: number;
};

export const TextEffect = ({
  children,
  className,
  as: Component = "p",
  preset = "fade-in",
  per = "word",
  delay = 0,
  speedSegment = 0.05,
}: TextEffectProps) => {
  const words = children.split(" ");
  const chars = children.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speedSegment, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: preset === "fade-in-blur" ? "blur(10px)" : "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (per === "word") {
    return (
      <Component className={className}>
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block whitespace-pre-wrap"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className="inline-block mr-1 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    );
  }

  // Simple fallback for 'line' or 'char' to treat as whole block for now to save complexity
  // or implement if needed. For this task, word splitting is likely sufficient for the hero title.
  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span variants={child}>{children}</motion.span>
      </motion.span>
    </Component>
  );
};
