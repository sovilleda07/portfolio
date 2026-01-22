import type { SectionId } from '../../data/navigation';

type SectionProps = {
  children: React.ReactNode;
  id: SectionId;
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
    hero: 'min-h-[85vh] py-20',
    default: 'py-20',
    tight: 'py-10',
  };

  return (
    <section
      id={id}
      className={`w-full scroll-mt-20 ${sizes[size]} ${className}`}
    >
      {children}
    </section>
  );
}
