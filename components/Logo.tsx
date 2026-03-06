'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { LOGO_PATH, LOGO_ALT, USE_IMAGE_LOGO } from '@/lib/site';

function FrostIcon({ className }: { className?: string }) {
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
      className={`text-primary shrink-0 ${className ?? ''}`}
      aria-hidden
    >
      <path d="M12 2v20M12 2l-4 4M12 2l4 4M12 22l-4-4M12 22l4-4M4 12H2M22 12h-2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M4 12a8 8 0 0116 0" />
    </svg>
  );
}

type LogoProps = {
  /** Use larger size (e.g. for footer) */
  size?: 'default' | 'large';
  className?: string;
};

export default function Logo({ size = 'default', className = '' }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = USE_IMAGE_LOGO && !imgFailed;

  const textSize = size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl md:text-3xl';
  const iconSize = size === 'large' ? 'h-10 w-10' : 'h-8 w-8 sm:h-9 sm:w-9';
  const boxSize = size === 'large' ? 'h-14 w-14 sm:h-16 sm:w-16' : 'h-11 w-11 sm:h-12 sm:w-12';

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {showImage ? (
        <span className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface ${boxSize}`} aria-hidden>
          <Image
            src={LOGO_PATH}
            alt={LOGO_ALT}
            fill
            className="object-cover object-center"
            onError={() => setImgFailed(true)}
            unoptimized={LOGO_PATH.endsWith('.svg')}
            sizes="(max-width: 768px) 48px, 64px"
          />
        </span>
      ) : (
        <FrostIcon className={iconSize} />
      )}
      <span className={`font-display tracking-wider text-white ${textSize}`}>
        LEGENDAIRY AC
      </span>
    </Link>
  );
}
