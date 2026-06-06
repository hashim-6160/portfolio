"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GitBranch, Link2, Mail, Download, Send, CheckCircle, Loader2 } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { GradientBlobBackground } from "@/components/ui/AnimatedGradientBlob";
import { personalInfo } from "@/data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.contact.email,
    href: `mailto:${personalInfo.contact.email}`,
    gradient: "from-blue-500 to-indigo-500",
    description: "Drop me an email anytime",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/hashim",
    href: personalInfo.contact.github,
    gradient: "from-gray-500 to-slate-600",
    description: "Explore my open source work",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/hashim",
    href: personalInfo.contact.linkedin,
    gradient: "from-blue-600 to-blue-500",
    description: "Connect with me professionally",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact form:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <SectionWrapper id="contact" className="section-padding relative overflow-hidden">
      <GradientBlobBackground />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Get In Touch"
          title="Let's Work "
          highlight="Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ready to start something great?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need an enterprise web application, a mobile app, or want to discuss
                a technical challenge — I&apos;m here to help.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href, gradient, description }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-4 glass rounded-xl border border-white/10 p-4 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{description}</p>
                    <p className="text-sm font-semibold text-foreground">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume download */}
            <motion.a
              href={personalInfo.contact.resumeUrl}
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border-2 border-dashed border-indigo-500/40 text-indigo-400 font-semibold hover:border-indigo-500/70 hover:bg-indigo-500/5 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume / CV
            </motion.a>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="glass rounded-2xl border border-white/10 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        {...register("name")}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      {...register("subject")}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
