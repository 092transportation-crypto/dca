import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { sanitizePhone, isValidPhone } from '@/lib/phone';

const inputCls =
  'w-full px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-900 ' +
  'focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500';

const safeSessionGet = (key) => {
  try {
    return sessionStorage.getItem(key);
  } catch (err) {
    return null;
  }
};

const safeSessionSet = (key, value) => {
  try {
    sessionStorage.setItem(key, value);
  } catch (err) {
    // ignore (private mode, storage disabled, etc.)
  }
};

/**
 * Desktop-only exit-intent popup. Fires once per session when the mouse
 * leaves the top of the viewport (a strong signal the visitor is heading
 * for the tab bar / closing the tab), unless a lead was already captured.
 */
const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    const isDesktop =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;

    if (!isDesktop) return undefined;
    if (safeSessionGet('exitIntentShown') || safeSessionGet('leadSubmitted')) {
      return undefined;
    }

    const onMouseOut = (e) => {
      if (shownRef.current) return;
      if (e.clientY > 0 || e.relatedTarget) return;
      if (safeSessionGet('exitIntentShown') || safeSessionGet('leadSubmitted')) return;

      shownRef.current = true;
      safeSessionSet('exitIntentShown', '1');
      setIsOpen(true);
    };

    document.addEventListener('mouseout', onMouseOut);
    return () => document.removeEventListener('mouseout', onMouseOut);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const close = () => setIsOpen(false);

  const submit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();

    if (!name) {
      toast.error('Please enter your name.');
      return;
    }
    if (!isValidPhone(phone)) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'exit_intent', name, phone }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Request failed');
      }
      safeSessionSet('leadSubmitted', '1');
      toast.success("Thanks! We'll reach out with your quote shortly.");
      setIsOpen(false);
    } catch (err) {
      toast.error("Couldn't send your request. Please call (877) 609-1919 instead.");
      // eslint-disable-next-line no-console
      console.error('Exit-intent popup submit failed:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      data-testid="exit-intent-backdrop"
    >
      <div
        className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-500"
        data-testid="exit-intent-popup"
      >
        <div className="relative bg-gradient-to-r from-gray-900 to-black text-white p-5">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            data-testid="exit-intent-close"
            className="absolute top-3 right-3 text-gray-300 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="font-bold text-lg pr-6">Before you go — get an instant quote</h3>
          <p className="text-xs text-gray-300 mt-1">
            Leave your name and number and we'll call you right back.
          </p>
        </div>

        <form onSubmit={submit} className="p-5 bg-gray-50 space-y-3">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Full Name"
            className={inputCls}
            data-testid="exit-intent-name"
            disabled={submitting}
          />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) =>
              setForm((f) => ({ ...f, phone: sanitizePhone(e.target.value) }))
            }
            placeholder="Phone Number"
            className={inputCls}
            data-testid="exit-intent-phone"
            disabled={submitting}
          />
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black rounded-full font-semibold"
            data-testid="exit-intent-submit"
          >
            {submitting ? 'Sending…' : 'Get My Instant Quote'}
          </Button>
          <p className="text-[11px] text-gray-400 text-center">
            Or call{' '}
            <a href="tel:+18776091919" className="text-amber-600 hover:underline">
              (877) 609-1919
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
