import {Code, Server, Palette, Users, MapPin, GitGraphIcon, Bot, Cloud} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Server,
      title: t('skills.backend.title'),
      description: t('skills.backend.description'),
      tech: ['NodeJS', 'NestJS', 'PostgreSQL', 'MongoDB', 'Mongoose', 'typeORM']
    },
    {
      icon: Code,
      title: t('skills.frontend.title'),
      description: t('skills.frontend.description'),
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: Cloud,
      title: t('skills.cloud.title'),
      description: t('skills.cloud.description'),
      tech: ['AWS', 'GCP', 'Azure', 'Ansible', 'Docker']
    },
    {
      icon: Bot,
      title: t('skills.ai.title'),
      description: t('skills.ai.description'),
      tech: ["Python", "AI", "Machine Learning", "NLP", "Automation"]
    },
    {
      icon: GitGraphIcon,
      title: t('skills.data.title'),
      description: t('skills.data.description'),
      tech: ['Python', 'Panda', 'PowerBI', 'Tableau']
    },
    {
      icon: Users,
      title: t('skills.team.title'),
      description: t('skills.team.description'),
      tech: ['Git', 'Agile', 'Scrum', 'Code Review']
    }
  ];

  return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {t('about.description.1')}
            </p>
            <p className="mt-4 text-lg text-gray-500">
              {t('about.description.2')}
            </p>
            <p className="mt-4 text-lg text-gray-500">
              {t('about.description.3')}{' '}
              <a 
                href="https://callavox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                Callavox
              </a>
              {t('about.description.4')}
            </p>
            <p className="mt-4 text-lg text-gray-500">
              {t('about.description.5')}
            </p>
            <p className="mt-4 text-lg text-gray-500">
              {t('about.description.6')}
            </p>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              {t('about.skills.title')}
            </h3>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                    <div key={index} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white p-6 rounded-lg">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                          <Icon size={24} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{skill.title}</h4>
                        <p className="mt-2 text-gray-500">{skill.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {skill.tech.map((tech, techIndex) => (
                              <span
                                  key={techIndex}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                          {tech}
                        </span>
                          ))}
                        </div>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
}