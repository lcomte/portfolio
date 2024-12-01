import { Check } from 'lucide-react';

interface PricingCardProps {
  tier: {
    name: string;
    price: string;
    description: string;
    features: string[];
    featured?: boolean;
  };
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden ${
        tier.featured
          ? 'border-2 border-blue-600 transform scale-105 bg-white'
          : 'bg-white'
      }`}
    >
      {tier.featured && (
        <div className="absolute top-0 right-0 -mr-1 -mt-1 w-24 h-24 overflow-hidden">
          <div className="absolute transform rotate-45 bg-blue-600 text-white text-xs text-center font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
            Popular
          </div>
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
        <p className="mt-4 text-3xl font-bold text-gray-900">{tier.price}</p>
        <p className="mt-2 text-gray-500">{tier.description}</p>
        <ul className="mt-6 space-y-4">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`mt-8 w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            tier.featured
              ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500'
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}