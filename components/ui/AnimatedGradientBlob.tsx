"use client";

import { motion } from "framer-motion";

interface BlobProps {
  className?: string;
  color?: "indigo" | "purple" | "blue" | "cyan";
  size?: "sm" | "md" | "lg" | "xl";
  delay?: number;
}

const colorMap = {
  indigo: "bg-indigo-500/20",
  purple: "bg-purple-500/20",
  blue: "bg-blue-500/20",
  cyan: "bg-cyan-500/20",
};

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
};

export function AnimatedGradientBlob({
  className = "",
  color = "indigo",
  size = "lg",
  delay = 0,
}: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${colorMap[color]} ${sizeMap[size]} ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -50, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function GradientBlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatedGradientBlob
        color="indigo"
        size="xl"
        className="-top-32 -left-32 opacity-40"
        delay={0}
      />
      <AnimatedGradientBlob
        color="purple"
        size="lg"
        className="top-1/3 -right-24 opacity-30"
        delay={2}
      />
      <AnimatedGradientBlob
        color="blue"
        size="md"
        className="bottom-0 left-1/4 opacity-25"
        delay={4}
      />
    </div>
  );
}
