'use client';

import Link from 'next/link';
import { FileText, MessageCircle, CheckCircle, Smile } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Request Free Estimate' },
  { icon: MessageCircle, title: 'Discuss Budget' },
  { icon: CheckCircle, title: 'Get Confirmation' },
  { icon: Smile, title: 'Happy Services' },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-bg py-20 sm:py-28">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-sm tracking-widest text-primary">
            HOW IT WORKS
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-wider text-white sm:text-4xl">
            Quick and Easy Process To Get Your HVAC
          </h2>
        </div>
        <div className="mt-16">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="section-enter flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="glass-card flex h-20 w-20 items-center justify-center rounded-full">
                  <step.icon
                    className="h-8 w-8 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <p className="mt-3 font-body text-sm font-medium text-color-text sm:text-base">
                  {step.title}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden flex-1 border-t border-dashed border-border sm:block sm:min-w-[60px] lg:min-w-[100px]" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 text-center">
          <p className="font-body text-color-text mb-4">
            Click Below To Claim Your Free Estimate
          </p>
          <Link href="/contact" className="btn-cta inline-flex">
            Get Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
