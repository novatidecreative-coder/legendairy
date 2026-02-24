'use client';

import Image from 'next/image';
import { Wrench, Star } from 'lucide-react';

const features = [
  {
    icon: Wrench,
    title: 'Expert Repairmen',
    description:
      'We have expert repairmen dedicated to quickly diagnosing and repairing any heating or cooling issues. With years of experience across all HVAC brands and models, our technicians deliver reliable, efficient service.',
  },
  {
    icon: Star,
    title: 'Satisfied Services',
    description:
      'With over 10 years of experience and a perfect 4.8-star rating on Google, our commitment to exceptional service speaks for itself. We take pride in delivering top-quality HVAC solutions.',
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
            Check Out Our Amazing Deals
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
          <div className="section-enter relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src="https://picsum.photos/800/600?random=tech"
              alt="Legendairy AC technician at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
