type SectionProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'hero' | 'tight';
};

export function Section({
  children,
  className = '',
  size = 'default',
}: SectionProps) {
  const sizes = {
    hero: 'min-h-[85vh] py-24',
    default: 'py-20',
    tight: 'py-10',
  };

  return (
    <section className={`w-full ${sizes[size]} ${className}`}>
      {children}
    </section>
  );
}
