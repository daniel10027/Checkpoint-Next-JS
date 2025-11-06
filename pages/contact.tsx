import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;            
    const form = new FormData(formEl);
    const body = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      message: String(form.get('message') || ''),
    };

    try {
      setSending(true);
      setStatus('Envoi…');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Bad response');
      setStatus('✅ Message envoyé.');
      formEl.reset();                          
    } catch {
      setStatus('❌ Erreur lors de l’envoi.');
    } finally {
      setSending(false);
    }
  }

  return (
    <Layout title="Contact — Daniel" description="Entrer en contact">
      <h1>Contact</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
        <label>Nom<input name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Message<textarea name="message" rows={6} required /></label>
        <button type="submit" className="btn" disabled={sending}>
          {sending ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>
      <p style={{ marginTop: 12 }} aria-live="polite">
        {status}
      </p>
    </Layout>
  );
}
