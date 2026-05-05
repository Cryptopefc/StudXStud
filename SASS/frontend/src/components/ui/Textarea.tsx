import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function Textarea({ label, hint, error, className = "", ...props }: Props) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-text-secondary">{label}</span>
      <textarea
        className={`glass-surface min-h-28 rounded-xl p-3 text-sm text-text-primary transition-colors ${
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
