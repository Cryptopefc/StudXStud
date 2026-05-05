interface Props {
  value: number;
  size?: "sm" | "md";
  label?: string;
}

export function StarRating({ value, size = "sm", label = "Rating" }: Props) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) return "full";
    if (index === fullStars && hasHalfStar) return "half";
    return "empty";
  });
  const starSize = size === "md" ? "text-lg" : "text-sm";

  return (
    <div className="flex items-center gap-2" aria-label={`${label} ${value.toFixed(1)} / 5`}>
      <div className={`flex gap-1 ${starSize}`}>
        {stars.map((star, index) => (
          <span
            key={`${star}-${index}`}
            className={
              star === "full"
                ? "text-warning"
                : star === "half"
                  ? "text-warning/70"
                  : "text-text-tertiary"
            }
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-xs text-text-secondary">{value.toFixed(1)}</span>
    </div>
  );
}
