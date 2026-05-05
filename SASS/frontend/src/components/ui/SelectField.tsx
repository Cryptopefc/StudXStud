import type { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  hint?: string;
  error?: string;
}

export function SelectField({ label, options, hint, error, className = "", ...props }: Props) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-text-secondary">{label}</span>
      <select
        className={`glass-surface h-11 rounded-xl px-3 text-sm text-text-primary transition-colors ${
          error ? "border-error" : "focus:border-primary"
        } ${className}`.trim()}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <span className="text-xs text-error">{error}</span>
      ) : hint ? (
        <span className="text-xs text-text-tertiary">{hint}</span>
      ) : null}
    </label>
  );
}
