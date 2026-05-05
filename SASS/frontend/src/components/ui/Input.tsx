import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, className = "", ...props }: Props) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-text-secondary">{label}</span>
      <input
        className={`glass-surface h-11 rounded-xl px-4 text-sm text-text-primary transition-colors ${
          error ? "border-error" : "focus:border-primary"
        } ${className}`.trim()}
        {...props}
      />
      {error ? (
        <span className="text-xs text-error">{error}</span>
      ) : hint ? (
        <span className="text-xs text-text-tertiary">{hint}</span>
      ) : null}
    </label>
  );
}
