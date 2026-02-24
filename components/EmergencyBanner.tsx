import { Phone } from 'lucide-react';

const PHONE = '(516) 708-7755';
const PHONE_TEL = 'tel:+15167087755';

export default function EmergencyBanner() {
  return (
    <section
      className="relative py-14 sm:py-18 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 194, 255, 0.2) 0%, rgba(255, 107, 53, 0.25) 100%)',
        borderTop: '1px solid rgba(0, 194, 255, 0.2)',
        borderBottom: '1px solid rgba(0, 194, 255, 0.2)',
      }}
    >
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="font-display text-2xl tracking-wider text-white sm:text-3xl">
          Emergency Installation or Repair Services
        </p>
        <a
          href={PHONE_TEL}
          className="mt-4 inline-flex items-center gap-3 font-mono text-3xl font-bold text-white hover:text-primary transition-colors sm:text-4xl"
        >
          <Phone className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden />
          {PHONE}
        </a>
        <p className="mt-2 font-body text-sm text-color-text">
          Available when you need us — call anytime.
        </p>
      </div>
    </section>
  );
}
