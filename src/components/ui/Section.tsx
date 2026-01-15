type SectionProps = {
  children: React.ReactNode;
  id: 'hero' | 'about' | 'skills' | 'projects' | 'contact';
  className?: string;
  size?: 'default' | 'hero' | 'tight';
};

export function Section({
  children,
  id,
  className = '',
  size = 'default',
}: SectionProps) {
  const sizes = {
    hero: 'min-h-[85vh] py-24',
    default: 'py-20',
    tight: 'py-10',
  };

  return (
    <section id={id} className={`w-full ${sizes[size]} ${className}`}>
      {children}
    </section>
  );
}
