'use client';

import Image from 'next/image';
import { Wrench, Star } from 'lucide-react';

const features = [
  {
    icon: Wrench,
    title: 'Expert Commercial & Residential',
    description:
      'Our technicians specialize in commercial and residential installs and repairs. We diagnose and fix heating and cooling issues fast — from rooftop units to home systems — with minimal downtime.',
  },
  {
    icon: Star,
    title: 'Trusted for Repairs & Installs',
    description:
      'Over 10 years in business and a 4.8-star rating. We deliver commercial and residential repairs and installations you can count on — quality work and clear communication every time.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-surface-2 clip-diagonal-bottom py-20 sm:py-28">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest text-primary">
            WHY CHOOSE US
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-wider text-white sm:text-4xl">
            Why Businesses & Homeowners Choose Us
          </h2>
        </div>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            {features.map((item, i) => (
              <div
                key={item.title}
                className="section-enter glass-card p-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <item.icon
                  className="h-10 w-10 text-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-xl tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-color-text/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="section-enter flex flex-col">
            <div className="relative min-h-[280px] aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface-2">
              <Image
                src="/images/rooftop-installation.png"
                alt="Commercial rooftop HVAC units with city skyline"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="mt-3 font-display text-lg tracking-wider text-primary">
              Rooftop installation — Long Island
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
