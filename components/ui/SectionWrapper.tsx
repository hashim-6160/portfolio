"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      className={`mb-16 ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {label && (
        <motion.span
          className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest rounded-full glass border border-indigo-500/30 text-indigo-400"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {label}
        </motion.span>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
        {parts[0]}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
