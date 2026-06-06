"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-purple-950/20 to-blue-950/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Achievements"
          title="Impact & "
          highlight="Milestones"
          subtitle="Numbers that reflect my growth and contributions across projects and domains."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative glass rounded-2xl border border-white/10 p-8 text-center hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Icon */}
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {achievement.icon}
              </motion.div>

              {/* Number */}
              <div className="text-5xl font-extrabold gradient-text mb-2">
                <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-base font-bold text-foreground mb-2">{achievement.label}</h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional context banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass rounded-2xl border border-indigo-500/20 p-8 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From enterprise CA management platforms to cross-platform mobile applications, I have
            delivered production-grade software across{" "}
            <span className="text-indigo-400 font-semibold">multiple industries</span> and{" "}
            <span className="text-purple-400 font-semibold">technology stacks</span>.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
