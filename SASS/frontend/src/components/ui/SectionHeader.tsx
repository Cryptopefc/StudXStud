export function SectionHeader({
  label,
  title,
  subtext
}: {
  label: string;
  title: string;
  subtext: string;
}) {
  return (
    <header className="mb-8 flex flex-col gap-3 md:mb-10">
      <p className="text-xs uppercase tracking-[0.24em] text-primary">{label}</p>
      <h2 className="text-3xl font-bold tracking-[-0.02em] md:text-5xl">{title}</h2>
      <p className="max-w-2xl text-sm text-text-secondary md:text-base">{subtext}</p>
    </header>
  );
}
