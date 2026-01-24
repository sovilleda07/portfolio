import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function useContactForm(endpoint: string) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(endpoint, {
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

  return {
    form,
    status,
    handleChange,
    handleSubmit,
  };
}
