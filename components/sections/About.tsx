"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { GradientBlobBackground } from "@/components/ui/AnimatedGradientBlob";
import { personalInfo, expertiseAreas } from "@/data/portfolio";

export function About() {
  return (
    <SectionWrapper id="about" className="relative section-padding overflow-hidden">
      <GradientBlobBackground />
      <div className="container-custom relative z-10">
        <SectionHeading
          label="About Me"
          title="Passionate About "
          highlight="Building Great Software"
          subtitle={personalInfo.bio}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="glass rounded-2xl border border-white/10 p-8 h-full">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Full Stack Developer specializing in{" "}
                <span className="text-indigo-400 font-medium">React</span>,{" "}
                <span className="text-purple-400 font-medium">Next.js</span>,{" "}
                <span className="text-blue-400 font-medium">TypeScript</span>,{" "}
                <span className="text-green-400 font-medium">Node.js</span>, and{" "}
                <span className="text-cyan-400 font-medium">React Native</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I have experience building enterprise platforms, B2B procurement systems, mobile
                commerce applications, and asset management solutions. I enjoy creating intuitive
                user experiences while developing scalable and maintainable software solutions.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Enterprise Projects", value: "6+" },
                  { label: "Years Building", value: "3+" },
                  { label: "Technologies", value: "20+" },
                  { label: "Domains", value: "4+" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white/5 border border-white/5 p-4 text-center"
                  >
                    <p className="text-2xl font-bold gradient-text">{value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Expertise grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Core Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group glass rounded-xl border border-white/10 p-5 cursor-default hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center text-xl mb-3 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {area.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {area.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
