import Image from 'next/image';
import Link from 'next/link';
import {
  Gauge,
  Flame,
  Snowflake,
  AlertCircle,
  Phone,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const PHONE_TEL = 'tel:+15167087755';
const PHONE = '(516) 708-7755';

const services = [
  {
    id: 'quality-testing',
    icon: Gauge,
    title: 'Quality Testing',
    description:
      'Ensuring top performance and durability through thorough inspections. Our technicians run comprehensive checks on every system we service, so you can trust your HVAC is running at peak efficiency.',
    image: 'https://picsum.photos/600/400?random=quality',
  },
  {
    id: 'heating',
    icon: Flame,
    title: 'Heating Services',
    description:
      'Reliable heating solutions for comfort and energy efficiency. From furnace repair to full heating system installation, we keep Long Island homes warm all winter.',
    image: 'https://picsum.photos/600/400?random=heating',
  },
  {
    id: 'ac-installation',
    icon: Snowflake,
    title: 'AC Installation',
    description:
      'Expert AC setups for efficient, year-round cooling. We install leading brands and size every system correctly for your space, so you get the best performance and savings.',
    image: 'https://picsum.photos/600/400?random=ac',
  },
  {
    id: 'emergency',
    icon: AlertCircle,
    title: 'Emergency Repairs',
    description:
      '24/7 availability for urgent HVAC failures. When your heat or AC goes out, we respond quickly to get you comfortable again.',
    image: 'https://picsum.photos/600/400?random=emergency',
  },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <PageHeader
        title="OUR SERVICES"
        subtitle="Repair, installation, and maintenance you can trust."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, i) => (
            <section
              key={service.id}
              id={service.id}
              className="section-enter grid gap-12 lg:grid-cols-2 lg:gap-16"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="glass-card inline-flex p-3">
                  <service.icon
                    className="h-10 w-10 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h2 className="mt-4 font-display text-3xl tracking-wider text-white">
                  {service.title}
                </h2>
                <p className="mt-4 font-body text-color-text/90 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={PHONE_TEL}
                  className="btn-cta mt-6 inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Get a Free Estimate — {PHONE}
                </a>
              </div>
              <div className={`relative aspect-video overflow-hidden rounded-xl border border-border ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={`${service.title} — Legendairy AC`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </section>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link href="/contact" className="btn-outline-cyan inline-flex">
            Contact Us for a Free Estimate
          </Link>
        </div>
      </div>
    </>
  );
}
