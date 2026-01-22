type ContactItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
};

export function ContactItem({
  href,
  label,
  icon,
  external = false,
}: ContactItemProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
    >
      <div className="flex size-10 items-center justify-center rounded-full bg-white/50 transition-colors group-hover:bg-primary group-hover:text-white dark:bg-white/10">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </a>
  );
}
