"use client";

import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Mail, ChevronRight, Sparkles } from "lucide-react";
import { GradientBlobBackground } from "@/components/ui/AnimatedGradientBlob";
import { GridPattern } from "@/components/ui/GridPattern";
import { personalInfo } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Backgrounds */}
      <GradientBlobBackground />
      <GridPattern />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 text-sm text-indigo-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground font-medium mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-foreground/80 mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((role) => [role, 2200])}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href={personalInfo.contact.resumeUrl}
                download
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-white/10 text-foreground font-semibold hover:border-indigo-500/40 transition-colors"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4 text-indigo-400" />
                Resume
              </motion.a>

              <motion.button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass border border-white/10 text-foreground font-semibold hover:border-purple-500/40 transition-colors"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4 text-purple-400" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Developer illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 blur-2xl animate-pulse-glow" />

              {/* Code window card */}
              <motion.div
                className="relative glass rounded-3xl border border-white/10 p-6 shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">portfolio.tsx</span>
                </div>

                {/* Code lines */}
                <div className="font-mono text-sm space-y-2">
                  {[
                    { indent: 0, content: "const developer = {", color: "text-purple-400" },
                    { indent: 1, content: "name: ", color: "text-blue-400", val: '"Hashim"', valColor: "text-green-400" },
                    { indent: 1, content: "role: ", color: "text-blue-400", val: '"Full Stack Dev"', valColor: "text-green-400" },
                    { indent: 1, content: "skills: ", color: "text-blue-400", val: "['React', 'Next.js', ...]", valColor: "text-yellow-400" },
                    { indent: 1, content: "passion: ", color: "text-blue-400", val: '"Building great UX"', valColor: "text-green-400" },
                    { indent: 1, content: "available: ", color: "text-blue-400", val: "true", valColor: "text-orange-400" },
                    { indent: 0, content: "};", color: "text-purple-400" },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      className="flex"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <span className="text-muted-foreground/30 w-6 text-right mr-4 select-none text-xs leading-6">{i + 1}</span>
                      <span style={{ paddingLeft: `${line.indent * 16}px` }} className={line.color}>
                        {line.content}
                        {"val" in line && (
                          <span className={(line as { valColor: string }).valColor}>{(line as { val: string }).val}</span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                  {[
                    { label: "Projects", val: "6+" },
                    { label: "Stack", val: "Full" },
                    { label: "Status", val: "Open" },
                  ].map(({ label, val }) => (
                    <div key={label} className="text-center">
                      <p className="text-lg font-bold gradient-text">{val}</p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-xl border border-indigo-500/30 px-3 py-2 text-xs font-semibold text-indigo-400"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                ⚡ Next.js 15
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-xl border border-purple-500/30 px-3 py-2 text-xs font-semibold text-purple-400"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                📱 React Native
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-20 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
