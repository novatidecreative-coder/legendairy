import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';
import { GALLERY_IMAGES } from '@/lib/gallery';

export default function GalleryPage() {
  return (
    <>
      <ScrollReveal />
      <PageHeader
        title="GALLERY"
        subtitle="Commercial and residential projects across Long Island."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="section-enter group relative aspect-[4/3] overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_var(--color-primary-glow)]"
              style={{ transitionDelay: `${Math.min(i * 40, 400)}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <p className="font-body text-xs font-medium text-white sm:text-sm line-clamp-2">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
