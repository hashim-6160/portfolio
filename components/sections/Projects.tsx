"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ExternalLink, Star } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { TechBadge } from "@/components/ui/TechBadge";
import { projects } from "@/data/portfolio";

type Filter = "all" | "enterprise" | "mobile" | "personal";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "enterprise", label: "Enterprise" },
  { id: "mobile", label: "Mobile" },
  { id: "personal", label: "Personal" },
];

function filterProject(filter: Filter, type: string): boolean {
  if (filter === "all") return true;
  if (filter === "enterprise") return type.toLowerCase().includes("enterprise") || type.toLowerCase().includes("b2b");
  if (filter === "mobile") return type.toLowerCase().includes("mobile");
  if (filter === "personal") return type.toLowerCase().includes("personal");
  return true;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = projects.filter((p) => filterProject(activeFilter, p.type));

  return (
    <SectionWrapper id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Featured Work"
          title="Projects & "
          highlight="Case Studies"
          subtitle="A selection of enterprise, mobile, and personal projects I've built."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <motion.button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === f.id
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground glass border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {activeFilter === f.id && (
                <motion.span
                  layoutId="projectFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{f.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                className={`group glass rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all duration-300 flex flex-col ${
                  project.featured && i === 0 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
                whileHover={{ y: -6 }}
              >
                {/* Card header gradient */}
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Decorative pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  {/* Code lines decoration */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                    {[80, 60, 90].map((w, j) => (
                      <div
                        key={j}
                        className="h-1.5 rounded-full bg-white/20"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur-sm text-white text-xs font-semibold border border-white/10">
                      {project.type}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-yellow-500/20 text-yellow-400 text-xs font-semibold border border-yellow-500/30">
                        <Star className="w-3 h-3 fill-yellow-400" /> Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Key features */}
                  {project.features && (
                    <ul className="mb-4 space-y-1">
                      {project.features.slice(0, 3).map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GitBranch className="w-3.5 h-3.5" /> GitHub
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground/40">
                        <GitBranch className="w-3.5 h-3.5" /> Private
                      </span>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    ) : (
                      <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground/40">
                        <ExternalLink className="w-3.5 h-3.5" /> NDA Protected
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
