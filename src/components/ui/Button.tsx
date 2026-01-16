type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  className = '',
}: ButtonProps) {
  // TODO: Borré inline-flex
  const base =
    'items-center justify-center gap-2 rounded-full font-bold transition-all active:scale-95';

  const variants = {
    primary:
      'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:shadow-primary/50',
    secondary:
      'bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900',
    ghost:
      'bg-white/20 text-slate-700 hover:bg-white/40 dark:bg-white/5 dark:text-white',
  };

  const sizes = {
    sm: 'h-9 px-5 text-xs',
    md: 'h-12 px-8 text-sm',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
