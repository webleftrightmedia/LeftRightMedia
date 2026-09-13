/**
 * Pricing configuration — single source of truth.
 * Change pricing here, not in JSX.
 */
const pricing = {
  advertiser: {
    amount: 500,
    currency: '₹',
    unit: '2-hour slot',
    label: '₹500 / 2-hour slot',
    description: 'Reach hyper-local audiences with zero commitment',
  },
  host: {
    amount: 0,
    currency: '₹',
    unit: 'forever',
    label: 'Free',
    description: 'Zero hardware cost. We handle everything.',
  },
  revenueShare: {
    hostPercent: 55,
    platformPercent: 45,
    label: '55 / 45',
    hostLabel: '55% to you',
    platformLabel: '45% platform fee',
  },
};

export default pricing;
