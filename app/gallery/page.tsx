import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const images = [
  { src: 'https://picsum.photos/600/400?random=g1', alt: 'HVAC installation project' },
  { src: 'https://picsum.photos/600/400?random=g2', alt: 'Air conditioning unit service' },
  { src: 'https://picsum.photos/600/400?random=g3', alt: 'Heating system installation' },
  { src: 'https://picsum.photos/600/400?random=g4', alt: 'Residential HVAC maintenance' },
  { src: 'https://picsum.photos/600/400?random=g5', alt: 'Commercial cooling system' },
  { src: 'https://picsum.photos/600/400?random=g6', alt: 'Technician at work' },
  { src: 'https://picsum.photos/600/400?random=g7', alt: 'New AC unit installed' },
  { src: 'https://picsum.photos/600/400?random=g8', alt: 'Furnace repair project' },
  { src: 'https://picsum.photos/600/400?random=g9', alt: 'Long Island home comfort' },
];

export default function GalleryPage() {
  return (
    <>
      <ScrollReveal />
      <PageHeader
        title="GALLERY"
        subtitle="A look at our work across Long Island."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="section-enter group relative aspect-[3/2] overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_var(--color-primary-glow)]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
