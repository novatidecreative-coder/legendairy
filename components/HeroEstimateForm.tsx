'use client';

import { useRouter } from 'next/navigation';
import { SERVICE_OPTIONS } from '@/lib/services';

const PLACEHOLDER = 'What service do you need?';

export default function HeroEstimateForm() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value;
    if (service) {
      router.push(`/contact?service=${encodeURIComponent(service)}`);
    } else {
      router.push('/contact');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-xl rounded-xl border border-border bg-surface/80 p-4 backdrop-blur-sm sm:p-5"
      aria-label="Request a free estimate"
    >
      <label htmlFor="hero-service" className="sr-only">
        What service do you need?
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          id="hero-service"
          name="service"
          defaultValue=""
          required
          className="w-full flex-1 rounded-lg border border-border bg-surface-2 px-4 py-3 font-body text-color-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:py-2.5"
        >
          <option value="" disabled>
            {PLACEHOLDER}
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit" className="btn-cta shrink-0">
          Get Free Estimate
        </button>
      </div>
    </form>
  );
}
