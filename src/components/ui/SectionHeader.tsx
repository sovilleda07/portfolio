type SectionHeaderProps = {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
  subtitleAs?: 'h2' | 'h3';
  subtitleSpacing?: 'sm' | 'md' | 'none';
  children?: React.ReactNode;
};

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  subtitleAs: SubtitleTag = 'h2',
  subtitleSpacing = 'md',
  children,
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const spacing = {
    sm: 'mb-2',
    md: 'mb-4',
    none: 'mb-0',
  };

  return (
    <div className={alignmentClass}>
      <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
        {title}
      </h2>

      <SubtitleTag
        className={`text-3xl font-bold md:text-4xl ${spacing[subtitleSpacing]}`}
      >
        {subtitle}
      </SubtitleTag>

      {children && (
        <div
          className={`mx-auto text-slate-600 ${
            align === 'left' ? 'mx-0' : 'mx-auto'
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
