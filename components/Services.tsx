'use client';

import Link from 'next/link';
import { Gauge, Flame, Snowflake, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: 'Commercial AC Install & Repair',
    description:
      'Full commercial cooling installs and repairs — rooftops, packaged units, and more.',
    href: '/services#commercial-ac',
  },
  {
    icon: Flame,
    title: 'Commercial Heating Install & Repair',
    description:
      'Heating systems for offices, retail, and industrial — installs and 24/7 repairs.',
    href: '/services#commercial-heating',
  },
  {
    icon: Gauge,
    title: 'Quality Testing & Maintenance',
    description:
      'Inspections and maintenance to keep commercial systems running at peak performance.',
    href: '/services#quality-testing',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Commercial Repairs',
    description:
      '24/7 response for urgent commercial HVAC failures — minimal downtime.',
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
            COMMERCIAL & RESIDENTIAL
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-wider text-white sm:text-4xl">
            Commercial & Residential Repairs & Installations
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
