"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
};

export const AnimatedGroup = ({
  children,
  className,
  variants,
}: AnimatedGroupProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
