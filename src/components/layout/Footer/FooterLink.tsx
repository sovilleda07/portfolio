import { useTranslation } from 'react-i18next';

type FooterLinkProps = {
  href: string;
  label: string;
  external?: boolean;
};

export function FooterLink({ href, label, external }: FooterLinkProps) {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      {...(external && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
      className="text-sm font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
    >
      {t(label)}
    </a>
  );
}
