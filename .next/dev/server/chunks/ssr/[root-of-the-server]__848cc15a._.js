module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/app/contact/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const content = `'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, MapPin, Send } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

export const dynamic = 'force-dynamic';

const PHONE = '(516) 708-7755';
const PHONE_TEL = 'tel:+15167087755';
const ADDRESS = '79-38 209th St, Flushing, NY 11364';

function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get('service');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (serviceFromUrl)
      setMessage(\`I'm interested in: \${serviceFromUrl}\\n\\n\`);
  }, [serviceFromUrl]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <ScrollReveal />
      <PageHeader
        title="CONTACT US"
        subtitle="Get your free estimate — we're here to help."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="section-enter">
            <h2 className="font-display text-2xl tracking-wider text-white">
              GET IN TOUCH
            </h2>
            <p className="mt-3 font-body text-color-text/90">
              Reach out for a free estimate, emergency service, or any questions
              about your heating and cooling needs.
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-3 font-body text-lg text-color-text hover:text-primary transition-colors"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-2">
                    <Phone className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={\`https://maps.google.com/?q=\${encodeURIComponent(ADDRESS)}\`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-lg text-color-text hover:text-primary transition-colors"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-2">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  {ADDRESS}
                </a>
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-border bg-surface/80 p-6">
              <p className="font-mono text-sm text-primary">Google Rating</p>
              <p className="mt-1 font-display text-3xl text-white">4.8 \u2605</p>
              <p className="mt-1 font-body text-sm text-text-muted">
                Zero bad reviews \u2014 Long Island\u2019s trusted choice.
              </p>
            </div>
          </div>
          <div className="section-enter">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="font-display text-xl tracking-wider text-white">
                REQUEST A FREE ESTIMATE
              </h2>
              {submitted ? (
                <p className="mt-6 font-body text-color-text">
                  Thank you! We\u2019ll be in touch soon. For immediate help,
                  call us at{' '}
                  <a href={PHONE_TEL} className="text-primary hover:underline">
                    {PHONE}
                  </a>
                  .
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm text-text-muted">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 font-body text-color-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm text-text-muted">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 font-body text-color-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm text-text-muted">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 font-body text-color-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="(516) 000-0000"
                    />
                  </div>
                  {serviceFromUrl && (
                    <p className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 font-body text-sm text-primary">
                      Service requested: <strong>{serviceFromUrl}</strong>
                    </p>
                  )}
                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 font-body text-color-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell us about your HVAC needs..."
                    />
                  </div>
                  <button type="submit" className="btn-cta inline-flex items-center gap-2">
                    <Send className="h-4 w-4" aria-hidden />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
`;
fs.writeFileSync(process.argv[2], content);
console.log('File written successfully');
}),
"[project]/app/contact/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/contact/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__848cc15a._.js.map