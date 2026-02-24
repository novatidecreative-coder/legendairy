'use client';

import Link from 'next/link';
import { Gauge, Flame, Snowflake, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Gauge,
    title: 'Quality Testing',
    description:
      'Ensuring top performance and durability through thorough inspections.',
    href: '/services#quality-testing',
  },
  {
    icon: Flame,
    title: 'Heating Services',
    description:
      'Reliable heating solutions for comfort and energy efficiency.',
    href: '/services#heating',
  },
  {
    icon: Snowflake,
    title: 'AC Installation',
    description:
      'Expert AC setups for efficient, year-round cooling.',
    href: '/services#ac-installation',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Repairs',
    description:
      '24/7 availability for urgent HVAC failures.',
    href: '/services#emergency',
  },
];

export default function Services() {
  return (
    <section className="relative bg-bg py-20 sm:py-28">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest text-primary">
            MAIN SERVICES
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-wider text-white sm:text-4xl">
            We Provide The Most Popular Repair & Installation Services
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, i) => (
            <div
              key={item.title}
              className="section-enter glass-card group p-6 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <item.icon
                className="h-10 w-10 text-primary"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mt-4 font-display text-xl tracking-wider text-white">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 font-body text-sm font-medium text-primary hover:underline"
              >
                Service Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
