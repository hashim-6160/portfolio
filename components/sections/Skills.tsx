"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <SectionWrapper id="skills" className="section-padding relative">
      {/* Subtle radial bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Technical Skills"
          title="My "
          highlight="Tech Stack"
          subtitle="Technologies and tools I work with daily to build exceptional products."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === cat.id
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground glass border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {activeTab === cat.id && (
                <motion.span
                  layoutId="skillTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {active.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group glass rounded-xl border border-white/10 p-5 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                  <span className="text-xs font-bold text-indigo-400">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 + i * 0.04 }}
                  />
                </div>

                {/* Level label */}
                <p className="text-xs text-muted-foreground mt-2">
                  {skill.level >= 90
                    ? "Expert"
                    : skill.level >= 80
                    ? "Advanced"
                    : skill.level >= 70
                    ? "Proficient"
                    : "Familiar"}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech cloud at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Also worked with
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Zod", "React Query", "Apollo Client", "Prisma", "Vercel", "ESLint", "Prettier", "Git", "GitHub Actions"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-indigo-500/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
