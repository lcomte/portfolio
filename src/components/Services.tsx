import {Code, Database, Layout, Smartphone, Globe, Bolt, GitGraphIcon} from 'lucide-react';
import ServiceCard from './Services/ServiceCard';

const services = [
  {
    icon: Database,
    name: 'Backend Development',
    description: 'Develop robust and scalable server-side solutions.',
    features: [
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Security Implementation'
    ]
  },
  {
    icon: Code,
    name: 'Full Stack Development',
    description: 'Build modern, responsive websites using the latest technologies.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'CMS Integration',
      'Performance Optimization',
    ]
  },
  {
    icon: Globe,
    name: 'Consulting',
    description: 'Expert advice on technology solutions and architecture.',
    features: [
      'Technical Architecture',
      'Code Review',
      'Performance Audits',
      'Team Training'
    ]
  },
  {
    icon: Bolt,
    name: "Software Engineering",
    description: 'Develop modern software solutions',
    features: [
        'Robotics',
        'IOT',
        'Blockchain'
    ]
  },
  {
    icon: GitGraphIcon,
    name: "Data Science",
    description: 'Test',
    features: [
        'Data analysis',
        'Business Intelligence',
        'Big Data'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services & Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive development services tailored to your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}