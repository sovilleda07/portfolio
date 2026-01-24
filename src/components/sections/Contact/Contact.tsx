import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { ContactItem } from './ContactItem';
import { contactLinks } from '../../../data/contact';
import { contactIcons } from '../../ui/ContactIcons';
import { FormField } from '../../ui/FormField';

export function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const FORM_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`;

  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

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
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <FormField label={t('contact.form.name.label')}>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.name.placeholder')}
                    className="h-12 w-full rounded-2xl border-white/40 bg-white/60 px-5 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary/50 dark:border-white/10 dark:bg-black/20"
                  />
                </FormField>

                <FormField label={t('contact.form.email.label')}>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.email.placeholder')}
                    className="h-12 w-full rounded-2xl border-white/40 bg-white/60 px-5 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary/50 dark:border-white/10 dark:bg-black/20"
                  />
                </FormField>

                <FormField label={t('contact.form.message.label')}>
                  <textarea
                    id="message"
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.message.placeholder')}
                    className="w-full resize-none rounded-2xl border-white/40 bg-white/60 p-5 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary/50 dark:border-white/10 dark:bg-black/20"
                  />
                </FormField>

                <Button
                  type="submit"
                  variant="primary"
                  radius="xl"
                  className="mt-2 w-full"
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? t('contact.form.sending')
                    : t('contact.form.submit')}
                </Button>

                {status === 'success' && (
                  <p className="text-center text-sm text-green-600 mt-2">
                    {t('contact.form.success')}
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-center text-sm text-red-600 mt-2">
                    {t('contact.form.error')}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
