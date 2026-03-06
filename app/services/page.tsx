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
    id: 'commercial-ac',
    icon: Snowflake,
    title: 'Commercial AC Install & Repair',
    description:
      'Full commercial cooling — rooftop units, packaged systems, and split systems. We install, repair, and maintain commercial AC so your business stays comfortable with minimal downtime.',
    image: '/images/rooftopinstall.jpg',
  },
  {
    id: 'commercial-heating',
    icon: Flame,
    title: 'Commercial Heating Install & Repair',
    description:
      'Commercial heating for offices, retail, and industrial. From installs to 24/7 repairs, we keep your building warm and your operations running.',
    image: '/images/commercialhvac.jpg',
  },
  {
    id: 'quality-testing',
    icon: Gauge,
    title: 'Quality Testing & Maintenance',
    description:
      'Inspections and maintenance for commercial and residential systems. We run comprehensive checks so your HVAC runs at peak efficiency and avoids costly failures.',
    image: 'https://picsum.photos/600/400?random=quality',
  },
  {
    id: 'emergency',
    icon: AlertCircle,
    title: 'Emergency Commercial & Residential Repairs',
    description:
      '24/7 response for urgent HVAC failures. When your heat or AC goes out — at home or at the job site — we respond quickly to get you back up and running.',
    image: 'https://picsum.photos/600/400?random=emergency',
  },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <PageHeader
        title="OUR SERVICES"
        subtitle="Commercial and residential repairs & installations — Long Island's trusted choice."
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
