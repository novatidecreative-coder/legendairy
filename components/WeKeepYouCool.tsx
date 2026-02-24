'use client';

import Image from 'next/image';

const copy =
  'We keep you cool by providing top-quality air conditioning services designed to keep your home comfortable, no matter how high the temperature rises. From routine maintenance and repairs to installing the latest energy-efficient systems, our expert team ensures that you stay cool and stress-free all summer long. With our commitment to prompt service and customer satisfaction, you can count on us to deliver the comfort and reliability your family deserves.';

const chips = [
  'Prompt Service',
  'Energy Efficient',
  'Family Comfort',
];

export default function WeKeepYouCool() {
  return (
    <section className="relative bg-surface clip-diagonal py-20 sm:py-28">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="section-enter">
            <p className="font-display text-sm tracking-widest text-primary">
              WE KEEP YOU COOL
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wider text-white sm:text-4xl">
              COMFORT YOU CAN COUNT ON
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
          <div className="section-enter relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="https://picsum.photos/800/600?random=hvac1"
              alt="HVAC technician servicing an air conditioning unit"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
