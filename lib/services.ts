/**
 * All services Legendairy AC provides — used for hero dropdown and consistency across the site.
 * Commercial repairs and installs are highlighted first.
 */
export const SERVICE_OPTIONS = [
  'Commercial AC Installation',
  'Commercial AC Repair',
  'Commercial Heating Installation',
  'Commercial Heating Repair',
  'Residential AC Installation',
  'Residential AC Repair',
  'Residential Heating / Furnace Repair',
  'HVAC Maintenance & Tune-up',
  'Quality Testing & Inspections',
  'Emergency Repairs (24/7)',
  'Ductless Mini-Split Installation',
  'Heat Pump Installation & Repair',
  'Thermostat Installation & Repair',
  'Ductwork Repair & Sealing',
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
