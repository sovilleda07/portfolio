type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'soft';
type ButtonSize = 'sm' | 'md';
type ButtonRadius = 'full' | 'lg' | 'xl';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  as?: 'button' | 'a';
  href?: string;
  disabled?: boolean;
  className?: string;
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  radius = 'full',
  as = 'button',
  href,
  disabled = false,
  className = '',
}: ButtonProps) {
  const base =
    'flex items-center justify-center gap-2 font-bold transition-all';

  const variants = {
    primary:
      'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:shadow-primary/50',
    secondary:
      'bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900',
    ghost:
      'bg-white/50 text-slate-900 border border-white/20 hover:bg-white/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
    outline:
      'border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/5',
    soft: 'border border-slate-200 bg-white text-slate-600 shadow-sm hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-primary/50',
  };

  const sizes = {
    sm: 'h-9 px-5 text-xs',
    md: 'h-12 px-8 text-sm',
  };

  const radiuses = {
    full: 'rounded-full',
    lg: 'rounded-lg',
    xl: 'rounded-2xl',
  };

  const disabledStyles = 'cursor-not-allowed opacity-50 pointer-events-none';

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    radiuses[radius]
  } ${className} ${disabled ? disabledStyles : 'active:scale-95'}`;

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
