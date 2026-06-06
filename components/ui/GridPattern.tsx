export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, oklch(0.3 0.02 265 / 8%) 1px, transparent 1px),
          linear-gradient(to bottom, oklch(0.3 0.02 265 / 8%) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, oklch(0.4 0.1 265 / 20%) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  );
}
