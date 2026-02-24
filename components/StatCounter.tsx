'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = {
  value: number | string;
  suffix?: string;
  label: string;
};

function animateValue(
  el: HTMLElement,
  start: number,
  end: number,
  duration: number
) {
  const startTime = performance.now();
  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * easeOut);
    el.textContent = String(current);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export default function StatCounter({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !visible) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const containers = ref.current.querySelectorAll('[data-stat-value]');
    containers.forEach((container) => {
      const raw = container.getAttribute('data-stat-value');
      const suffix = container.getAttribute('data-stat-suffix') ?? '';
      if (!raw) return;
      const num = parseInt(raw, 10);
      if (Number.isNaN(num)) return;
      const span = container.querySelector('span');
      if (!span) return;
      animateValue(span, 0, num, 1500);
      const suffixEl = container.querySelector('[data-stat-suffix-el]');
      if (suffixEl) suffixEl.textContent = suffix;
    });
  }, [visible]);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="glass-card section-enter p-6 text-center"
          style={{ transitionDelay: `${i * 100}ms` }}
          data-stat-value={
            typeof stat.value === 'number' ? String(stat.value) : undefined
          }
          data-stat-suffix={stat.suffix ?? ''}
        >
          <div className="stat-number font-mono text-4xl sm:text-5xl">
            {typeof stat.value === 'number' ? (
              <span>0</span>
            ) : (
              <span>{stat.value}</span>
            )}
            {stat.suffix && (
              <span data-stat-suffix-el className="text-primary">
                {stat.suffix}
              </span>
            )}
          </div>
          <p className="mt-2 font-body text-sm text-text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
