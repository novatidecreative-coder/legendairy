'use client';

import Image from 'next/image';

const copy =
  'We keep your business running with commercial-grade HVAC installs and repairs. From rooftop units and packaged systems to 24/7 emergency service, we handle commercial and residential projects across Long Island. Our team delivers reliable installs, fast repairs, and maintenance plans so you get comfort and minimal downtime. Trust us for your next commercial repair or installation.';

const chips = [
  'Commercial & Residential',
  'Installs & Repairs',
  '24/7 Emergency',
];

export default function WeKeepYouCool() {
  return (
    <section className="relative bg-surface clip-diagonal py-20 sm:py-28">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="section-enter">
            <p className="font-display text-sm tracking-widest text-primary">
              COMMERCIAL & RESIDENTIAL
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wider text-white sm:text-4xl">
              REPAIRS & INSTALLATIONS YOU CAN COUNT ON
            </h2>
            <p className="mt-6 font-body text-color-text/90 leading-relaxed">
              {copy}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {chips.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/80 px-4 py-2 font-body text-sm text-color-text"
                >
                  <span className="text-primary" aria-hidden>✓</span>
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="section-enter flex flex-col">
            <div className="relative min-h-[280px] aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface-2">
              <Image
                src="/images/commercial-hvac-section.png"
                alt="Technicians servicing commercial HVAC unit on rooftop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="mt-3 font-display text-lg tracking-wider text-primary">
              Commercial HVAC — Legendairy AC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
