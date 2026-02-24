import { Star, Quote } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    name: 'Maria R.',
    location: 'Flushing, NY',
    rating: 5,
    text: 'Legendairy AC came out same day when our AC died in August. Professional, fast, and fair pricing. Our house was cool again in no time. Highly recommend!',
  },
  {
    name: 'James T.',
    location: 'Long Island',
    rating: 5,
    text: 'We\'ve used them for years for maintenance and they never disappoint. Honest, on time, and they explain everything clearly. True professionals.',
  },
  {
    name: 'Linda K.',
    location: 'Queens',
    rating: 5,
    text: 'Had a new system installed. The crew was respectful of our home, cleaned up after themselves, and the new unit runs like a dream. Worth every penny.',
  },
  {
    name: 'Robert M.',
    location: 'Nassau County',
    rating: 5,
    text: 'Emergency repair on a holiday — they showed up and fixed our furnace. Saved our winter. Can\'t thank them enough. 10/10.',
  },
  {
    name: 'Susan P.',
    location: 'Flushing, NY',
    rating: 5,
    text: 'From estimate to installation, everything was smooth. Great communication and quality work. Our Google 4.8 rating says it all — zero bad reviews for a reason.',
  },
  {
    name: 'David L.',
    location: 'Long Island',
    rating: 5,
    text: 'Best HVAC company we\'ve worked with. Fair prices, expert technicians, and they stand behind their work. Legendairy AC is our go-to for everything heating and cooling.',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <ScrollReveal />
      <PageHeader
        title="TESTIMONIALS"
        subtitle="What our customers say — 4.8 stars, zero bad reviews."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="section-enter glass-card p-6"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/50" aria-hidden />
              <div className="mt-2 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-[var(--color-accent)] text-[var(--color-accent)]"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="mt-4 font-body text-color-text leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 font-mono text-sm text-primary">
                — {t.name}, {t.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
