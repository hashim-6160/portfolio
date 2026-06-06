"use client";

interface TechBadgeProps {
  name: string;
  size?: "sm" | "md";
  variant?: "default" | "outline";
}

const colorMap: Record<string, string> = {
  "react.js": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  react: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  "react native": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  "next.js": "bg-slate-400/10 text-slate-300 border-slate-500/30",
  typescript: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  javascript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  "tailwind css": "bg-teal-500/10 text-teal-400 border-teal-500/30",
  "node.js": "bg-green-500/10 text-green-400 border-green-500/30",
  "express.js": "bg-gray-500/10 text-gray-400 border-gray-500/30",
  mongodb: "bg-green-500/10 text-green-400 border-green-500/30",
  graphql: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  "apollo client": "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "react query": "bg-red-500/10 text-red-400 border-red-500/30",
  "rest apis": "bg-orange-500/10 text-orange-400 border-orange-500/30",
  expo: "bg-slate-500/10 text-slate-300 border-slate-500/30",
  zod: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  firebase: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  docker: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  figma: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export function TechBadge({ name, size = "sm", variant = "default" }: TechBadgeProps) {
  const key = name.toLowerCase();
  const colorClass = colorMap[key] ?? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";

  const sizeClass =
    size === "sm"
      ? "px-2.5 py-0.5 text-xs"
      : "px-3.5 py-1 text-sm";

  if (variant === "outline") {
    return (
      <span className={`inline-flex items-center rounded-full border font-medium ${colorClass} ${sizeClass}`}>
        {name}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${colorClass} ${sizeClass}`}>
      {name}
    </span>
  );
}
