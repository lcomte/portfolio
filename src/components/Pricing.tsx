import { Check } from 'lucide-react';
import PricingCard from './Pricing/PricingCard';

const pricingTiers = [
  {
    name: 'Basic',
    price: '$999',
    description: 'Perfect for small projects',
    features: [
      'Single page website',
      'Basic SEO optimization',
      'Mobile responsive design',
      '2 rounds of revisions',
      '1 month support'
    ]
  },
  {
    name: 'Professional',
    price: '$2,499',
    description: 'Ideal for growing businesses',
    features: [
      'Multi-page website',
      'Advanced SEO package',
      'E-commerce integration',
      'Custom animations',
      '3 months support',
      'Performance optimization'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale applications',
    features: [
      'Full-stack development',
      'Custom features & integrations',
      'High-performance architecture',
      'Advanced security measures',
      '12 months support',
      'Priority response'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}