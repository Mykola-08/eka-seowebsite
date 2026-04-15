'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function NewsletterSignup() {
  const { t, language } = useLanguage();
  const { logEvent } = useAnalytics();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/hubspot/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        logEvent('newsletter_signup', { source: 'footer' });

        // Identify visitor in HubSpot tracking
        if (typeof window !== 'undefined') {
          const _hsq = (window as Window & { _hsq?: Array<unknown[]> })._hsq;
          if (_hsq) {
            _hsq.push(['identify', { email }]);
            _hsq.push(['trackPageView']);
          }
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-sm text-green-600 font-medium">
        {t('newsletter.success')}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm w-full">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('newsletter.placeholder')}
        className="bg-muted/40 border-0 text-sm h-10"
        disabled={status === 'loading'}
      />
      <Button
        type="submit"
        size="sm"
        variant="default"
        disabled={status === 'loading'}
        className="shrink-0 h-10"
      >
        {status === 'loading'
          ? '...'
          : t('newsletter.button')}
      </Button>
      {status === 'error' && (
        <p className="text-xs text-red-500 mt-1">
          {t('newsletter.error')}
        </p>
      )}
    </form>
  );
}
