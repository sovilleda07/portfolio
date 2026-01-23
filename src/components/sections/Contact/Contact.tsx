import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { ContactItem } from './ContactItem';
import { contactLinks } from '../../../data/contact';
import { contactIcons } from '../../ui/ContactIcons';
import { FormField } from '../../ui/FormField';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <Container size="narrow" padded={false}>
        <div className="glass-panel relative overflow-hidden rounded-[3rem] bg-gradient-to-bl from-pink-200 via-white to-white p-8 md:p-14 dark:from-pink-900/40 dark:via-surface-dark dark:to-surface-dark">
          <div className="relative z-10 flex flex-col gap-12 md:flex-row">
            <div className="flex flex-1 flex-col justify-between gap-8">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
                  {t('contact.title')}
                </h2>

                <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-300">
                  {t('contact.description')}
                </p>

                <div className="space-y-4">
                  {contactLinks.map((item) => (
                    <ContactItem
                      key={item.id}
                      href={item.href}
                      label={t(item.label)}
                      icon={contactIcons[item.id]}
                      external={item.external}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="flex flex-col gap-4">
                <FormField label={t('contact.form.name.label')}>
                  <input
                    id="name"
                    type="text"
                    placeholder={t('contact.form.name.placeholder')}
                    className="h-12 w-full rounded-2xl border-white/40 bg-white/60 px-5 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary/50 dark:border-white/10 dark:bg-black/20"
                  />
                </FormField>

                <FormField label={t('contact.form.email.label')}>
                  <input
                    id="email"
                    type="email"
                    placeholder={t('contact.form.email.placeholder')}
                    className="h-12 w-full rounded-2xl border-white/40 bg-white/60 px-5 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary/50 dark:border-white/10 dark:bg-black/20"
                  />
                </FormField>

                <FormField label={t('contact.form.message.label')}>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder={t('contact.form.message.placeholder')}
                    className="w-full resize-none rounded-2xl border-white/40 bg-white/60 p-5 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary/50 dark:border-white/10 dark:bg-black/20"
                  />
                </FormField>

                <Button variant="primary" radius="xl" className="mt-2 w-full">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
