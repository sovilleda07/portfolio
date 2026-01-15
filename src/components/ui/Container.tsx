type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
  padded?: boolean;
};

export function Container({
  children,
  className = '',
  size = 'default',
  padded = true,
}: ContainerProps) {
  const sizes = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-5xl',
  };

  return (
    <div
      className={`mx-auto w-full ${sizes[size]} ${
        padded ? 'px-4 md:px-10' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
