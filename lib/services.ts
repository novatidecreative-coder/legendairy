/**
 * All services Legendairy AC provides — used for hero dropdown and consistency across the site.
 */
export const SERVICE_OPTIONS = [
  'AC Installation',
  'AC Repair',
  'Heating Installation',
  'Heating Repair / Furnace Repair',
  'HVAC Maintenance & Tune-up',
  'Quality Testing & Inspections',
  'Emergency Repairs (24/7)',
  'Ductless Mini-Split Installation',
  'Heat Pump Installation & Repair',
  'Thermostat Installation & Repair',
  'Ductwork Repair & Sealing',
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
