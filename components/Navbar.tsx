'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const PHONE = '(516) 708-7755';
const PHONE_TEL = 'tel:+15167087755';

function FrostIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary shrink-0"
      aria-hidden
    >
      <path d="M12 2v20M12 2l-4 4M12 2l4 4M12 22l-4-4M12 22l4-4M4 12H2M22 12h-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M4 12a8 8 0 0116 0" />
    </svg>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-frosted' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <FrostIcon />
          <span className="font-display text-xl tracking-wider text-white sm:text-2xl">
            LEGENDAIRY AC
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm font-medium text-color-text hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={PHONE_TEL}
            className="btn-cta inline-flex items-center gap-2"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {PHONE}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-color-text hover:bg-surface-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-bg/95 backdrop-blur-lg md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
          <button
            type="button"
            className="absolute top-4 right-4 rounded-lg p-2 text-color-text hover:bg-surface-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-2xl tracking-wider text-white hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_TEL}
            className="btn-cta inline-flex items-center gap-2 mt-4"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
