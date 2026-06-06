"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scaleX } = useScrollProgress();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "achievements", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">Hashim</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-indigo-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-white/5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {mounted && (
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <motion.button
              onClick={() => scrollTo("#contact")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hire Me
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center border border-white/5"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-4 right-4 glass rounded-2xl border border-white/10 p-4 shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-left px-4 py-3 rounded-xl text-foreground hover:bg-white/5 transition-colors font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <button
                  onClick={() => scrollTo("#contact")}
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-center"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
