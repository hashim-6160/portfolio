"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { timelineItems } from "@/data/portfolio";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-purple-950/10 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Experience"
          title="Professional "
          highlight="Journey"
          subtitle="My path through enterprise development, mobile engineering, and full-stack expertise."
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass rounded-2xl border border-white/10 p-6 hover:border-indigo-500/30 transition-all duration-300"
                    >
                      {/* Period */}
                      <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
                        {item.period}
                      </span>

                      <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-sm text-purple-400 font-medium mb-3">{item.subtitle}</p>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center icon */}
                  <motion.div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 items-center justify-center text-xl shadow-lg shadow-indigo-500/30 z-10 border border-white/10"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />

                  {/* Mobile icon (top) */}
                  <div className="md:hidden flex w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 items-center justify-center text-lg shadow-lg shadow-indigo-500/30 mb-3">
                    {item.icon}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End dot */}
          <motion.div
            className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
