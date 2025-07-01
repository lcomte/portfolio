import {Code, Database, Layout, Smartphone, Globe, Bolt, GitGraphIcon, Bot} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceCard from './Services/ServiceCard';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bot,
      name: t('services.ai.name'),
      description: t('services.ai.description'),
      features: [
        'AI Marketing Agents',
        'Customer Communication Automation',
        'Intelligent Chatbots',
        'Business Process Automation'
      ]
    },
    {
      icon: Database,
      name: t('services.backend.name'),
      description: t('services.backend.description'),
      features: [
        'API Development',
        'Database Design',
        'Cloud Integration',
        'Security Implementation'
      ]
    },
    {
      icon: Code,
      name: t('services.fullstack.name'),
      description: t('services.fullstack.description'),
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'CMS Integration',
        'Performance Optimization',
      ]
    },
    {
      icon: Globe,
      name: t('services.consulting.name'),
      description: t('services.consulting.description'),
      features: [
        'AI Integration Strategy',
        'Technical Architecture',
        'Digital Transformation',
        'Performance Audits',
        'Team Training'
      ]
    },
    {
      icon: GitGraphIcon,
      name: t('services.data.name'),
      description: t('services.data.description'),
      features: [
          'Data analysis',
          'Business Intelligence',
          'Big Data',
          'AI/ML Implementation'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{t('services.featured.title')}</h3>
            <p className="text-blue-800">
              {t('services.featured.description')} {' '}
              <a 
                href="https://callavox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-blue-600 hover:text-blue-800 underline"
              >
                Callavox
              </a>
              {' '} {t('services.featured.tagline')}
            </p>
          </div>
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