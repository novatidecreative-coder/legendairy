'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import StatCounter from './StatCounter';
import HeroParticles from './HeroParticles';
import HeroEstimateForm from './HeroEstimateForm';

const PHONE_TEL = 'tel:+15167087755';
const PHONE = '(516) 708-7755';

const stats = [
  { value: '#1' as const, label: 'Most Trusted on Long Island' },
  { value: 700, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Years in Business' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid">
      <HeroParticles />
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest text-primary">
            SINCE 2012
          </p>
          <div className="my-4 flex justify-center">
            <span className="h-px w-16 bg-primary" aria-hidden />
          </div>
          <h1 className="font-display text-4xl leading-tight tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl">
            THE MOST TRUSTED HEATING & AIR CONDITIONING SERVICE
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-muted sm:text-xl">
            Long Island&apos;s #1 Heating & Air Conditioning Specialists
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PHONE_TEL}
              className="btn-cta inline-flex items-center gap-2"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Get Your Free Estimate → {PHONE}
            </a>
            <Link href="/services" className="btn-outline-cyan inline-flex">
              View Our Services
            </Link>
          </div>

          <HeroEstimateForm />
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <StatCounter stats={stats} />
        </div>
      </div>
    </section>
  );
}
