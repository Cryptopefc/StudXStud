import type { BadgeTier } from "../../types/profile";

export function BadgePill({ tier }: { tier: BadgeTier }) {
  return (
    <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-primary">
      {tier}
    </span>
  );
}
