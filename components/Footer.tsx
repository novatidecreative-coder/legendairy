import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

const PHONE = '(516) 708-7755';
const PHONE_TEL = 'tel:+15167087755';
const ADDRESS = '79-38 209th St, Flushing, NY 11364';

function FrostIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary shrink-0"
      aria-hidden
    >
      <path d="M12 2v20M12 2l-4 4M12 2l4 4M12 22l-4-4M12 22l4-4M4 12H2M22 12h-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M4 12a8 8 0 0116 0" />
    </svg>
  );
}

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

const brandLogos = [
  'HVAC', 'Cooling', 'Heating', 'Installation', 'Repair', 'Maintenance',
  '24/7 Service', 'Long Island',
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-border py-4">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-sm text-text-muted">
          {[...brandLogos, ...brandLogos].map((label, i) => (
            <span key={i} className="shrink-0">{label}</span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <FrostIcon />
              <span className="font-display text-2xl tracking-wider text-white">
                LEGENDAIRY AC
              </span>
            </Link>
            <p className="mt-2 font-body text-sm text-text-muted">
              The Most Trusted Heating and Air Conditioning Service
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-wider text-primary">
              NAVIGATION
            </h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-color-text hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-wider text-primary">
              CONTACT
            </h3>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2 font-body text-sm text-color-text hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 font-body text-sm text-color-text hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-text-muted">
              © 2024 Legendairy AC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
