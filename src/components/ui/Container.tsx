type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
};

export function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  const sizes = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-4xl',
  };

  return (
    <div className={`mx-auto w-full px-4 md:px-10 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
