import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { sanitizePhone, isValidPhone } from '@/lib/phone';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SHOW_DELAY_MS = 30000;

const inputCls =
  'w-full px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-900 ' +
  'focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500';

/**
 * Site-wide lead capture popup. Appears 30s after mount, once per session,
 * unless a lead was already captured this session (via this popup, the
 * exit-intent popup, or the chat widget's booking flow).
 */
const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      try {
        if (
          sessionStorage.getItem('leadPopupShown') ||
          sessionStorage.getItem('leadSubmitted')
        ) {
          return;
        }
        sessionStorage.setItem('leadPopupShown', '1');
      } catch (err) {
        // sessionStorage unavailable (private mode, etc.) — still show once.
      }
      setIsOpen(true);
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timerRef.current);
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
    const email = form.email.trim();

    if (!name) {
      toast.error('Please enter your name.');
      return;
    }
    if (!isValidPhone(phone)) {
      toast.error('Please enter a valid phone number.');
      return;
    }
    if (email && !EMAIL_RE.test(email)) {
      toast.error("That email address doesn't look valid.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'lead_popup', name, phone, email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Request failed');
      }
      try {
        sessionStorage.setItem('leadSubmitted', '1');
      } catch (err) {
        // ignore
      }
      toast.success("Thanks! We'll reach out with your quote shortly.");
      setIsOpen(false);
    } catch (err) {
      toast.error("Couldn't send your request. Please call (877) 609-1919 instead.");
      // eslint-disable-next-line no-console
      console.error('Lead popup submit failed:', err);
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
      data-testid="lead-popup-backdrop"
    >
      <div
        className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-500"
        data-testid="lead-popup"
      >
        <div className="relative bg-gradient-to-r from-gray-900 to-black text-white p-5">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            data-testid="lead-popup-close"
            className="absolute top-3 right-3 text-gray-300 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="font-bold text-lg pr-6">Get a free quote in 60 seconds</h3>
          <p className="text-xs text-gray-300 mt-1">
            Tell us a little about yourself and our team will follow up right away.
          </p>
        </div>

        <form onSubmit={submit} className="p-5 bg-gray-50 space-y-3">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Full Name"
            className={inputCls}
            data-testid="lead-popup-name"
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
            data-testid="lead-popup-phone"
            disabled={submitting}
          />
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="Email Address"
            className={inputCls}
            data-testid="lead-popup-email"
            disabled={submitting}
          />
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black rounded-full font-semibold"
            data-testid="lead-popup-submit"
          >
            {submitting ? 'Sending…' : 'Get My Free Quote'}
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

export default LeadCapturePopup;
