/**
 * Site branding and assets. Replace files in public/images/ to update logo and gallery.
 */

/** Logo: path to your logo in public (e.g. /images/gallery/logo.png). */
export const LOGO_PATH = '/images/gallery/logo.png' as const;
export const LOGO_ALT = 'Legendairy AC' as const;

/** Set to true to use the image logo; false uses the default icon. */
export const USE_IMAGE_LOGO = true;

/** Formspree form ID for contact form — get yours at https://formspree.io and set in .env.local as NEXT_PUBLIC_FORMSPREE_FORM_ID */
export const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || '';

