import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "primary", size = "md", className = "", ...props }: Props) {
  const base =
    "rounded-[var(--radius-pill)] font-medium transition-all duration-150 cursor-pointer active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";
  const dimensions = size === "lg" ? "h-12 px-7 text-sm" : "h-11 px-6 text-sm";
  const tone =
    variant === "primary"
      ? "bg-primary text-[var(--color-text-inverse)] border border-transparent hover:brightness-110 hover:scale-[1.02] shadow-[var(--shadow-glass-sm)]"
      : "glass-surface text-primary border border-[var(--color-border-strong)] hover:brightness-110 hover:scale-[1.02]";

  return <button className={`${base} ${dimensions} ${tone} ${className}`.trim()} {...props} />;
}
