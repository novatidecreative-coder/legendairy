/**
 * Gallery images organized by project type.
 * Add files under public/images/gallery/ and list them in the appropriate section.
 */
export type GalleryImage = { src: string; alt: string };

export type GallerySection = {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    id: 'commercial-installs',
    title: 'Commercial installs',
    description:
      'Rooftop units, packaged systems, conduit runs, and large-scale cooling infrastructure across Long Island.',
    images: [
      {
        src: '/images/rooftop-installation.png',
        alt: 'Rooftop installation — multiple commercial condenser units',
      },
      { src: '/images/rooftopinstall.jpg', alt: 'Commercial rooftop HVAC — Long Island' },
      {
        src: '/images/gallery/gallery-8.png',
        alt: 'Rooftop HVAC units with city skyline — commercial install',
      },
      { src: '/images/gallery/gallery-4.png', alt: 'Rooftop HVAC — pipes, conduits, and wiring' },
      {
        src: '/images/gallery/gallery-5.png',
        alt: 'Commercial rooftop installation — units and junction boxes',
      },
      {
        src: '/images/gallery/gallery-6.png',
        alt: 'Rooftop ductwork and electrical infrastructure',
      },
      {
        src: '/images/gallery/gallery-7.png',
        alt: 'Commercial HVAC — digital inverter unit and conduit',
      },
      {
        src: '/images/gallery/gallery-18.png',
        alt: 'Rooftop commercial installation — Legendairy AC',
      },
      { src: '/images/commercialhvac.jpg', alt: 'Commercial HVAC equipment — Legendairy AC' },
      {
        src: '/images/gallery/gallery-17.png',
        alt: 'Commercial HVAC equipment and installation',
      },
    ],
  },
  {
    id: 'commercial-repairs',
    title: 'Commercial repairs & service',
    description:
      'Diagnostics, control boards, three-phase power, nameplates, and hands-on repair work on commercial-grade equipment.',
    images: [
      {
        src: '/images/commercial-hvac-section.png',
        alt: 'Technicians servicing commercial HVAC unit on rooftop',
      },
      {
        src: '/images/gallery/gallery-1.png',
        alt: 'HVAC control board and electronics — commercial repair',
      },
      {
        src: '/images/gallery/gallery-13.png',
        alt: 'Control panel wiring and terminals — commercial HVAC',
      },
      {
        src: '/images/gallery/gallery-14.png',
        alt: 'Electrical wiring and connectors — control panel',
      },
      {
        src: '/images/gallery/gallery-19.png',
        alt: 'Commercial repairs and installs — Long Island',
      },
      {
        src: '/images/gallery/gallery-2.png',
        alt: 'Trane unit nameplate — model and refrigerant specs',
      },
      {
        src: '/images/gallery/gallery-3.png',
        alt: 'Trane commercial unit — electrical and performance specs',
      },
      { src: '/images/gallery/gallery-9.png', alt: 'Equipment nameplate — model and serial' },
      {
        src: '/images/gallery/gallery-11.png',
        alt: 'Carrier commercial unit nameplate — full specifications',
      },
      {
        src: '/images/gallery/gallery-12.png',
        alt: 'Commercial HVAC component label and barcode',
      },
      {
        src: '/images/gallery/gallery-15.png',
        alt: 'Fujitsu split-type air conditioner — outdoor unit nameplate',
      },
      {
        src: '/images/gallery/gallery-16.png',
        alt: 'Condenser coil and finned heat exchanger',
      },
      {
        src: '/images/gallery/new-three-phase-pcb.png',
        alt: 'Three-phase U/V/W power connections — commercial inverter / control board',
      },
      {
        src: '/images/gallery/new-multimeter-diagnostics.png',
        alt: 'Multimeter diagnostics on complex outdoor HVAC electronics',
      },
      {
        src: '/images/gallery/new-goodman-control-board.png',
        alt: 'Control board and wiring — commercial / light commercial service',
      },
      {
        src: '/images/gallery/new-capacitor-component.png',
        alt: 'Run capacitor — component replacement during service',
      },
    ],
  },
  {
    id: 'residential',
    title: 'Residential',
    description:
      'Home comfort systems: split heat pumps, central AC nameplates, attic or closet service, and supply-air checks.',
    images: [
      {
        src: '/images/gallery/new-mitsubishi-heat-pump-label.png',
        alt: 'Mitsubishi Electric split-system heat pump — residential outdoor unit',
      },
      {
        src: '/images/gallery/new-york-residential-label.png',
        alt: 'YORK central cooling unit nameplate — residential service',
      },
      {
        src: '/images/gallery/new-capacitor-replacement.png',
        alt: 'Capacitor replacement — residential air handler / attic service',
      },
      {
        src: '/images/gallery/new-floor-vent-temperature.png',
        alt: 'Supply air temperature check at floor register — residential comfort',
      },
    ],
  },
];

/** Flat list of every gallery image (each path appears once). */
export const GALLERY_IMAGES: GalleryImage[] = GALLERY_SECTIONS.flatMap((s) => s.images);
