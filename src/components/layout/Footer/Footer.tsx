import { Container } from '../../ui/Container';
import { FooterLink } from './FooterLink';
import { contactLinks } from '../../../data/contact';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-white/20 bg-white/30 py-8 backdrop-blur-md dark:bg-black/20">
      <Container size="wide">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {t('footer.copyright')}
          </p>

          <div className="flex items-center gap-8">
            {contactLinks
              .slice()
              .reverse()
              .map((item) => (
                <FooterLink key={item.id} {...item} />
              ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
