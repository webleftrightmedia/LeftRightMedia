/**
 * Homepage content data — separated from components for maintainability.
 * All copy is approved per the master specification.
 */

export const heroContent = {
  headline: ['Your Brand.', 'Everywhere It Matters.'],
  supporting: 'Reach people where they live, work, shop, eat, travel and gather — through a connected network of digital screens.',
  primaryCta: { label: 'Start Advertising →', href: '/advertise' },
  secondaryCta: { label: 'Explore the Network ↓', href: '#network-section' },
};

export const rollingStatement = 'MAKING ADVERTISING ACCESSIBLE. PRECISE. VISIBLE.';

export const cityLocations = [
  { id: 'cafe', label: 'Café', icon: '☕' },
  { id: 'retail', label: 'Retail', icon: '🛍️' },
  { id: 'commercial', label: 'Commercial', icon: '🏢' },
  { id: 'public', label: 'Public Space', icon: '🏛️' },
  { id: 'event', label: 'Event', icon: '🎪' },
];

export const networkNodes = [
  'Cafés', 'Retail', 'Commercial', 'Events', 'Public Spaces',
];

export const audiences = [
  'Students', 'Young Professionals', 'Shoppers', 'Families', 'Business Visitors',
];

export const locationOptions = [
  'Cafés', 'Retail', 'Commercial', 'Events', 'Public Spaces',
];

export const timeOptions = [
  'Morning', 'Afternoon', 'Evening', 'Event',
];

export const campaignDefaults = {
  audience: 'Young Professionals',
  locations: ['Café', 'Commercial'],
  duration: '7 Days',
  coverage: '12 Screens',
};

export const eventCapabilities = [
  {
    title: 'ADVERTISE',
    description: 'Promote exhibitors, sponsors and brands.',
  },
  {
    title: 'INFORM',
    description: 'Show schedules, announcements and event updates.',
  },
  {
    title: 'NAVIGATE',
    description: 'Help visitors find booths, domes and important locations.',
  },
  {
    title: 'CONNECT',
    description: 'Use QR experiences to take visitors from the physical event to digital content.',
  },
];

export const contentTypes = [
  'Brand Campaigns', 'Offers', 'Product Launches', 'Event Information',
  'Wayfinding', 'Announcements', 'Sponsors', 'QR Experiences',
];

export const whyLrmPillars = [
  {
    title: 'LOCAL',
    description: 'Reach audiences in specific places.',
  },
  {
    title: 'CONNECTED',
    description: 'Combine multiple screens into one campaign.',
  },
  {
    title: 'FLEXIBLE',
    description: 'Run campaigns across permanent or event-based networks.',
  },
];

export const dayTimeline = [
  {
    time: '08:30 AM',
    location: 'Commercial District',
    description: 'Brand message reaches professionals.',
  },
  {
    time: '12:30 PM',
    location: 'Café Network',
    description: 'Same campaign reaches lunch-time audiences.',
  },
  {
    time: '05:45 PM',
    location: 'Retail Network',
    description: 'Campaign reaches shoppers.',
  },
  {
    time: '07:30 PM',
    location: 'Event',
    description: 'Brand appears in front of event visitors.',
  },
];

export const audiencePaths = [
  {
    title: 'FOR BRANDS',
    description: 'Put your message where your audience already is.',
    cta: { label: 'Advertise with LRM →', href: '/advertise' },
  },
  {
    title: 'FOR SCREEN PARTNERS',
    description: 'Turn your digital screen into advertising inventory.',
    cta: { label: 'Join the Network →', href: '/screen-partners' },
  },
  {
    title: 'FOR EVENT ORGANIZERS',
    description: 'Build a digital media and information network around your event.',
    cta: { label: 'Partner with LRM Events →', href: '/events' },
  },
];

export const finalCtaButtons = [
  { label: 'I WANT TO ADVERTISE →', href: '/advertise' },
  { label: 'I HAVE A SCREEN →', href: '/screen-partners' },
  { label: 'I ORGANIZE AN EVENT →', href: '/events' },
];
