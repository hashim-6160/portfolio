"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, Heart, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socialLinks = [
  { icon: GitBranch, label: "GitHub", href: personalInfo.contact.github },
  { icon: Link2, label: "LinkedIn", href: personalInfo.contact.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${personalInfo.contact.email}` },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-background">
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">Hashim</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer crafting scalable enterprise applications and
              delightful digital experiences.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-indigo-400 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg glass flex items-center justify-center group-hover:border-indigo-500/30 transition-colors border border-white/5">
                    <Icon className="w-4 h-4" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Designed &amp; developed with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            {" "}by{" "}
            <span className="text-indigo-400 font-medium">Hashim</span>
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
