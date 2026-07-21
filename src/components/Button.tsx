import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "outline",
  className = "",
}: Props) {
  const base = `
    inline-flex items-center gap-2
    rounded-full
    px-7
    py-3.5
    text-sm
    font-medium
    tracking-wide
    transition-all
    duration-300
    hover:-translate-y-[2px]
    hover:shadow-[var(--shadow)]
    active:scale-95
  `;

  const variants = {
    filled: "border border-transparent bg-[var(--accent-soft)] text-[var(--text)]",
    outline:
      "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
