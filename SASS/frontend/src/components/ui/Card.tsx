export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <article
      className={`glass-surface rounded-[var(--radius-20)] p-6 transition-all duration-300 hover:-translate-y-1 md:p-8 ${className}`.trim()}
    >
      {children}
    </article>
  );
}
