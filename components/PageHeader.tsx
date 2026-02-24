type Props = { title: string; subtitle?: string };

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="relative border-b border-border bg-surface py-16 sm:py-24">
      <div className="noise-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl tracking-wider text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 font-body text-lg text-text-muted">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
