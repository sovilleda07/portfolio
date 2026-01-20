type SectionHeaderProps = {
  title: string;
  subtitle: string;
  subtitleAs?: 'h2' | 'h3';
  children?: React.ReactNode;
};

export function SectionHeader({
  title,
  subtitle,
  subtitleAs = 'h2',
  children,
}: SectionHeaderProps) {
  const SubtitleTag = subtitleAs;

  return (
    <div className="text-center">
      <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
        {title}
      </h2>

      <SubtitleTag className="mb-4 text-3xl font-bold md:text-4xl">
        {subtitle}
      </SubtitleTag>

      {children && (
        <div className="mx-auto text-slate-600">{children}</div>
      )}
    </div>
  );
}
